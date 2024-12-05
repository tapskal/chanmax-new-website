// src/components/ui/Card.tsx
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <div 
      className={`
        rounded-lg bg-white p-6 shadow-sm
        ${hover ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-md' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};