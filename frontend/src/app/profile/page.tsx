'use client';

import Navbar from '@/components/Navbar';
import { User, Calendar, ShoppingBag, Heart, Settings, LogOut, Edit3, ChevronRight, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(".profile-section", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    });
  }, []);

  const ProfileSection = ({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) => (
    <div className="profile-section mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-slate-50 rounded-xl text-slate-400">
          <Icon size={20} />
        </div>
        <h2 className="text-xl font-bold text-slate-800 tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50/30">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: User Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="modern-card p-8 text-center flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-dark p-1 mb-6">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-1">
                  <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center text-primary font-black text-4xl">
                    JD
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-slate-900">John Doe</h1>
              <p className="text-slate-400 font-medium mb-8">Premium Traveler • Joined Mar 2024</p>
              
              <div className="w-full space-y-3">
                <button className="w-full py-3 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:bg-primary-dark transition-all">
                  <Edit3 size={18} />
                  Edit Profile
                </button>
                <button 
                  onClick={() => router.push('/login')}
                  className="w-full py-3 bg-white border border-slate-100 text-rose-500 font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-rose-50 transition-all"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </div>

            <div className="modern-card p-6 divide-y divide-slate-50">
              <div className="py-3 flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <Settings size={18} className="text-slate-400 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">Account Settings</span>
                </div>
                <ChevronRight size={16} className="text-slate-300" />
              </div>
              <div className="py-3 flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-slate-400 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">Manage Preferences</span>
                </div>
                <ChevronRight size={16} className="text-slate-300" />
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Content */}
          <div className="lg:col-span-2">
            <ProfileSection title="Recent Bookings" icon={Calendar}>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="modern-card p-5 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-slate-100 overflow-hidden shrink-0">
                        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">Hotel Sea View</h4>
                        <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                          <MapPin size={10} /> Beach Road • Mar 20-22, 2024
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-black text-green-500 bg-green-50 px-3 py-1 rounded-full uppercase tracking-widest">Confirmed</span>
                      <p className="mt-2 text-sm font-bold text-slate-900">₹7,000</p>
                    </div>
                  </div>
                ))}
              </div>
            </ProfileSection>

            <ProfileSection title="Marketplace Orders" icon={ShoppingBag}>
              <div className="modern-card p-8 text-center bg-white/50 border-dashed">
                <p className="text-slate-400 font-medium">No active orders found.</p>
                <button 
                  onClick={() => router.push('/marketplace')}
                  className="mt-4 text-primary font-bold inline-flex items-center gap-1 hover:underline"
                >
                  Visit Marketplace <ChevronRight size={16} />
                </button>
              </div>
            </ProfileSection>

            <ProfileSection title="Saved Places" icon={Heart}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="modern-card p-5 group cursor-pointer">
                  <div className="aspect-video rounded-xl bg-slate-100 mb-4 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-md rounded-xl text-rose-500 shadow-sm">
                      <Heart size={16} fill="currentColor" />
                    </button>
                  </div>
                  <h4 className="font-bold text-slate-900">Vivekananda Rock</h4>
                  <p className="text-xs text-slate-400">Added on Feb 12, 2024</p>
                </div>
              </div>
            </ProfileSection>
          </div>

        </div>
      </section>
    </div>
  );
}
