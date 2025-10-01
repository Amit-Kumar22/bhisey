import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News | Bhisey - Latest Company News and Announcements',
  description: 'Stay updated with the latest news, announcements, and achievements from Bhisey. Discover our recent partnerships, certifications, and company milestones.',
  keywords: 'news, announcements, company updates, partnerships, certifications, achievements, awards',
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}