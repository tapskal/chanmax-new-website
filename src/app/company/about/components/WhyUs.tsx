// src/app/company/about/components/WhyUs.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: "Industry Experience",
    description: "Deep expertise across various industries, from startups to enterprises",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
  },
  {
    title: "Custom Solutions",
    description: "Tailored digital solutions that perfectly match your business needs",
    image: "https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg"
  },
  {
    title: "Dedicated Support",
    description: "Round-the-clock support and maintenance for your digital presence",
    image: "https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg"
  }
];

export default function WhyUs() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Content - reduced border radius */}
        <div className="relative rounded-[1.5rem] bg-white/5 backdrop-blur-lg p-8 md:p-12 lg:p-16 border border-white/10">
          {/* Glass Effect Highlights - updated border radius to match */}
          <div className="absolute inset-0 overflow-hidden rounded-[1.5rem]">
            <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute top-0 left-0 h-1/2 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why Businesses <br />
              Choose <span className="text-primary">Chanmax</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              We combine technical excellence with creative innovation to deliver digital solutions that drive real business growth.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <div className="relative h-full w-full transform transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <span>{feature.title}</span>
                  <ArrowRight className="w-5 h-5 text-primary transform transition-transform duration-300 group-hover:translate-x-1" />
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-16 border-t border-white/10"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <div className="text-5xl font-bold text-primary mb-4">24/7</div>
                <div className="text-xl text-white">Support Available</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-5xl font-bold text-primary mb-4">100%</div>
                <div className="text-xl text-white">Project Completion</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-5xl font-bold text-primary mb-4">3x</div>
                <div className="text-xl text-white">Faster Delivery</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}