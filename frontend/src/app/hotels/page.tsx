'use client';

import Navbar from '@/components/Navbar';
import { Hotel, Star, MapPin, SlidersHorizontal, ArrowRight } from 'lucide-react';

const hotels = [
  { id: 1, name: 'Hotel Sea View', price: '₹3,500', rating: 4.8, loc: '100m from Beach', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format' },
  { id: 2, name: 'The Kanyakumari Palace', price: '₹5,200', rating: 4.9, loc: 'East Car St', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format' },
  { id: 3, name: 'Vivekananda Residency', price: '₹1,800', rating: 4.2, loc: 'Near Railway Station', img: 'https://images.unsplash.com/photo-1517840901100-8179e982ad4e?auto=format' },
  { id: 4, name: 'Sunrise Bay Resort', price: '₹4,500', rating: 4.5, loc: 'Coastal Road', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format' },
  { id: 5, name: 'Ocean Pearl Stay', price: '₹2,100', rating: 4.4, loc: 'South Beach Rd', img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format' },
  { id: 6, name: 'The Southern Tip Inn', price: '₹3,200', rating: 4.6, loc: 'Downtown', img: 'https://images.unsplash.com/photo-1551882339-a9366df0498b?auto=format' },
];

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black font-display text-slate-900 mb-2">
              Book your <span className="text-primary">Stay</span>
            </h1>
            <p className="text-slate-500 font-medium">Find the perfect room near the southern tip.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-600 font-bold hover:bg-slate-100 transition-all text-sm">
              <SlidersHorizontal size={18} />
              Filters
            </button>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold text-slate-400">
              <span className="bg-primary px-2 py-0.5 rounded-lg text-white">6</span> Hotels found
            </div>
          </div>
        </div>

        {/* Filters Row */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-4 no-scrollbar">
          {['Lowest Price', 'Highest Rating', 'Nearest to me', 'Luxury', 'Budget'].map(f => (
            <button key={f} className="whitespace-nowrap px-6 py-2 bg-white border border-slate-100 rounded-full text-sm font-bold text-slate-500 hover:border-primary hover:text-primary transition-all">
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="modern-card group p-4">
              <div className="relative h-60 rounded-2xl overflow-hidden mb-5">
                <img 
                  src={hotel.img} 
                  alt={hotel.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-bold text-slate-800">{hotel.rating}</span>
                </div>
              </div>
              <div className="px-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">{hotel.name}</h3>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Starts at</p>
                    <p className="text-primary font-black text-lg leading-none">{hotel.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-slate-400 text-sm mb-6 font-medium">
                  <MapPin size={14} />
                  {hotel.loc}
                </div>
                <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all active:scale-[0.98]">
                  Book Now
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
