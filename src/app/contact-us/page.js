'use client';

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { ContactForm } from '@/components/forms/ContactForm';
import ClientLogoMarquee from '@/components/reusable/ClientLogoMarquee';

// Contact Form Section Component
const ContactFormSection = () => {
  return (
    <Section className="relative overflow-hidden bg-gray-50" spacing="xl">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Thank you for your interest in Kanda Software
          </h1>
          <div className="space-y-2">
            <p className="text-lg text-gray-700 leading-relaxed">
              Please provide your contact details and some information about your project,
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              and our Team will respond promptly to see how we can best assist you.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              To send us an RFP, simply attach the document to the form below.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
          {/* Contact Form - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="relative h-full rounded-2xl bg-white border border-gray-200 shadow-lg p-8 lg:p-10">
              <ContactForm />
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <aside className="lg:col-span-1">
            <div className="relative rounded-2xl bg-gradient-to-br from-accent-100 to-accent-50 p-8 shadow-lg border border-accent-200 overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-8" style={{ color: '#374151' }}>
                  Contact Us
                </h3>
                
                <div className="space-y-6 mb-10">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                      <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <a href="tel:617-340-3850" className="text-lg font-medium hover:text-accent-700 transition-colors" style={{ color: '#374151' }}>
                        617-340-3850
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                      <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <a href="mailto:contact@kandasoft.com" className="text-lg font-medium hover:text-accent-700 transition-colors break-words" style={{ color: '#374151' }}>
                        contact@kandasoft.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media Section */}
                <div className="pt-8 border-t border-accent-200">
                  <h4 className="mb-4 text-base font-semibold" style={{ color: '#374151' }}>
                    Find Us on Social Media
                  </h4>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      aria-label="Follow us on X (Twitter)"
                      className="flex items-center gap-2 hover:text-accent-900 transition-colors text-sm font-medium" style={{ color: '#4B5563' }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      X
                    </a>
                    <span style={{ color: '#D1D5DB' }}>|</span>
                    <a
                      href="#"
                      aria-label="Connect on LinkedIn"
                      className="flex items-center gap-2 hover:text-accent-900 transition-colors text-sm font-medium" style={{ color: '#4B5563' }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
};

// Clients Who Trust Us Section Component
const ClientsSection = () => {
  const clientLogos = [
    { name: 'FSecure', src: '/images/clients/fsecure.png', alt: 'FSecure logo' },
    { name: 'Imprivata', src: '/images/clients/imprivata.png', alt: 'Imprivata logo' },
    { name: 'JGI', src: '/images/clients/jgi.png', alt: 'JGI Juntendo Genomics Innovation logo' },
    { name: 'Johnson & Johnson', src: '/images/clients/johnson-and-johnson.png', alt: 'Johnson & Johnson logo' },
    { name: 'Lionbridge', src: '/images/clients/lionbridge.png', alt: 'Lionbridge logo' },
    { name: 'Neo Genomics', src: '/images/clients/neo-genomics.png', alt: 'Neo Genomics logo' },
  ];

  return (
    <ClientLogoMarquee
      title="Clients Who Trust Us"
      logos={clientLogos}
      speed="medium"
      pauseOnHover={true}
      variant="standard"
      className="bg-white py-16"
    />
  );
};

// Our Locations Section Component
const LocationsSection = () => {
  const [activeTab, setActiveTab] = useState('boston');

  const locations = {
    boston: {
      name: 'Boston Headquarters',
      address: '223 Needham Street, Newton, MA 02464',
      phone: '+1 617 340 3850',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.8911553224796!2d-71.21107492346469!3d42.338546371188435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f4c2b8b30d%3A0x3d2d3b3e3b3b3b3b!2s223%20Needham%20St%2C%20Newton%2C%20MA%2002464!5e0!3m2!1sen!2sus!4v1234567890123',
      directionsUrl: 'https://www.google.com/maps/dir//223+Needham+Street,+Newton,+MA+02464',
    },
    newyork: {
      name: 'New York Office',
      address: 'New York, NY',
      phone: '+1 617 340 3850',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976373946234!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123',
      directionsUrl: 'https://www.google.com/maps/dir//New+York,+NY',
    },
    westcoast: {
      name: 'West Coast Office',
      address: 'West Coast, USA',
      phone: '+1 617 340 3850',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-122.67563073946234!3d37.76999404865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808583a3a688d7b5%3A0x8c891b8b0c0c0c0c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123',
      directionsUrl: 'https://www.google.com/maps/dir//San+Francisco,+CA',
    },
    emea: {
      name: 'EMEA Office',
      address: 'EMEA',
      phone: '+1 617 340 3850',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5431419362903!2d-0.14189092346469!3d51.50735337118843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1234567890123',
      directionsUrl: 'https://www.google.com/maps/dir//London,+UK',
    },
    latinamerica: {
      name: 'Latin America Office',
      address: 'Latin America',
      phone: '+1 617 340 3850',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.1431419362903!2d-46.63318992346469!3d-23.55052037118843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sS%C3%A3o%20Paulo%2C%20Brazil!5e0!3m2!1sen!2sus!4v1234567890123',
      directionsUrl: 'https://www.google.com/maps/dir//Sao+Paulo,+Brazil',
    },
  };

  const tabs = [
    { id: 'boston', label: 'Boston Headquarters' },
    { id: 'newyork', label: 'New York Office' },
    { id: 'westcoast', label: 'West Coast Office' },
    { id: 'emea', label: 'EMEA Office' },
    { id: 'latinamerica', label: 'Latin America Office' },
  ];

  const currentLocation = locations[activeTab];

  return (
    <Section className="bg-gray-50" spacing="xl">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Locations
          </h2>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-accent-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Location Details */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Address and Map */}
            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  {currentLocation.address}
                </p>
                <a 
                  href={`tel:${currentLocation.phone.replace(/\s/g, '')}`}
                  className="text-lg text-gray-700 hover:text-accent-600 transition-colors"
                >
                  {currentLocation.phone}
                </a>
              </div>

              <a
                href={currentLocation.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-accent-600 border-2 border-accent-600 rounded-lg font-semibold hover:bg-accent-600 hover:text-white transition-all duration-200"
              >
                Get Directions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Map */}
              <div className="mt-8">
                <div className="relative w-full h-64 rounded-lg overflow-hidden border-2 border-gray-200">
                  <iframe
                    src={currentLocation.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${currentLocation.name}`}
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Larger Map */}
            <div className="relative h-96 lg:h-full min-h-[400px]">
              <iframe
                src={currentLocation.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Full map of ${currentLocation.name}`}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

// Main Contact Page Component
export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactFormSection />
      <ClientsSection />
      <LocationsSection />
    </main>
  );
}
