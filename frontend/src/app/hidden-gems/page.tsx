'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import { MapPin, Compass, Search, ArrowRight } from 'lucide-react';
import { useApp } from '@/context/AppContext';

const gems = [
  { id: 1,  name: 'Chitharal Jain Monuments',  loc: 'Marthandam',      dist: '45 km', lat: 8.2081, lng: 77.3854, img: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&w=600' },
  { id: 2,  name: 'Muttom Beach',               loc: 'Muttom',          dist: '16 km', lat: 8.1526, lng: 77.5927, img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&w=600' },
  { id: 3,  name: 'Vattakottai Fort',            loc: 'Kanyakumari',     dist: '3 km',  lat: 8.1026, lng: 77.5645, img: 'https://images.unsplash.com/photo-1590050752117-23a9d7f20ec6?auto=format&w=600' },
  { id: 4,  name: 'Keeriparai Forest',           loc: 'Keeriparai',      dist: '40 km', lat: 8.3986, lng: 77.2814, img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&w=600' },
  { id: 5,  name: 'Olakaruvi Waterfalls',        loc: 'Ambasamudram',    dist: '85 km', lat: 8.5611, lng: 77.3602, img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&w=600' },
  { id: 6,  name: 'Mathur Aqueduct',             loc: 'Mathur',          dist: '55 km', lat: 8.2736, lng: 77.2981, img: 'https://images.unsplash.com/photo-1573414404851-70c8e40b1f0b?auto=format&w=600' },
  { id: 7,  name: 'Thirparappu Waterfalls',      loc: 'Thirparappu',     dist: '55 km', lat: 8.3208, lng: 77.2547, img: 'https://images.unsplash.com/photo-1540991904025-b5b16b54c8c5?auto=format&w=600' },
  { id: 8,  name: 'Sanguthurai Beach',           loc: 'Sanguthurai',     dist: '6 km',  lat: 8.0889, lng: 77.5256, img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&w=600' },
  { id: 9,  name: 'Sothavilai Beach',            loc: 'Sothavilai',      dist: '12 km', lat: 8.1163, lng: 77.4985, img: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&w=600' },
  { id: 10, name: 'Padmanabhapuram Palace',      loc: 'Thuckalay',       dist: '37 km', lat: 8.2564, lng: 77.3217, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&w=600' },
  { id: 11, name: 'Lemur Beach',                 loc: 'Ganapathipuram',  dist: '14 km', lat: 8.1309, lng: 77.4880, img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&w=600' },
  { id: 12, name: 'Suchindram Temple',           loc: 'Suchindram',      dist: '11 km', lat: 8.1567, lng: 77.4652, img: 'https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?auto=format&w=600' },
];

export default function HiddenGemsPage() {
  const { t } = useApp();
  const router = useRouter();
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.gem-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, [query]);

  const filtered = gems.filter(g =>
    g.name.toLowerCase().includes(query.toLowerCase()) ||
    g.loc.toLowerCase().includes(query.toLowerCase())
  );

  const handleExplore = (gem: typeof gems[0]) => {
    router.push(`/map?lat=${gem.lat}&lng=${gem.lng}&highlight=${gem.id}`);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <PageHeader title={t('gems.title')} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero */}
        <div className="mb-8">
          <p className="text-slate-500 dark:text-slate-400 text-base">{t('gems.subtitle')}</p>
        </div>

        {/* Search */}
        <div className="relative group mb-8">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-600 transition-colors" size={18} />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={t('gems.search')}
            className="w-full bg-slate-50 dark:bg-slate-800 dark:text-white rounded-2xl py-4 pl-14 pr-5 shadow-sm border border-slate-100 dark:border-slate-700 outline-none focus:ring-2 focus:ring-purple-600/20 font-medium transition-all"
          />
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400 font-bold text-lg">
            No places found for &ldquo;{query}&rdquo;
          </div>
        ) : (
          <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(gem => (
              <div key={gem.id} className="gem-card bg-white dark:bg-slate-900 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow border border-gray-100 dark:border-slate-800" onClick={() => handleExplore(gem)}>
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={gem.img}
                    alt={gem.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Distance badge */}
                  <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-sm">
                    <Compass size={12} className="text-purple-600" />
                    <span className="text-[11px] font-bold text-slate-700 dark:text-white">{gem.dist}</span>
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute bottom-3 left-3 right-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white font-bold text-sm flex items-center gap-1">
                      View on Map <ArrowRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center gap-1 text-purple-600 font-bold text-[11px] uppercase tracking-widest mb-1">
                    <MapPin size={11} />
                    {gem.loc}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors leading-tight mb-3">
                    {gem.name}
                  </h3>
                  <button
                    onClick={e => { e.stopPropagation(); handleExplore(gem); }}
                    className="w-full py-2.5 bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-600 hover:text-white text-purple-600 dark:text-purple-400 font-bold rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {t('gems.explore')}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
