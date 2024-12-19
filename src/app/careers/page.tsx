// src/app/careers/page.tsx
import PageHeader from '@/components/layout/PageHeader';
import Careers from '@/components/sections/Careers';
import { getCareers } from '@/lib/airtable';
import { Career } from '@/types';

export const revalidate = 3600;

export default async function CareersPage() {
  const careers = await getCareers() as Career[];

  return (
    <main className="bg-[#0A0A0A]">
      <PageHeader
        title={<>Join Our <span className="text-primary">Team</span></>}
        subtitle="Explore exciting opportunities to grow and make an impact with us"
      />

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Careers careers={careers} />
        </div>
      </section>
    </main>
  );
}