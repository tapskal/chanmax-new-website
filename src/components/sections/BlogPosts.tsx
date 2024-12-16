'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types';

export default function BlogPosts({ posts }: { posts: BlogPost[] }) {
 return (
   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
     {posts.map((post) => (
       <Link href={`/blog/${post.Slug}`} key={post.id}>
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="group relative h-full rounded-[1.2rem] p-6 md:p-8 border border-white/5 hover:-translate-y-1 transition-all duration-300"
         >
           <div 
             className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[1.2rem]"
             style={{
               background: `radial-gradient(600px circle at 50% 50%, rgba(255, 208, 0, 0.15), transparent 40%)`,
             }}
           />

           {post['Featured Image'] && post['Featured Image'][0] && (
             <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
               <img
                 src={post['Featured Image'][0].url}
                 alt={post.Title}
                 className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
               />
             </div>
           )}
           
           <div className="space-y-3">
             <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors">
               {post.Title}
             </h3>
             <p className="text-lg text-gray-400 line-clamp-3">
               {post.Content}
             </p>
             <div className="flex items-center text-primary mt-4 group-hover:translate-x-2 transition-transform">
               <span className="mr-2">Read More</span>
               <ArrowRight className="w-4 h-4" />
             </div>
           </div>
         </motion.div>
       </Link>
     ))}
   </div>
 );
}