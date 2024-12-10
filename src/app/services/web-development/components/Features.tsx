'use client';

import { motion } from 'framer-motion';
import { Cpu, Rocket, Zap, LineChart } from 'lucide-react';
import { useRef, useEffect } from 'react';

const features = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'High-Performance Solutions',
    description: 'Lightning-fast load times and seamless user experiences powered by cutting-edge technology.',
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    percentage: "300%",
    metric: "Faster Load Times"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Scalable Architecture',
    description: 'Future-proof applications designed to grow seamlessly with your business needs.',
    gradient: "from-primary via-orange-500 to-red-500",
    percentage: "200%",
    metric: "Better Scalability"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: 'Performance Analytics',
    description: 'Deep insights into your websites performance with real-time monitoring and reports.',
    gradient: "from-green-400 via-emerald-500 to-teal-500",
    percentage: "85%",
    metric: "Conversion Rate"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Rapid Development',
    description: 'Quick turnaround without compromising on quality using modern development practices.',
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    percentage: "40%",
    metric: "Faster Delivery"
  }
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-32">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-[500px] " />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-2xl md:text-3xl text-primary font-light mb-4">
            Our Development Approach
          </h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Powering Your <span className="text-primary">Success</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-300">
            High-voltage solutions engineered for peak performance and scalability
          </p>
        </motion.div>

        {/* Features Stack */}
        <div ref={containerRef} className="max-w-3xl mx-auto space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10 overflow-hidden hover:border-primary/20 transition-colors">
              

<div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
  {/* Icon with gradient */}
  <div className="flex-shrink-0">
    <motion.div 
      whileHover={{ rotate: 12 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className={`bg-gradient-to-br ${feature.gradient} p-4 rounded-2xl text-white/90`}
    >
      {feature.icon}
    </motion.div>
  </div>

  {/* Content */}
  <div className="flex-1">
    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
      {feature.title}
    </h3>
    <p className="text-lg text-gray-300 mb-4">
      {feature.description}
    </p>

    <div className="flex items-center gap-3">
      <div className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
        {feature.percentage}
      </div>
      <div className="text-sm text-gray-400 border-l border-gray-700 pl-3">
        {feature.metric}
      </div>
    </div>
  </div>
</div>

                {/* Hover gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${feature.gradient.includes('primary') ? '#ffd000' : '#3b82f6'}10, transparent 80%)`
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