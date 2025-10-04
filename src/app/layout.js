import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from '@/components/layout/Layout';
import Providers from '@/components/providers/Providers';
import AuthInitializer from '@/components/auth/AuthInitializer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bhisey Software | Custom Software Development & Technology Solutions",
  description: "Empowering businesses through innovative software solutions. Custom development, mobile apps, cloud solutions, and digital transformation services.",
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: [{ url: '/icon.png', type: 'image/png' }],
    apple: [{ url: '/icon.png', type: 'image/png' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <AuthInitializer />
          <Layout type="marketing">
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
