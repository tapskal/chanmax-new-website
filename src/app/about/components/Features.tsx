// src/app/about/components/Features.tsx
'use client';

import { motion } from 'framer-motion';
import { Users, Globe, Target, Award } from 'lucide-react';

const features = [
  {
    icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Projects",
    description: "Successfully Delivered",
    number: "150+",
    gradient: "from-blue-500 via-purple-500 to-pink-500",
  },
  {
    icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Clients",
    description: "Happy Customers",
    number: "100+",
    gradient: "from-primary via-orange-500 to-red-500",
  },
  {
    icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Team",
    description: "Industry Experts",
    number: "10+",
    gradient: "from-green-400 via-emerald-500 to-teal-500",
  },
  {
    icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Years",
    description: "Industry Experience",
    number: "5+",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
  },
];

export default function Features() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center transition-all duration-300 hover:border-primary/20"
            >
              {/* Icon background (square) */}
              <motion.div
  className={`flex-shrink-0 bg-gradient-to-br ${feature.gradient} p-3 md:p-4 rounded-xl md:rounded-2xl text-white/90 transform transition-transform duration-300 group-hover:rotate-12 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 mx-auto`}
>
  {feature.icon}
</motion.div>


              {/* Content */}
              <div className="mt-6">
                <div className="text-5xl font-bold text-white mb-2">
                  {feature.number}
                </div>
                <div className="text-xl font-semibold text-primary mb-2">
                  {feature.title}
                </div>
                <div className="text-gray-400">{feature.description}</div>
              </div>

              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${
                    feature.gradient.includes('primary')
                      ? 'rgba(255,208,0,0.1)'
                      : 'rgba(59,130,246,0.1)'
                  }, transparent 80%)`,
                  pointerEvents: 'none',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
