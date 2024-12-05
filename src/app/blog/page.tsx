import { Section } from '@/components/layout/Section';

export default function BlogPage() {
  return (
    <Section>
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blog posts will go here */}
      </div>
    </Section>
  );
}