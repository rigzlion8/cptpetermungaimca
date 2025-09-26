# MCA Campaign Website

A modern, responsive campaign website for an MCA candidate in Ruaka/Ndenderu Ward, built with Next.js, React, Tailwind CSS, MongoDB, Cloudinary, Paystack, and Resend.

## 🚀 Features

### Core Functionality
- **User Authentication**: JWT-based auth with bcrypt password hashing
- **Email Verification**: Email verification and transactional emails via Resend
- **Donation System**: Secure payment processing with Paystack integration
- **Image Management**: Cloudinary integration for image uploads and optimization
- **Interactive Map**: Leaflet-based map showing ward boundaries and key locations
- **Rate Limiting**: Protection against spam and abuse
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Pages
- **Home**: Hero section, key focus areas, statistics, and call-to-action
- **5-Year Plan**: Comprehensive development roadmap with timeline
- **Donate**: Secure donation form with Paystack integration
- **Testimonials**: Community feedback and success stories
- **Feedback**: Contact form with categorization and status tracking
- **Map**: Interactive ward map with key locations and development projects

### API Endpoints
- **Authentication**: `/api/auth/*` - Login, register, email verification, password reset
- **Donations**: `/api/donations/*` - Initialize payments, verify transactions, webhook handling
- **Testimonials**: `/api/testimonials` - CRUD operations for community testimonials
- **Feedback**: `/api/feedback` - Submit and manage community feedback
- **Upload**: `/api/upload` - Image upload to Cloudinary

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, Lucide React icons
- **Backend**: Next.js API routes, MongoDB with Mongoose
- **Authentication**: JWT, bcryptjs
- **Payments**: Paystack integration
- **Email**: Resend for transactional emails
- **Images**: Cloudinary for image hosting and optimization
- **Maps**: Leaflet for interactive maps
- **Validation**: Zod for schema validation
- **Forms**: React Hook Form with validation

## 📋 Prerequisites

- Node.js 18+ 
- MongoDB (local or Atlas)
- Cloudinary account
- Paystack account
- Resend account

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd cptpetermungaimca
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/campaign-website
# or use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/campaign-website

# JWT
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d

# Email (Resend)
RESEND_API_KEY=re_your_resend_api_key_here
FROM_EMAIL=noreply@yourdomain.com

# Payments (Paystack)
PAYSTACK_SECRET_KEY=sk_test_your_paystack_secret_key_here
PAYSTACK_PUBLIC_KEY=pk_test_your_paystack_public_key_here
PAYSTACK_WEBHOOK_SECRET=your_paystack_webhook_secret_here

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# Rate Limiting
RATE_LIMIT_MAX_REQUESTS=10
RATE_LIMIT_WINDOW_MS=900000
```

### 4. Seed the Database

```bash
npm run seed
```

This will create sample data including:
- Admin user: `admin@mca-campaign.com` / `admin123`
- Regular user: `john.doe@example.com` / `user123`
- Sample testimonials, feedback, and donations

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── donations/     # Payment processing
│   │   ├── feedback/      # Feedback management
│   │   ├── testimonials/  # Testimonials CRUD
│   │   └── upload/        # Image upload
│   ├── donate/            # Donation page
│   ├── feedback/          # Feedback page
│   ├── login/             # Login page
│   ├── map/               # Interactive map page
│   ├── plan/              # 5-year plan page
│   ├── register/          # Registration page
│   ├── testimonials/      # Testimonials page
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/            # Layout components
│   └── map/               # Map components
├── lib/                   # Utility libraries
│   ├── auth.ts           # Authentication utilities
│   ├── cloudinary.ts     # Image upload service
│   ├── email.ts          # Email service
│   ├── mongodb.ts        # Database connection
│   ├── paystack.ts       # Payment processing
│   ├── rate-limit.ts     # Rate limiting
│   ├── seed.ts           # Database seeding
│   └── validations.ts    # Zod schemas
├── models/               # MongoDB models
│   ├── User.ts
│   ├── Donation.ts
│   ├── Testimonial.ts
│   └── Feedback.ts
└── types/                # TypeScript type definitions
```

## 🔧 Configuration

### Paystack Setup

1. Create a Paystack account
2. Get your test/live API keys
3. Set up webhook endpoints:
   - URL: `https://yourdomain.com/api/donations/webhook`
   - Events: `charge.success`, `charge.failed`

### Cloudinary Setup

1. Create a Cloudinary account
2. Get your cloud name, API key, and API secret
3. Configure upload presets if needed

### Resend Setup

1. Create a Resend account
2. Verify your domain
3. Get your API key
4. Update the `FROM_EMAIL` in your environment variables

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Security Features

- JWT-based authentication with secure token storage
- Password hashing with bcrypt
- Rate limiting on sensitive endpoints
- Input validation and sanitization
- CORS protection
- Secure payment processing
- Email verification system

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🌍 Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Screen reader compatibility

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: info@mca-campaign.com
- Phone: +254 700 000 000

## 🔄 Updates

### Version 1.0.0
- Initial release
- Core functionality implemented
- All pages and features working
- Database seeding included
- Comprehensive documentation

---

**Built with ❤️ for the Ruaka/Ndenderu Ward community**