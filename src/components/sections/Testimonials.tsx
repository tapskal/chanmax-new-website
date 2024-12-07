'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, ArrowLeft } from 'lucide-react';

const testimonials = [
  {
    name: "Kevin Ezhee",
    position: "CEO",
    company: "SupraKleen",
    rating: 5,
    content: "Chanmax Solutions stood out with their excellent communication and timely project completion. They not only delivered amazing results but also demonstrated a commitment to going above and beyond.",
    image: "/pexels-photo-29652432.webp",
  },
  {
    name: "Muhammed Fasal",
    position: "Director",
    company: "Kodakit Media",
    rating: 5,
    content: "Their ability to understand our business goals and convert them into effective digital solutions was impressive. The team showed great ownership and kept us informed at every stage.",
    image: "/pexels-photo-29652432.webp",
  },
  {
    name: "Ajmal",
    position: "CEO",
    company: "Adhugo",
    rating: 5,
    content: "They have consistently provided great digital marketing solutions with measurable results. Their proactive approach and dedication to delivering quality work is commendable.",
    image: "/pexels-photo-29652432.webp",
  }
];

function TestimonialCard({ testimonial, isActive = false }: { testimonial: typeof testimonials[0], isActive?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.9 }}
      className={`relative rounded-[1.2rem] md:rounded-[2rem] p-6 md:p-12 bg-white/5 backdrop-blur-lg border border-white/5 transition-all duration-500
        ${isActive ? 'z-20 shadow-2xl' : 'scale-90 blur-[1px]'}`}
    >
      {/* Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Star Rating */}
      <div className="flex space-x-1 mb-6 md:mb-8">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 md:w-6 md:h-6 fill-primary text-primary" />
        ))}
      </div>

      {/* Quote Content */}
      <p className="text-lg md:text-2xl text-gray-200 mb-8 md:mb-10 font-light leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Client Info */}
      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex-1">
          <div className="text-xl md:text-2xl font-bold text-white mb-1">
            {testimonial.name}
          </div>
          <div className="text-base md:text-lg text-gray-400">
            {testimonial.position}, <span className="text-primary">{testimonial.company}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 md:py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-6 md:mb-12"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
            Client <span className="text-primary">Success</span> Stories
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Discover what our clients say about their experience working with us.
          </p>
        </motion.div>

        {/* Clutch Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12 md:mb-20"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <img 
              src="/clutchco.svg" 
              alt="Clutch.co" 
              className="h-6 md:h-8 w-auto"
            />
            <div className="flex items-baseline gap-2 md:gap-3">
              <span className="text-3xl md:text-5xl font-bold text-white">5.0</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-6 md:h-6 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <a 
              href="https://clutch.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-2 md:py-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              View on Clutch
            </a>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative min-h-[380px] md:min-h-[400px]">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === activeIndex && (
                  <motion.div
                    key={testimonial.name}
                    className="absolute inset-0"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TestimonialCard testimonial={testimonial} isActive={true} />
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-3 md:gap-4 mt-2 md:mt-2">
            <button
              onClick={handlePrev}
              className="p-3 md:p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 md:p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}