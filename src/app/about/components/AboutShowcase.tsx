// src/app/about/components/AboutShowcase.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const timelineEvents = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Chanmax began with a vision to bridge the gap between technology and business growth, offering comprehensive digital solutions from web development to strategic marketing.",
  },
  {
    year: "2018-2020",
    title: "Early Growth",
    description: "Our dedication to delivering both technical excellence and measurable business results led to rapid growth through client referrals, establishing our reputation as a complete digital partner.",
  },
  {
    year: "2020",
    title: "The Turning Point",
    description: "Participation in Uki's Coding Accelerator Program marked a pivotal moment, expanding our capabilities to offer more sophisticated technical solutions while strengthening our digital marketing expertise.",
  },
  {
    year: "2021",
    title: "Business Evolution",
    description: "Transformed into a full-service digital solutions provider, combining cutting-edge development capabilities with data-driven marketing strategies to deliver comprehensive business growth solutions.",
  },
  {
    year: "Today",
    title: "Global Impact",
    description: "Now serving businesses across 10+ countries, we've become a trusted partner for both technical innovation and digital growth strategies, helping businesses thrive in the digital age.",
  },
];

export default function AboutShowcase() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[800px] mx-auto text-center mb-20"
        >
          <h2 className="text-[32px] font-light text-primary mb-4">
            How it all Started?
          </h2>
          <h3 className="text-[56px] font-semibold text-white mb-6">
            A Vision of Digital <span className="text-primary">Excellence</span>
          </h3>
          <p className="text-[20px] leading-relaxed text-gray-300">
            From a passionate start to a global digital powerhouse, helping businesses succeed through technology and marketing excellence.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 border border-white/10 rounded-2xl z-10" />
            <Image 
              src="https://chanmax.io/wp-content/uploads/2023/12/IMG_0605_jpg-scaled.jpg"
              alt="Chanmax Journey"
              fill
              className="object-cover object-right-top"
              priority
            />
          </div>
        </motion.div>

        {/* Timeline Section */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary" />
                <div className="text-[20px] text-primary font-semibold mb-2">
                  {event.year}
                </div>
                <h3 className="text-[32px] font-semibold text-white mb-4">
                  {event.title}
                </h3>
                <p className="text-[20px] leading-relaxed text-gray-300">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}