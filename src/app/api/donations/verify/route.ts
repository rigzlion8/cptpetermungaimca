import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Donation from '@/models/Donation';
import { verifyPayment } from '@/lib/paystack';
import { sendEmail, generateDonationConfirmationTemplate } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { reference } = body;

    if (!reference) {
      return NextResponse.json(
        { success: false, message: 'Reference is required' },
        { status: 400 }
      );
    }

    await connectDB();

    // Find donation by reference
    const donation = await Donation.findOne({ paystackReference: reference });
    if (!donation) {
      return NextResponse.json(
        { success: false, message: 'Donation not found' },
        { status: 404 }
      );
    }

    // Verify payment with Paystack
    const verificationResponse = await verifyPayment(reference);

    if (verificationResponse.status && verificationResponse.data.status === 'success') {
      // Update donation status
      donation.status = 'success';
      donation.paystackTransactionId = verificationResponse.data.id.toString();
      await donation.save();

      // Send confirmation email
      const emailTemplate = generateDonationConfirmationTemplate(
        donation.donorName,
        donation.amount,
        donation.paystackReference
      );

      await sendEmail({
        to: donation.donorEmail,
        subject: emailTemplate.subject,
        html: emailTemplate.html,
        text: emailTemplate.text,
      });

      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully',
        data: {
          donation: {
            id: donation._id,
            amount: donation.amount,
            status: donation.status,
            reference: donation.paystackReference,
          },
        },
      });
    } else {
      // Payment failed
      donation.status = 'failed';
      await donation.save();

      return NextResponse.json({
        success: false,
        message: 'Payment verification failed',
        data: {
          donation: {
            id: donation._id,
            status: donation.status,
            reference: donation.paystackReference,
          },
        },
      });
    }
  } catch (error: any) {
    console.error('Donation verification error:', error);
    return NextResponse.json(
      { success: false, message: 'Payment verification failed' },
      { status: 500 }
    );
  }
}
