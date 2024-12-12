// src/app/services/social-media/page.tsx
import PageHeader from '@/components/layout/PageHeader';
import Features from './components/Features';
import ServiceShowcase from './components/ServiceShowcase';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

export default function SocialMediaPage() {
  return (
    <main className="bg-[#0A0A0A] relative">
      <PageHeader
        title={<>Social Media <span className="text-primary">Marketing</span> Solutions</>}
        subtitle="Build meaningful connections and drive engagement through strategic social media management and compelling content creation."
      />
      <Features />
      <ServiceShowcase />
      <FAQ />
      <CTA />
    </main>
  );
}