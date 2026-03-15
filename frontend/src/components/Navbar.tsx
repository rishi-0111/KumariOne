'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Map as MapIcon, 
  Sparkles, 
  Hotel, 
  ShoppingBag, 
  Phone, 
  Mic, 
  User,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import CircularLogo from './CircularLogo';

const navItems = [
  { label: 'Home', icon: Home, href: '/dashboard' },
  { label: 'Explore Map', icon: MapIcon, href: '/map' },
  { label: 'Hidden Gems', icon: Sparkles, href: '/hidden-gems' },
  { label: 'Hotels', icon: Hotel, href: '/hotels' },
  { label: 'Marketplace', icon: ShoppingBag, href: '/marketplace' },
  { label: 'Emergency', icon: Phone, href: '/emergency' },
  { label: 'Voice Assistant', icon: Mic, href: '/voice' },
  { label: 'Profile', icon: User, href: '/profile' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <CircularLogo size="sm" className="group-hover:scale-105 transition-transform" />
          <span className="text-xl font-bold font-display tracking-tight text-slate-900">
            Kumari<span className="text-primary">One</span>
          </span>
        </Link>

        {/* Center: Navigation (Desktop) */}
        <div className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 group
                  ${isActive 
                    ? 'bg-primary/10 text-primary font-bold shadow-sm shadow-primary/5' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}
                `}
              >
                <Icon size={18} className={`${isActive ? 'text-primary' : 'text-slate-400 group-hover:text-slate-600'}`} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Right: Profile / Avatar (Mobile Menu toggle too) */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 px-3 py-1.5 rounded-2xl bg-slate-50 border border-slate-100 cursor-pointer hover:bg-slate-100 transition-colors">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
              JD
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-slate-700">John Doe</span>
              <ChevronDown size={14} className="text-slate-400" />
            </div>
          </div>

          <button 
            className="xl:hidden p-2 rounded-xl bg-slate-50 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 px-6 py-8 shadow-2xl animate-fade-up">
          <div className="grid grid-cols-2 gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all
                    ${isActive ? 'bg-primary/10 text-primary shadow-sm shadow-primary/5' : 'bg-slate-50 text-slate-500'}
                  `}
                >
                  <Icon size={24} />
                  <span className="text-xs font-bold">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
