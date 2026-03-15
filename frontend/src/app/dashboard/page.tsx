'use client';

import { useEffect, useRef } from 'react';
import { 
  Search, 
  Map as MapIcon, 
  Sparkles, 
  Hotel, 
  ShoppingBag, 
  Mic, 
  Info,
  Calendar,
  Heart,
  User,
  LayoutGrid
} from 'lucide-react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';

export default function DashboardPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { t } = useApp();

  const dashboardItems = [
    { id: 1, label: t('menu.explore_map'), icon: MapIcon,    color: 'bg-rose-500',     href: '/map' },
    { id: 2, label: t('menu.hidden_gems'), icon: Sparkles,   color: 'bg-teal-500',     href: '/hidden-gems' },
    { id: 3, label: t('menu.hotels'),      icon: Hotel,      color: 'bg-indigo-500',   href: '/hotels' },
    { id: 4, label: t('menu.marketplace'), icon: ShoppingBag,color: 'bg-green-500',    href: '/marketplace' },
    { id: 5, label: t('menu.voice'),       icon: Mic,        color: 'bg-sky-500',      href: '/voice' },
    { id: 6, label: t('menu.about'),       icon: Info,       color: 'bg-fuchsia-500',  href: '/about' },
    { id: 7, label: t('menu.bookings'),    icon: Calendar,   color: 'bg-blue-600',     href: '/profile' },
    { id: 8, label: t('menu.saved'),       icon: Heart,      color: 'bg-rose-600',     href: '/profile' },
    { id: 9, label: t('nav.profile'),      icon: User,       color: 'bg-violet-600',   href: '/profile' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.grid-item', {
        scale: 0,
        opacity: 0,
        stagger: 0.05,
        duration: 0.7,
        ease: 'back.out(1.7)',
      });
      gsap.from('.dash-header', {
        y: -40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleNav = (href: string) => {
    gsap.to('.grid-item', {
      scale: 0,
      opacity: 0,
      stagger: 0.02,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: () => router.push(href),
    });
    gsap.to('.dash-header, .dash-bottom', { opacity: 0, duration: 0.25 });
  };

  return (
    <div
      ref={containerRef}
      className="h-screen w-full bg-white dark:bg-slate-950 flex flex-col overflow-hidden"
    >
      {/* ── Header ── */}
      <header className="dash-header shrink-0 pt-10 pb-4 px-6">
        <div className="max-w-2xl mx-auto flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
              <LayoutGrid size={18} />
            </div>
            <h1 className="text-xl font-black font-display tracking-tight text-slate-900 dark:text-white">
              Kumari<span className="text-primary">One</span>
            </h1>
          </div>
          <button onClick={() => handleNav('/profile')} className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 px-3 py-2 rounded-2xl">
            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">JD</div>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 hidden sm:block">John Doe</span>
          </button>
        </div>

        <div className="max-w-2xl mx-auto relative group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
          <input
            type="text"
            placeholder={t('dashboard.search')}
            className="w-full bg-slate-50 dark:bg-slate-800 dark:text-white border-none rounded-2xl py-4 pl-13 pr-6 shadow-sm focus:shadow-lg focus:shadow-primary/5 focus:bg-white dark:focus:bg-slate-700 transition-all outline-none font-medium text-base"
          />
        </div>
      </header>

      {/* ── Icon Grid ── */}
      <main className="flex-1 flex items-center justify-center px-6 py-4">
        <div className="w-full max-w-xs sm:max-w-sm grid grid-cols-3 gap-x-6 gap-y-10">
          {dashboardItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.href)}
                className="grid-item flex flex-col items-center gap-3 group cursor-pointer"
              >
                {/* Icon Box — w-20 h-20 fixed as requested */}
                <div
                  className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center text-white
                    shadow-xl transition-all duration-300
                    group-hover:scale-110 group-hover:-translate-y-1 group-active:scale-90`}
                >
                  <Icon size={28} strokeWidth={2.5} />
                </div>
                <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors text-center leading-tight uppercase tracking-wide">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </main>

      {/* ── Bottom Navigation ── */}
      <div className="dash-bottom shrink-0 pb-6 px-6 flex justify-center">
        <nav className="w-full max-w-sm bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[2rem] p-2 shadow-2xl shadow-slate-200/60 dark:shadow-black/40 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button className="flex-1 flex flex-col items-center py-2 text-primary">
            <LayoutGrid size={22} />
            <span className="text-[10px] font-black mt-1 uppercase">{t('nav.home')}</span>
          </button>
          <button onClick={() => handleNav('/map')} className="flex-1 flex flex-col items-center py-2 text-slate-400 hover:text-primary transition-colors">
            <MapIcon size={22} />
            <span className="text-[10px] font-bold mt-1 uppercase">{t('nav.map')}</span>
          </button>
          <div className="relative -mt-10 px-3">
            <button className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-xl shadow-primary/30 hover:scale-110 transition-transform">
              <Search size={24} strokeWidth={3} />
            </button>
          </div>
          <button onClick={() => handleNav('/hidden-gems')} className="flex-1 flex flex-col items-center py-2 text-slate-400 hover:text-primary transition-colors">
            <Sparkles size={22} />
            <span className="text-[10px] font-bold mt-1 uppercase">{t('nav.explore')}</span>
          </button>
          <button onClick={() => handleNav('/profile')} className="flex-1 flex flex-col items-center py-2 text-slate-400 hover:text-primary transition-colors">
            <User size={22} />
            <span className="text-[10px] font-bold mt-1 uppercase">{t('nav.profile')}</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
