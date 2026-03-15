'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import CircularLogo from './CircularLogo';

const LocationPin3D = dynamic(() => import('./LocationPin3D'), {
  ssr: false,
  loading: () => <div className="w-32 h-32" />,
});

export default function SplashScreen() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // After 3 seconds total (approximately), redirect
        setTimeout(() => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            onComplete: () => router.push('/login')
          });
        }, 2000);
      }
    });

    // Initial states
    gsap.set(logoRef.current, { scale: 0.8, opacity: 0, rotation: -15 });
    gsap.set(pinRef.current, { opacity: 0, y: -20 });
    gsap.set(titleRef.current, { opacity: 0, y: 20 });
    gsap.set(subtitleRef.current, { opacity: 0, y: 20 });

    // Animation sequence
    tl.to(logoRef.current, {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 1.2,
      ease: "back.out(1.7)"
    })
    .to(pinRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6
    }, "-=0.8")
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6");

    return () => {
      tl.kill();
    };
  }, [router]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        <div ref={pinRef} className="absolute -top-16">
          <LocationPin3D />
        </div>
        <div ref={logoRef} className="mb-8">
          <CircularLogo size="lg" />
        </div>
      </div>

      <div className="text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-2"
        >
          Kumari<span className="text-primary">One</span>
        </h1>
        <p 
          ref={subtitleRef}
          className="text-slate-500 font-sans text-lg md:text-xl tracking-wide max-w-xs mx-auto"
        >
          AI Powered Smart Tourism Platform
        </p>
      </div>

      {/* Background subtle visuals (Three.js can be added here if needed to be lightweight) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--color-primary-light)_0%,_transparent_70%)] opacity-[0.03]" />
    </div>
  );
}
