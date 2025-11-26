import { z } from 'zod';

// Auth validation schemas
export const registerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters').max(50),
  lastName: z.string().min(2, 'Last name must be at least 2 characters').max(50),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters').max(100),
  confirmPassword: z.string().min(6, 'Password confirmation is required'),
  phone: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export const resetPasswordSchema = z.object({
  token: z.string().min(1, 'Token is required'),
  password: z.string().min(6, 'Password must be at least 6 characters').max(100),
});

// Donation validation schemas
export const donationSchema = z.object({
  donorName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  donorEmail: z.string().email('Invalid email address'),
  donorPhone: z.string().optional(),
  amount: z.number().min(1, 'Amount must be greater than 0').max(1000000),
  currency: z.string().default('KES'),
  isAnonymous: z.boolean().default(false),
  message: z.string().max(500, 'Message cannot exceed 500 characters').optional(),
});

// Testimonial validation schemas
export const testimonialSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address').optional(),
  location: z.string().min(2, 'Location must be at least 2 characters').max(100),
  content: z.string().min(10, 'Testimonial must be at least 10 characters').max(1000),
  rating: z.number().min(1, 'Rating must be at least 1').max(5, 'Rating cannot exceed 5'),
  imageUrl: z.string().url('Invalid image URL').optional(),
});

// Feedback validation schemas
export const feedbackSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  category: z.enum(['general', 'suggestion', 'complaint', 'support']),
});

// Image upload validation
export const imageUploadSchema = z.object({
  file: z.instanceof(File, { message: 'File is required' }),
  folder: z.string().optional().default('campaign-website'),
});

// Email verification schema
export const emailVerificationSchema = z.object({
  token: z.string().min(1, 'Token is required'),
});

// Common validation helpers
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export function validatePasswordStrength(password: string): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  
  if (password.length < 6) {
    errors.push('Password must be at least 6 characters long');
  }
  
  if (password.length > 100) {
    errors.push('Password must be less than 100 characters');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
}

// API response validation
export const apiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.any().optional(),
  errors: z.array(z.string()).optional(),
});

export type ApiResponse<T = any> = {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
};
