import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Donation from '@/models/Donation';
import { verifyWebhookSignature } from '@/lib/paystack';
import { sendEmail, generateDonationConfirmationTemplate } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-paystack-signature');

    if (!signature) {
      return NextResponse.json(
        { success: false, message: 'Missing signature' },
        { status: 400 }
      );
    }

    // Verify webhook signature
    if (!verifyWebhookSignature(body, signature)) {
      return NextResponse.json(
        { success: false, message: 'Invalid signature' },
        { status: 400 }
      );
    }

    const event = JSON.parse(body);

    // Handle successful payment
    if (event.event === 'charge.success') {
      const { reference, amount, customer } = event.data;

      await connectDB();

      // Find and update donation
      const donation = await Donation.findOne({ paystackReference: reference });
      if (donation && donation.status === 'pending') {
        donation.status = 'success';
        donation.paystackTransactionId = event.data.id.toString();
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
      }
    }

    // Handle failed payment
    if (event.event === 'charge.failed') {
      const { reference } = event.data;

      await connectDB();

      const donation = await Donation.findOne({ paystackReference: reference });
      if (donation && donation.status === 'pending') {
        donation.status = 'failed';
        await donation.save();
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { success: false, message: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
