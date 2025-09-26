import { NextRequest, NextResponse } from 'next/server';
import { emailVerificationSchema } from '@/lib/validations';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { verifyEmailVerificationToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = emailVerificationSchema.parse(body);

    await connectDB();

    // Verify token
    if (!verifyEmailVerificationToken(validatedData.token)) {
      return NextResponse.json(
        { success: false, message: 'Invalid or expired verification token' },
        { status: 400 }
      );
    }

    // Find user by verification token
    const user = await User.findOne({ emailVerificationToken: validatedData.token });
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Invalid verification token' },
        { status: 400 }
      );
    }

    // Update user
    user.isEmailVerified = true;
    user.emailVerificationToken = undefined;
    await user.save();

    return NextResponse.json({
      success: true,
      message: 'Email verified successfully',
    });
  } catch (error: any) {
    console.error('Email verification error:', error);
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, message: 'Validation error', errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Email verification failed' },
      { status: 500 }
    );
  }
}
