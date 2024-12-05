// src/app/blog/page.tsx
import { fetchPosts } from '@/lib/wordpress';

export default async function BlogPage() {
  const posts = await fetchPosts(1);
  
  return (
    <Section>
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Section>
  );
}