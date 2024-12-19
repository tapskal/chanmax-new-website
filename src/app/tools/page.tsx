// src/app/tools/page.tsx
import PageHeader from '@/components/layout/PageHeader';
import Tools from '@/components/sections/Tools';
import { getTools } from '@/lib/airtable';
import { Tool } from '@/types';

export const revalidate = 3600;

export default async function ToolsPage() {
  const tools = await getTools() as Tool[];

  return (
    <main className="bg-[#0A0A0A]">
      <PageHeader
        title={<>Digital Marketing <span className="text-primary">Tools</span></>}
        subtitle="Explore our collection of powerful tools for digital marketing success"
      />

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Tools tools={tools} />
        </div>
      </section>
    </main>
  );
}