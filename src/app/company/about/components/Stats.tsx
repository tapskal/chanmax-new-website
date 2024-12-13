// src/app/company/about/components/Stats.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const stats = [
  {
    number: 200,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Successful projects delivered across various industries, from startups to established businesses.',
    gradient: 'from-primary via-yellow-500 to-orange-500'
  },
  {
    number: 100,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Building lasting relationships with clients who trust our expertise and dedication.',
    gradient: 'from-blue-500 via-indigo-500 to-purple-500'
  },
  {
    number: 3,
    suffix: '+',
    label: 'Years Experience',
    description: 'Years of delivering innovative digital solutions and driving business growth.',
    gradient: 'from-green-500 via-emerald-500 to-teal-500'
  },
  {
    number: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Consistently maintaining high standards and exceeding client expectations.',
    gradient: 'from-pink-500 via-rose-500 to-red-500'
  }
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        start += increment;
        if (start > target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 40);

      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function Stats() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0A0A0A]">
      {/* Enhanced section separator */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[80%] md:w-[60%] lg:w-[40%]">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="h-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl -mt-4" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Growth & <span className="text-primary">Impact</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Numbers that reflect our commitment to excellence and client success
          </p>
        </motion.div>

        {/* Stats Grid with new layout */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 overflow-hidden transition-all duration-300 hover:border-primary/20">
                <div className="relative z-10">
                  <h3 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-display`}>
                    <Counter target={stat.number} suffix={stat.suffix} />
                  </h3>
                  <div className="space-y-2">
                    <p className="text-xl md:text-2xl font-semibold text-white">
                      {stat.label}
                    </p>
                    <p className="text-base md:text-lg text-gray-300">
                      {stat.description}
                    </p>
                  </div>
                </div>

                {/* Hover gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${stat.gradient.includes('primary') ? 'rgba(255,208,0,0.1)' : 'rgba(59,130,246,0.1)'}, transparent 80%)`,
                    pointerEvents: 'none'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}