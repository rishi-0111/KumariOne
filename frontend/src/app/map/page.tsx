'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { Navigation, Filter, Layers, Search } from 'lucide-react';
import { useApp } from '@/context/AppContext';

const MapContainer = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-100 animate-pulse flex items-center justify-center text-slate-500 font-bold text-lg">
      Loading interactive map...
    </div>
  ),
});

const CATEGORIES = ['All', 'Attractions', 'Hotels', 'Restaurants', 'Hidden Spots'];

export default function MapExplorerPage() {
  const { t } = useApp();
  const [activeCategory, setActiveCategory] = useState('All');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white dark:bg-slate-950">
      <PageHeader title={t('menu.explore_map')} />

      <div className="flex-1 relative">
        {/* Map */}
        <div className="absolute inset-0 z-0">
          <MapContainer activeCategory={activeCategory} />
        </div>

        {/* ── Top overlays ── */}
        <div className="absolute top-4 left-4 right-4 z-10 space-y-3 max-w-sm">
          {/* Search bar */}
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-2 px-4 py-3">
            <Search size={18} className="text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder={t('map.search')}
              className="flex-1 bg-transparent outline-none text-sm font-medium text-slate-700 dark:text-white placeholder-slate-400"
            />
            <button className="p-2 bg-primary text-white rounded-xl shadow-md">
              <Navigation size={16} />
            </button>
          </div>

          {/* Route Planner */}
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-4 space-y-2">
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3">Route Planner</p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                value={from}
                onChange={e => setFrom(e.target.value)}
                placeholder={t('map.from')}
                className="w-full bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-2.5 text-sm font-medium outline-none dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/20"
              />
              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-slate-100 dark:bg-slate-700" />
                <span className="text-primary font-black text-xs">→</span>
                <div className="flex-1 h-px bg-slate-100 dark:bg-slate-700" />
              </div>
              <input
                type="text"
                value={to}
                onChange={e => setTo(e.target.value)}
                placeholder={t('map.to')}
                className="w-full bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-2.5 text-sm font-medium outline-none dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button className="w-full mt-3 bg-primary text-white font-bold py-3 rounded-xl text-sm shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all active:scale-95">
              {t('map.get_route')}
            </button>
          </div>

          {/* Category filters */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold shadow-md border transition-all 
                  ${activeCategory === cat
                    ? 'bg-primary text-white border-primary shadow-primary/20'
                    : 'bg-white/90 dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 border-slate-100 dark:border-slate-800 hover:border-primary hover:text-primary'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Right toolbar */}
        <div className="absolute top-4 right-4 z-10 hidden md:flex flex-col gap-2">
          <button className="p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary">
            <Layers size={20} />
          </button>
          <button className="p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary">
            <Filter size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
