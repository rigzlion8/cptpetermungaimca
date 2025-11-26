import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  isEmailVerified: boolean;
  emailVerificationToken?: string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
  },
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  emailVerificationToken: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
}, {
  timestamps: true,
});

// Index for better query performance
// Note: email index is automatically created by unique: true
UserSchema.index({ emailVerificationToken: 1 });
UserSchema.index({ passwordResetToken: 1 });

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
