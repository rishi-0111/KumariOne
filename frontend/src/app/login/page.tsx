'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import CircularLogo from '@/components/CircularLogo';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<'traveler' | 'business' | 'vendor'>('traveler');
  const formRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    gsap.fromTo(formRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, { scale: 1.03, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Detect user type from email or switch
    let destination = '/dashboard'; // default traveler
    
    if (userType === 'business') {
      destination = '/admin';
    } else if (userType === 'vendor') {
      destination = '/vendor';
    }
    
    // Store user type in localStorage for session
    localStorage.setItem('userType', userType);
    localStorage.setItem('userEmail', email);
    
    router.push(destination);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white selection:bg-primary/20">
      {/* Left side: Form */}
      <div className="flex flex-col items-center justify-center p-8 md:p-12 lg:p-24 z-10">
        <div ref={formRef} className="w-full max-w-md">
          <div className="flex flex-col items-center mb-10">
            <CircularLogo size="md" className="mb-6" />
            <h1 className="text-3xl font-bold font-display text-slate-900 tracking-tight">
              Welcome back
            </h1>
            <p className="text-slate-500 mt-2">Enter your details to access your account</p>
          </div>

          {/* User Type Selector */}
          <div className="mb-6 grid grid-cols-3 gap-2">
            {['traveler', 'business', 'vendor'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setUserType(type as any)}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                  userType === type
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {type === 'traveler' ? '🧳 Traveler' : type === 'business' ? '🏢 Business' : '🎨 Vendor'}
              </button>
            ))}
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com" 
                  className="w-full bg-slate-50 border-none rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-slate-700">Password</label>
                <Link href="/forgot-password" className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="********" 
                  className="w-full bg-slate-50 border-none rounded-2xl py-3.5 pl-12 pr-12 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button 
              ref={buttonRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              type="submit" 
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98] cursor-pointer"
            >
              <LogIn size={20} />
              Login as {userType === 'traveler' ? 'Traveler' : userType === 'business' ? 'Business Owner' : 'Tribal Vendor'}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-400 font-medium tracking-wider">Or continue with</span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-3 py-4 border border-slate-100 bg-white hover:bg-slate-50 rounded-2xl font-semibold text-slate-700 transition-all active:scale-[0.98] cursor-pointer">
            <svg viewBox="0 0 24 24" width={20} height={20}>
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign in with Google
          </button>

          <p className="mt-10 text-center text-slate-500">
            Don't have an account? <Link href={`/signup?type=${userType}`} className="text-primary font-bold hover:underline">Create account</Link>
          </p>
        </div>
      </div>

      {/* Right side: Visuals */}
      <div className="hidden lg:flex relative bg-gradient-to-br from-slate-900 to-slate-800 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
        <img 
          src="https://images.unsplash.com/photo-1545231027-637d3bf67d84?auto=format&w=1200&h=1600&fit=crop"
          alt="Thiruvalluvar Statue - Kanyakumari"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-12 left-12 right-12 text-center z-10">
          <p className="text-slate-300 text-sm font-medium tracking-widest uppercase mb-4">KumariOne Smart Tourism</p>
          <h2 className="text-4xl font-bold font-display text-white leading-tight drop-shadow-lg">
            Discover the southern tip <br /> like never before.
          </h2>
        </div>
      </div>
    </div>
  );
}
