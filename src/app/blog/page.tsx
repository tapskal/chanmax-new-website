import PageHeader from '@/components/layout/PageHeader';
import BlogPosts from '@/components/sections/BlogPosts';
import { getBlogPosts } from '@/lib/airtable';
import { BlogPost } from '@/types';

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getBlogPosts() as BlogPost[];

  return (
    <main className="bg-[#0A0A0A]">
      <PageHeader
        title={<>Our Latest <span className="text-primary">Insights</span></>}
        subtitle="Explore our thoughts, ideas, and insights about the digital world"
      />

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <BlogPosts posts={posts} />
        </div>
      </section>
    </main>
  );
}