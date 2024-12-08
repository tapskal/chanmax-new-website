// src/app/services/page.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, BarChart, Share2, Search, TrendingUp, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';

// Data structure for statistics
const stats = [
  { label: 'Projects Delivered', value: '500+' },
  { label: 'Success Rate', value: '98%' },
  { label: 'Client Growth', value: '150%' }
];

const services = [
  {
    id: 'web-dev',
    title: "Web Development",
    subtitle: "High-Performance Digital Solutions",
    description: "Transform your digital presence with lightning-fast, scalable web solutions that drive growth and engage users.",
    icon: <Code className="w-8 h-8" />,
    stats: [
      { label: 'Average Speed Increase', value: '300%' },
      { label: 'Conversion Rate', value: '+75%' }
    ],
    gradient: "from-blue-500/20 via-primary/10 to-purple-500/20",
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'Performance Optimization'
    ]
  },
  {
    id: 'performance',
    title: "Performance Marketing",
    subtitle: "Data-Driven Growth Engine",
    description: "Supercharge your marketing with data-driven strategies that maximize ROI and accelerate business growth.",
    icon: <BarChart className="w-8 h-8" />,
    stats: [
      { label: 'Average ROI', value: '250%' },
      { label: 'Lead Generation', value: '+180%' }
    ],
    gradient: "from-primary/20 via-orange-500/10 to-red-500/20",
    features: [
      'PPC Campaigns',
      'Conversion Optimization',
      'Marketing Automation',
      'Performance Analytics'
    ]
  }
  // Add other services...
];

const ServiceSection = ({ service, index }: { service: typeof services[0], index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative min-h-screen flex items-center py-20">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`} />
      </div>

      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Service Icon with Effect */}
            <div className="inline-flex mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl" />
                <div className="relative w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  {service.icon}
                </div>
              </div>
            </div>

            {/* Title and Description */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{service.subtitle}</h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{service.title}</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">{service.description}</p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {service.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Service Stats */}
            <div className="grid grid-cols-2 gap-4">
              {service.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10"
                >
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Side - Statistics/Charts/Doodles */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Implement dynamic visuals based on service type */}
            <div className="aspect-square relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
              {/* Add service-specific visualizations here */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <main className="bg-[#0A0A0A]">
      <PageHeader
        title={<>Digital <span className="text-primary">Power</span> Solutions</>}
        subtitle="Supercharge your business with our high-voltage digital services"
      />
      
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}
    </main>
  );
}