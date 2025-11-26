import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-red-50 max-w-4xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using the Hon. Peter Mungai MCA Campaign website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily download one copy of the materials on the Hon. Peter Mungai MCA Campaign website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Donations</h2>
              <p className="text-gray-700 mb-4">
                All donations made through this website are voluntary contributions to support the Hon. Peter Mungai MCA Campaign. By making a donation, you acknowledge that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Donations are non-refundable unless required by law</li>
                <li>All donations are processed securely through Paystack</li>
                <li>Your donation information will be kept confidential unless you choose to make it public</li>
                <li>Donations are used to support campaign activities and community development initiatives</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. User Accounts</h2>
              <p className="text-gray-700 mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Privacy</h2>
              <p className="text-gray-700 mb-6">
                Your use of the website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Prohibited Uses</h2>
              <p className="text-gray-700 mb-4">
                You may not use our website:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>In any way that violates any applicable national or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate the campaign, a campaign employee, another user, or any other person or entity</li>
                <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Disclaimer</h2>
              <p className="text-gray-700 mb-6">
                The materials on the Hon. Peter Mungai MCA Campaign website are provided on an 'as is' basis. The campaign makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Limitations</h2>
              <p className="text-gray-700 mb-6">
                In no event shall the Hon. Peter Mungai MCA Campaign or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the campaign website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">9. Revisions</h2>
              <p className="text-gray-700 mb-6">
                The Hon. Peter Mungai MCA Campaign may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">10. Contact Information</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms of Service, please contact us at:
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

