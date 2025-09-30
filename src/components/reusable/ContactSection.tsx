"use client";

import React from 'react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { ContactForm } from '@/components/forms/ContactForm';

/**
 * ContactSection – reusable two-column contact block (form + info panel)
 * Matches design: heading centered, description paragraph, left form, right info card with light accent background.
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

export const ContactSection: React.FC<ContactSectionProps> = ({
  id = 'contact-us',
  title = 'Contact Us',
  subtitle = 'Please provide your contact details and some information about your project, and our Team will respond promptly to see how we can best assist you. To send us an RFP, simply attach the document to the form below.',
  className = '',
  showAttachmentNote = true,
  contactItems = [
    { icon: <span className="text-lg">📞</span>, label: 'Call us', value: '617-340-3850' },
    { icon: <span className="text-lg">✉️</span>, label: 'Email', value: 'contact@kandasoft.com' },
  ],
  socialItems = [
    { icon: <span className="text-lg">X</span>, label: 'X' },
    { icon: <span className="text-lg">in</span>, label: 'LinkedIn' },
  ],
}) => {
  return (
    <Section id={id} className={className + ' bg-white'} spacing="xl">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-charcoal md:text-4xl">{title}</h2>
          <p className="text-base leading-relaxed text-charcoal-light md:text-lg">{subtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {/* Form */}
          <div className="md:col-span-2 rounded-xl border border-accent-100 bg-white p-6 shadow-sm lg:p-8">
            <ContactForm />
            {showAttachmentNote && (
              <p className="mt-6 text-xs text-charcoal-light">
                By submitting this form you agree to be contacted regarding your inquiry.
              </p>
            )}
          </div>

            {/* Info Panel */}
          <aside className="rounded-xl bg-accent-50/60 p-6 lg:p-8">
            <h3 className="mb-4 text-xl font-semibold text-charcoal">Contact Us</h3>
            <ul className="space-y-4">
              {contactItems.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-accent-100 text-accent-600">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">{item.label}</p>
                    <p className="text-sm text-charcoal-light">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-charcoal">Find Us on Social Media</h4>
              <div className="flex flex-wrap gap-3">
                {socialItems.map((s) => (
                  <button
                    key={s.label}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-sm font-semibold text-charcoal shadow-sm ring-1 ring-accent-100 transition hover:scale-105 hover:text-accent-600"
                  >
                    {s.icon}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
