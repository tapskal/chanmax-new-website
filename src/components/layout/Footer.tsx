// src/components/layout/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0A0A0A] to-black">
      {/* Subtle top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[30%] left-[10%] w-[100px] h-[100px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[10%] w-[100px] h-[100px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative">
        <div className="container mx-auto">
          {/* Main content area - reduced padding */}
          <div className="flex flex-col items-center py-10">
            {/* Brand mark - removed rotation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src="/chanmax-logo.svg" alt="Chanmax" className="h-12" />
            </motion.div>

            {/* Social links */}
            <div className="mt-8 flex items-center justify-center gap-8">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Github, label: 'GitHub' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 rounded-full bg-white/5 blur-xl group-hover:bg-primary/20 transition-colors" />
                  <div className="relative w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-white/10 transition-all">
                    <social.Icon className="w-5 h-5" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Legal and copyright - reduced margin */}
            <div className="mt-8 px-4 flex flex-col items-center">
              <div className="text-gray-400 text-base text-center mb-3">
                For universe from Mannar, Sri Lanka
              </div>
              <div className="flex items-center gap-6 text-base text-gray-500">
                <span>© {new Date().getFullYear()} Chanmax</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}