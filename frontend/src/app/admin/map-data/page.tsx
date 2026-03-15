'use client';

import dynamic from 'next/dynamic';
import { useRef } from 'react';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), {
  ssr: false,
});
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), {
  ssr: false,
});
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), {
  ssr: false,
});
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), {
  ssr: false,
});

import 'leaflet/dist/leaflet.css';

const mapMarkers = [
  { id: 1, name: 'Taj Mahal', coordinates: [27.1751, 78.0421], category: 'Attraction' },
  { id: 2, name: 'Hotel Himalaya', coordinates: [32.2432, 77.1892], category: 'Hotel' },
  { id: 3, name: 'Goa Beach', coordinates: [15.2993, 73.8243], category: 'Beach' },
];

export default function MapDataManagement() {
  const mapRef = useRef(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500">
          <option>All Categories</option>
          <option>Attractions</option>
          <option>Hotels</option>
          <option>Hidden Gems</option>
          <option>Emergency Services</option>
        </select>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium transition-colors">
          Add Marker
        </button>
      </div>

      {/* Map */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-96">
        <MapContainer
          center={[28.6139, 77.209] as any}
          zoom={5}
          style={{ height: '100%', width: '100%' }}
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          {mapMarkers.map((marker) => (
            <Marker
              key={marker.id}
              position={marker.coordinates as any}
            >
              <Popup>
                <div className="text-sm">
                  <p className="font-medium">{marker.name}</p>
                  <p className="text-gray-600">{marker.category}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Markers List */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Markers</h3>
        <div className="space-y-2">
          {mapMarkers.map((marker) => (
            <div
              key={marker.id}
              className="p-3 border border-gray-200 rounded-lg flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900">{marker.name}</p>
                <p className="text-sm text-gray-600">{marker.category}</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  Edit
                </button>
                <button className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
