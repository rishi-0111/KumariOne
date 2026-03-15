'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { gsap } from 'gsap';
import dynamic from 'next/dynamic';

const ParticleScene = dynamic(() => import('@/components/ParticleScene'), { ssr: false });

export default function SplashPage() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const logoCircleRef = useRef<HTMLDivElement>(null);
  const kumariRef = useRef<HTMLSpanElement>(null);
  const oneRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const pulseRing1Ref = useRef<HTMLDivElement>(null);
  const pulseRing2Ref = useRef<HTMLDivElement>(null);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);

    if (mq.matches) {
      gsap.set([logoCircleRef.current, kumariRef.current, oneRef.current, taglineRef.current], { opacity: 1, y: 0, scale: 1 });
      const timer = setTimeout(() => router.push('/login'), 1500);
      return () => clearTimeout(timer);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: () => router.push('/login'),
          });
        },
      });

      // Initial states
      gsap.set(logoCircleRef.current, { scale: 0, rotation: -180, opacity: 0 });
      gsap.set(kumariRef.current, { x: -60, opacity: 0 });
      gsap.set(oneRef.current, { x: 60, opacity: 0 });
      gsap.set(taglineRef.current, { y: 40, opacity: 0 });
      gsap.set([pulseRing1Ref.current, pulseRing2Ref.current], { scale: 0.5, opacity: 0 });

      tl
        // 1. Logo circle drops in with spin
        .to(logoCircleRef.current, {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'back.out(1.4)',
        })
        // 2. Pulse rings expand
        .to(pulseRing1Ref.current, {
          scale: 2.5,
          opacity: 0.35,
          duration: 0.7,
          ease: 'power2.out',
        }, '-=0.5')
        .to(pulseRing1Ref.current, {
          scale: 4,
          opacity: 0,
          duration: 0.5,
        })
        .to(pulseRing2Ref.current, {
          scale: 3,
          opacity: 0.2,
          duration: 0.8,
          ease: 'power2.out',
        }, '-=0.9')
        .to(pulseRing2Ref.current, {
          scale: 5,
          opacity: 0,
          duration: 0.6,
        })
        // 3. "Kumari" slides in from left
        .to(kumariRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.8,
        }, '-=1.0')
        // 4. "One" slides in from right
        .to(oneRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.8,
        }, '-=0.6')
        // 5. Tagline fades up
        .to(taglineRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
        }, '-=0.4')
        // 6. Hold before redirect
        .addPause('+=1.5');
    }, containerRef);

    return () => ctx.revert();
  }, [router]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen animated-gradient-bg overflow-hidden"
    >
      {/* Three.js Particle Background */}
      {!prefersReduced && (
        <div className="particles-canvas">
          <ParticleScene />
        </div>
      )}

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center text-center select-none">
        {/* Circle Logo Frame */}
        <div ref={logoCircleRef} className="relative mb-8">
          {/* Pulse Rings */}
          <div
            ref={pulseRing1Ref}
            className="absolute rounded-full border-2 border-purple-400/40"
            style={{ width: '120px', height: '120px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
          <div
            ref={pulseRing2Ref}
            className="absolute rounded-full border border-purple-300/20"
            style={{ width: '120px', height: '120px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
          {/* Circle Frame */}
          <div className="logo-circle glow-purple">
            <Image
              src="/logo.png"
              alt="KumariOne Logo"
              width={90}
              height={90}
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Text */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          <span ref={kumariRef} className="text-white">Kumari</span>
          <span ref={oneRef} className="text-purple-400">One</span>
        </h1>
        <p
          ref={taglineRef}
          className="mt-4 text-purple-200/60 text-lg md:text-xl font-light tracking-wide max-w-lg mx-auto"
        >
          Your AI-Powered Journey Through Kanniyakumari
        </p>
      </div>

      {/* Bottom Loading Indicator */}
      <div className="absolute bottom-12 z-10">
        <div className="flex items-center gap-2 text-purple-300/40 text-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          Loading your experience...
        </div>
      </div>
    </div>
  );
}
