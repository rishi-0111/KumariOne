'use client';

import PageHeader from '@/components/PageHeader';
import { Mic, Languages, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useApp } from '@/context/AppContext';

export default function VoiceAssistantPage() {
  const { t, language, setLanguage } = useApp();
  const [listening, setListening] = useState(false);
  const pulseRef = useRef<HTMLDivElement>(null);
  const micRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let tween: gsap.core.Tween;
    if (listening) {
      tween = gsap.to(pulseRef.current, {
        scale: 1.8,
        opacity: 0,
        duration: 1.2,
        repeat: -1,
        ease: 'power2.out',
      });
    }
    return () => { if (tween) tween.kill(); };
  }, [listening]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      <PageHeader title={t('menu.voice')} />

      <section className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary font-bold text-xs mb-8 uppercase tracking-widest">
            <Sparkles size={14} />
            AI Voice Concierge
          </div>
          <h1 className="text-4xl font-black font-display text-slate-900 dark:text-white mb-4">
            How can I <span className="text-primary">help you</span>?
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-14">
            Ask about destinations, weather, transport or hidden gems.
          </p>

          <div className="relative flex flex-col items-center mb-14">
            <div
              ref={pulseRef}
              className="absolute w-32 h-32 rounded-full bg-primary/20 pointer-events-none"
              style={{ opacity: listening ? 1 : 0 }}
            />
            <button
              ref={micRef}
              onClick={() => setListening(l => !l)}
              className={`relative z-10 w-32 h-32 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500
                ${listening
                  ? 'bg-rose-500 shadow-rose-300/40 scale-110'
                  : 'bg-primary shadow-primary/30'
                } text-white`}
            >
              <Mic size={52} className={listening ? 'animate-pulse' : ''} />
            </button>
            <p className="mt-8 font-bold text-sm tracking-widest uppercase text-slate-400">
              {listening ? 'Listening...' : 'Tap to speak'}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {(['en', 'ta', 'hi'] as const).map((code, i) => {
              const labels = ['English', 'தமிழ்', 'हिंदी'];
              return (
                <button
                  key={code}
                  onClick={() => setLanguage(code)}
                  className={`py-3 rounded-2xl border font-bold text-sm flex items-center justify-center gap-2 transition-all
                    ${language === code
                      ? 'bg-slate-900 dark:bg-white border-slate-900 dark:border-white text-white dark:text-slate-900 shadow-xl'
                      : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50'
                    }`}
                >
                  <Languages size={14} />
                  {labels[i]}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-slate-50 dark:border-slate-800">
        <div className="overflow-x-auto no-scrollbar flex items-center justify-center gap-3 px-6">
          <span className="text-xs font-bold text-slate-300 uppercase shrink-0">Try saying:</span>
          {['Recommend restaurants', 'Next ferry time?', 'Will it rain?', 'Nearby hospitals'].map(s => (
            <button key={s} className="whitespace-nowrap px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-full text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-all">
              &ldquo;{s}&rdquo;
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}
