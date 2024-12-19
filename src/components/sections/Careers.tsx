// src/components/sections/Careers.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Career } from '@/types';

export default function Careers({ careers }: { careers: Career[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-6 lg:px-0">
      {careers.map((career) => (
        <Link href={`/careers/${career.Slug}`} key={career.id}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-full rounded-[1.2rem] p-4 sm:p-6 lg:p-8 border border-white/5 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Gradient Background */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[1.2rem]"
              style={{
                background: `radial-gradient(600px circle at 50% 50%, rgba(255, 208, 0, 0.15), transparent 40%)`,
              }}
            />

            {/* Content */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm px-3 py-1 bg-white/5 rounded-full text-primary">
                  {career.Department}
                </span>
                <span className="text-sm px-3 py-1 bg-white/5 rounded-full text-gray-400">
                  {career.Type}
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-primary transition-colors">
                {career.Title}
              </h3>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 line-clamp-3">
                {career.Excerpt}
              </p>

              <div className="flex items-center justify-between mt-6">
                <span className="text-sm text-gray-400">
                  {career.Location}
                </span>
                <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                  <span className="text-sm sm:text-base mr-2">View Position</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}