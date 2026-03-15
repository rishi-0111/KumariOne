'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AnimatedTableRowProps {
  children: React.ReactNode;
  index?: number;
}

export default function AnimatedTableRow({ children, index = 0 }: AnimatedTableRowProps) {
  const rowRef = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    if (rowRef.current) {
      gsap.fromTo(
        rowRef.current,
        { opacity: 0, x: -20 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.5, 
          delay: index * 0.05,
          ease: 'power2.out' 
        }
      );

      // Hover animation
      const handleMouseEnter = () => {
        gsap.to(rowRef.current, {
          backgroundColor: '#f9fafb',
          duration: 0.2,
          ease: 'power2.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(rowRef.current, {
          backgroundColor: '#ffffff',
          duration: 0.2,
          ease: 'power2.out',
        });
      };

      rowRef.current.addEventListener('mouseenter', handleMouseEnter);
      rowRef.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        rowRef.current?.removeEventListener('mouseenter', handleMouseEnter);
        rowRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [index]);

  return (
    <tr ref={rowRef} className="hover:bg-gray-50 transition-colors">
      {children}
    </tr>
  );
}
