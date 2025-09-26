# Environment Variables Schema

Create a `.env.local` file in the root directory with the following variables:

## Database
```env
MONGODB_URI=mongodb://localhost:27017/campaign-website
# or use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/campaign-website
```

## JWT Authentication
```env
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d
```

## Email Service (Resend)
```env
RESEND_API_KEY=re_your_resend_api_key_here
FROM_EMAIL=noreply@yourdomain.com
```

## Payment Processing (Paystack)
```env
PAYSTACK_SECRET_KEY=sk_test_your_paystack_secret_key_here
PAYSTACK_PUBLIC_KEY=pk_test_your_paystack_public_key_here
PAYSTACK_WEBHOOK_SECRET=your_paystack_webhook_secret_here
```

## Image Hosting (Cloudinary)
```env
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## App Configuration
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

## Rate Limiting
```env
RATE_LIMIT_MAX_REQUESTS=10
RATE_LIMIT_WINDOW_MS=900000
```
