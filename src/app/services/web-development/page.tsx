'use client';

import PageHeader from '@/components/layout/PageHeader';
import Features from './components/Features';
import ServicesShowcase from './components/ServicesShowcase';
import ProcessTimeline from './components/ProcessTimeline';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

export default function WebDevelopmentPage() {
  return (
    <main className="bg-[#0A0A0A] relative">
      <PageHeader
        title={<>Website <span className="text-primary">Development</span></>}
        subtitle="Power your digital presence with high-voltage web solutions that deliver exceptional performance and user experience."
      />

      <div className="space-y-20 md:space-y-0">
        <Features />
        <ServicesShowcase />
        <ProcessTimeline />
        <FAQ />
        <CTA />
      </div>
    </main>
  );
}