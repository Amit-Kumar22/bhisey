/**
 * Footer Component - Multi-column footer with link groups, contact info, and social links
 */

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '../../lib/utils';
import { navigation } from '../../lib/constants';
import { UtilityNavigation } from '../navigation';

interface FooterProps {
  className?: string;
  variant?: 'default' | 'minimal';
}

export default function Footer({ className, variant = 'default' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact-us' },
    ],
    services: navigation.primary.find(item => item.label === 'Services')?.children?.slice(0, 5) || [],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'News', href: '/news' },
      { label: 'Resources', href: '/resources' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  };

  if (variant === 'minimal') {
    return (
      <footer className={cn('bg-accent-600 !text-white py-6', className)} role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="flex items-center hover:opacity-80 transition-opacity duration-200"
                aria-label="Bhisey Software - Home"
              >
                <Image
                  src="/bhisey.png"
                  alt="Bhisey Logo"
                  width={100}
                  height={33}
                  className="h-7 w-auto"
                  unoptimized
                />
              </Link>
              <span className="text-gray-100 text-sm">
                © {currentYear} Bhisey Software. All rights reserved.
              </span>
            </div>

            {/* Social Links */}
            <UtilityNavigation 
              variant="horizontal" 
              iconSize="sm"
              className="text-white"
            />
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={cn('bg-accent-500 text-white', className)} role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="inline-block hover:opacity-80 transition-opacity duration-200 mb-3"
              aria-label="Bhisey Software - Home"
            >
              <Image
                src="/bhisey.png"
                alt="Bhisey Logo"
                unoptimized
                width={140}
                height={47}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-100 mb-4 max-w-md text-sm leading-relaxed">
              Empowering businesses through innovative software solutions. 
              Partner with us to transform your digital vision into reality.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-1.5 mb-4">
              <div className="flex items-center text-gray-100">
                <span className="text-sm">
                  Email: <a 
                    href="mailto:hello@Bhisey.com" 
                    className="text-white hover:text-accent-300 transition-colors duration-200 underline-offset-2 hover:underline"
                  >
                    hello@Bhisey.com
                  </a>
                </span>
              </div>
              <div className="flex items-center text-gray-100">
                <span className="text-sm">
                  Phone: <a 
                    href="tel:+1234567890" 
                    className="text-white hover:text-accent-300 transition-colors duration-200 underline-offset-2 hover:underline"
                  >
                    +1 (234) 567-890
                  </a>
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                Follow Us
              </h3>
              <UtilityNavigation 
                variant="horizontal" 
                iconSize="md"
                className="text-white space-x-4"
              />
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-100 hover:text-white transition-colors duration-200 text-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-100 hover:text-white transition-colors duration-200 text-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/services"
                  className="text-accent-300 hover:text-accent-200 transition-colors duration-200 text-sm font-medium inline-flex items-center gap-1"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-100 hover:text-white transition-colors duration-200 text-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-100 text-sm">
              © {currentYear} Bhisey Software. All rights reserved.
            </div>

            {/* Legal Links */}
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2" aria-label="Legal navigation">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-100 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}