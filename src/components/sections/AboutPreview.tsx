// src/components/sections/AboutPreview.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Delivered', value: '500+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Team Members', value: '20+' }
];

export default function AboutPreview() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-black to-[#0A0A0A]">
      {/* Background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Powering Digital <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              We're more than just a digital agency. We're your partners in transformation, 
              committed to turning your digital vision into reality through innovation, 
              expertise, and unwavering dedication.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="border border-white/10 rounded-2xl p-6 bg-white/5">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link 
              href="/about"
              className="inline-flex items-center gap-2 text-lg text-primary hover:text-primary/80 transition-colors"
            >
              Learn Our Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden">
  {/* Decorative border - matching radius */}
  <div className="absolute inset-0 border border-white/10 rounded-lg md:rounded-xl lg:rounded-2xl" />
              
              {/* Image */}
              <img 
                src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team at work"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 p-8">
                <div className="max-w-xs">
                  <div className="text-xl md:text-2xl font-bold text-white mb-2">
                    Chanmax Solutions
                  </div>
                  <p className="text-gray-300">
                    Founded with a vision to transform businesses through digital innovation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}