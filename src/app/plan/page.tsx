import { Target, Users, MapPin, CheckCircle, ArrowRight, DollarSign, BarChart3, Megaphone, Shield } from 'lucide-react';
import Link from 'next/link';

export default function CampaignPlan() {
  const phase1Activities = [
    {
      category: "Grassroot Structure & Mobilization",
      items: [
        "Campaign Team: 1 Rep per Polling Center (7 Reps)",
        "Mapping and Group Engagement (Women, Youth, Churches, etc.)",
        "Candidate Engagement: Weekly meetings, burials, church services"
      ]
    },
    {
      category: "Physical Presence & Logistics",
      items: [
        "Vehicle & PA System with generator",
        "Polling Center Reps representing candidate in events"
      ]
    },
    {
      category: "Strategic Data Collection",
      items: [
        "Baseline Opinion Poll (early 2026)",
        "Follow-up Opinion Polls to track popularity and messaging effectiveness"
      ]
    },
    {
      category: "Communication & Command",
      items: [
        "Social Media/Photography: Daily content creation and live-streaming",
        "Command Center setup for operations/coordination"
      ]
    },
    {
      category: "Nomination Preparation",
      items: [
        "Party Nomination Fees payment"
      ]
    }
  ];

  const phase2Activities = [
    {
      category: "High-Intensity Mobilization",
      items: [
        "Daily Voter Engagement: Increased groups, church, funeral, and baraza appearances",
        "Additional Vehicle (Total 2) to cover expanded territory"
      ]
    },
    {
      category: "Strategy and Data",
      items: [
        "Daily debriefs and planning meetings",
        "Rapid tracking of public sentiment through opinion polls"
      ]
    },
    {
      category: "Command & Tallying",
      items: [
        "Command Center Staffing: 10 dedicated staff",
        "Secure, reliable system for parallel vote tallying"
      ]
    },
    {
      category: "Communication & Media",
      items: [
        "Total of 2 Media Staff for high-volume content, editing, and distribution",
        "Strategic amplification of message across all digital platforms"
      ]
    },
    {
      category: "Election Day Management",
      items: [
        "IEBC Nomination Fees payment",
        "Agent Training & Payment: 44 Agents, 7 Supervisors, 1 Super Agent"
      ]
    }
  ];

  const budgetPhase1 = [
    { category: "Official Fees", amount: "100,000", item: "Party Nomination Fee" },
    { category: "Personnel (16 Months)", amount: "2,424,000", item: "Social Media, Command Center, Polling Reps, Influencers" },
    { category: "Logistics & Assets", amount: "4,700,000", item: "Vehicle, PA System, Fuel & Maintenance" },
    { category: "Communication & Outreach", amount: "4,310,000", item: "Equipment, Software, Website, Events" },
    { category: "Data & Strategy", amount: "1,050,000", item: "Opinion Polls, Command Center" },
    { category: "Campaign Materials", amount: "3,100,000", item: "Branded Merchandise, Banners & Posters" },
    { category: "Agent Training", amount: "935,000", item: "Training for 44 Agents, 7 Supervisors, 1 Super-Agent" }
  ];

  const budgetPhase2 = [
    { category: "Official Fees", amount: "100,000", item: "IEBC Nomination Fee" },
    { category: "Personnel (5 Months)", amount: "1,890,000", item: "Media, Command Center, Polling Reps, Influencers" },
    { category: "Logistics", amount: "350,000", item: "Fuel & Maintenance" },
    { category: "Data & Strategy", amount: "1,900,000", item: "Opinion Polls, Command Center, Tallying System" },
    { category: "Outreach & Campaign", amount: "2,500,000", item: "Daily Engagements, Additional Materials" },
    { category: "Agent Training", amount: "935,000", item: "Training for Election Day" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Campaign Strategy & Plan
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              A comprehensive two-phase approach to secure the mandate for Ndenderu Ward
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-lg">
              <div className="bg-blue-700 px-6 py-3 rounded-lg">
                <span className="font-semibold">Campaign Duration:</span> 21 Months
              </div>
              <div className="bg-blue-700 px-6 py-3 rounded-lg">
                <span className="font-semibold">Target Election:</span> 2027 General Elections
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              The Vision: A Mandate for Ndenderu Ward
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I am seeking the mandate to serve as the Member of County Assembly for <strong>Ndenderu Ward, Kiambaa Constituency, Kiambu County</strong>. 
              My motivation is rooted in a commitment to catalyze sustainable development, enhance public service delivery, 
              and champion transparent representation for all residents of Ndenderu Ward.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              <strong>Ndenderu, with 28,523 registered voters across 7 Polling Centers and 44 Polling Stations</strong>, 
              is a critical ward that deserves proactive and accountable leadership.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <MapPin className="h-6 w-6 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Invest in Ward Infrastructure</h3>
                <p className="text-gray-600 text-sm">Focus on accessible roads, water, and sanitation</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Users className="h-6 w-6 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Empower the Community</h3>
                <p className="text-gray-600 text-sm">Create sustainable opportunities for youth, women, and PLWDs</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <CheckCircle className="h-6 w-6 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Ensure Accountability</h3>
                <p className="text-gray-600 text-sm">Champion transparent management of county resources</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                1
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Phase 1: Pre-Nomination Grassroot Mobilization
                </h2>
                <p className="text-xl text-gray-600 mt-2">
                  December 2025 – March 2027 (16 Months)
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 ml-20">
              <strong>Goal:</strong> Establish a dominant grassroots presence, secure party nomination, and build a strategic data foundation.
            </p>
          </div>

          <div className="space-y-8">
            {phase1Activities.map((activity, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  {index === 0 && <Users className="h-6 w-6 text-blue-600 mr-3" />}
                  {index === 1 && <MapPin className="h-6 w-6 text-blue-600 mr-3" />}
                  {index === 2 && <BarChart3 className="h-6 w-6 text-blue-600 mr-3" />}
                  {index === 3 && <Megaphone className="h-6 w-6 text-blue-600 mr-3" />}
                  {index === 4 && <Shield className="h-6 w-6 text-blue-600 mr-3" />}
                  {activity.category}
                </h3>
                <ul className="space-y-2">
                  {activity.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 2 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                2
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Phase 2: Post-Nomination High-Intensity Campaign
                </h2>
                <p className="text-xl text-gray-600 mt-2">
                  April 2027 – August 2027 (5 Months)
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 ml-20">
              <strong>Goal:</strong> Consolidate nomination victory, maximize voter outreach, ensure messaging dominance, and secure the Ward seat on Election Day.
            </p>
          </div>

          <div className="space-y-8">
            {phase2Activities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  {index === 0 && <Users className="h-6 w-6 text-green-600 mr-3" />}
                  {index === 1 && <BarChart3 className="h-6 w-6 text-green-600 mr-3" />}
                  {index === 2 && <Shield className="h-6 w-6 text-green-600 mr-3" />}
                  {index === 3 && <Megaphone className="h-6 w-6 text-green-600 mr-3" />}
                  {index === 4 && <CheckCircle className="h-6 w-6 text-green-600 mr-3" />}
                  {activity.category}
                </h3>
                <ul className="space-y-2">
                  {activity.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <DollarSign className="h-8 w-8 text-blue-600 mr-3" />
              Campaign Budget Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent breakdown of campaign funding requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Phase 1 Budget */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 1 Budget</h3>
              <p className="text-gray-600 mb-6">Pre-Nomination Period (16 Months)</p>
              <div className="space-y-4">
                {budgetPhase1.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-gray-900">{item.category}</p>
                        <p className="text-sm text-gray-600">{item.item}</p>
                      </div>
                      <p className="text-lg font-bold text-blue-600">{item.amount} Ksh</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t-2 border-blue-200">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Sub-Total Phase 1:</span>
                  <span className="text-2xl font-bold text-blue-600">16,799,000 Ksh</span>
                </div>
              </div>
            </div>

            {/* Phase 2 Budget */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 2 Budget</h3>
              <p className="text-gray-600 mb-6">Post-Nomination Period (5 Months)</p>
              <div className="space-y-4">
                {budgetPhase2.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-gray-900">{item.category}</p>
                        <p className="text-sm text-gray-600">{item.item}</p>
                      </div>
                      <p className="text-lg font-bold text-green-600">{item.amount} Ksh</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t-2 border-green-200">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Sub-Total Phase 2:</span>
                  <span className="text-2xl font-bold text-green-600">7,675,000 Ksh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-4">Total Campaign Budget</h3>
            <p className="text-4xl md:text-5xl font-bold mb-2">24,474,000 Ksh</p>
            <p className="text-blue-100 text-lg">21 Months of dedicated service to Ndenderu Ward</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Support Will Fuel Our Victory
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            This campaign is not about personal wealth; it is about community investment. 
            Every contribution goes directly into maintaining our 21-month presence, ensuring 
            the Ndenderu community has a voice that is heard not just in 2027, but starting now.
          </p>
          <p className="text-lg mb-8 text-blue-100 max-w-3xl mx-auto">
            I humbly ask you to stand with me. Your financial support, prayer, and time will 
            empower us to secure the nomination and win the seat. Let us work together to bring 
            accountable leadership back to Ndenderu Ward.
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
              href="/feedback"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
            >
              Share Your Ideas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
