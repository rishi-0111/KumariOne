'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import PageHeader from '@/components/PageHeader';
import { Star, MapPin, Search, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { useApp } from '@/context/AppContext';

const hotels = [
  { id: 1, name: 'Hotel Sea View',              price: '₹3,500', rating: 4.8, loc: '100m from Beach',         img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&w=600' },
  { id: 2, name: 'The Kanyakumari Palace',       price: '₹5,200', rating: 4.9, loc: 'East Car Street',         img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&w=600' },
  { id: 3, name: 'Vivekananda Residency',        price: '₹1,800', rating: 4.2, loc: 'Near Railway Station',    img: 'https://images.unsplash.com/photo-1517840901100-8179e982ad4e?auto=format&w=600' },
  { id: 4, name: 'Sunrise Bay Resort',           price: '₹4,500', rating: 4.5, loc: 'Coastal Road',            img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&w=600' },
  { id: 5, name: 'Ocean Pearl Stay',             price: '₹2,100', rating: 4.4, loc: 'South Beach Rd',          img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&w=600' },
  { id: 6, name: 'The Southern Tip Inn',         price: '₹3,200', rating: 4.6, loc: 'Downtown',                img: 'https://images.unsplash.com/photo-1551882339-a9366df0498b?auto=format&w=600' },
  { id: 7, name: 'Cape Boutique Hotel',          price: '₹4,800', rating: 4.7, loc: 'Cape Road',               img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&w=600' },
  { id: 8, name: 'Coral Reef Retreat',           price: '₹6,000', rating: 4.9, loc: 'Beachfront Suite',        img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&w=600' },
  { id: 9, name: 'Mandalam Heritage Home',       price: '₹2,800', rating: 4.3, loc: 'Temple Street',           img: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&w=600' },
];

export default function HotelsPage() {
  const { t } = useApp();
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.hotel-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out' }
      );
    }
  }, [query]);

  const filtered = hotels.filter(h =>
    h.name.toLowerCase().includes(query.toLowerCase()) ||
    h.loc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <PageHeader title={t('hotels.title')} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Search + filter row */}
        <div className="flex gap-3 mb-8">
          <div className="flex-1 relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-600 transition-colors" size={18} />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={t('hotels.search')}
              className="w-full bg-slate-50 dark:bg-slate-800 dark:text-white rounded-2xl py-4 pl-14 pr-5 border border-slate-100 dark:border-slate-700 outline-none focus:ring-2 focus:ring-purple-600/20 font-medium transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-5 py-3 bg-purple-600 dark:bg-purple-700 text-white rounded-2xl font-bold text-sm hover:bg-purple-700 transition-all shrink-0 shadow-sm hover:shadow-md">
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>

        {/* Sort chips */}
        <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar pb-1">
          {['All', 'Lowest Price', 'Highest Rating', 'Nearest', 'Luxury', 'Budget'].map(f => (
            <button key={f} className="whitespace-nowrap px-5 py-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-full text-sm font-bold text-slate-500 dark:text-slate-400 hover:border-purple-600 hover:text-purple-600 transition-all">
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(hotel => (
            <div key={hotel.id} className="hotel-card bg-white dark:bg-slate-900 rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-slate-800">
              <div className="relative h-52 rounded-t-2xl overflow-hidden">
                <img
                  src={hotel.img}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <Star size={13} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-bold text-slate-800 dark:text-white">{hotel.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight flex-1">{hotel.name}</h3>
                  <div className="text-right shrink-0 ml-3">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">from</p>
                    <p className="text-purple-600 dark:text-purple-400 font-black text-lg leading-none">{hotel.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-slate-400 text-sm font-medium mb-4">
                  <MapPin size={13} />
                  {hotel.loc}
                </div>
                <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-purple-600 text-white font-bold rounded-xl shadow-sm hover:bg-purple-700 hover:shadow-md transition-all active:scale-[0.98]">
                  {t('hotels.book')}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400 font-bold text-lg">
            No hotels found for &ldquo;{query}&rdquo;
          </div>
        )}
      </section>
    </div>
  );
}
