import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Kanda Software',
  description: '350+ Clients trust Kanda Software with their business-critical software development initiatives. Explore our case studies and success stories.',
  openGraph: {
    title: 'Case Studies | Kanda Software',
    description: '350+ Clients trust Kanda Software with their business-critical software development initiatives. Explore our case studies and success stories.',
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