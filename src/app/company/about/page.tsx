// src/app/company/about/page.tsx
import PageHeader from '@/components/layout/PageHeader';
import Overview from './components/Overview';
import Mission from './components/Mission';
import Stats from './components/Stats';
import WhyUs from './components/WhyUs';

export default function AboutPage() {
  return (
    <main className="bg-[#0A0A0A] relative">
      <PageHeader
        title={<>Our <span className="text-primary">Story</span></>}
        subtitle="Empowering businesses with innovative digital solutions since 2020. We're dedicated to transforming visions into digital reality."
      />
      <Overview />
      <Mission />
     <Stats />
      <WhyUs /> 
    </main>
  );
}