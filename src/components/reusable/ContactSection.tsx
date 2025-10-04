"use client";

import React from 'react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { ContactForm } from '@/components/forms/ContactForm';

/**
 * ContactSection – Professional, modern contact component with glassmorphism effects
 * Features: Responsive grid, micro-interactions, gradient accents, and enhanced UX
 * Design: Enterprise-grade with attention to spacing, typography, and accessibility
 */
export interface ContactSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  showAttachmentNote?: boolean;
  contactItems?: { icon: React.ReactNode; label: string; value: string | React.ReactNode }[];
  socialItems?: { icon: React.ReactNode; label: string; href?: string }[];
}

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export const ContactSection: React.FC<ContactSectionProps> = ({
  id = 'contact-us',
  title = 'Let\'s Build Something Great Together',
  subtitle = 'Ready to transform your vision into reality? Our expert team is here to help. Share your project details, and we\'ll craft a tailored solution that exceeds your expectations.',
  className = '',
  showAttachmentNote = true,
  contactItems = [
    { icon: <PhoneIcon />, label: 'Call us', value: '617-340-3850' },
    { icon: <EmailIcon />, label: 'Email us', value: 'contact@Bhiseysoft.com' },
    { icon: <LocationIcon />, label: 'Visit us', value: 'Boston, MA, USA' },
  ],
  socialItems = [
    { icon: <TwitterIcon />, label: 'Follow us on Twitter', href: '#' },
    { icon: <LinkedInIcon />, label: 'Connect on LinkedIn', href: '#' },
  ],
}) => {
  return (
    <Section 
      id={id} 
      className={`${className} relative overflow-hidden bg-gray-50`} 
      spacing="xl"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent-500/10 border border-accent-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
            </span>
            <span className="text-sm font-semibold text-accent-700">Available to Start Your Project</span>
          </div>
          
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 md:text-xl max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10 xl:gap-12">
          {/* Contact Form - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 group">
            <div className="relative h-full rounded-2xl bg-white border border-gray-200 shadow-lg p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:border-accent-300">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/0 via-accent-500/0 to-accent-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
                  <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                </div>

                <ContactForm />
                
                {showAttachmentNote && (
                  <div className="mt-8 p-4 rounded-xl bg-accent-50 border border-accent-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <span className="font-semibold text-gray-900">Privacy Notice:</span> By submitting this form, you agree to be contacted regarding your inquiry. We respect your privacy and will never share your information.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Contact Information Card */}
            <div className="relative rounded-2xl bg-accent-500 p-8 lg:p-10 shadow-2xl shadow-accent-500/30 overflow-hidden">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 opacity-100"></div>
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }} />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                  <span className="flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Contact Information
                </h3>
                
                <ul className="space-y-6">
                  {contactItems.map((item, index) => (
                    <li 
                      key={item.label} 
                      className="group/item flex items-start gap-4 transform transition-all duration-300 hover:translate-x-2"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 shadow-lg group-hover/item:bg-white/30 group-hover/item:scale-110 transition-all duration-300">
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white mb-1">{item.label}</p>
                        <p className="text-base font-medium text-white break-words">{item.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Social Media Section */}
                <div className="mt-10 pt-8 border-t border-white/30">
                  <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                    Connect With Us
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {socialItems.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="group/social flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-accent-600 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent-500"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Response Time Badge */}
                <div className="mt-8 p-4 rounded-xl bg-white/15 border border-white/30">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Fast Response Time</p>
                      <p className="text-xs text-white">Typically within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="rounded-2xl bg-white border border-gray-200 shadow-lg p-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
                Why Choose Us
              </h4>
              <ul className="space-y-3">
                {[
                  { icon: '✓', text: 'Expert Development Team' },
                  { icon: '✓', text: 'Agile Project Management' },
                  { icon: '✓', text: 'Transparent Communication' },
                  { icon: '✓', text: 'On-Time Delivery' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-accent-100 text-accent-600 text-xs font-bold">
                      {item.icon}
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Bottom CTA or Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-md">
            <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Your information is secure and confidential</span>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
