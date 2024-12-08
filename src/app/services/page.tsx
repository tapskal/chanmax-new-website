// src/app/services/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Code, BarChart, Share2, Search, Zap, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';

type ServiceId = 'web-development' | 'performance-marketing' | 'social-media' | 'search-engine-optimization';

interface ServiceStats {
  label: string;
  value: string;
}

interface Service {
  id: ServiceId;
  title: string;
  subtitle: string;
  description: string;
  icon: JSX.Element;
  image: string;
  stats: ServiceStats[];
  features: string[];
}

const backgroundGradients: Record<ServiceId, { first: string; second: string }> = {
  'web-development': {
    first: "bg-blue-500/20",
    second: "bg-indigo-500/20"
  },
  'performance-marketing': {
    first: "bg-emerald-500/20",
    second: "bg-teal-500/20"
  },
  'social-media': {
    first: "bg-violet-500/20",
    second: "bg-fuchsia-500/20"
  },
  'search-engine-optimization': {
    first: "bg-rose-500/20",
    second: "bg-orange-500/20"
  }
};

const services: Service[] = [
  {
    id: 'web-development',
    title: "Web Development",
    subtitle: "High-Performance Digital Solutions",
    description: "Transform your digital presence with lightning-fast, scalable web solutions that drive growth and engage users.",
    icon: <Code className="w-8 h-8" />,
    image: "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stats: [
      { label: 'Average Speed Increase', value: '300%' },
      { label: 'Conversion Rate', value: '+75%' }
    ],
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'Performance Optimization'
    ]
  },
  {
    id: 'performance-marketing',
    title: "Performance Marketing",
    subtitle: "Data-Driven Growth Engine",
    description: "Supercharge your marketing with data-driven strategies that maximize ROI and accelerate business growth.",
    icon: <BarChart className="w-8 h-8" />,
    image: "https://images.pexels.com/photos/7681094/pexels-photo-7681094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stats: [
      { label: 'Average ROI', value: '250%' },
      { label: 'Lead Generation', value: '+180%' }
    ],
    features: [
      'PPC Campaigns',
      'Conversion Optimization',
      'Marketing Automation',
      'Performance Analytics'
    ]
  },
  {
    id: 'social-media',
    title: "Social Media Marketing",
    subtitle: "Engage & Amplify",
    description: "Build meaningful connections and drive engagement through strategic social media management and content creation.",
    icon: <Share2 className="w-8 h-8" />,
    image: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stats: [
      { label: 'Engagement Rate', value: '400%' },
      { label: 'Brand Awareness', value: '+200%' }
    ],
    features: [
      'Content Strategy',
      'Community Management',
      'Social Advertising',
      'Influencer Marketing'
    ]
  },
  {
    id: 'search-engine-optimization',
    title: "Search Engine Optimization",
    subtitle: "Visibility Powerhouse",
    description: "Dominate search rankings and drive organic traffic through strategic SEO optimization and content enhancement.",
    icon: <Search className="w-8 h-8" />,
    image: "https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stats: [
      { label: 'Ranking Improvement', value: '+85%' },
      { label: 'Organic Traffic', value: '+230%' }
    ],
    features: [
      'Technical SEO',
      'Content Optimization',
      'Link Building',
      'Local SEO'
    ]
  }
];

const ServiceSection = ({ service, index }: { service: Service; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <section className="relative w-full py-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${backgroundGradients[service.id].first} rounded-full blur-3xl opacity-50`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${backgroundGradients[service.id].second} rounded-full blur-3xl opacity-50`} />
      </div>

      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}>
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
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{service.subtitle}</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{service.title}</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-xl">{service.description}</p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {service.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Service Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {service.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10"
                >
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Learn More Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                href={`/services/${service.id}`}
                className="group inline-flex items-center gap-2 text-primary hover:text-primary-light transition-all duration-300 py-2"
              >
                <span className="text-lg font-medium">Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function ServicesPage() {
  return (
    <main className="bg-[#0A0A0A] relative">
      <PageHeader
        title={<>Digital <span className="text-primary">Power</span> Solutions</>}
        subtitle="Supercharge your business with our comprehensive suite of digital services, engineered to maximize your market presence and drive exceptional growth."
      />
      
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}
    </main>
  );
}