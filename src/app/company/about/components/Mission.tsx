// src/app/company/about/components/Mission.tsx
'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Star } from 'lucide-react';

const values = [
  {
    icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Mission Driven",
    description: "Our mission is to empower businesses with innovative digital solutions that drive growth and success in the modern digital landscape.",
    gradient: "from-blue-500 via-purple-500 to-pink-500"
  },
  {
    icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Innovation First",
    description: "We constantly evolve and adapt to new technologies, ensuring our clients stay ahead in the fast-paced digital world.",
    gradient: "from-primary via-orange-500 to-red-500"
  },
  {
    icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Client Success",
    description: "Your success is our success. We work closely with our clients to understand their needs and deliver results that exceed expectations.",
    gradient: "from-green-400 via-emerald-500 to-teal-500"
  },
  {
    icon: <Star className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Quality Excellence",
    description: "We maintain the highest standards in every project, ensuring top-notch quality in design, development, and delivery.",
    gradient: "from-indigo-500 via-purple-500 to-pink-500"
  }
];

export default function Mission() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0A0A0A]">
      {/* Enhanced section separator */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[80%] md:w-[60%] lg:w-[40%]">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="h-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl -mt-4" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
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
            Our Values & <span className="text-primary">Mission</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Guided by our core values, we strive to deliver excellence and drive innovation in everything we do.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-white/10 overflow-hidden transition-all duration-300 hover:border-primary/20">
                <div className="relative z-10">
                  {/* Icon container */}
                  <motion.div 
                    className={`flex-shrink-0 bg-gradient-to-br ${value.gradient} p-3 md:p-4 rounded-xl md:rounded-2xl text-white/90 inline-flex mb-6 transform transition-transform duration-300 group-hover:rotate-12`}
                  >
                    {value.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-lg text-gray-300">
                    {value.description}
                  </p>
                </div>

                {/* Hover gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${value.gradient.includes('primary') ? 'rgba(255,208,0,0.1)' : 'rgba(59,130,246,0.1)'}, transparent 80%)`,
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