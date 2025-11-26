import Link from 'next/link';
import { ArrowRight, Users, MapPin, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              A Mandate for
              <span className="block text-yellow-300">Ndenderu Ward</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Hon. Peter Mungai - Member of County Assembly Candidate
              <span className="block mt-2 text-lg">Kiambaa Constituency, Kiambu County | 2027 General Elections</span>
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
                View Campaign Strategy
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
              Our Core Commitment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three pillars that will guide our service to Ndenderu Ward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Invest in Ward Infrastructure",
                description: "Focus on accessible roads, water, and sanitation to improve the quality of life for all residents."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Empower the Community",
                description: "Create sustainable opportunities for youth, women, and Persons Living with Disabilities (PLWDs) through economic and sports initiatives."
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Ensure Accountability",
                description: "Champion transparent management of county resources and citizen participation in ward development planning."
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
            Your support can help us bring positive change to Ndenderu Ward. 
            Every contribution, no matter how small, makes a difference in securing accountable leadership.
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
              { number: "28,523", label: "Registered Voters" },
              { number: "7", label: "Polling Centers" },
              { number: "44", label: "Polling Stations" },
              { number: "21", label: "Months Campaign Duration" }
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
