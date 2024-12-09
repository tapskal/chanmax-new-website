'use client';

import { motion } from 'framer-motion';
import { processSteps } from '../constants';

export default function ProcessTimeline() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Development <span className="text-primary">Power Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A supercharged approach to delivering exceptional web solutions
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-[28px] top-10 bottom-10 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent md:left-1/2 md:-translate-x-px" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-20 md:pl-0 mb-16 last:mb-0"
            >
              <div className={`md:flex items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline Point */}
                <div className="absolute left-0 top-0 md:relative md:flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border-4 border-[#0A0A0A] flex items-center justify-center z-10 relative">
                    <span className="text-xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative group hover:border-primary/20 transition-colors">
                    <div className={`flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{step.title}</h3>
                        <p className="text-lg text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}