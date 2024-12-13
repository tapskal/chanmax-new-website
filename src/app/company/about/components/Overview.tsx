// src/app/company/about/components/Overview.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Overview() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transforming Visions Into <span className="text-primary">Digital Reality</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Founded in 2020, Chanmax Solutions started with a vision to help businesses thrive in the digital age. Based in Mannar, Sri Lanka, we've grown into a dynamic digital solutions provider, serving clients worldwide.
              </p>
              <p>
                Our passion lies in creating innovative digital solutions that help businesses grow, engage their audience, and achieve their goals. From web development to digital marketing, we bring together creativity and technical expertise to deliver exceptional results.
              </p>
              <p>
                Today, we continue to evolve and innovate, staying ahead of digital trends to provide cutting-edge solutions that drive real business growth.
              </p>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 border border-white/10 rounded-2xl z-10" />
              
              <div className="absolute inset-0">
                <Image 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                  alt="Chanmax Team at Work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent z-[1]" />

              <div className="absolute bottom-0 left-0 p-8 z-[2]">
                <div className="max-w-xs">
                  <div className="text-xl font-bold text-white mb-2">
                    Our Journey
                  </div>
                  <p className="text-gray-300">
                    From 2020 to today, growing and innovating together
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}