import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from '@/components/layout/Layout';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kanda Software | Custom Software Development & Technology Solutions",
  description: "Empowering businesses through innovative software solutions. Custom development, mobile apps, cloud solutions, and digital transformation services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout type="marketing">
          {children}
        </Layout>
      </body>
    </html>
  );
}
