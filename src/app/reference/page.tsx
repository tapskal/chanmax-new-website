// src/app/reference/page.tsx
import PageHeader from '@/components/layout/PageHeader';
import References from '@/components/sections/References';
import { getReferences } from '@/lib/airtable';
import { Reference } from '@/types';

export const revalidate = 3600;

export default async function ReferencePage() {
  const references = await getReferences() as Reference[];

  return (
    <main className="bg-[#0A0A0A]">
      <PageHeader 
        title={<>Our Latest <span className="text-primary">References</span></>}
        subtitle="Explore our portfolio of successful projects and client partnerships"
      />

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <References references={references} />
        </div>
      </section>
    </main>
  );
}