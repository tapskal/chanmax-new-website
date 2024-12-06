// src/components/ui/HeroButton.tsx
'use client';

import React from 'react';

interface HeroButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon: React.ReactNode;
}

const HeroButton = ({ children, variant = 'primary', icon }: HeroButtonProps) => (
  <button 
    className={`flex items-center px-6 py-3 rounded-full text-base font-medium transition-all
    ${variant === 'primary' 
      ? 'bg-primary text-black hover:bg-primary-light' 
      : 'bg-white text-black hover:bg-white/90'}`}
  >
    <span className="mr-2">{children}</span>
    <span className={`w-8 h-8 rounded-full flex items-center justify-center transform -rotate-45
      ${variant === 'primary' ? 'bg-black text-primary' : 'bg-black/90 text-white'}`}>
      {icon}
    </span>
  </button>
);

export default HeroButton;