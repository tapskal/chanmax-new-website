// src/app/services/seo/components/CTA.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[30%] -translate-y-1/2 left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[30%] translate-y-1/2 right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />

        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255,208,0,0.15), transparent 70%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Ready to <span className="text-primary">Dominate</span> Search Rankings?
            </h2>
            
            <p className="text-xl text-gray-300">
              Let's optimize your website for better visibility and increased organic traffic with our proven SEO strategies.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <CustomButton variant="primary" icon={<ArrowRight className="w-4 h-4 text-primary" />}>
                Start Ranking Higher
              </CustomButton>
              <CustomButton variant="secondary" icon={<ArrowRight className="w-4 h-4 text-white" />}>
                View Success Stories
              </CustomButton>
            </div>

            {/* SEO Proof Points */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            >
              <div>
                <div className="text-3xl font-bold text-white mb-2">250%</div>
                <div className="text-gray-400">Traffic Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">Top 3</div>
                <div className="text-gray-400">Search Rankings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">85%</div>
                <div className="text-gray-400">Conversion Rate</div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}