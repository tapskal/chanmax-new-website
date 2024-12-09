'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Custom Web Development",
    description: "From dynamic web applications to corporate platforms, we craft custom solutions that perfectly align with your business objectives.",
    image: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg",
    benefits: [
      "Performance-First Approach",
      "Scalable Architecture",
      "Modern Tech Stack",
      "Custom Functionality"
    ],
    metrics: {
      value: "300%",
      label: "Performance Boost"
    }
  },
  {
    title: "E-commerce Solutions",
    description: "Build powerful online stores that drive sales and deliver exceptional shopping experiences to your customers.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    benefits: [
      "Secure Payments",
      "Inventory Management",
      "Mobile-First Design",
      "Analytics Dashboard"
    ],
    metrics: {
      value: "200%",
      label: "Sales Increase"
    }
  },
  {
    title: "Progressive Web Apps",
    description: "Transform your web presence with next-generation applications that combine the best of web and mobile experiences.",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    benefits: [
      "Offline Support",
      "App-Like Experience",
      "Fast Performance",
      "Cross-Platform"
    ],
    metrics: {
      value: "85%",
      label: "User Engagement"
    }
  }
];

export default function ServicesShowcase() {
  return (
    <section className="relative py-32">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent" />
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

        {/* Services Grid */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                  </div>
                  
                  {/* Metrics Badge */}
                  <div className="absolute -bottom-6 left-6 bg-primary/90 backdrop-blur-sm px-6 py-3 rounded-full">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-black">{service.metrics.value}</span>
                      <span className="text-sm text-black/70">{service.metrics.label}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{service.title}</h3>
                <p className="text-lg text-gray-300 mb-8">{service.description}</p>
                
                {/* Benefits List */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-primary" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-lg font-medium">Learn More</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}