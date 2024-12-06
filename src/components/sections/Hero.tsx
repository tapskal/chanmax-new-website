'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import HeroButton from '@/components/ui/HeroButton';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24 pb-12  bg-black">
      <div className="  mx-auto px-4">
        <div
          ref={containerRef}
          className="relative h-[87vh] rounded-[1.2rem] p-10 md:px-10 flex items-center justify-center overflow-hidden bg-white/5 backdrop-blur-lg border border-white/5"
        >
          {/* Glass Effect */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-thin text-white mb-2 ">
              Growing more faster, with your
              </h1>
              <h1 className="text-6xl md:text-8xl lg:text-9xl  font-black text-white mb-6 ">
                <span className="text-primary ">Business</span> Powerhouse
              </h1>

              <p className="text-lg md:text-xl text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                We craft innovative digital solutions that drive business growth
                through cutting-edge web development and strategic marketing. 


              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <HeroButton variant="primary" icon={<ArrowRight className="w-4 h-4 text-primary" />}>
                  Get Started
                </HeroButton>
                <HeroButton variant="secondary" icon={<ArrowRight className="w-4 h-4 text-white" />}>
                  View Our Work
                </HeroButton>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">98%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">10+</div>
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