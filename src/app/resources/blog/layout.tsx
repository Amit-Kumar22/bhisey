import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Bhisey - Latest Insights and Technology Trends',
  description: 'Discover the latest insights, technology trends, and industry innovations from Bhisey. Stay informed with our expert analysis and thought leadership articles.',
  keywords: 'blog, insights, technology trends, software development, digital transformation, industry analysis',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}