'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Mail, Lock, User, Briefcase, Tent, LogIn, Eye, EyeOff } from 'lucide-react';

const roles = [
  { label: 'Tourist', value: 'Tourist' as const, icon: User },
  { label: 'Business', value: 'Business Owner' as const, icon: Briefcase },
  { label: 'Tribal', value: 'Tribal Vendor' as const, icon: Tent },
];

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<'Tourist' | 'Business Owner' | 'Tribal Vendor'>('Tourist');
  const [showPassword, setShowPassword] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
      gsap.from(cardRef.current, {
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      router.push('/dashboard');
      return;
    }
    gsap.to(cardRef.current, {
      y: -20,
      opacity: 0,
      scale: 0.95,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => router.push('/dashboard'),
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden" style={{ background: '#0c0a1a' }}>
      {/* Ambient gradient orbs — Purple */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-violet-500/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      {/* Circle Logo */}
      <div ref={logoRef} className="mb-8">
        <div className="logo-circle" style={{ width: '90px', height: '90px' }}>
          <Image src="/logo.png" alt="KumariOne" width={65} height={65} priority style={{ objectFit: 'contain' }} />
        </div>
      </div>

      {/* Login Card */}
      <div ref={cardRef} className="w-full max-w-md glass rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
          <p className="text-purple-300/60 mt-1 text-sm">Sign in to explore Kanniyakumari</p>
        </div>

        {/* Role Tabs — Purple Theme */}
        <div className="flex gap-1.5 p-1 bg-black/30 rounded-xl mb-6">
          {roles.map((r) => {
            const Icon = r.icon;
            const isActive = role === r.value;
            return (
              <button
                key={r.value}
                onClick={() => setRole(r.value)}
                className={`flex-1 py-2.5 text-xs font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer
                  ${isActive
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                    : 'text-purple-300/50 hover:text-purple-200 hover:bg-white/5'
                  }
                `}
              >
                <Icon size={14} />
                {r.label}
              </button>
            );
          })}
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative group">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400/40 group-focus-within:text-purple-400 transition-colors" size={18} />
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full bg-black/20 border border-purple-500/15 rounded-xl py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all placeholder:text-purple-300/30"
            />
          </div>

          <div className="relative group">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400/40 group-focus-within:text-purple-400 transition-colors" size={18} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
              className="w-full bg-black/20 border border-purple-500/15 rounded-xl py-3 pl-11 pr-11 text-sm text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all placeholder:text-purple-300/30"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-purple-400/40 hover:text-purple-300 transition-colors cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-purple-300/50">
              <input type="checkbox" className="rounded border-purple-500/30 bg-black/20 text-purple-500 focus:ring-purple-500 w-3.5 h-3.5" />
              Remember me
            </label>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-600/20 active:scale-[0.98] cursor-pointer"
          >
            <LogIn size={18} />
            Sign In as {role}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-purple-500/15" />
          <span className="text-xs text-purple-300/40">or continue with</span>
          <div className="flex-1 h-px bg-purple-500/15" />
        </div>

        {/* Google OAuth */}
        <button className="w-full bg-black/20 border border-purple-500/15 hover:border-purple-500/30 text-purple-200/80 font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer hover:bg-purple-500/5">
          <svg viewBox="0 0 24 24" width={18} height={18}>
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Sign in with Google
        </button>

        <p className="mt-6 text-center text-xs text-purple-300/40">
          Don&apos;t have an account?{' '}
          <a href="#" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
            Create one now
          </a>
        </p>
      </div>
    </div>
  );
}
