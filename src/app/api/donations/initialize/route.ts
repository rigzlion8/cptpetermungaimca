import { NextRequest, NextResponse } from 'next/server';
import { donationSchema } from '@/lib/validations';
import connectDB from '@/lib/mongodb';
import Donation from '@/models/Donation';
import { initializePayment, generateReference } from '@/lib/paystack';
import { withRateLimit } from '@/lib/rate-limit';
import { getBaseUrl } from '@/lib/url';

async function handler(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = donationSchema.parse(body);

    await connectDB();

    // Generate unique reference
    const reference = generateReference();

    // Create donation record
    const donation = new Donation({
      ...validatedData,
      paystackReference: reference,
      status: 'pending',
      paymentMethod: 'paystack',
    });

    await donation.save();

    // Initialize payment with Paystack
    const paymentData = {
      email: validatedData.donorEmail,
      amount: validatedData.amount,
      reference,
      currency: validatedData.currency,
      metadata: {
        donationId: donation._id.toString(),
        donorName: validatedData.donorName,
        isAnonymous: validatedData.isAnonymous,
      },
      callback_url: `${getBaseUrl(request)}/donate/success`,
    };

    const paymentResponse = await initializePayment(paymentData);

    if (!paymentResponse.data || !paymentResponse.data.authorization_url) {
      // Delete the donation record if payment initialization failed
      await Donation.findByIdAndDelete(donation._id);
      return NextResponse.json(
        { success: false, message: 'Failed to get payment authorization URL from Paystack' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Payment initialized successfully',
      data: {
        authorizationUrl: paymentResponse.data.authorization_url,
        reference: paymentResponse.data.reference,
        donationId: donation._id,
      },
    });
  } catch (error: any) {
    console.error('Donation initialization error:', error);
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, message: 'Validation error', errors: error.errors },
        { status: 400 }
      );
    }

    // Check if it's a Paystack API error
    if (error.message) {
      return NextResponse.json(
        { success: false, message: error.message || 'Failed to initialize donation' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Failed to initialize donation. Please check your Paystack configuration.' },
      { status: 500 }
    );
  }
}

export const POST = withRateLimit(handler);
