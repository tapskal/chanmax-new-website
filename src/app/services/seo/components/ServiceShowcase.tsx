// src/app/services/seo/components/ServiceShowcase.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: { first: "Technical", second: "Optimization" },
    description: "Comprehensive technical SEO that enhances your website's search engine visibility through site structure, speed optimization, and mobile responsiveness.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    gradients: [
      "absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]",
      "absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"
    ],
  },
  {
    title: { first: "Content", second: "Strategy" },
    description: "Data-driven content strategies that target high-value keywords and create engaging content that ranks well and converts visitors into customers.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    gradients: [
      "absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]",
      "absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]"
    ],
  },
  {
    title: { first: "Authority", second: "Building" },
    description: "Strategic link building and digital PR that boost your domain authority and improve search rankings through quality backlinks and content partnerships.",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    gradients: [
      "absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]",
      "absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"
    ],
  }
];

export default function ServiceShowcase() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0A0A0A]">
      {/* Enhanced section separator */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[80%] md:w-[60%] lg:w-[40%]">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="h-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl -mt-4" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
      </div>

      {services.map((service, index) => (
        <div key={service.title.first} className="relative mb-32 last:mb-0">
          {/* Background glows */}
          <div className="absolute inset-0">
            {index === 0 && (
              <>
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
              </>
            )}
            {index === 1 && (
              <>
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
              </>
            )}
            {index === 2 && (
              <>
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]" />
              </>
            )}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`${index % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  <span>{service.title.first} </span>
                  <span className="text-primary">{service.title.second}</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                  {service.description}
                </p>
              </motion.div>

              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}
              >
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 border border-white/10 rounded-2xl z-10" />
                  
                  <div className="absolute inset-0">
                    <Image 
                      src={service.image}
                      alt={`${service.title.first} ${service.title.second}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent z-[1]" />

                  <div className="absolute bottom-0 left-0 p-8 z-[2]">
                    <div className="max-w-xs">
                      <div className="text-xl font-bold text-white mb-2">
                        {service.title.first} {service.title.second}
                      </div>
                      <p className="text-gray-300">
                        Driving organic growth through strategic SEO
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}