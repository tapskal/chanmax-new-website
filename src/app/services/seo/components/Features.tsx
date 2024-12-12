// src/app/services/seo/components/Features.tsx
'use client';

import { motion } from 'framer-motion';
import { Search, FileSearch, Link, BarChart } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: <Search className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'Technical SEO',
    description: 'Comprehensive technical optimization ensuring your website meets search engine requirements for maximum visibility and performance.',
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    percentage: "90%",
    metric: "Technical Score"
  },
  {
    icon: <FileSearch className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'Content Optimization',
    description: 'Strategic content optimization that aligns with search intent and drives organic traffic through targeted keywords and topics.',
    gradient: "from-primary via-orange-500 to-red-500",
    percentage: "250%",
    metric: "Organic Traffic"
  },
  {
    icon: <Link className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'Link Building',
    description: 'High-quality backlink acquisition strategies that boost your domain authority and improve search engine rankings.',
    gradient: "from-green-400 via-emerald-500 to-teal-500",
    percentage: "300%",
    metric: "Authority Growth"
  },
  {
    icon: <BarChart className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'SEO Analytics',
    description: 'Detailed performance tracking and reporting that measures your SEO success and identifies optimization opportunities.',
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    percentage: "400%",
    metric: "Ranking Improvement"
  }
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-16 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12 md:mb-20"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-light mb-3 md:mb-4">
            Our SEO Approach
          </h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Powering Your <span className="text-primary">Search Visibility</span>
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-300">
            Data-driven SEO strategies that drive organic growth and visibility
          </p>
        </motion.div>

        {/* Features Stack */}
        <div ref={containerRef} className="max-w-3xl mx-auto space-y-4 md:space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-white/10 overflow-hidden transition-all duration-300 hover:border-primary/20">
                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 lg:gap-8 relative z-10">
                  {/* Icon container */}
                  <motion.div 
                    className={`flex-shrink-0 bg-gradient-to-br ${feature.gradient} p-3 md:p-4 rounded-xl md:rounded-2xl text-white/90 transform transition-transform duration-300 group-hover:rotate-12`}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-300 mb-3 md:mb-4">
                      {feature.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                        {feature.percentage}
                      </div>
                      <div className="text-sm md:text-base text-gray-400 border-l border-gray-700 pl-3">
                        {feature.metric}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${feature.gradient.includes('primary') ? 'rgba(255,208,0,0.1)' : 'rgba(59,130,246,0.1)'}, transparent 80%)`,
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