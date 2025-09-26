# Deployment Guide

This guide covers deploying the MCA Campaign Website to various platforms.

## 🚀 Vercel Deployment (Recommended)

### Prerequisites
- GitHub account
- Vercel account
- All service accounts (MongoDB, Cloudinary, Paystack, Resend)

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**
   In Vercel dashboard, go to Settings > Environment Variables and add:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/campaign-website
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRES_IN=7d
   RESEND_API_KEY=re_your_resend_api_key_here
   FROM_EMAIL=noreply@yourdomain.com
   PAYSTACK_SECRET_KEY=sk_live_your_paystack_secret_key_here
   PAYSTACK_PUBLIC_KEY=pk_live_your_paystack_public_key_here
   PAYSTACK_WEBHOOK_SECRET=your_paystack_webhook_secret_here
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   NODE_ENV=production
   RATE_LIMIT_MAX_REQUESTS=10
   RATE_LIMIT_WINDOW_MS=900000
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be available at `https://your-project.vercel.app`

5. **Set up Paystack Webhook**
   - Go to Paystack dashboard
   - Add webhook URL: `https://your-domain.vercel.app/api/donations/webhook`
   - Select events: `charge.success`, `charge.failed`

## 🌐 Custom Domain Setup

1. **In Vercel Dashboard**
   - Go to Settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update Environment Variables**
   - Update `NEXT_PUBLIC_APP_URL` to your custom domain
   - Update Paystack webhook URL

## 🗄️ Database Setup

### MongoDB Atlas (Recommended)

1. **Create Cluster**
   - Go to [MongoDB Atlas](https://cloud.mongodb.com)
   - Create a new cluster
   - Choose your region

2. **Configure Access**
   - Create database user
   - Set up IP whitelist (0.0.0.0/0 for Vercel)
   - Get connection string

3. **Seed Database**
   ```bash
   # Set environment variables locally
   export MONGODB_URI="your-connection-string"
   npm run seed
   ```

### Local MongoDB

1. **Install MongoDB**
   ```bash
   # macOS
   brew install mongodb-community
   
   # Ubuntu
   sudo apt-get install mongodb
   ```

2. **Start MongoDB**
   ```bash
   mongod
   ```

3. **Seed Database**
   ```bash
   npm run seed
   ```

## 🔧 Service Configuration

### Paystack Setup

1. **Test Mode**
   - Use test keys for development
   - Test payments with test cards

2. **Live Mode**
   - Switch to live keys for production
   - Update webhook URLs
   - Test with real payments

### Cloudinary Setup

1. **Create Account**
   - Sign up at [cloudinary.com](https://cloudinary.com)
   - Get API credentials

2. **Configure Upload Presets**
   - Set up upload presets for different image types
   - Configure transformations

### Resend Setup

1. **Create Account**
   - Sign up at [resend.com](https://resend.com)
   - Verify your domain

2. **Configure DNS**
   - Add required DNS records
   - Verify domain ownership

## 🔍 Post-Deployment Checklist

- [ ] Environment variables configured
- [ ] Database seeded with sample data
- [ ] Paystack webhook configured
- [ ] Email verification working
- [ ] Payment processing tested
- [ ] Image uploads working
- [ ] All pages loading correctly
- [ ] Mobile responsiveness verified
- [ ] SSL certificate active
- [ ] Custom domain configured (if applicable)

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check environment variables
   - Verify all dependencies installed
   - Check TypeScript errors

2. **Database Connection Issues**
   - Verify MongoDB connection string
   - Check IP whitelist
   - Ensure database user has correct permissions

3. **Payment Issues**
   - Verify Paystack keys are correct
   - Check webhook configuration
   - Test with different payment methods

4. **Email Issues**
   - Verify Resend API key
   - Check domain verification
   - Test with different email addresses

### Debug Mode

Enable debug logging by setting:
```env
NODE_ENV=development
DEBUG=true
```

## 📊 Monitoring

### Vercel Analytics
- Built-in analytics in Vercel dashboard
- Performance monitoring
- Error tracking

### Custom Monitoring
- Set up error tracking (Sentry)
- Monitor database performance
- Track payment success rates

## 🔄 Updates and Maintenance

### Regular Updates
1. **Dependencies**
   ```bash
   npm update
   npm audit fix
   ```

2. **Database Maintenance**
   - Regular backups
   - Index optimization
   - Data cleanup

3. **Security Updates**
   - Keep dependencies updated
   - Monitor security advisories
   - Regular security audits

### Backup Strategy
1. **Database Backups**
   - MongoDB Atlas automatic backups
   - Manual exports for critical data

2. **Code Backups**
   - Git repository
   - Regular commits
   - Tagged releases

## 📞 Support

For deployment issues:
- Check Vercel documentation
- Review service provider docs
- Contact support teams

---

**Happy Deploying! 🚀**
