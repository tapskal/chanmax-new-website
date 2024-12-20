// src/app/about/page.tsx
import PageHeader from '@/components/layout/PageHeader';
import AboutShowcase from './components/AboutShowcase';
import Features from './components/Features';
import CTA from './components/CTA';

export default function AboutPage() {
  return (
    <main className="bg-[#0A0A0A] relative">
      <PageHeader
        title={<>About <span className="text-primary">Us</span></>}
        subtitle="Helping businesses enhance their online presence and achieve their goals through digital excellence"
      />

<AboutShowcase />
      <Features />
      <CTA />
    </main>
  );
}