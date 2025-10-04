import React from 'react';

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  created_at: string;
  updated_at: string;
}

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || ''}/api/blogs/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data as Blog;
  } catch {
    return null;
  }
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) {
    return <div className="prose mx-auto p-8"><h1>Not Found</h1><p>This blog post does not exist.</p></div>;
  }
  return (
    <article className="prose mx-auto p-8">
      <h1>{blog.title}</h1>
      <p className="text-sm text-gray-500">Published {new Date(blog.created_at).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </article>
  );
}