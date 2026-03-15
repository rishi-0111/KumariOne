'use client';

import { MapPin } from 'lucide-react';

interface CircularLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CircularLogo({ size = 'md', className = '' }: CircularLogoProps) {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const iconSizes = {
    sm: 20,
    md: 32,
    lg: 48
  };

  return (
    <div className={`logo-circle ${sizes[size]} ${className} relative overflow-hidden group`}>
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Location Pin Icon */}
      <MapPin 
        size={iconSizes[size]} 
        className="text-white drop-shadow-lg" 
        strokeWidth={2.5}
      />
      
      {/* Inner subtle glow */}
      <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
    </div>
  );
}
