'use client';

import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import { Search, Sparkles, MapPin, Star, TrendingUp, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

const recommendedPlaces = [
  { id: 1, title: 'Vivekananda Rock', loc: 'Kanya Kumari', rating: 4.8, img: 'https://images.unsplash.com/photo-1594917544062-817349942a77?auto=format' },
  { id: 2, title: 'Thiruvalluvar Statue', loc: 'Kanya Kumari', rating: 4.7, img: 'https://images.unsplash.com/photo-1626244465457-3770335eef6e?auto=format' },
  { id: 3, title: 'Mathur Aqueduct', loc: 'Mathur', rating: 4.6, img: 'https://images.unsplash.com/photo-1590050752117-23a9d7f20ec6?auto=format' },
];

const nearbyAttractions = [
  { id: 4, title: 'Padmanabhapuram Palace', loc: 'Thuckalay', rating: 4.9, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format' },
  { id: 5, title: 'Vattakottai Fort', loc: 'Kanya Kumari', rating: 4.5, img: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format' },
  { id: 6, title: 'Sanguthurai Beach', loc: 'Sanguthurai', rating: 4.4, img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format' },
];

export default function DashboardPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", { opacity: 0, y: 30, duration: 1, ease: "power3.out" });
      gsap.from(".section-title", { opacity: 0, x: -20, stagger: 0.2, duration: 0.8, ease: "power2.out", delay: 0.4 });
      gsap.from(".place-card", { opacity: 0, y: 30, stagger: 0.1, duration: 0.8, ease: "power2.out", delay: 0.6 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const Card = ({ place }: { place: any }) => (
    <div className="place-card modern-card overflow-hidden group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={place.img} 
          alt={place.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-bold text-slate-800">{place.rating}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1 text-slate-400 mb-1">
          <MapPin size={14} />
          <span className="text-xs font-medium">{place.loc}</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors mb-4 line-clamp-1">
          {place.title}
        </h3>
        <button className="w-full flex items-center justify-center gap-2 py-3 mt-auto bg-slate-50 group-hover:bg-primary group-hover:text-white text-slate-600 font-bold rounded-xl transition-all duration-300">
          Explore
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <Navbar />

      {/* Hero / Search Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center hero-content">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
            <Sparkles size={16} />
            AI-Powered Smart Local Guide
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display text-slate-900 mb-6 leading-tight max-w-4xl mx-auto">
            Discover the Hidden Gems of <br />
            <span className="gradient-text">Kanniyakumari</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Experience the confluence of three oceans, ancient temples, and serene backwaters with our smart tourism platform.
          </p>

          <div className="w-full max-w-3xl relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="text-slate-400 group-focus-within:text-primary transition-colors" size={24} />
            </div>
            <input 
              type="text" 
              placeholder="Where do you want to go?" 
              className="w-full h-18 bg-white rounded-[2rem] pl-16 pr-32 shadow-2xl shadow-slate-200 border-none outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-lg"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-[1.5rem] font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-10 section-title">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl text-primary">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Recommended for you</h2>
              <p className="text-slate-500 text-sm">Personalized picks based on your interests</p>
            </div>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:underline">
            View all
            <ArrowRight size={18} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedPlaces.map(place => (
            <Card key={place.id} place={place} />
          ))}
        </div>
      </section>

      {/* Nearby attractions */}
      <section className="max-w-7xl mx-auto px-6 py-12 mb-20">
        <div className="flex items-center justify-between mb-10 section-title">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-100 rounded-xl text-slate-700">
              <MapPin size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Nearby attractions</h2>
              <p className="text-slate-500 text-sm">Destinations within reach from your location</p>
            </div>
          </div>
          <button className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 transition-colors">
            Explore map
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {nearbyAttractions.map(place => (
            <Card key={place.id} place={place} />
          ))}
        </div>
      </section>
    </div>
  );
}
