// src/app/blog/[id]/page.tsx
import PageHeader from '@/components/layout/PageHeader';
import { getBlogPost } from '@/lib/airtable';
import { BlogPost } from '@/types';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

interface Props {
  params: {
    id: string;
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.id) as BlogPost | null;

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#0A0A0A]">
      <PageHeader
        title={post.Title}
        subtitle={`Written by ${post.Author} on ${new Date(post.Date).toLocaleDateString()}`}
      />

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <article className="max-w-4xl mx-auto">
            {post['Featured Image'] && post['Featured Image'][0] && (
              <div className="relative aspect-video mb-12 rounded-[1.2rem] overflow-hidden">
                <img
                  src={post['Featured Image'][0].url}
                  alt={post.Title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}

            <div className="prose prose-invert prose-lg max-w-none">
              {post.Content}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}