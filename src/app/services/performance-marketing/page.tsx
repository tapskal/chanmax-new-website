// src/app/services/performance-marketing/page.tsx
import PageHeader from '@/components/layout/PageHeader';
import Features from './components/Features';
import ServiceShowcase from './components/ServiceShowcase';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

export default function PerformanceMarketingPage() {
  return (
    <main className="bg-[#0A0A0A] relative">
      <PageHeader
        title={<>Performance <span className="text-primary">Marketing</span> Solutions</>}
        subtitle="Data-driven marketing strategies that maximize ROI and accelerate business growth through targeted campaigns and optimization."
      />
      <Features />
      <ServiceShowcase />
      <FAQ />
      <CTA />
    </main>
  );
}