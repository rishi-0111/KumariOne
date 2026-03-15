'use client';

import Navbar from '@/components/Navbar';
import { Phone, Map, Shield, Hospital, Truck, PhoneCall, ExternalLink } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const services = [
  { id: 1, name: 'Main City Hospital', type: 'Hospital', phone: '102 / 04652-123456', loc: 'Beach Road, Kanyakumari', icon: Hospital, color: 'text-rose-500', bg: 'bg-rose-50' },
  { id: 2, name: 'Coastal Police Station', type: 'Police', phone: '100 / 04652-654321', loc: 'Main Street, Kanyakumari', icon: Shield, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 3, name: 'Highway Ambulance', type: 'Ambulance', phone: '108', loc: 'Mobile Service (24/7)', icon: Truck, color: 'text-orange-500', bg: 'bg-orange-50' },
  { id: 4, name: 'Tourist Helpline', type: 'Support', phone: '1363', loc: 'Info Center, Kanyakumari', icon: Phone, color: 'text-primary', bg: 'bg-primary/5' },
];

export default function EmergencyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(".service-card", {
      opacity: 0,
      x: -20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50/50">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-rose-200/50">
            <Phone size={32} />
          </div>
          <h1 className="text-4xl font-black font-display text-slate-900 mb-4 tracking-tight">
            Emergency <span className="text-rose-500">Services</span>
          </h1>
          <p className="text-slate-500 font-medium text-lg">
            Quick access to essential helplines and medical facilities in the Kanyakumari region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="service-card modern-card p-6 flex flex-col items-center text-center">
                <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{service.name}</h3>
                <p className="text-slate-400 text-sm font-medium mb-4">{service.loc}</p>
                <div className="w-full h-px bg-slate-50 mb-6" />
                <div className="space-y-3 w-full">
                  <a 
                    href={`tel:${service.phone}`}
                    className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all active:scale-95"
                  >
                    <PhoneCall size={18} />
                    Call Now
                  </a>
                  <button className="w-full py-3 bg-white border border-slate-100 text-slate-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                    <Map size={18} />
                    View on Map
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-white rounded-[2rem] p-8 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/10 text-primary rounded-2xl">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Need immediate help?</h4>
              <p className="text-slate-500 text-sm">Our AI voice assistant is also available for emergency info.</p>
            </div>
          </div>
          <button className="px-8 py-3.5 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
            Launch Voice Assistant
          </button>
        </div>
      </section>
    </div>
  );
}
