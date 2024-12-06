// src/components/sections/Portfolio.tsx
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CaseButton from '@/components/ui/CaseButton';

const projects = [
  {
    title: "E-commerce Powerhouse",
    category: "Web Development",
    description: "A high-performance online store with advanced features and seamless user experience.",
    image: "/macbook-laptop-ipad-apple-38519.jpeg",
    stats: {
      growth: "+150%",
      metric: "Sales Increase"
    }
  },
  {
    title: "Digital Marketing Success",
    category: "Performance Marketing",
    description: "Strategic campaign that delivered exceptional ROI and market penetration.",
    image: "/pexels-photo-4050334.webp",
    stats: {
      growth: "+200%",
      metric: "Lead Generation"
    }
  },
  {
    title: "Social Chennel Impact Story",
    category: "Social Media",
    description: "Comprehensive social strategy that boosted brand engagement and reach.",
    image: "/pexels-photo-7007188.webp",
    stats: {
      growth: "+300%",
      metric: "Engagement Rate"
    }
  }
];

const PortfolioCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    cardRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
    cardRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-[1.2rem] p-8 bg-white/5 backdrop-blur-lg border border-white/5 overflow-hidden"
    >
      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6">
          <Image 
            src={project.image} 
            alt={project.title}
            width={800}
            height={600}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="text-sm font- text-primary mb-3">
          {project.category}
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-6">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-white mb-1">
              {project.stats.growth}
            </div>
            <div className="text-sm text-gray-400">
              {project.stats.metric}
            </div>
          </div>

          <CaseButton>View Case Study</CaseButton>
        </div>
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Powering <span className="text-primary">Success</span> Stories
          </h2>
          <p className="text-gray-300 text-xl">
            Discover how we've helped businesses achieve extraordinary results through 
            our high-voltage digital solutions.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}