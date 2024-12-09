'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const services = [
  {
    title: "Custom Web Development",
    description: "We craft tailored web solutions that perfectly align with your business objectives and user needs. Build scalable, high-performance applications that drive growth and deliver exceptional user experiences.",
    image: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg",
  },
  {
    title: "E-commerce Solutions",
    description: "Build powerful online stores that drive sales and deliver exceptional shopping experiences. Seamless integration with advanced features for modern commerce, from secure payments to inventory management.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  },
  {
    title: "CMS Development",
    description: "Expert development using leading content management systems like WordPress, Shopify, and Webflow. Create powerful, customizable websites that are easy to manage and scale with your business needs.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
  }
];

export default function ServicesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containers = document.querySelectorAll('.service-card');
    
    containers.forEach(container => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        container.style.setProperty('--mouse-x', `${x}%`);
        container.style.setProperty('--mouse-y', `${y}%`);
      };

      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    });
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Enhanced section separator */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[80%] md:w-[60%] lg:w-[40%]">
        {/* Main gradient line */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        {/* Soft glow effect */}
        <div className="h-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl -mt-4" />
        
        {/* Very subtle spread */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
      </div>
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] opacity-30" />
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
            What We Do
          </h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Digital <span className="text-primary">Power</span> Solutions
          </h3>
          <p className="text-lg md:text-xl text-gray-300">
            Comprehensive web development services engineered for maximum impact
          </p>
        </motion.div>

        {/* Services Stack */}
        <div className="max-w-5xl mx-auto space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="service-card relative"
              ref={containerRef}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden p-6 md:p-8">
                <div className="flex flex-col md:grid md:grid-cols-[1.2fr,1fr] gap-8 items-center">
                  {/* Image - Now at top on mobile */}
                  <div className="md:order-2 w-full">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                    </div>
                  </div>

                  {/* Content - Below image on mobile */}
                  <div className="md:order-1 relative z-10">
                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                      {service.title}
                    </h4>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Mouse following gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,208,0,0.15), transparent 50%)'
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}