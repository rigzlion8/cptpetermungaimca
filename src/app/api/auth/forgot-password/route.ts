import { NextRequest, NextResponse } from 'next/server';
import { forgotPasswordSchema } from '@/lib/validations';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { generatePasswordResetToken } from '@/lib/auth';
import { sendEmail, generatePasswordResetTemplate } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = forgotPasswordSchema.parse(body);

    await connectDB();

    // Find user by email
    const user = await User.findOne({ email: validatedData.email });
    if (!user) {
      // Don't reveal if user exists or not
      return NextResponse.json({
        success: true,
        message: 'If an account with that email exists, we have sent a password reset link.',
      });
    }

    // Generate password reset token
    const passwordResetToken = generatePasswordResetToken();
    user.passwordResetToken = passwordResetToken;
    user.passwordResetExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
    await user.save();

    // Send password reset email
    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${passwordResetToken}`;
    const emailTemplate = generatePasswordResetTemplate(
      `${user.firstName} ${user.lastName}`,
      resetLink
    );

    await sendEmail({
      to: user.email,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
    });

    return NextResponse.json({
      success: true,
      message: 'If an account with that email exists, we have sent a password reset link.',
    });
  } catch (error: any) {
    console.error('Forgot password error:', error);
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, message: 'Validation error', errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Password reset request failed' },
      { status: 500 }
    );
  }
}
