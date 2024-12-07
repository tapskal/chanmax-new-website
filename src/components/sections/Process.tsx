// src/components/sections/Process.tsx
'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

const processes = [
  {
    icon: <MessageSquare className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Discovery Call",
    description: "We start by understanding your vision, goals, and challenges through an in-depth consultation.",
    step: "01"
  },
  {
    icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Strategy & Planning",
    description: "Our team crafts a detailed roadmap tailored to your specific needs and business objectives.",
    step: "02"
  },
  {
    icon: <Code className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Development",
    description: "We bring your vision to life using cutting-edge technologies and best practices.",
    step: "03"
  },
  {
    icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Launch & Support",
    description: "We ensure a smooth deployment and provide ongoing support for continuous improvement.",
    step: "04"
  }
];

function ProcessStep({ process, index }: { process: typeof processes[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-center gap-12 lg:gap-24">
        {/* Left Content */}
        <div className={`flex-1 text-right ${index % 2 === 0 ? 'block' : 'invisible'}`}>
          {index % 2 === 0 && (
            <div>
              <div className="text-sm font-bold text-primary mb-2">STEP {process.step}</div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{process.title}</h3>
              <p className="text-lg text-gray-300 leading-relaxed">{process.description}</p>
            </div>
          )}
        </div>

        {/* Center Icon */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary relative z-10">
            {process.icon}
          </div>
          {/* Connecting Line */}
          {index !== processes.length - 1 && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/20 to-transparent" />
          )}
        </div>

        {/* Right Content */}
        <div className={`flex-1 ${index % 2 === 1 ? 'block' : 'invisible'}`}>
          {index % 2 === 1 && (
            <div>
              <div className="text-sm font-bold text-primary mb-2">STEP {process.step}</div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{process.title}</h3>
              <p className="text-lg text-gray-300 leading-relaxed">{process.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex gap-6">
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary relative z-10">
            {process.icon}
          </div>
          {index !== processes.length - 1 && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary/20 to-transparent" />
          )}
        </div>
        <div>
          <div className="text-sm font-bold text-primary mb-2">STEP {process.step}</div>
          <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
          <p className="text-base text-gray-300 leading-relaxed">{process.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-black">
      {/* Enhanced section separator */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[80%] md:w-[60%] lg:w-[40%]">
        {/* Main gradient line */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        {/* Soft glow effect */}
        <div className="h-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl -mt-4" />
        
        {/* Very subtle spread */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
      </div>

      {/* Background glows */}
<div className="absolute inset-0">
  {/* Top-left glow */}
  <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
  
  {/* Bottom-right glow */}
  <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
</div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 md:mb-20 text-left md:text-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Our Digital <span className="text-primary">Power Process</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            A streamlined approach that transforms your vision into digital excellence, 
            delivering powerful results at every step.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative space-y-12 md:space-y-24 max-w-5xl mx-auto">
          {processes.map((process, index) => (
            <ProcessStep key={process.title} process={process} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}