'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');

    if (!token) {
      setStatus('error');
      setMessage('Invalid verification link. No token provided.');
      return;
    }

    // Call the verification API
    const verifyEmail = async () => {
      try {
        const response = await fetch('/api/auth/verify-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });

        const result = await response.json();

        if (result.success) {
          setStatus('success');
          setMessage('Your email has been verified successfully! You can now log in to your account.');
          
          // Redirect to login after 3 seconds
          setTimeout(() => {
            router.push('/login');
          }, 3000);
        } else {
          setStatus('error');
          setMessage(result.message || 'Email verification failed. The link may have expired or is invalid.');
        }
      } catch (error) {
        setStatus('error');
        setMessage('An error occurred while verifying your email. Please try again.');
      }
    };

    verifyEmail();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            {status === 'loading' && (
              <>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                  <Loader2 className="h-6 w-6 text-red-600 animate-spin" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Verifying Email...
                </h2>
                <p className="text-gray-600">
                  Please wait while we verify your email address.
                </p>
              </>
            )}

            {status === 'success' && (
              <>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Email Verified!
                </h2>
                <p className="text-gray-600 mb-6">
                  {message}
                </p>
                <div className="mt-6">
                  <Link
                    href="/login"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
                  >
                    Go to Login
                  </Link>
                </div>
              </>
            )}

            {status === 'error' && (
              <>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Verification Failed
                </h2>
                <p className="text-gray-600 mb-6">
                  {message}
                </p>
                <div className="mt-6 space-y-3">
                  <Link
                    href="/register"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block w-full sm:w-auto"
                  >
                    Register Again
                  </Link>
                  <Link
                    href="/login"
                    className="border-2 border-red-600 text-red-600 hover:bg-red-50 font-bold py-3 px-6 rounded-lg transition-colors inline-block w-full sm:w-auto sm:ml-3"
                  >
                    Go to Login
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

