// src/app/services/performance-marketing/components/FAQ.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "What is performance marketing and how does it work?",
    answer: "Performance marketing is a data-driven marketing strategy where businesses pay for specific actions or results, such as clicks, leads, or sales. We use advanced targeting, analytics, and optimization techniques to maximize your ROI by focusing on measurable outcomes.",
    gradient: "radial-gradient(circle at 50% 50%, rgba(255,208,0,0.1), transparent 70%)"
  },
  {
    question: "How do you measure campaign success?",
    answer: "We track multiple key performance indicators (KPIs) including ROI, ROAS, conversion rates, click-through rates, and cost per acquisition. Our comprehensive analytics system provides real-time data and detailed reports to measure campaign effectiveness and optimize performance.",
    gradient: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1), transparent 70%)"
  },
  {
    question: "What platforms do you use for advertising?",
    answer: "We utilize a multi-channel approach including Google Ads, Meta Ads (Facebook & Instagram), LinkedIn, TikTok, and other relevant platforms based on your target audience. Each campaign is strategically placed to maximize reach and effectiveness.",
    gradient: "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.1), transparent 70%)"
  },
  {
    question: "How long before we see results?",
    answer: "Initial results can be seen within the first few weeks, but optimal performance is typically achieved after 2-3 months of data collection and optimization. We continuously refine campaigns based on performance data to improve results over time.",
    gradient: "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.1), transparent 70%)"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Enhanced section separator */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[80%] md:w-[60%] lg:w-[40%]">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="h-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl -mt-4" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
      </div>

      {/* Background glows */}
      <div className="absolute inset-0 -z-10">
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

                  {/* Hover gradient */}
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