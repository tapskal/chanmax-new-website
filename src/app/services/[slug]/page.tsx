// src/app/services/[slug]/page.tsx
export default function ServicePage({ params }: { params: { slug: string } }) {
    return (
      <div>
        <h1>Service: {params.slug}</h1>
      </div>
    );
  }