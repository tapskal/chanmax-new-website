// src/app/page.tsx
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/layout/Section';

export default function Home() {
  return (
    <Section>
      <h1 className="text-4xl font-bold mb-8">Welcome to Chanmax</h1>
      <Button>Get Started</Button>
    </Section>
  );
}