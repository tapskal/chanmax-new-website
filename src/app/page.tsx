// src/app/page.tsx
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';


export default function Home() {
  return (
    <main className="bg-[#0A0A0A]">
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials/>
    </main>
  );
}