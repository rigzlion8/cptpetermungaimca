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
      paystackTransactionId: '', // Will be updated after payment
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

    return NextResponse.json(
      { success: false, message: 'Failed to initialize donation' },
      { status: 500 }
    );
  }
}

export const POST = withRateLimit(handler);
