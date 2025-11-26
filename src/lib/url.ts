import { NextRequest } from 'next/server';

/**
 * Get the base URL for the application
 * Works in both development and production (Vercel)
 */
export function getBaseUrl(request?: NextRequest): string {
  // 1. Check if NEXT_PUBLIC_APP_URL is explicitly set
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  // 2. In Vercel, use VERCEL_URL (automatically provided)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // 3. Try to construct from request headers (for production)
  if (request) {
    const host = request.headers.get('host');
    const protocol = request.headers.get('x-forwarded-proto') || 'https';
    if (host) {
      return `${protocol}://${host}`;
    }
  }

  // 4. Fallback to localhost for development
  return process.env.NODE_ENV === 'production' 
    ? 'https://cptpetermungaimca.vercel.app'
    : 'http://localhost:3000';
}

