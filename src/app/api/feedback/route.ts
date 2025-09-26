import { NextRequest, NextResponse } from 'next/server';
import { feedbackSchema } from '@/lib/validations';
import connectDB from '@/lib/mongodb';
import Feedback from '@/models/Feedback';
import { withRateLimit } from '@/lib/rate-limit';

async function handler(request: NextRequest) {
  try {
    if (request.method === 'GET') {
      // Get feedback (admin only - would need auth middleware in production)
      await connectDB();
      
      const feedback = await Feedback.find()
        .sort({ createdAt: -1 })
        .limit(100);

      return NextResponse.json({
        success: true,
        data: feedback,
      });
    }

    if (request.method === 'POST') {
      // Create new feedback
      const body = await request.json();
      const validatedData = feedbackSchema.parse(body);

      await connectDB();

      // Get client information
      const ipAddress = request.headers.get('x-forwarded-for') || 
                       request.headers.get('x-real-ip') || 
                       'unknown';
      const userAgent = request.headers.get('user-agent') || 'unknown';

      const feedback = new Feedback({
        ...validatedData,
        ipAddress,
        userAgent,
      });

      await feedback.save();

      return NextResponse.json({
        success: true,
        message: 'Feedback submitted successfully. Thank you for your input!',
        data: {
          id: feedback._id,
          status: feedback.status,
        },
      });
    }

    return NextResponse.json(
      { success: false, message: 'Method not allowed' },
      { status: 405 }
    );
  } catch (error: any) {
    console.error('Feedback API error:', error);
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, message: 'Validation error', errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Request failed' },
      { status: 500 }
    );
  }
}

export const GET = handler;
export const POST = withRateLimit(handler);
