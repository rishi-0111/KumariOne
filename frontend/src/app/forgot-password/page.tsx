'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Mail, ArrowLeft, Send } from 'lucide-react';
import CircularLogo from '@/components/CircularLogo';

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current, 
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div 
        ref={cardRef}
        className="w-full max-w-md bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100"
      >
        <div className="flex flex-col items-center mb-8 text-center">
          <CircularLogo size="md" className="mb-6" />
          <h1 className="text-2xl font-bold font-display text-slate-900 tracking-tight">
            Forgot password?
          </h1>
          <p className="text-slate-500 mt-2">No worries, we'll send you reset instructions.</p>
        </div>

        {!submitted ? (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full bg-slate-50 border-none rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98] cursor-pointer"
            >
              <Send size={18} />
              Send reset link
            </button>
          </form>
        ) : (
          <div className="text-center py-4 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-primary font-semibold">Instructions sent!</p>
            <p className="text-slate-600 text-sm mt-1 px-4">Please check your email to continue.</p>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/login" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-semibold transition-colors">
            <ArrowLeft size={16} />
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
