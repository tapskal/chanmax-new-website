// src/app/blog/[slug]/page.tsx
import { getBlogPost } from '@/lib/airtable';
import { marked } from 'marked';
import { notFound } from 'next/navigation';
import { BlogPost } from '@/types';

// Configure marked to handle Markdown properly
marked.use({
  gfm: true, // GitHub Flavored Markdown
  breaks: true, // Converts line breaks into <br>
});

// Enhanced function to style links and other elements
function processHtml(html: string) {
  return html
    .replace(
      /<a\s/g,
      '<a class="text-black hover:underline px-1 py-0.5  bg-gradient-to-t from-amber-200/80 hover:bg-amber-200 transition-all" target="_blank" rel="noopener noreferrer" '
    )
    .replace(
      /<p/g,
      '<p class="text-gray-300 hover:text-white font-base text-xl" '
    )
    .replace(
      /<blockquote/g,
      '<blockquote class="border-l-4 border-primary pl-4 italic text-gray-300 mb-4" '
    )
    .replace(
      /<ul/g,
      '<ul class="list-disc pl-6 mb-4 text-gray-400 hover:text-white text-xl" '
    )
    .replace(
      /<ol/g,
      '<ol class="list-decimal pl-6 mb-4 text-gray-300" '
    )
    .replace(
      /<h1/g,
      '<h1 class="text-5xl font-bold text-white mt-8 mb-4" '
    )
    .replace(
      /<h2/g,
      '<h2 class="text-4xl font-bold text-white mt-6 mb-3" '
    )
    .replace(
      /<h3/g,
      '<h3 class="text-3xl font-semibold text-white mt-4 mb-2" '
    )
    .replace(
      /<img/g,
      '<img class="max-w-full h-auto rounded-lg mb-6" '
    );
}

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug) as BlogPost | null;

  if (!post) {
    notFound();
  }

  const rawHtml = await marked(post.Content || '');
  const contentHtml = processHtml(rawHtml);

  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      {/* Title section with excerpt and tags */}
      <div className="pt-[100px] md:pt-[120px] px-6 py-8 flex items-center justify-center md:min-h-[65vh]">
        <div className='container'>
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white">
              {post.Title}
            </h1>

            {/* Excerpt */}
            {post.Excerpt && (
              <p className="mt-8 text-xl md:text-2xl text-gray-400 leading-relaxed">
                {post.Excerpt}
              </p>
            )}

            {/* Tags */}
            {post.Tags && post.Tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {post.Tags.map((tag: string) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 
                             text-gray-300 rounded-full text-sm
                             transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

{/* Featured Image */}
{post['Featured Image']?.[0] && (
  <div className="flex justify-center px-6 mb-20">
    <div className="w-full max-w-4xl">
      <img
        src={post['Featured Image'][0].url}
        alt={post.Title}
        className="w-full h-[300px] md:h-[500px] object-cover rounded-xl"
      />
    </div>
  </div>
)}




      {/* Content - Now matching title section structure */}
      <div className="px-6 pb-32 flex items-center justify-center">
        <div className='container'>
          <div className="mx-auto max-w-3xl">
            <div 
              className="prose prose-invert prose-xl max-w-none
                prose-p:text-gray-200 prose-p:leading-relaxed prose-p:text-xl
                prose-headings:text-white prose-headings:font-bold prose-headings:mt-16 prose-headings:mb-8
                prose-h2:text-4xl prose-h3:text-3xl
                prose-strong:text-white prose-strong:font-semibold
                prose-blockquote:text-gray-300 prose-blockquote:border-primary prose-blockquote:border-l-4 prose-blockquote:pl-6
                prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 
                prose-li:text-gray-200 prose-li:mb-3 prose-li:text-xl
                prose-img:rounded-2xl prose-img:my-12
                space-y-8"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}