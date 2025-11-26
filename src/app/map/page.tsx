'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapPin, Navigation, Users, Home, School, Hospital, Building } from 'lucide-react';

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import('@/components/map/WardMap'), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading map...</p>
      </div>
    </div>
  )
});

interface LocationData {
  id: string;
  name: string;
  type: 'school' | 'hospital' | 'office' | 'landmark' | 'residential';
  coordinates: [number, number];
  description: string;
  address: string;
}

const locations: LocationData[] = [
  {
    id: '1',
    name: 'Ruaka Primary School',
    type: 'school',
    coordinates: [-1.1833, 36.8167],
    description: 'Main primary school serving the Ruaka area',
    address: 'Ruaka Road, Ruaka'
  },
  {
    id: '2',
    name: 'Ndenderu Health Centre',
    type: 'hospital',
    coordinates: [-1.1900, 36.8200],
    description: 'Community health center providing essential medical services',
    address: 'Ndenderu Road, Ndenderu'
  },
  {
    id: '3',
    name: 'Ward Office',
    type: 'office',
    coordinates: [-1.1850, 36.8180],
    description: 'Administrative office for Ndenderu Ward',
    address: 'Ward Office Complex, Ruaka'
  },
  {
    id: '4',
    name: 'Ruaka Market',
    type: 'landmark',
    coordinates: [-1.1820, 36.8150],
    description: 'Main market area for local commerce',
    address: 'Market Street, Ruaka'
  },
  {
    id: '5',
    name: 'Ndenderu Secondary School',
    type: 'school',
    coordinates: [-1.1950, 36.8250],
    description: 'Secondary school serving the Ndenderu area',
    address: 'School Road, Ndenderu'
  },
  {
    id: '6',
    name: 'Community Center',
    type: 'landmark',
    coordinates: [-1.1880, 36.8190],
    description: 'Multi-purpose community facility',
    address: 'Community Road, Ruaka'
  }
];

const getLocationIcon = (type: string) => {
  switch (type) {
    case 'school':
      return <School className="h-5 w-5" />;
    case 'hospital':
      return <Hospital className="h-5 w-5" />;
    case 'office':
      return <Building className="h-5 w-5" />;
    case 'residential':
      return <Home className="h-5 w-5" />;
    default:
      return <MapPin className="h-5 w-5" />;
  }
};

const getLocationColor = (type: string) => {
  switch (type) {
    case 'school':
      return 'text-red-600 bg-red-100';
    case 'hospital':
      return 'text-red-600 bg-red-100';
    case 'office':
      return 'text-green-600 bg-green-100';
    case 'residential':
      return 'text-purple-600 bg-purple-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export default function MapPage() {
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ndenderu Ward Map
            </h1>
            <p className="text-xl md:text-2xl text-red-50 max-w-4xl mx-auto">
              Explore our ward boundaries, key locations, and community facilities. 
              Discover the areas we serve and the infrastructure we're working to improve.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Navigation className="h-6 w-6 mr-2" />
                  Interactive Ward Map
                </h2>
                <div className="h-96 rounded-lg overflow-hidden">
                  <MapComponent
                    locations={locations}
                    onLocationSelect={setSelectedLocation}
                  />
                </div>
              </div>
            </div>

            {/* Location List */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Key Locations
                </h3>
                <div className="space-y-4">
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedLocation?.id === location.id
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-full ${getLocationColor(location.type)}`}>
                          {getLocationIcon(location.type)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{location.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{location.description}</p>
                          <p className="text-xs text-gray-500 mt-1">{location.address}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ward Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ward Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key statistics and information about Ndenderu Ward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Users className="h-8 w-8" />, 
                number: "25,000+", 
                label: "Total Population" 
              },
              { 
                icon: <Home className="h-8 w-8" />, 
                number: "8,500+", 
                label: "Households" 
              },
              { 
                icon: <School className="h-8 w-8" />, 
                number: "12", 
                label: "Educational Institutions" 
              },
              { 
                icon: <Hospital className="h-8 w-8" />, 
                number: "3", 
                label: "Health Facilities" 
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-red-600 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
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

      {/* Development Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planned Development Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Infrastructure improvements and community development initiatives in progress
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Road Infrastructure",
                description: "Improvement of major roads connecting Ruaka and Ndenderu",
                status: "In Progress",
                color: "bg-red-100 text-red-800"
              },
              {
                title: "Water Supply",
                description: "Extension of clean water access to all households",
                status: "Planning",
                color: "bg-yellow-100 text-yellow-800"
              },
              {
                title: "School Renovation",
                description: "Upgrading facilities in local primary and secondary schools",
                status: "Completed",
                color: "bg-green-100 text-green-800"
              },
              {
                title: "Health Center Upgrade",
                description: "Expansion of Ndenderu Health Centre facilities",
                status: "In Progress",
                color: "bg-red-100 text-red-800"
              },
              {
                title: "Market Development",
                description: "Modernization of Ruaka Market infrastructure",
                status: "Planning",
                color: "bg-yellow-100 text-yellow-800"
              },
              {
                title: "Youth Center",
                description: "Construction of multi-purpose youth facility",
                status: "Planning",
                color: "bg-yellow-100 text-yellow-800"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${project.color}`}>
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Involved in Your Community
          </h2>
          <p className="text-xl text-red-50 mb-8 max-w-3xl mx-auto">
            Learn more about our development plans and how you can contribute to 
            building a better future for Ndenderu Ward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/plan"
              className="bg-white hover:bg-red-50 text-red-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center shadow-lg"
            >
              View Development Plan
            </a>
            <a
              href="/feedback"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
            >
              Share Your Ideas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
