'use client';

import Navbar from '@/components/Navbar';
import { Mic, Languages, Sparkles, Volume2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function VoiceAssistantPage() {
  const [listening, setListening] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const micRef = useRef<HTMLButtonElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let pulse: gsap.core.Tween;
    
    if (listening) {
      pulse = gsap.to(pulseRef.current, {
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power2.out"
      });
    }

    return () => {
      if (pulse) pulse.kill();
    };
  }, [listening]);

  const toggleListening = () => {
    setListening(!listening);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <section className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-xl w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary font-bold text-xs mb-8 uppercase tracking-widest">
            <Sparkles size={14} />
            AI Voice Concierge
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display text-slate-900 mb-6">
            How can I <span className="text-primary">help you</span> today?
          </h1>
          <p className="text-slate-500 font-medium text-lg mb-16">
            Ask me about destinations, weather, transport, or local secrets.
          </p>

          <div className="relative flex flex-col items-center mb-16">
            {/* Pulse Visualizer */}
            <div 
              ref={pulseRef}
              className={`absolute inset-0 rounded-full bg-primary/20 pointer-events-none transition-opacity duration-500 w-32 h-32 left-1/2 -translate-x-1/2 ${listening ? 'opacity-100' : 'opacity-0'}`} 
            />
            
            <button 
              ref={micRef}
              onClick={toggleListening}
              className={`relative z-10 w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl
                ${listening 
                  ? 'bg-rose-500 scale-110 shadow-rose-500/40 text-white' 
                  : 'bg-primary shadow-primary/40 text-white'}
              `}
            >
              <Mic size={48} className={listening ? 'animate-pulse' : ''} />
            </button>
            <p className="mt-8 font-bold text-sm tracking-widest uppercase text-slate-400">
              {listening ? 'Listening...' : 'Tap to start speaking'}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {['Tamil', 'English', 'Hindi'].map((lang) => (
              <button 
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`py-3 rounded-2xl border font-bold text-sm flex items-center justify-center gap-2 transition-all
                  ${selectedLanguage === lang 
                    ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-200' 
                    : 'bg-white border-slate-100 text-slate-500 hover:bg-slate-50'}
                `}
              >
                <Languages size={16} />
                {lang}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Suggestion Chips */}
      <footer className="py-12 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar flex items-center justify-center gap-4">
          <span className="text-xs font-bold text-slate-300 uppercase shrink-0">Try saying:</span>
          {['Recommend some restaurants', 'When is the next ferry?', 'Is it going to rain?', 'Nearby hospitals'].map(s => (
            <button key={s} className="whitespace-nowrap px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-bold text-slate-600 hover:text-primary hover:border-primary transition-all">
              "{s}"
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}
