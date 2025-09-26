import Link from 'next/link';
import { ArrowRight, Users, Heart, MapPin, Star, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building a Better Future for
              <span className="block text-yellow-300">Ruaka & Ndenderu Ward</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join our MCA campaign for positive change, community development, 
              and transparent leadership that puts people first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
              >
                Support Our Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/plan"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
              >
                View Our 5-Year Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Issues Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Key Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to addressing the most pressing issues facing our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Youth Empowerment",
                description: "Creating opportunities for young people through skills training, mentorship programs, and job creation initiatives."
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Healthcare Access",
                description: "Improving healthcare facilities and ensuring affordable, quality medical care for all residents."
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Infrastructure Development",
                description: "Building better roads, water systems, and public facilities to improve quality of life."
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Education Excellence",
                description: "Supporting schools and educational programs to ensure every child has access to quality education."
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Transparent Governance",
                description: "Ensuring accountability, transparency, and community participation in decision-making processes."
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Environmental Protection",
                description: "Promoting sustainable development and protecting our natural resources for future generations."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Your support can help us bring positive change to Ruaka and Ndenderu Ward. 
            Every contribution, no matter how small, makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
            >
              Donate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/testimonials"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact So Far
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that show our commitment to the community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Community Members Engaged" },
              { number: "50+", label: "Projects Initiated" },
              { number: "95%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Community Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
