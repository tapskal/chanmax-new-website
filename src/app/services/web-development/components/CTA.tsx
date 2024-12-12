'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden ">
      {/* Enhanced section separator */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[80%] md:w-[60%] lg:w-[40%]">
        {/* Main gradient line */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        {/* Soft glow effect */}
        <div className="h-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl -mt-4" />
        
        {/* Very subtle spread */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
      </div>
     {/* Background glows - changed from fixed to absolute */}
  <div className="absolute inset-0 -z-10"> {/* Added -z-10 */}
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
              Ready to <span className="text-primary">Supercharge</span> Your Web Presence?
            </h2>
            
            <p className="text-xl text-gray-300">
              Let's discuss how we can transform your vision into a high-performance web solution.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <CustomButton variant="primary" icon={<ArrowRight className="w-4 h-4 text-primary" />}>
                Start Your Project
              </CustomButton>
              <CustomButton variant="secondary" icon={<ArrowRight className="w-4 h-4 text-white" />}>
                View Our Work
              </CustomButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}