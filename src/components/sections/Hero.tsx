// src/components/sections/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const Hero = () => {
  return (
    <div>
      <section className="relative bg-secondary pt-32 pb-20 overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-[10%] w-[40%] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[500px] bg-accent-purple/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Transform Your <span className="text-primary">Digital Vision</span> Into Reality
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              We craft innovative digital solutions that drive business growth and user engagement through cutting-edge web development and strategic marketing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="gradient">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary">
                View Our Work
              </Button>
            </div>
          </motion.div>

          {/* Right Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-purple/20 rounded-[30px] animate-pulse" />
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Digital Marketing Strategy"
                className="relative z-10 w-full h-full object-cover rounded-[30px] shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section><section className="relative bg-secondary pt-32 pb-20 overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-[10%] w-[40%] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[500px] bg-accent-purple/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Transform Your <span className="text-primary">Digital Vision</span> Into Reality
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              We craft innovative digital solutions that drive business growth and user engagement through cutting-edge web development and strategic marketing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="gradient">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary">
                View Our Work
              </Button>
            </div>
          </motion.div>

          {/* Right Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-purple/20 rounded-[30px] animate-pulse" />
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Digital Marketing Strategy"
                className="relative z-10 w-full h-full object-cover rounded-[30px] shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </div>

    
  );
};