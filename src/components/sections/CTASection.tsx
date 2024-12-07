// src/components/sections/CTASection.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CustomButton = ({ href, variant = 'primary', children }: { href: string; variant?: 'primary' | 'secondary'; children: React.ReactNode }) => (
  <Link 
    href={href}
    className={`flex items-center px-8 py-4 rounded-full text-base font-medium transition-all
      ${variant === 'primary' 
        ? 'bg-primary text-black hover:bg-primary-light' 
        : 'bg-white/5 text-white hover:bg-white/10'}`}
  >
    <span className="mr-2">{children}</span>
    <span className={`w-8 h-8 rounded-full flex items-center justify-center transform -rotate-45
      ${variant === 'primary' ? 'bg-black text-primary' : 'bg-white/20 text-white'}`}>
      <ArrowRight className="w-4 h-4" />
    </span>
  </Link>
);

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-black">
      {/* Background glows - Further adjusted positioning */}
<div className="absolute inset-0">
  <div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
  <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              Ready to <span className="text-primary">Power Up</span> Your Digital Success?
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can transform your vision into reality. 
              Our team is ready to craft the perfect digital solution for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <CustomButton href="/contact" variant="primary">
                Get Started
              </CustomButton>

              <CustomButton href="/portfolio" variant="secondary">
                View Our Work
              </CustomButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}