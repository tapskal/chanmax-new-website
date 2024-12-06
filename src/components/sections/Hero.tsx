// src/components/sections/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24 pb-12">
      {/* Main Content Container */}
      <div className="mx-auto px-4 ">
        <div className="relative bg-white/5 backdrop-blur-lg rounded-[2rem] p-6 md:px-10 h-[90vh] flex items-center justify-center overflow-hidden border border-white/10">
          {/* Glass Effect */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          </div>

          {/* Centered Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
               <h3 className='text-6xl font-thin'>High-Voltage</h3>
              <h1 className="text-4xl md:text-6xl lg:text-9xl font-extrabold text-white mb-6 leading-tight">
              <span className="text-primary"> Powerhouse </span> For Business
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We craft innovative digital solutions that drive business growth 
                through cutting-edge web development and strategic marketing.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <CustomButton variant="primary" icon={<ArrowRight className="w-4 h-4 text-primary" />}>
                  Get Started
                </CustomButton>
                <CustomButton variant="secondary" icon={<ArrowRight className="w-4 h-4 text-white" />}>
                  View Our Work
                </CustomButton>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">250+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">98%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">13+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}