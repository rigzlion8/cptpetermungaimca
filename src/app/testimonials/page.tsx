'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, MapPin, User } from 'lucide-react';

interface Testimonial {
  _id: string;
  name: string;
  location: string;
  content: string;
  rating: number;
  imageUrl?: string;
  createdAt: string;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/testimonials');
      const data = await response.json();
      
      if (data.success) {
        setTestimonials(data.data);
      } else {
        setError('Failed to load testimonials');
      }
    } catch (err) {
      setError('An error occurred while loading testimonials');
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading testimonials...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What People Are Saying
            </h1>
            <p className="text-xl md:text-2xl text-red-50 max-w-4xl mx-auto">
              Hear from community members who have experienced the positive impact 
              of our campaign and development initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 text-center">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {testimonials.length === 0 ? (
            <div className="text-center py-12">
              <Quote className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No testimonials yet
              </h3>
              <p className="text-gray-600">
                Be the first to share your experience with our campaign.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial._id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Quote */}
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-red-200 mb-3" />
                    <p className="text-gray-700 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {testimonial.imageUrl ? (
                        <img
                          src={testimonial.imageUrl}
                          alt={testimonial.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                          <User className="h-6 w-6 text-red-600" />
                        </div>
                      )}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Add Testimonial CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Share Your Experience
          </h2>
          <p className="text-xl text-red-50 mb-8 max-w-3xl mx-auto">
            Have you been impacted by our campaign or community programs? 
            We'd love to hear your story and share it with others.
          </p>
          <a
            href="/feedback"
            className="bg-white hover:bg-red-50 text-red-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center shadow-lg"
          >
            Share Your Story
          </a>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Community Impact
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to the community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: testimonials.length, label: "Testimonials Shared" },
              { number: "4.8", label: "Average Rating" },
              { number: "100%", label: "Community Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
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
