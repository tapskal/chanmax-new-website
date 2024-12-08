// src/components/layout/PageHeader.tsx
'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PageHeaderProps {
  title: string | React.ReactNode;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Transform values for scroll effects
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const yPos = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6]);

  // Mouse movement effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      container.style.setProperty('--mouse-x', `${x}%`);
      container.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[80vh] md:min-h-[80vh] lg:h-[calc(100vh+80px)] flex items-center justify-center bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,208,0,0.15), transparent 50%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-24">
        <motion.div 
          ref={contentRef}
          style={{ 
            scale,
            y: yPos,
            opacity
          }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 md:mb-8">
              {title}
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 px-4 inline-block max-w-3xl">
              {subtitle}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}