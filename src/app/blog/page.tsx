import PageHeader from '@/components/layout/PageHeader';
import { getBlogPosts } from '@/lib/airtable';
import { motion } from 'framer-motion';

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="bg-[#0A0A0A]">
      {/* Header Section */}
      <PageHeader
        title={<>Our Latest <span className="text-primary">Insights</span></>}
        subtitle="Explore our thoughts, ideas, and insights about the digital world"
      />

      {/* Blog Posts Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <div
                key={post.id}
               
                className="relative bg-white/5 backdrop-blur-lg rounded-[1.2rem] p-6 border border-white/10 hover:-translate-y-1 transition-transform duration-300"
              >
                {post.Featured_Image && (
                  <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
                    <img
                      src={post.Featured_Image[0].url}
                      alt={post.Title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    {post.Title}
                  </h3>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}