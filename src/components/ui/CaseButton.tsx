// src/components/ui/CaseButton.tsx
'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseButtonProps {
  children: React.ReactNode;
}

const CaseButton = ({ children }: CaseButtonProps) => (
  <button 
    className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
  >
    <span className="text-sm font-medium">{children}</span>
    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black group-hover:-rotate-45 transition-all duration-300">
      <ArrowRight className="w-3 h-3" />
    </span>
  </button>
);

export default CaseButton;