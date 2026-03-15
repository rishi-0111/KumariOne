'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import { Search, Filter, Layers, Navigation } from 'lucide-react';

const MapContainer = dynamic(
  () => import('@/components/MapComponent'),
  { 
    ssr: false,
    loading: () => <div className="w-full h-full bg-slate-100 animate-pulse flex items-center justify-center text-slate-400 font-bold">Loading interactive map...</div>
  }
);

export default function MapExplorerPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">
      <Navbar />
      
      <div className="flex-1 relative">
        {/* Map Container */}
        <div className="absolute inset-0 z-0">
          <MapContainer />
        </div>

        {/* Overlay Search */}
        <div className="absolute top-6 left-6 z-10 w-full max-w-sm space-y-4 px-4 md:px-0">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-200/50 p-2 flex items-center gap-2 border border-slate-100">
            <div className="p-2 ml-1">
              <Search size={20} className="text-slate-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search destinations..." 
              className="flex-1 bg-transparent border-none outline-none font-medium text-slate-700"
            />
            <button className="p-2.5 bg-primary text-white rounded-xl shadow-lg shadow-primary/20">
              <Navigation size={18} />
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {['All', 'Attractions', 'Hotels', 'Restaurants', 'Hidden Gems', 'Emergency'].map((cat) => (
              <button 
                key={cat}
                className="whitespace-nowrap px-4 py-2 bg-white/90 backdrop-blur-md border border-slate-100 rounded-xl text-xs font-bold text-slate-600 shadow-sm hover:bg-primary hover:text-white transition-all shadow-slate-200/50"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Floating Tool Bar */}
        <div className="absolute top-6 right-6 z-10 hidden md:flex flex-col gap-2">
          <button className="p-3 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-slate-100 text-slate-600 hover:text-primary transition-colors">
            <Layers size={20} />
          </button>
          <button className="p-3 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-slate-100 text-slate-600 hover:text-primary transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
