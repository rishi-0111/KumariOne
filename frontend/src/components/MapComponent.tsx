'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

const fixIcons = () => {
  // @ts-ignore
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
};

export const allLocations = [
  { id: 1,  name: 'Vivekananda Rock Memorial',  category: 'Attractions', lat: 8.0781, lng: 77.5553, description: 'Famous rock memorial dedicated to Swami Vivekananda.' },
  { id: 2,  name: 'Thiruvalluvar Statue',         category: 'Attractions', lat: 8.0777, lng: 77.5540, description: 'A 133-ft statue of Tamil poet Thiruvalluvar.' },
  { id: 3,  name: 'Kanyakumari Beach',             category: 'Attractions', lat: 8.0792, lng: 77.5501, description: 'Tri-ocean confluence beach with stunning sunrises.' },
  { id: 4,  name: 'Our Lady of Ransom Church',     category: 'Attractions', lat: 8.0841, lng: 77.5521, description: 'Historic Portuguese-era Catholic church.' },
  { id: 5,  name: 'Padmanabhapuram Palace',        category: 'Attractions', lat: 8.2564, lng: 77.3217, description: 'Magnificent Kerala-style wooden palace.' },
  { id: 6,  name: 'Vattakottai Fort',              category: 'Hidden Spots', lat: 8.1026, lng: 77.5645, description: '18th-century sea fort with ocean panoramas.' },
  { id: 7,  name: 'Chitharal Jain Monuments',      category: 'Hidden Spots', lat: 8.2081, lng: 77.3854, description: '14th-century Jain rock carvings.' },
  { id: 8,  name: 'Muttom Beach',                  category: 'Hidden Spots', lat: 8.1526, lng: 77.5927, description: 'Serene beach with unique rock formations.' },
  { id: 9,  name: 'Mathur Aqueduct',               category: 'Hidden Spots', lat: 8.2736, lng: 77.2981, description: 'Largest aqueduct in Asia.' },
  { id: 10, name: 'Thirparappu Waterfalls',        category: 'Hidden Spots', lat: 8.3208, lng: 77.2547, description: 'Picturesque waterfalls on River Kodayar.' },
  { id: 11, name: 'Sanguthurai Beach',              category: 'Hidden Spots', lat: 8.0889, lng: 77.5256, description: 'Quiet fishing beach with colourful boats.' },
  { id: 12, name: 'Sothavilai Beach',               category: 'Hidden Spots', lat: 8.1163, lng: 77.4985, description: 'Pristine beach ideal for swimming.' },
  { id: 13, name: 'Olakaruvi Waterfalls',           category: 'Hidden Spots', lat: 8.5611, lng: 77.3602, description: 'Untouched waterfalls inside forest.' },
  { id: 14, name: 'Keeriparai Forest',              category: 'Hidden Spots', lat: 8.3986, lng: 77.2814, description: 'Dense Western Ghats forest reserve.' },
  { id: 15, name: 'Lemur Beach',                    category: 'Hidden Spots', lat: 8.1309, lng: 77.4880, description: 'Electric teal waters, near Ganapathipuram.' },
  { id: 16, name: 'Hotel Sea View',                 category: 'Hotels',       lat: 8.0815, lng: 77.5532, description: '3-star hotel, 100m from beach. ₹3,500/night.' },
  { id: 17, name: 'The Kanyakumari Palace',         category: 'Hotels',       lat: 8.0828, lng: 77.5490, description: 'Premium hotel near East Car St. ₹5,200/night.' },
  { id: 18, name: 'Sunrise Bay Resort',             category: 'Hotels',       lat: 8.0851, lng: 77.5611, description: 'Ocean resort on coastal road. ₹4,500/night.' },
  { id: 19, name: 'Suchindram Temple',              category: 'Restaurants',  lat: 8.1567, lng: 77.4652, description: 'South Indian meals near Suchindram temple.' },
  { id: 20, name: 'Coastal Spice Kitchen',          category: 'Restaurants',  lat: 8.0802, lng: 77.5508, description: 'Fresh seafood restaurant at beachfront.' },
  { id: 21, name: 'Emergency Hospital',             category: 'Emergency',    lat: 8.0870, lng: 77.5450, description: 'Government District Hospital, 24/7 emergency.' },
];

const colorMap: Record<string, string> = {
  Attractions: '#6C4CF1',
  'Hidden Spots': '#0d9488',
  Hotels: '#f59e0b',
  Restaurants: '#22c55e',
  Emergency: '#ef4444',
};

function makeIcon(color: string) {
  return L.divIcon({
    className: '',
    html: `<div style="width:14px;height:14px;border-radius:50%;background:${color};border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3)"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
}

interface Props {
  activeCategory?: string;
  centerLat?: number;
  centerLng?: number;
  highlightId?: number;
}

export default function MapComponent({ activeCategory = 'All', centerLat, centerLng, highlightId }: Props) {
  useEffect(() => { fixIcons(); }, []);

  const filtered = activeCategory === 'All'
    ? allLocations
    : allLocations.filter(l => l.category === activeCategory);

  const center: [number, number] = centerLat && centerLng
    ? [centerLat, centerLng]
    : [8.0883, 77.5385];

  return (
    <MapContainer center={center} zoom={centerLat ? 15 : 13} style={{ height: '100%', width: '100%' }} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {filtered.map(loc => (
        <Marker
          key={loc.id}
          position={[loc.lat, loc.lng]}
          icon={makeIcon(colorMap[loc.category] || '#6C4CF1')}
        >
          <Popup>
            <div style={{ minWidth: 180 }}>
              <p style={{ fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 2, color: colorMap[loc.category], marginBottom: 4 }}>
                {loc.category}
              </p>
              <h3 style={{ fontWeight: 800, color: '#0f172a', marginBottom: 6 }}>{loc.name}</h3>
              <p style={{ fontSize: 12, color: '#64748b', marginBottom: 10 }}>{loc.description}</p>
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`} target="_blank" rel="noopener noreferrer"
                style={{ display:'block', textAlign:'center', background:'#6C4CF1', color:'white', padding:'8px 0', borderRadius:10, fontWeight:700, fontSize:12, textDecoration:'none' }}>
                Get Directions
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
