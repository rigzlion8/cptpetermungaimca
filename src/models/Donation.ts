import mongoose, { Document, Schema } from 'mongoose';

export interface IDonation extends Document {
  donorName: string;
  donorEmail: string;
  donorPhone?: string;
  amount: number;
  currency: string;
  paystackReference: string;
  paystackTransactionId?: string;
  status: 'pending' | 'success' | 'failed' | 'cancelled';
  paymentMethod: string;
  isAnonymous: boolean;
  message?: string;
  createdAt: Date;
  updatedAt: Date;
}

const DonationSchema = new Schema<IDonation>({
  donorName: {
    type: String,
    required: [true, 'Donor name is required'],
    trim: true,
  },
  donorEmail: {
    type: String,
    required: [true, 'Donor email is required'],
    lowercase: true,
    trim: true,
  },
  donorPhone: {
    type: String,
    trim: true,
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    min: [1, 'Amount must be greater than 0'],
  },
  currency: {
    type: String,
    default: 'KES',
    uppercase: true,
  },
  paystackReference: {
    type: String,
    required: true,
    unique: true,
  },
  paystackTransactionId: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    enum: ['pending', 'success', 'failed', 'cancelled'],
    default: 'pending',
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  isAnonymous: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    trim: true,
    maxlength: [500, 'Message cannot exceed 500 characters'],
  },
}, {
  timestamps: true,
});

// Indexes for better query performance
// Note: paystackReference index is automatically created by unique: true
DonationSchema.index({ status: 1 });
DonationSchema.index({ createdAt: -1 });
DonationSchema.index({ donorEmail: 1 });

export default mongoose.models.Donation || mongoose.model<IDonation>('Donation', DonationSchema);
