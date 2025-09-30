/**
 * Footer Component - Multi-column footer with link groups, contact info, and social links
 */

import Link from 'next/link';
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
      <footer className={cn('bg-accent-600 text-white py-8', className)} role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="text-xl font-bold text-white hover:text-accent-300 transition-colors duration-200"
                aria-label="Bhisey Software - Home"
              >
                Bhisey
              </Link>
              <span className="text-gray-400 text-sm">
                © {currentYear} Bhisey Software. All rights reserved.
              </span>
            </div>

            {/* Social Links */}
            <UtilityNavigation 
              variant="horizontal" 
              iconSize="sm"
              className="text-gray-400"
            />
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={cn('bg-accent-500 text-white', className)} role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="inline-block text-2xl font-bold text-white hover:text-accent-300 transition-colors duration-200 mb-4"
              aria-label="Bhisey Software - Home"
            >
              Bhisey
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering businesses through innovative software solutions. 
              Partner with us to transform your digital vision into reality.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-400">
                <span className="text-sm">
                  Email: <a 
                    href="mailto:hello@Bhisey.com" 
                    className="text-white hover:text-accent-300 transition-colors duration-200"
                  >
                    hello@Bhisey.com
                  </a>
                </span>
              </div>
              <div className="flex items-center text-gray-400">
                <span className="text-sm">
                  Phone: <a 
                    href="tel:+1234567890" 
                    className="text-white hover:text-accent-300 transition-colors duration-200"
                  >
                    +1 (234) 567-890
                  </a>
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Follow Us
              </h3>
              <UtilityNavigation 
                variant="horizontal" 
                iconSize="md"
                className="text-gray-400 space-x-4"
              />
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-accent-300 hover:text-accent-400 transition-colors duration-200 text-sm font-medium"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
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
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Bhisey Software. All rights reserved.
            </div>

            {/* Legal Links */}
            <nav className="flex flex-wrap justify-center md:justify-end space-x-6" aria-label="Legal navigation">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
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