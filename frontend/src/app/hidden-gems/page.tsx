'use client';

import Navbar from '@/components/Navbar';
import { Sparkles, MapPin, Compass, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const gems = [
  { id: 1, title: 'Chitharal Jain Monuments', loc: 'Marthandam', dist: '45 km', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format' },
  { id: 2, title: 'Muttom Beach Caves', loc: 'Muttom', dist: '16 km', img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format' },
  { id: 3, title: 'Lemur Beach', loc: 'Ganapathipuram', dist: '14 km', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format' },
  { id: 4, title: 'Thirparappu Waterfalls', loc: 'Thirparappu', dist: '55 km', img: 'https://images.unsplash.com/photo-1590050752117-23a9d7f20ec6?auto=format' },
];

export default function HiddenGemsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(".gem-card", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-100 text-orange-600 font-bold text-xs mb-4 uppercase tracking-widest">
              <Sparkles size={14} />
              Off the beaten path
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-display text-slate-900 mb-4">
              Hidden <span className="text-primary">Gems</span>
            </h1>
            <p className="text-slate-500 text-lg">
              Discover peaceful, less crowded attractions handpicked by our AI guide for a truly local experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gems.map((gem) => (
            <div key={gem.id} className="gem-card group transition-all">
              <div className="relative h-72 rounded-[2rem] overflow-hidden mb-5">
                <img 
                  src={gem.img} 
                  alt={gem.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold inline-flex items-center gap-2">
                    Explore Now <ArrowRight size={18} />
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm">
                  <Compass size={14} className="text-primary" />
                  <span className="text-xs font-bold text-slate-800">{gem.dist}</span>
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center gap-1 text-primary font-bold text-xs uppercase tracking-widest mb-1">
                  <MapPin size={12} />
                  {gem.loc}
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-primary transition-colors">
                  {gem.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
