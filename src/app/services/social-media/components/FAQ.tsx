// src/app/services/social-media/components/FAQ.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "How do you create engaging social media content?",
    answer: "We develop platform-specific content strategies that combine trending topics, audience insights, and brand voice. Our approach includes creating a mix of educational, entertaining, and promotional content, utilizing various formats like images, videos, stories, and reels to maximize engagement.",
    gradient: "radial-gradient(circle at 50% 50%, rgba(255,208,0,0.1), transparent 70%)"
  },
  {
    question: "Which social media platforms do you work with?",
    answer: "We manage all major social platforms including Instagram, Facebook, LinkedIn, Twitter, TikTok, and Pinterest. We help you identify and focus on the platforms where your target audience is most active and engaged.",
    gradient: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1), transparent 70%)"
  },
  {
    question: "How do you measure social media success?",
    answer: "We track key metrics including engagement rates, follower growth, reach, impressions, click-through rates, and conversions. Our comprehensive analytics provide insights into content performance, audience behavior, and ROI across all platforms.",
    gradient: "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.1), transparent 70%)"
  },
  {
    question: "What's included in your community management service?",
    answer: "Our community management service includes daily monitoring and engagement, responding to comments and messages, proactive community building, crisis management, and maintaining brand voice across all interactions. We ensure timely and meaningful engagement with your audience.",
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