'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "What's your web development process?",
    answer: "Our power-charged development process includes discovery, planning, design, development, testing, and launch phases. We maintain transparent communication throughout to ensure your vision is perfectly executed.",
    gradient: "radial-gradient(circle at 50% 50%, rgba(255,208,0,0.1), transparent 70%)"
  },
  {
    question: "How long does it take to complete a website?",
    answer: "Project timelines vary based on complexity. A basic website might take 4-6 weeks, while complex web applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    gradient: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1), transparent 70%)"
  },
  {
    question: "Do you provide website maintenance?",
    answer: "Yes! We offer comprehensive maintenance packages to keep your website running at peak performance, including updates, security patches, and performance optimization.",
    gradient: "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.1), transparent 70%)"
  },
  {
    question: "Will my website be mobile-responsive?",
    answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring perfect performance across all devices and screen sizes.",
    gradient: "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.1), transparent 70%)"
  }
];

export default function FAQ() {
  // Change the type to handle both number and null
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Type-safe click handler
  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      {/* Background glows - adjusted positions */}
      <div className="fixed inset-0">
        <div className="absolute top-[30%] -translate-y-1/2 left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[30%] translate-y-1/2 right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => handleClick(index)}
                className="w-full text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                  {/* Question */}
                  <div className="flex items-center justify-between p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-medium text-white pr-8">
                      {faq.question}
                    </h3>
                    <span className="flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="w-6 h-6 text-primary" />
                      ) : (
                        <Plus className="w-6 h-6 text-primary" />
                      )}
                    </span>
                  </div>
                  
                  {/* Answer */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 md:p-8 pt-0 text-lg text-gray-300 border-t border-white/10">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Unique hover gradient for each tab */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: faq.gradient
                    }}
                  />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}