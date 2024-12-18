// src/app/reference/[slug]/page.tsx
import { getReference } from '@/lib/airtable';
import { marked } from 'marked';
import { notFound } from 'next/navigation';
import { Reference } from '@/types';

marked.use({
  gfm: true,
  breaks: true,
});

// Utility function to process HTML
function processHtml(html: string) {
  return html
    .replace(
      /<a\s/g,
      '<a class="text-black hover:underline px-1 py-0.5 bg-gradient-to-t from-amber-200/80 hover:bg-amber-200 transition-all" target="_blank" rel="noopener noreferrer" '
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

export default async function ReferenceDetailPage({ params }: Props) {
  const reference = (await getReference(params.slug)) as Reference | null;

  if (!reference) {
    notFound();
  }

  // Pre-process markdown content
  const challengeHtml = processHtml(await marked(reference.Challenge || ''));
  const solutionHtml = processHtml(await marked(reference.Solution || ''));
  const resultsHtml = processHtml(await marked(reference.Results || ''));

  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      {/* Title Section */}
      <div className="pt-[100px] md:pt-[120px] px-6 py-8 flex items-center justify-center md:min-h-[65vh]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6">
              {reference.Title}
            </h1>
            
            {/* Excerpt followed by Industry chip */}
            {reference.Excerpt && (
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                  {reference.Excerpt}
                </p>
                
                {/* Industry chip */}
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/5 hover:bg-white/10 
                                text-gray-300 rounded-full text-sm
                                transition-colors">
                    {reference.Industry}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image - keep as is */}
      {reference['Featured Image']?.[0] && (
        <div className="flex justify-center px-6 mb-20">
          <div className="w-full max-w-4xl">
            <img
              src={reference['Featured Image'][0].url}
              alt={reference.Title}
              className="w-full h-[300px] md:h-[500px] object-cover rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="px-6 pb-32 flex items-center justify-center">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {/* Metrics - keep as is */}
            {reference.Metrics && reference.Metrics.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                {reference.Metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-white/5 p-6 rounded-xl text-center"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Challenge, Solution, Results sections with bigger titles */}
            <div className="space-y-20"> {/* Increased spacing between sections */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                  Challenge
                </h2>
                <div className="prose prose-invert prose-xl max-w-none
                  prose-p:text-gray-200 prose-p:leading-relaxed prose-p:text-xl
                  prose-strong:text-white prose-strong:font-semibold
                  prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 
                  prose-li:text-gray-200 prose-li:mb-3 prose-li:text-xl
                  space-y-6"
                  dangerouslySetInnerHTML={{ __html: challengeHtml }}
                />
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                  Solution
                </h2>
                <div className="prose prose-invert prose-xl max-w-none
                  prose-p:text-gray-200 prose-p:leading-relaxed prose-p:text-xl
                  prose-strong:text-white prose-strong:font-semibold
                  prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 
                  prose-li:text-gray-200 prose-li:mb-3 prose-li:text-xl
                  space-y-6"
                  dangerouslySetInnerHTML={{ __html: solutionHtml }}
                />
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                  Results
                </h2>
                <div className="prose prose-invert prose-xl max-w-none
                  prose-p:text-gray-200 prose-p:leading-relaxed prose-p:text-xl
                  prose-strong:text-white prose-strong:font-semibold
                  prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 
                  prose-li:text-gray-200 prose-li:mb-3 prose-li:text-xl
                  space-y-6"
                  dangerouslySetInnerHTML={{ __html: resultsHtml }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}