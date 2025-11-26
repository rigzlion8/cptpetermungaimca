import { NextRequest, NextResponse } from 'next/server';
import { registerSchema } from '@/lib/validations';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { hashPassword, generateToken, generateEmailVerificationToken } from '@/lib/auth';
import { sendEmail, generateEmailVerificationTemplate } from '@/lib/email';
import { getBaseUrl } from '@/lib/url';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = registerSchema.parse(body);

    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email: validatedData.email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'User already exists with this email' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(validatedData.password);

    // Generate email verification token
    const emailVerificationToken = generateEmailVerificationToken();

    // Create user
    const user = new User({
      ...validatedData,
      password: hashedPassword,
      emailVerificationToken,
    });

    await user.save();

    // Send verification email
    const baseUrl = getBaseUrl(request);
    const verificationLink = `${baseUrl}/verify-email?token=${emailVerificationToken}`;
    const emailTemplate = generateEmailVerificationTemplate(
      `${user.firstName} ${user.lastName}`,
      verificationLink
    );

    await sendEmail({
      to: user.email,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
    });

    // Generate JWT token
    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    return NextResponse.json({
      success: true,
      message: 'User registered successfully. Please check your email for verification.',
      data: {
        user: {
          id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          isEmailVerified: user.isEmailVerified,
          role: user.role,
        },
        token,
      },
    });
  } catch (error: any) {
    console.error('Registration error:', error);
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, message: 'Validation error', errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Registration failed' },
      { status: 500 }
    );
  }
}
