'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/types';

export default function BlogPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative bg-white/5 backdrop-blur-lg rounded-[1.2rem] p-6 border border-white/10 hover:-translate-y-1 transition-all duration-300"
        >
          {post['Featured Image'] && post['Featured Image'][0] && (
            <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
              <img
                src={post['Featured Image'][0].url}
                alt={post.Title}
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          
          <div className="space-y-4">
            <Link href={`/blog/${post.id}`}>
              <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors">
                {post.Title}
              </h3>
            </Link>
            <p className="text-gray-400 line-clamp-3">
              {post.Content}
            </p>
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <span className="text-sm text-gray-400">
                {new Date(post.Date).toLocaleDateString()}
              </span>
              <span className="text-sm text-primary font-medium">
                {post.Author}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}