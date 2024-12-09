// src/components/sections/Services.tsx
'use client';

import { motion } from 'framer-motion';
import { Code, BarChart, Share2, Search } from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    icon: <Code size={28} />,
    title: "Web Development",
    description: "Custom web solutions crafted with cutting-edge technologies for optimal performance and engaging user experiences.",
    gradient: "from-blue-500/10 to-purple-500/10",
    href: "/services/web-development"
  },
  {
    icon: <BarChart size={28} />,
    title: "Performance Marketing",
    description: "Data-driven marketing strategies that deliver measurable results and accelerate your business growth.",
    gradient: "from-yellow-500/10 to-red-500/10",
    href: "/services/performance-marketing"
  },
  {
    icon: <Share2 size={28} />,
    title: "Social Media Marketing",
    description: "Engaging social media campaigns that build brand awareness and connect with your target audience.",
    gradient: "from-green-500/10 to-blue-500/10",
    href: "/services/social-media"
  },
  {
    icon: <Search size={28} />,
    title: "Search Engine Optimization",
    description: "Strategic SEO solutions that improve your visibility and drive sustainable organic traffic to your website.",
    gradient: "from-purple-500/10 to-pink-500/10",
    href: "/services/seo"
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
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
    <Link href={service.href}>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        onMouseMove={handleMouseMove}
        className="group relative rounded-[1.2rem] p-8 bg-white/5 backdrop-blur-lg border border-white/5 overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex-col"
      >
        {/* Gradient Background */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`} />

        {/* Spotlight Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 40%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col flex-1">
          <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
            {service.icon}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {service.title}
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mt-auto">
            {service.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default function Services() {
    return (
      <section className="relative py-16 md:py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column - Title Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 mb-8 lg:mb-0 relative"
            >
              {/* Decorative Elements - Only visible on larger screens */}
              <div className="absolute -z-10 hidden lg:block">
                <div className="absolute top-32 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute top-48 -left-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                {/* <div className="absolute top-0 -left-4 w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent" /> */}
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Our Digital <span className="text-primary">Power Tools</span>
              </h2>
              <p className="text-gray-300 text-xl max-w-xl">
                Amplify your business with our comprehensive suite of digital services, 
                designed to power your growth and maximize your market presence.
              </p>
              
              {/* <Image
        src="/shape-graphic.svg"
        alt="graphic shape"
        width={400}
        height={300}
      /> */}
            </motion.div>
  
            {/* Right Column - Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }