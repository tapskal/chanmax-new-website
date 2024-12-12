// src/app/services/seo/page.tsx
import PageHeader from '@/components/layout/PageHeader';
import Features from './components/Features';
import ServiceShowcase from './components/ServiceShowcase';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

export default function SEOPage() {
  return (
    <main className="bg-[#0A0A0A] relative">
      <PageHeader
        title={<>Search Engine <span className="text-primary">Optimization</span></>}
        subtitle="Drive sustainable organic growth and improve search visibility through data-driven SEO strategies and technical optimization."
      />
      <Features />
      <ServiceShowcase />
      <FAQ />
      <CTA />
    </main>
  );
}