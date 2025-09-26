import connectDB from './mongodb';
import User from '@/models/User';
import Testimonial from '@/models/Testimonial';
import Feedback from '@/models/Feedback';
import Donation from '@/models/Donation';
import { hashPassword } from './auth';

export async function seedDatabase() {
  try {
    await connectDB();
    console.log('🌱 Starting database seeding...');

    // Clear existing data
    await User.deleteMany({});
    await Testimonial.deleteMany({});
    await Feedback.deleteMany({});
    await Donation.deleteMany({});
    console.log('🗑️ Cleared existing data');

    // Create admin user
    const adminPassword = await hashPassword('admin123');
    const adminUser = new User({
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@mca-campaign.com',
      password: adminPassword,
      isEmailVerified: true,
      role: 'admin',
    });
    await adminUser.save();
    console.log('👤 Created admin user');

    // Create sample regular user
    const userPassword = await hashPassword('user123');
    const regularUser = new User({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: userPassword,
      phone: '+254700000001',
      isEmailVerified: true,
      role: 'user',
    });
    await regularUser.save();
    console.log('👤 Created regular user');

    // Create sample testimonials
    const testimonials = [
      {
        name: 'Sarah Wanjiku',
        email: 'sarah.wanjiku@example.com',
        location: 'Ruaka',
        content: 'The MCA campaign has brought real change to our community. The new water project has made life so much easier for everyone in our area.',
        rating: 5,
        isApproved: true,
      },
      {
        name: 'Peter Kimani',
        email: 'peter.kimani@example.com',
        location: 'Ndenderu',
        content: 'I am impressed with the transparency and dedication shown by this campaign. They keep their promises and involve the community in decision making.',
        rating: 5,
        isApproved: true,
      },
      {
        name: 'Grace Muthoni',
        email: 'grace.muthoni@example.com',
        location: 'Ruaka',
        content: 'The youth programs have been life-changing for my children. They now have access to computer training and mentorship opportunities.',
        rating: 4,
        isApproved: true,
      },
      {
        name: 'James Kariuki',
        email: 'james.kariuki@example.com',
        location: 'Ndenderu',
        content: 'The healthcare improvements are visible. The health center is now better equipped and more accessible to everyone.',
        rating: 5,
        isApproved: true,
      },
      {
        name: 'Mary Njeri',
        email: 'mary.njeri@example.com',
        location: 'Ruaka',
        content: 'The road improvements have made commuting much easier. I can now get to work faster and safer.',
        rating: 4,
        isApproved: true,
      },
      {
        name: 'David Mwangi',
        email: 'david.mwangi@example.com',
        location: 'Ndenderu',
        content: 'The education support programs have helped many children in our area. The scholarship program is making a real difference.',
        rating: 5,
        isApproved: true,
      },
    ];

    for (const testimonial of testimonials) {
      const newTestimonial = new Testimonial(testimonial);
      await newTestimonial.save();
    }
    console.log('💬 Created sample testimonials');

    // Create sample feedback
    const feedbacks = [
      {
        name: 'Alice Wanjiku',
        email: 'alice.wanjiku@example.com',
        subject: 'Request for more street lighting',
        message: 'I would like to request for more street lighting in our area, especially along the main road. It gets very dark at night and poses a security risk.',
        category: 'suggestion',
        status: 'new',
        priority: 'medium',
        ipAddress: '192.168.1.100',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      {
        name: 'Robert Kiprop',
        email: 'robert.kiprop@example.com',
        subject: 'Complaint about water supply',
        message: 'We have been experiencing irregular water supply in our area for the past two weeks. Please look into this matter urgently.',
        category: 'complaint',
        status: 'in_progress',
        priority: 'high',
        ipAddress: '192.168.1.101',
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      },
      {
        name: 'Jane Mwende',
        email: 'jane.mwende@example.com',
        subject: 'Thank you for the new playground',
        message: 'I want to thank the campaign team for the new playground that was built near our estate. The children are very happy and it has brought the community together.',
        category: 'general',
        status: 'resolved',
        priority: 'low',
        ipAddress: '192.168.1.102',
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1) AppleWebKit/605.1.15',
      },
    ];

    for (const feedback of feedbacks) {
      const newFeedback = new Feedback(feedback);
      await newFeedback.save();
    }
    console.log('📝 Created sample feedback');

    // Create sample donations
    const donations = [
      {
        donorName: 'Anonymous',
        donorEmail: 'anonymous@example.com',
        amount: 5000,
        currency: 'KES',
        paystackReference: 'MCA_1234567890_abc123',
        paystackTransactionId: '1234567890',
        status: 'success',
        paymentMethod: 'paystack',
        isAnonymous: true,
        message: 'Keep up the good work!',
      },
      {
        donorName: 'Michael Ochieng',
        donorEmail: 'michael.ochieng@example.com',
        donorPhone: '+254700000002',
        amount: 10000,
        currency: 'KES',
        paystackReference: 'MCA_1234567891_def456',
        paystackTransactionId: '1234567891',
        status: 'success',
        paymentMethod: 'paystack',
        isAnonymous: false,
        message: 'Supporting community development',
      },
      {
        donorName: 'Elizabeth Akinyi',
        donorEmail: 'elizabeth.akinyi@example.com',
        amount: 2500,
        currency: 'KES',
        paystackReference: 'MCA_1234567892_ghi789',
        paystackTransactionId: '1234567892',
        status: 'success',
        paymentMethod: 'paystack',
        isAnonymous: false,
        message: 'For the children\'s education fund',
      },
    ];

    for (const donation of donations) {
      const newDonation = new Donation(donation);
      await newDonation.save();
    }
    console.log('💰 Created sample donations');

    console.log('✅ Database seeding completed successfully!');
    console.log('\n📋 Sample Data Summary:');
    console.log('- Admin User: admin@mca-campaign.com / admin123');
    console.log('- Regular User: john.doe@example.com / user123');
    console.log('- 6 Testimonials');
    console.log('- 3 Feedback entries');
    console.log('- 3 Donations');
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}

// Run seeding if this file is executed directly
if (require.main === module) {
  seedDatabase()
    .then(() => {
      console.log('Seeding completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Seeding failed:', error);
      process.exit(1);
    });
}
