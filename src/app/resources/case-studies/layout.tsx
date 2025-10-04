import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Bhisey Software',
  description: '350+ Clients trust Bhisey Software with their business-critical software development initiatives. Explore our case studies and success stories.',
  openGraph: {
    title: 'Case Studies | Bhisey Software',
    description: '350+ Clients trust Bhisey Software with their business-critical software development initiatives. Explore our case studies and success stories.',
    type: 'website',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}