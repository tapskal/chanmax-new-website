// src/components/ui/CustomButton.tsx
'use client';

import React from 'react';

interface CustomButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon: React.ReactNode;
}

const CustomButton = ({ children, variant = 'primary', icon }: CustomButtonProps) => (
  <button 
    className={`flex items-center px-6 py-3 rounded-full text-base font-medium transition-all
    ${variant === 'primary' 
      ? 'bg-primary text-secondary hover:bg-primary-light' 
      : 'bg-white/10 text-white hover:bg-white/20'}`}
  >
    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
      {icon}
    </span>
    {children}
  </button>
);

export default CustomButton;