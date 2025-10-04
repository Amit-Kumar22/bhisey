import React from 'react';

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  content: string;
  created_at: string;
  updated_at: string;
}

async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || ''}/api/case-studies/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data as CaseStudy;
  } catch {
    return null;
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getCaseStudy(slug);
  if (!item) {
    return <div className="prose mx-auto p-8"><h1>Not Found</h1><p>This case study does not exist.</p></div>;
  }
  return (
    <article className="prose mx-auto p-8">
      <h1>{item.title}</h1>
      <p className="text-sm text-gray-500">Published {new Date(item.created_at).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: item.content }} />
    </article>
  );
}