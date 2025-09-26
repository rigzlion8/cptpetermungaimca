import { NextRequest, NextResponse } from 'next/server';
import { testimonialSchema } from '@/lib/validations';
import connectDB from '@/lib/mongodb';
import Testimonial from '@/models/Testimonial';
import { withRateLimit } from '@/lib/rate-limit';

async function handler(request: NextRequest) {
  try {
    if (request.method === 'GET') {
      // Get all approved testimonials
      await connectDB();
      
      const testimonials = await Testimonial.find({ isApproved: true })
        .sort({ createdAt: -1 })
        .limit(50);

      return NextResponse.json({
        success: true,
        data: testimonials,
      });
    }

    if (request.method === 'POST') {
      // Create new testimonial
      const body = await request.json();
      const validatedData = testimonialSchema.parse(body);

      await connectDB();

      const testimonial = new Testimonial(validatedData);
      await testimonial.save();

      return NextResponse.json({
        success: true,
        message: 'Testimonial submitted successfully. It will be reviewed before being published.',
        data: testimonial,
      });
    }

    return NextResponse.json(
      { success: false, message: 'Method not allowed' },
      { status: 405 }
    );
  } catch (error: any) {
    console.error('Testimonials API error:', error);
    
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
