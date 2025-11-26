'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { donationSchema } from '@/lib/validations';
import { Heart, CreditCard, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface DonationFormData {
  donorName: string;
  donorEmail: string;
  donorPhone?: string;
  amount: number;
  currency: string;
  isAnonymous: boolean;
  message?: string;
}

export default function DonatePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [donationSuccess] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      currency: 'KES',
      isAnonymous: false,
    }
  });

  const watchedAmount = watch('amount');

  const quickAmounts = [500, 1000, 2500, 5000, 10000, 25000];

  const onSubmit = async (data: DonationFormData) => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/donations/initialize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        // Redirect to Paystack payment page
        window.location.href = result.data.authorizationUrl;
      } else {
        setError(result.message || 'Failed to initialize donation');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (donationSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Thank You!</h2>
          <p className="text-lg text-gray-600">
            Your donation has been processed successfully. We appreciate your support 
            for our campaign and the community.
          </p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Support Our Campaign
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Your contribution helps us build a better future for Ndenderu Ward. 
              Every donation, no matter the size, makes a real difference in securing accountable leadership for our community.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Make a Donation
              </h2>
              <p className="text-lg text-gray-600">
                Secure payment powered by Paystack
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center">
                <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-red-700">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Donor Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('donorName')}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                  {errors.donorName && (
                    <p className="mt-1 text-sm text-red-600">{errors.donorName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('donorEmail')}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                  {errors.donorEmail && (
                    <p className="mt-1 text-sm text-red-600">{errors.donorEmail.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  {...register('donorPhone')}
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
                {errors.donorPhone && (
                  <p className="mt-1 text-sm text-red-600">{errors.donorPhone.message}</p>
                )}
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Donation Amount (KES) *
                </label>
                
                {/* Quick Amount Buttons */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                  {quickAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setValue('amount', amount)}
                      className={`p-3 text-center border rounded-lg font-medium transition-colors ${
                        watchedAmount === amount
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {amount.toLocaleString()}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <input
                  {...register('amount', { valueAsNumber: true })}
                  type="number"
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter custom amount"
                />
                {errors.amount && (
                  <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>
                )}
              </div>

              {/* Anonymous Donation */}
              <div className="flex items-center">
                <input
                  {...register('isAnonymous')}
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">
                  Make this donation anonymous
                </label>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  {...register('message')}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Leave a message of support..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Security Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start">
                <Shield className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                <div className="text-sm text-blue-700">
                  <p className="font-medium">Secure Payment</p>
                  <p>Your payment is processed securely by Paystack. We never store your payment information.</p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="h-5 w-5 mr-2" />
                    Donate Now
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Your Donation Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your support directly funds programs that improve lives in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Direct Impact",
                description: "100% of donations go directly to community programs and development projects."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Transparent Use",
                description: "We provide regular reports on how your donations are being used in the community."
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Measurable Results",
                description: "Every project has clear goals and measurable outcomes that benefit residents."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
