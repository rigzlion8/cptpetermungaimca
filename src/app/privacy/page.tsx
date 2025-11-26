import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-red-50 max-w-4xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Introduction</h2>
              <p className="text-gray-700 mb-6">
                Hon. Peter Mungai MCA Campaign ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Personal Data</h3>
              <p className="text-gray-700 mb-4">
                Personally identifiable information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Register for an account (name, email address, phone number)</li>
                <li>Make a donation (name, email, phone, payment information)</li>
                <li>Submit feedback or testimonials</li>
                <li>Subscribe to our newsletter or communications</li>
                <li>Contact us through our website</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Derivative Data</h3>
              <p className="text-gray-700 mb-6">
                Information our servers automatically collect when you access the website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Process and manage your donations</li>
                <li>Create and manage your account</li>
                <li>Send you campaign updates and information</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraudulent transactions and monitor against theft</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Disclosure of Your Information</h2>
              <p className="text-gray-700 mb-4">
                We may share information we have collected about you in certain situations:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">By Law or to Protect Rights</h3>
              <p className="text-gray-700 mb-4">
                If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Third-Party Service Providers</h3>
              <p className="text-gray-700 mb-6">
                We may share your information with third parties that perform services for us or on our behalf, including payment processing (Paystack), data analysis, email delivery, hosting services, and customer service. These third parties are bound by confidentiality agreements and are not permitted to use your information for any other purpose.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Data Security</h2>
              <p className="text-gray-700 mb-6">
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Payment Information</h2>
              <p className="text-gray-700 mb-6">
                All payment data is stored by our payment processor, Paystack. We do not store your credit card details, bank account information, or other sensitive payment information on our servers. All payment transactions are processed through secure, encrypted connections.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>The right to access – You have the right to request copies of your personal data</li>
                <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate</li>
                <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions</li>
                <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data</li>
                <li>The right to object to processing – You have the right to object to our processing of your personal data</li>
                <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-6">
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on the website to help customize the website and improve your experience. You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">9. Children's Privacy</h2>
              <p className="text-gray-700 mb-6">
                Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">11. Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700">
                  <strong>Email:</strong> info@mca-campaign.com<br />
                  <strong>Phone:</strong> +254 700 000 000<br />
                  <strong>Address:</strong> Ndenderu Ward, Kiambaa Constituency, Kiambu County
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link
                href="/"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

