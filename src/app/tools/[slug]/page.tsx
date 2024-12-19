// src/app/tools/[slug]/page.tsx
import { getTool } from '@/lib/airtable';
import { marked } from 'marked';
import { notFound } from 'next/navigation';
import { Tool } from '@/types';

marked.use({
  gfm: true,
  breaks: true,
});

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

export default async function ToolDetailPage({ params }: Props) {
  const tool = await getTool(params.slug) as Tool | null;

  if (!tool) {
    notFound();
  }

  const descriptionHtml = processHtml(marked.parse(tool.Description || '', { async: false }) as string);
  const featuresHtml = tool.Features ? processHtml(marked.parse(tool.Features, { async: false }) as string) : null;

  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      {/* Title Section */}
      <div className="pt-[100px] md:pt-[120px] px-6 py-8 flex items-center justify-center md:min-h-[65vh]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Category Chip */}
            <div className="text-sm px-4 py-2 bg-white/5 hover:bg-white/10 
                         text-gray-300 rounded-full inline-block mb-6">
              {tool.Category}
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6">
              {tool.Title}
            </h1>
            
            {tool.Excerpt && (
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                {tool.Excerpt}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {tool['Featured Image']?.[0] && (
        <div className="flex justify-center px-6 mb-20">
          <div className="w-full max-w-4xl">
            <img
              src={tool['Featured Image'][0].url}
              alt={tool.Title}
              className="w-full h-[300px] md:h-[500px] object-cover rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="px-6 pb-32 flex items-center justify-center">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {/* Description Section */}
            <div className="space-y-20">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                  About this Tool
                </h2>
                <div className="prose prose-invert prose-xl max-w-none space-y-6"
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />
              </div>

              {/* Features Section if available */}
              {featuresHtml && (
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                    Key Features
                  </h2>
                  <div className="prose prose-invert prose-xl max-w-none space-y-6"
                    dangerouslySetInnerHTML={{ __html: featuresHtml }}
                  />
                </div>
              )}

              {/* Call to Action */}
              {tool.Link && (
                <div className="mt-12 text-center">
                  <a 
                    href={tool.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-light transition-colors"
                  >
                    Try this Tool
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}