'use client';

import Image from 'next/image';
import {
  MapPin, Sparkles, ShoppingBag, CalendarCheck, Phone, Mic,
  ChevronRight, Moon, Globe, User, BarChart3
} from 'lucide-react';

const dashboardCards = [
  {
    title: 'Explore Map',
    desc: 'Interactive OpenStreetMap with real-time tourist markers, hidden gems, and nearby services.',
    icon: MapPin,
    gradient: 'from-purple-600/20 to-purple-500/5',
    iconBg: 'bg-purple-500/15',
    iconColor: 'text-purple-400',
    hoverBorder: 'hover:border-purple-500/40',
    href: '/map',
  },
  {
    title: 'AI Recommendations',
    desc: 'Personalized itineraries powered by machine learning and local knowledge.',
    icon: Sparkles,
    gradient: 'from-violet-600/20 to-violet-500/5',
    iconBg: 'bg-violet-500/15',
    iconColor: 'text-violet-400',
    hoverBorder: 'hover:border-violet-500/40',
    href: '/recommendations',
  },
  {
    title: 'Tribal Marketplace',
    desc: 'Authentic handcrafted products from local tribal communities.',
    icon: ShoppingBag,
    gradient: 'from-fuchsia-600/20 to-fuchsia-500/5',
    iconBg: 'bg-fuchsia-500/15',
    iconColor: 'text-fuchsia-400',
    hoverBorder: 'hover:border-fuchsia-500/40',
    href: '/marketplace',
  },
  {
    title: 'Book Hotels',
    desc: 'Find and book the best stays near Kanniyakumari with verified reviews.',
    icon: CalendarCheck,
    gradient: 'from-indigo-600/20 to-indigo-500/5',
    iconBg: 'bg-indigo-500/15',
    iconColor: 'text-indigo-400',
    hoverBorder: 'hover:border-indigo-500/40',
    href: '/hotels',
  },
  {
    title: 'Emergency Services',
    desc: 'Quick access to hospitals, police stations, and tourist helplines.',
    icon: Phone,
    gradient: 'from-rose-600/20 to-rose-500/5',
    iconBg: 'bg-rose-500/15',
    iconColor: 'text-rose-400',
    hoverBorder: 'hover:border-rose-400/40',
    href: '/emergency',
  },
  {
    title: 'Voice Assistant',
    desc: 'Ask questions in Tamil, Hindi, or English using our AI voice guide.',
    icon: Mic,
    gradient: 'from-purple-500/20 to-white/5',
    iconBg: 'bg-purple-300/15',
    iconColor: 'text-purple-300',
    hoverBorder: 'hover:border-purple-300/40',
    href: '/voice',
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen" style={{ background: '#0c0a1a' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-purple-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Circle Logo in header */}
            <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/25 flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="KumariOne" width={30} height={30} style={{ objectFit: 'contain' }} />
            </div>
            <span className="text-lg font-bold">
              <span className="text-white">Kumari</span>
              <span className="text-purple-400">One</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300/60 hover:text-white transition-colors cursor-pointer" title="Language">
              <Globe size={18} />
            </button>
            <button className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300/60 hover:text-white transition-colors cursor-pointer" title="Dark Mode">
              <Moon size={18} />
            </button>
            <button className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300/60 hover:text-white transition-colors cursor-pointer" title="Analytics">
              <BarChart3 size={18} />
            </button>
            <div className="w-px h-6 bg-purple-500/20 mx-1" />
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-colors cursor-pointer">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center">
                <User size={14} className="text-white" />
              </div>
              <span className="text-sm text-purple-200/80 hidden sm:inline">Profile</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-6 animate-[fadeInUp_0.6s_ease-out]">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-white">Welcome, </span>
            <span className="gradient-text">Explorer</span>
          </h1>
          <p className="text-purple-300/50 mt-2">What would you like to discover in Kanniyakumari today?</p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dashboardCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                className={`group rounded-2xl p-6 border border-purple-500/10 ${card.hoverBorder} transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-gradient-to-br ${card.gradient} backdrop-blur-sm`}
                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              >
                <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
                  <Icon size={22} className={`${card.iconColor} transition-colors`} />
                </div>
                <h2 className="text-lg font-semibold text-white mb-2">
                  {card.title}
                </h2>
                <p className="text-purple-200/40 text-sm leading-relaxed mb-4">{card.desc}</p>
                <div className="flex items-center text-xs text-purple-300/30 group-hover:text-purple-300/60 transition-colors">
                  Explore <ChevronRight size={14} className="ml-1" />
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
