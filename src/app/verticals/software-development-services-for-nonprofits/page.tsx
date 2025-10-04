'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// Layout components
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

// Reusable components
import { ContactSection } from '@/components/reusable/ContactSection';
import { ClientLogoMarquee } from '@/components/reusable/ClientLogoMarquee';

// Page component
export default function NonprofitSoftwareDevelopmentPage() {
  // Client logos data
  const clientLogos = [
    { name: 'City of Hope', src: '/images/clients/city-of-hope.png', alt: 'City of Hope logo' },
    { name: 'F-Secure', src: '/images/clients/f-secure.png', alt: 'F-Secure logo' },
    { name: 'Imprivata', src: '/images/clients/imprivata.png', alt: 'Imprivata logo' },
    { name: 'JGI', src: '/images/clients/jgi.png', alt: 'JGI logo' },
    { name: 'Johnson and Johnson', src: '/images/clients/johnson-and-johnson.png', alt: 'Johnson and Johnson logo' },
    { name: 'Lionbridge', src: '/images/clients/lionbridge.png', alt: 'Lionbridge logo' },
  ];

  // Nonprofit service categories
  const nonprofitServices = [
    {
      title: 'Event Management',
      icon: '📅',
      description: 'Comprehensive event planning and management platforms'
    },
    {
      title: 'Donor Management',
      icon: '📊',
      description: 'Advanced donor relationship and fundraising systems'
    },
    {
      title: 'Volunteer Management',
      icon: '👥',
      description: 'Streamlined volunteer coordination and scheduling'
    },
    {
      title: 'Custom Nonprofit CRM',
      icon: '💼',
      description: 'Tailored customer relationship management solutions'
    },
    {
      title: 'Membership Platforms',
      icon: '👤',
      description: 'Robust membership management and engagement systems'
    },
    {
      title: 'Nonprofit Process Automation',
      icon: '⚙️',
      description: 'Automated workflows for operational efficiency'
    },
    {
      title: 'Data Analytics and Insights',
      icon: '📈',
      description: 'Comprehensive reporting and analytics dashboards'
    },
    {
      title: 'Grant Management',
      icon: '💰',
      description: 'End-to-end grant application and tracking systems'
    },
    {
      title: 'Compliance and Reporting',
      icon: '🛡️',
      description: 'Regulatory compliance and automated reporting tools'
    }
  ];

  // Four key benefits
  const keyBenefits = [
    {
      title: 'LEVERAGING 30+ YEARS OF BEST PRACTICES',
      description: 'In custom software development, deployment, quality assurance and maintenance',
      icon: '⏰',
      bgColor: 'bg-teal-700'
    },
    {
      title: 'SOLUTIONS TAILORED TO YOUR BUSINESS',
      description: 'Bhisey engineering teams understand the software development lifecycle and business drivers of our customers\' products and possess the expertise to help them get their development done right...and fast',
      icon: '🎯',
      bgColor: 'bg-teal-600'
    },
    {
      title: 'TEAMS THAT FEEL LIKE AN EXTENSION OF YOUR OWN',
      description: 'We invest in building custom software development teams with shared goals and sense of ownership that seamlessly blend with clients\' business processes, methodologies and practices',
      icon: '🤝',
      bgColor: 'bg-teal-600'
    },
    {
      title: '<3% FLEXIBLE AND COST-EFFECTIVE SOLUTIONS',
      description: 'Bhisey has perfected a clean, economical approach for entering and exiting your custom software development, maintenance and quality assurance processes at the right time, using the right resources',
      icon: '⚖️',
      bgColor: 'bg-teal-700'
    }
  ];

  // Pillars of success
  const pillarsOfSuccess = [
    {
      title: 'On Time and On Budget',
      description: 'We respect tight deadlines and budgets, assuming full accountability so you can meet your targets with confidence.',
      icon: '⏱️'
    },
    {
      title: 'Quality from Day One',
      description: 'Quality assurance is integrated into every phase of our project plan and resource allocation throughout the entire development lifecycle.',
      icon: '📊'
    },
    {
      title: 'Secure from the Ground up',
      description: 'We proactively design and implement robust security at all levels, from authentication & authorization to communication & data protection.',
      icon: '🛡️'
    },
    {
      title: 'Architected for Scale',
      description: 'Our solutions are designed to handle increasing data and user loads, ensuring consistent performance as your business grows.',
      icon: '📈'
    },
    {
      title: 'Adaptable to Change',
      description: 'Our products are implemented and documented with your future needs in mind, allowing for seamless knowledge transfer and easy extensibility.',
      icon: '🔄'
    }
  ];

  // Awards data
  const awards = [
    { name: 'Clutch', logo: '/images/awards/clutch.png' },
    { name: 'Inc 5000', logo: '/images/awards/inc5000.png' },
    { name: 'Excellence Award', logo: '/images/awards/excellence.png' },
    { name: 'Google Cloud Partner', logo: '/images/awards/google-cloud.png' },
    { name: 'AWS Advanced Consulting Partner', logo: '/images/awards/aws.png' },
    { name: 'Microsoft Gold Partner', logo: '/images/awards/microsoft.png' },
    { name: 'ISO 27001', logo: '/images/awards/iso27001.png' }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-900 via-orange-600 to-orange-400 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <nav className="flex items-center justify-center space-x-2 text-sm mb-8 opacity-90">
              <Link href="/" className="hover:text-orange-200 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/verticals" className="hover:text-orange-200 transition-colors">
                Verticals
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-orange-200">Nonprofit Software Development</span>
            </nav>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Nonprofit Software Development
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed mb-10 text-orange-100 max-w-5xl mx-auto">
              Whether you are looking to Grow, Inspire or Scale your nonprofit organization Bhisey is 
              here to help. We are humbled to be a part of a mission and journeys of many nonprofits 
              working on a technical side to help scale charitable projects, improve children&apos;s 
              well-being, foster lifelong learning, and preserve native plants. Our expertise lies in 
              developing, customizing, and enhancing the technology solutions that drive your impact.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-10 text-orange-100 max-w-4xl mx-auto">
              Let us handle your software development needs, from fundraising and donation platforms to 
              document workflows, CRM and data insights, so you can focus on making a difference.
            </p>
            
            <Link
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-orange-600 bg-white rounded-lg hover:bg-orange-50 transition-colors duration-200"
            >
              Talk to an Expert
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Client Spotlight Section */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Client Spotlight
            </h2>
            <p className="text-lg text-charcoal-light">
              Trusted by 350+ Clients Worldwide
            </p>
          </div>
          
          <ClientLogoMarquee
            logos={clientLogos}
            showTitle={false}
            speed="slow"
            className="py-0"
          />
        </Container>
      </Section>

      {/* Nonprofit Software Development Challenges Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-8">
              Nonprofit Software Development
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-charcoal mb-12">
              Challenges. Solved.
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed text-charcoal-light max-w-6xl mx-auto">
              We utilize our 30-year success track record, in-depth domain and technical knowledge to effectively and cost-
              efficiently tackle a variety of software development nonprofits might encounter including cloud engineering and 
              migration, scalability issues, cybersecurity, automation, data analytics and visualization, and integration of AI.
            </p>
          </div>
          
          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {nonprofitServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-200 border border-gray-200">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">{service.title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Four Key Benefits Section */}
      <Section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className={`${benefit.bgColor} text-white p-8 rounded-lg`}>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{benefit.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold mb-4 leading-tight">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed opacity-90">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* The Bhisey Difference Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-600 mb-6">
              The Bhisey Difference
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Partner by Design',
                icon: '🤝',
                linkText: 'Learn More',
                href: '/why-Bhisey/partner-by-design'
              },
              {
                title: 'Product Driven Engagement',
                icon: '⚡',
                linkText: 'Learn More',
                href: '/why-Bhisey/product-driven-engagement'
              },
              {
                title: 'People You Can Count On',
                icon: '👥',
                linkText: 'Learn More',
                href: '/why-Bhisey/people-you-can-count-on'
              },
              {
                title: 'Proven Success',
                icon: '✅',
                linkText: 'Learn More',
                href: '/why-Bhisey/proven-success'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">{item.title}</h3>
                <Link 
                  href={item.href}
                  className="text-accent-600 hover:text-accent-700 font-medium flex items-center justify-center"
                >
                  {item.linkText}
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Transforming Great Ideas Section */}
      <Section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Transforming Great Ideas
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal">
              into Amazing Products
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Native Plant Trust: Conserving and Promoting New England Native Rare Plants to Ensure...',
                description: 'Learn More',
                image: '/images/case-studies/native-plant-trust.jpg',
                href: '/case-studies/native-plant-trust'
              },
              {
                title: 'Data-Driven Aid: Scaling Data Management for Global Nonprofit Impact',
                description: 'Learn More',
                image: '/images/case-studies/data-driven-aid.jpg',
                href: '/case-studies/data-driven-aid'
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                <div className="relative h-48 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <div className="text-white text-6xl">
                    {index === 0 ? '🌱' : '🌍'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-4 leading-tight">{caseStudy.title}</h3>
                  <Link
                    href={caseStudy.href}
                    className="text-accent-600 hover:text-accent-700 font-medium flex items-center"
                  >
                    Learn More
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pillars of Product Success Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Pillars of Product Success
            </h2>
            <p className="text-lg text-charcoal-light max-w-4xl mx-auto">
              Each project we undertake is anchored in our five pillars of success, providing 
              a strong foundation for a product that not only meets your goals today, but can 
              also scale and grow to serve you well into the future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillarsOfSuccess.map((pillar, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{pillar.icon}</div>
                <h3 className="text-lg font-semibold text-charcoal mb-4">{pillar.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Awards and Partnerships Section */}
      <Section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Awards and Partnerships
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 items-center">
            {awards.map((award, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">{
                    award.name === 'Clutch' ? '🏆' :
                    award.name === 'Inc 5000' ? '🚀' :
                    award.name === 'Excellence Award' ? '⭐' :
                    award.name === 'Google Cloud Partner' ? '☁️' :
                    award.name === 'AWS Advanced Consulting Partner' ? '🛠️' :
                    award.name === 'Microsoft Gold Partner' ? '💎' :
                    '🔒'
                  }</span>
                </div>
                <p className="text-xs font-medium text-charcoal text-center">{award.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <ContactSection 
        title="See How We Can Help you Advance with our Software Development Services"
        subtitle=""
      />
    </main>
  );
}