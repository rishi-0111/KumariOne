'use client';

import { useState } from 'react';
import { Phone, Hospital, Shield, Truck, X, PhoneCall } from 'lucide-react';

const contacts = [
  { label: 'Police', number: '100', icon: Shield, color: 'text-blue-600 bg-blue-50' },
  { label: 'Hospital', number: '102', icon: Hospital, color: 'text-rose-600 bg-rose-50' },
  { label: 'Ambulance', number: '108', icon: Truck, color: 'text-orange-600 bg-orange-50' },
  { label: 'Tourist Helpline', number: '1363', icon: Phone, color: 'text-primary bg-primary/5' },
];

export default function SOSButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* SOS Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-28 right-5 z-50 w-14 h-14 bg-rose-600 text-white rounded-full shadow-2xl shadow-rose-400/50 flex items-center justify-center font-black text-sm tracking-widest hover:bg-rose-700 active:scale-90 transition-all animate-pulse"
        aria-label="Emergency SOS"
      >
        SOS
      </button>

      {/* Modal Overlay */}
      {open && (
        <div className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-4" onClick={() => setOpen(false)}>
          <div
            className="w-full max-w-md bg-white dark:bg-slate-900 rounded-t-[2.5rem] sm:rounded-[2.5rem] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">Emergency</h2>
                <p className="text-slate-500 text-sm mt-1">Select a service to call</p>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 transition">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              {contacts.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${c.color}`}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">{c.label}</p>
                        <p className="text-slate-400 text-sm font-mono">{c.number}</p>
                      </div>
                    </div>
                    <a
                      href={`tel:${c.number}`}
                      className="flex items-center gap-2 px-5 py-3 bg-rose-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-rose-300/30 hover:bg-rose-700 transition active:scale-95"
                    >
                      <PhoneCall size={16} />
                      Call
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
