'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import HeroButton from '@/components/ui/HeroButton';

// Counter hook implementation
const useCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += 1;
      setCount(Math.floor((end * current) / steps));
      
      if (current === steps) {
        clearInterval(timer);
        setCount(end);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: statsRef, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  // Counter states
  const projectCount = useCounter({ end: 500, duration: 2000 });
  const satisfactionCount = useCounter({ end: 98, duration: 2000 });
  const experienceCount = useCounter({ end: 10, duration: 2000 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      const spotlight = container.querySelector('.spotlight') as HTMLElement;
      if (spotlight) {
        spotlight.style.setProperty('--x', `${x}%`);
        spotlight.style.setProperty('--y', `${y}%`);
        spotlight.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      const spotlight = container.querySelector('.spotlight') as HTMLElement;
      if (spotlight) {
        spotlight.style.opacity = '0';
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden  bg-[#0A0A0A]">
      <div className="mx-auto ">
        <div
          ref={containerRef}
          className="relative h-[100vh]  p-10 md:px-10 flex items-center justify-center overflow-hidden bg-white/5 backdrop-blur-lg border border-white/5"
        >
          {/* Spotlight Effect */}
          <div 
            className="spotlight absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              maskImage: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 100px, transparent 160px)',
              WebkitMaskImage: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 100px, transparent 160px)',
              opacity: 0,
            }}
          />

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
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-thin text-white mb-2">
                Growing faster is easier , with your
              </h1>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6">
                <span className="text-primary">Business</span> Powerhouse
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

              <motion.div
                ref={statsRef}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-3 gap-8 mt-12"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{projectCount}+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{satisfactionCount}%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{experienceCount}+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}