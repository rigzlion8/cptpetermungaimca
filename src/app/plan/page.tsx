import { Calendar, Target, Users, Heart, MapPin, Star, CheckCircle, ArrowRight } from 'lucide-react';

export default function FiveYearPlan() {
  const planData = [
    {
      year: "Year 1",
      title: "Foundation & Infrastructure",
      focus: "Laying the groundwork for sustainable development",
      goals: [
        "Complete ward mapping and needs assessment",
        "Establish community development committees",
        "Initiate road improvement projects",
        "Set up youth skills training centers",
        "Launch healthcare accessibility program"
      ],
      icon: <MapPin className="h-8 w-8" />
    },
    {
      year: "Year 2",
      title: "Education & Youth Development",
      focus: "Empowering the next generation",
      goals: [
        "Renovate and equip local schools",
        "Establish scholarship programs for needy students",
        "Create youth mentorship programs",
        "Set up computer literacy centers",
        "Launch entrepreneurship training initiatives"
      ],
      icon: <Users className="h-8 w-8" />
    },
    {
      year: "Year 3",
      title: "Healthcare & Social Services",
      focus: "Improving community health and wellbeing",
      goals: [
        "Upgrade local health facilities",
        "Establish mobile clinic services",
        "Create mental health support programs",
        "Launch nutrition programs for children",
        "Set up elderly care services"
      ],
      icon: <Heart className="h-8 w-8" />
    },
    {
      year: "Year 4",
      title: "Economic Development",
      focus: "Creating sustainable livelihoods",
      goals: [
        "Establish microfinance programs",
        "Support local business development",
        "Create agricultural cooperatives",
        "Launch tourism development initiatives",
        "Set up vocational training centers"
      ],
      icon: <Target className="h-8 w-8" />
    },
    {
      year: "Year 5",
      title: "Sustainability & Innovation",
      focus: "Ensuring long-term community prosperity",
      goals: [
        "Implement renewable energy projects",
        "Establish environmental conservation programs",
        "Create digital governance platforms",
        "Launch community innovation hubs",
        "Ensure program sustainability and continuity"
      ],
      icon: <Star className="h-8 w-8" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our 5-Year Development Plan
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              A comprehensive roadmap for transforming Ruaka and Ndenderu Ward into 
              a thriving, sustainable community that serves all its residents.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To create a prosperous, inclusive, and sustainable Ruaka/Ndenderu Ward where 
                every resident has access to quality education, healthcare, economic opportunities, 
                and a clean, safe environment. We envision a community that serves as a model 
                for development and good governance in Kiambu County.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To serve the people of Ruaka and Ndenderu Ward with integrity, transparency, 
                and dedication. We are committed to implementing evidence-based policies, 
                fostering community participation, and ensuring that every development initiative 
                directly benefits the residents and improves their quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Year Plan Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic plan broken down by year, with clear goals and measurable outcomes
            </p>
          </div>

          <div className="space-y-12">
            {planData.map((year, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < planData.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-blue-200"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Year indicator */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-gray-50 p-8 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="text-blue-600 mr-4">{year.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{year.year}</h3>
                        <h4 className="text-xl font-semibold text-blue-600">{year.title}</h4>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6 italic">
                      {year.focus}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {year.goals.map((goal, goalIndex) => (
                        <div key={goalIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{goal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Performance Indicators */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measuring Our Success
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We believe in accountability and transparency. Here are the key metrics 
              we'll use to measure our progress.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "95%", description: "School enrollment rate" },
              { metric: "100%", description: "Access to clean water" },
              { metric: "80%", description: "Youth employment rate" },
              { metric: "90%", description: "Community satisfaction" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">
                  {item.metric}
                </div>
                <div className="text-blue-100 text-lg">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Us in Building the Future
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            This plan is not just a document—it's a commitment to our community. 
            We need your support, input, and participation to make it a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
            >
              Support Our Vision
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/feedback"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
            >
              Share Your Ideas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
