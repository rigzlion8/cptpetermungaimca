import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@yourdomain.com';

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail({ to, subject, html, text }: EmailOptions) {
  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject,
      html,
      text,
    });

    if (error) {
      console.error('Email sending error:', error);
      throw new Error('Failed to send email');
    }

    return data;
  } catch (error) {
    console.error('Email service error:', error);
    throw new Error('Email service unavailable');
  }
}

export function generateEmailVerificationTemplate(name: string, verificationLink: string) {
  return {
    subject: 'Verify Your Email - Peter Mungai MCA Campaign',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Email Verification</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb;">Welcome to Our Campaign!</h2>
            <p>Hello ${name},</p>
            <p>Thank you for registering with the Peter Mungai MCA Campaign website. Please verify your email address to complete your registration.</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${verificationLink}" 
                 style="background-color: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Verify Email Address
              </a>
            </div>
            <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
            <p style="word-break: break-all; color: #666;">${verificationLink}</p>
            <p>This link will expire in 24 hours.</p>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #666;">
              If you didn't create an account, please ignore this email.
            </p>
          </div>
        </body>
      </html>
    `,
    text: `
      Welcome to Our Campaign!
      
      Hello ${name},
      
      Thank you for registering with the Peter Mungai MCA Campaign website. Please verify your email address to complete your registration.
      
      Click this link to verify: ${verificationLink}
      
      This link will expire in 24 hours.
      
      If you didn't create an account, please ignore this email.
    `,
  };
}

export function generatePasswordResetTemplate(name: string, resetLink: string) {
  return {
    subject: 'Reset Your Password - Peter Mungai MCA Campaign',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Password Reset</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb;">Password Reset Request</h2>
            <p>Hello ${name},</p>
            <p>You requested to reset your password. Click the button below to create a new password.</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetLink}" 
                 style="background-color: #dc2626; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Reset Password
              </a>
            </div>
            <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
            <p style="word-break: break-all; color: #666;">${resetLink}</p>
            <p>This link will expire in 1 hour.</p>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #666;">
              If you didn't request a password reset, please ignore this email.
            </p>
          </div>
        </body>
      </html>
    `,
    text: `
      Password Reset Request
      
      Hello ${name},
      
      You requested to reset your password. Click the link below to create a new password.
      
      Reset link: ${resetLink}
      
      This link will expire in 1 hour.
      
      If you didn't request a password reset, please ignore this email.
    `,
  };
}

export function generateDonationConfirmationTemplate(donorName: string, amount: number, reference: string) {
  return {
    subject: 'Thank You for Your Donation - Peter Mungai MCA Campaign',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Donation Confirmation</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #16a34a;">Thank You for Your Support!</h2>
            <p>Hello ${donorName},</p>
            <p>Thank you for your generous donation of <strong>KES ${amount.toLocaleString()}</strong> to the Peter Mungai MCA Campaign.</p>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Donation Details</h3>
              <p><strong>Amount:</strong> KES ${amount.toLocaleString()}</p>
              <p><strong>Reference:</strong> ${reference}</p>
              <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
            </div>
            <p>Your contribution will help us make a positive impact in Ndenderu Ward. We appreciate your support!</p>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #666;">
              This is an automated confirmation. Please keep this email for your records.
            </p>
          </div>
        </body>
      </html>
    `,
    text: `
      Thank You for Your Support!
      
      Hello ${donorName},
      
      Thank you for your generous donation of KES ${amount.toLocaleString()} to the Peter Mungai MCA Campaign.
      
      Donation Details:
      - Amount: KES ${amount.toLocaleString()}
      - Reference: ${reference}
      - Date: ${new Date().toLocaleDateString()}
      
      Your contribution will help us make a positive impact in Ndenderu Ward. We appreciate your support!
      
      This is an automated confirmation. Please keep this email for your records.
    `,
  };
}
