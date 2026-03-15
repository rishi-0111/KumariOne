'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix for default marker icons in Leaflet + Next.js
const setupLeafletMarkers = () => {
  // @ts-ignore
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
};

const locations = [
  { id: 1, name: 'Vivekananda Rock Memorial', coord: [8.0781, 77.5553], type: 'Attraction' },
  { id: 2, name: 'Thiruvalluvar Statue', coord: [8.0777, 77.5540], type: 'Attraction' },
  { id: 3, name: 'Kanyakumari Beach', coord: [8.0792, 77.5501], type: 'Attraction' },
  { id: 4, name: 'Our Lady of Ransom Church', coord: [8.0841, 77.5521], type: 'Attraction' },
  { id: 5, name: 'Hotel Sea View', coord: [8.0815, 77.5532], type: 'Hotel' },
  { id: 6, name: 'Emergency Hospital', coord: [8.0870, 77.5450], type: 'Emergency' },
];

export default function MapComponent() {
  useEffect(() => {
    setupLeafletMarkers();
  }, []);

  return (
    <MapContainer 
      center={[8.0883, 77.5385] as any} 
      zoom={14} 
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc) => (
        <Marker key={loc.id} position={loc.coord as any}>
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-slate-900">{loc.name}</h3>
              <p className="text-xs text-slate-500 uppercase font-black tracking-widest mt-1 text-primary">{loc.type}</p>
              <button className="mt-3 w-full bg-primary text-white text-[10px] font-bold py-1.5 rounded-lg shadow-sm">
                Get Directions
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
