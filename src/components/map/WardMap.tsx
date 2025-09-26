'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface LocationData {
  id: string;
  name: string;
  type: 'school' | 'hospital' | 'office' | 'landmark' | 'residential';
  coordinates: [number, number];
  description: string;
  address: string;
}

interface WardMapProps {
  locations: LocationData[];
  onLocationSelect: (location: LocationData | null) => void;
}

export default function WardMap({ locations, onLocationSelect }: WardMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [isMapReady, setIsMapReady] = useState(false);

  // Ward boundary coordinates (approximate polygon for Ruaka/Ndenderu area)
  const wardBoundary = [
    [-1.1700, 36.8000],
    [-1.2000, 36.8000],
    [-1.2000, 36.8400],
    [-1.1700, 36.8400],
    [-1.1700, 36.8000]
  ];

  useEffect(() => {
    // Load Leaflet CSS and JS dynamically
    const loadLeaflet = async () => {
      // Load CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);

      // Load JS
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => {
        initializeMap();
      };
      document.head.appendChild(script);
    };

    loadLeaflet();

    return () => {
      // Cleanup
      if (map) {
        map.remove();
      }
    };
  }, []);

  const initializeMap = () => {
    if (!mapRef.current || typeof window === 'undefined') return;

    const L = (window as any).L;
    if (!L) return;

    // Initialize map centered on Ruaka/Ndenderu area
    const mapInstance = L.map(mapRef.current).setView([-1.185, 36.818], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapInstance);

    // Add ward boundary
    const wardPolygon = L.polygon(wardBoundary, {
      color: '#2563eb',
      weight: 3,
      fillColor: '#3b82f6',
      fillOpacity: 0.1
    }).addTo(mapInstance);

    // Add ward label
    L.marker([-1.185, 36.818])
      .bindPopup(`
        <div class="text-center">
          <h3 class="font-bold text-lg text-blue-600">Ruaka/Ndenderu Ward</h3>
          <p class="text-sm text-gray-600">Kiambu County</p>
        </div>
      `)
      .addTo(mapInstance);

    // Add location markers
    const newMarkers: any[] = [];
    locations.forEach((location) => {
      const marker = L.marker(location.coordinates)
        .bindPopup(`
          <div class="p-2">
            <h4 class="font-semibold text-gray-900">${location.name}</h4>
            <p class="text-sm text-gray-600 mt-1">${location.description}</p>
            <p class="text-xs text-gray-500 mt-1">${location.address}</p>
          </div>
        `)
        .on('click', () => {
          onLocationSelect(location);
        })
        .addTo(mapInstance);

      newMarkers.push(marker);
    });

    setMap(mapInstance);
    setMarkers(newMarkers);
    setIsMapReady(true);

    // Fit map to show all markers and ward boundary
    const group = new L.featureGroup([wardPolygon, ...newMarkers]);
    mapInstance.fitBounds(group.getBounds().pad(0.1));
  };

  const getMarkerIcon = (type: string) => {
    const L = (window as any).L;
    if (!L) return null;

    const colors = {
      school: '#3b82f6',
      hospital: '#ef4444',
      office: '#10b981',
      residential: '#8b5cf6',
      landmark: '#f59e0b'
    };

    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background-color: ${colors[type as keyof typeof colors] || '#6b7280'};
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="color: white; font-size: 12px; font-weight: bold;">${type.charAt(0).toUpperCase()}</div>
        </div>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });
  };

  // Update marker icons when map is ready
  useEffect(() => {
    if (map && isMapReady) {
      markers.forEach((marker, index) => {
        const location = locations[index];
        if (location) {
          marker.setIcon(getMarkerIcon(location.type));
        }
      });
    }
  }, [map, isMapReady, locations]);

  return (
    <div className="relative">
      <div ref={mapRef} className="w-full h-96 rounded-lg" />
      
      {!isMapReady && (
        <div className="absolute inset-0 bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      )}

      {/* Map Legend */}
      {isMapReady && (
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 z-10">
          <h4 className="font-semibold text-gray-900 mb-3">Legend</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
              <span>Schools</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
              <span>Hospitals</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <span>Offices</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
              <span>Residential</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
              <span>Landmarks</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
