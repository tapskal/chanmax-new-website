'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reference } from '@/types';

export default function References({ references }: { references: Reference[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-6 lg:px-0">
      {references.map((reference) => (
        <Link href={`/reference/${reference.Slug}`} key={reference.id}>
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

            {/* Featured Image */}
            {reference['Featured Image'] && reference['Featured Image'][0] && (
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 sm:mb-6">
                <img
                  src={reference['Featured Image'][0].url}
                  alt={reference.Title}
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

            <div className="space-y-3">
              <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-primary transition-colors">
                {reference.Title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 line-clamp-3">
                {reference.Excerpt}
              </p>
              <div className="flex items-center text-primary mt-3 sm:mt-4 group-hover:translate-x-2 transition-transform">
                <span className="text-sm sm:text-base mr-2">Read More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}