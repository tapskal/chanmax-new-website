// src/app/careers/[slug]/page.tsx (Server Component)
import CareerDetailClient from './client';
import { getCareer } from '@/lib/airtable';
import { notFound } from 'next/navigation';
import { marked } from 'marked';

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

export default async function CareerDetailPage({ params }: { params: { slug: string } }) {
  const career = await getCareer(params.slug);

  if (!career) {
    notFound();
  }

  // Process each HTML content with the enhanced processHtml function
  const descriptionHtml = processHtml(marked.parse(career.Description || '', { async: false }) as string);
  const requirementsHtml = processHtml(marked.parse(career.Requirements || '', { async: false }) as string);
  const benefitsHtml = processHtml(marked.parse(career.Benefits || '', { async: false }) as string);

  return (
    <CareerDetailClient 
      career={career}
      descriptionHtml={descriptionHtml}
      requirementsHtml={requirementsHtml}
      benefitsHtml={benefitsHtml}
    />
  );
}