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
export default function DigitalHealthSoftwareDevelopmentPage() {
  // Client logos data
  const clientLogos = [
    { name: 'Brigham and Womens Hospital', src: '/images/clients/brigham.png', alt: 'Brigham and Womens Hospital logo' },
    { name: 'City of Hope', src: '/images/clients/city-of-hope.png', alt: 'City of Hope logo' },
    { name: 'Imprivata', src: '/images/clients/imprivata.png', alt: 'Imprivata logo' },
    { name: 'Johnson and Johnson', src: '/images/clients/johnson-and-johnson.png', alt: 'Johnson and Johnson logo' },
    { name: 'Neo Genomics', src: '/images/clients/neo-genomics.png', alt: 'Neo Genomics logo' },
    { name: 'Sartorius', src: '/images/clients/sartorius.png', alt: 'Sartorius logo' },
    { name: 'ShareCare', src: '/images/clients/share-care.png', alt: 'ShareCare logo' },
    { name: 'Acumen', src: '/images/clients/acumen.png', alt: 'Acumen logo' },
    { name: 'Astellas', src: '/images/clients/astellas.png', alt: 'Astellas logo' },
    { name: 'Red Nucleus', src: '/images/clients/red-nucleus.png', alt: 'Red Nucleus logo' },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "I have had a very positive experience working with Bhisey over the past eight years. They have partnered with us in designing and building very sophisticated applications in the use of precision medicine for cancer therapy selection. I highly recommend them for their expertise, professionalism and value.",
      author: "Clynt Taylor",
      title: "CEO",
      company: "Trapelo"
    },
    {
      quote: "Bhisey Software acts as a core member of our team, and they have been involved in all of our major projects. They helped us build a mobile-first website, as well as a lot of features and functions on several of our products. Bhisey has performed really well. Their team has really helped to bring our numbers up.",
      author: "Matt Racki",
      title: "CTO", 
      company: "Epion Health"
    }
  ];

  // Healthcare expertise areas
  const healthTechExpertise = [
    { 
      title: 'Digital Therapeutics', 
      icon: '📱',
      description: 'Evidence-based therapeutic interventions driven by high quality software programs'
    },
    { 
      title: 'Telemedicine', 
      icon: '💻',
      description: 'Remote healthcare delivery and virtual consultation platforms'
    },
    { 
      title: 'Insurance Technology', 
      icon: '🏥',
      description: 'Claims processing, underwriting, and risk assessment solutions'
    },
    { 
      title: 'Precision Medicine', 
      icon: '🧬',
      description: 'Personalized treatment approaches based on individual characteristics'
    },
    { 
      title: 'EHR/EMR', 
      icon: '📋',
      description: 'Electronic health and medical records management systems'
    },
    { 
      title: 'Medical Device and SaMD', 
      icon: '🩺',
      description: 'Software as Medical Device development and integration'
    },
    { 
      title: 'Diagnostics', 
      icon: '🔬',
      description: 'Laboratory information systems and diagnostic tools'
    },
    { 
      title: 'Laboratory Services', 
      icon: '⚗️',
      description: 'Lab workflow optimization and data management'
    },
    { 
      title: 'Provider Financials', 
      icon: '💰',
      description: 'Revenue cycle management and financial reporting'
    },
    { 
      title: 'Patient Monitoring', 
      icon: '❤️',
      description: 'Real-time patient data collection and analysis'
    }
  ];

  // Product aspirations items
  const productAspirations = [
    {
      title: 'HIPAA-Compliant Software Development',
      description: 'We are a trusted partner for healthcare organizations seeking to navigate the complex landscape of HIPAA-compliant software development. With 30+ years of experience and a proven track record helping clients bring award-winning healthcare solutions to the market, we offer end-to-end software engineering services, from product design and development to deployment and support. We empower your software development lifecycle, reducing time to market and mitigating risks, and ultimately enhancing your ability to deliver innovative solutions that transform healthcare and enhance patient outcomes.',
      icon: '🔒'
    },
    {
      title: 'Data Engineering',
      description: 'Streamline your data from multiple sources into a unified system. Our highly experienced data engineers build scalable yet flexible ETL and ELT pipelines that seamlessly integrate data in different formats, with different structures, and via different APIs and custom connectors. Data platforms we help clients build are scalable, secure, and can handle the increasing data volumes.',
      icon: '📊'
    },
    {
      title: 'Data Warehousing',
      description: 'Take advantage of Bhisey\'s excellence in building robust and reliable databases, warehouses, and data lakes that serve as a central',
      icon: '🏬'
    }
  ];

  // Pillars of success
  const pillarsOfSuccess = [
    {
      title: 'On Time and On Budget',
      description: 'We respect tight deadlines and budgets, assuming full accountability to ensure you can meet your targets with confidence.',
      icon: '⚖️'
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

  // Time to market features
  const timeToMarketFeatures = [
    {
      title: 'US-based Project Leadership',
      description: 'Our Delivery Manager is a senior technology leader that becomes an extension of your product team, ensuring your milestones and goals are met from kickoff to delivery.',
      icon: '👑'
    },
    {
      title: 'Optimized Global Talent and Skill Mix',
      description: 'Our teams are strategically staffed with a blend of onshore and offshore talent to deliver industry-leading breadth and depth of skills while optimizing delivery costs.',
      icon: '🌍'
    },
    {
      title: 'On-demand Hard-to-find Experts',
      description: 'Specialized resources like business analysts, architects, DevSecOps, AI/ML and others can be added on-demand to accelerate delivery times while minimizing overhead costs.',
      icon: '👥'
    },
    {
      title: 'Cost-effective US-based UX Talent',
      description: 'Our partnership with Bentley University\'s User Experience Center enables us to deliver award-winning designs and user experiences at an affordable price point.',
      icon: '🎨'
    }
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
              <span className="text-orange-200">Healthcare Software Development</span>
            </nav>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Healthcare Software Development
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed mb-10 text-orange-100">
              30 years of experience improving patient outcomes with HIPAA-compliant software 
              solutions across the entire healthcare ecosystem. We empower companies to solve 
              development, interoperability, integration, compliance, security and innovation challenges.
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
              Trusted by over 100 Healthcare Companies
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

      {/* Healthcare Product Challenges Section */}
      <Section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Healthcare Product Challenges? Solved.
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-orange-100">
              New development requests outpacing your team capacity?
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-orange-600 bg-white rounded-lg hover:bg-orange-50 transition-colors duration-200"
            >
              Talk to our Healthcare Experts
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* The Bhisey Difference Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
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
                  className="text-orange-600 hover:text-orange-700 font-medium flex items-center justify-center"
                >
                  {item.linkText}
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* In-Depth Knowledge Section */}
      <Section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              In-Depth Knowledge of Compliance,
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-8">
              Security and Healthcare Technologies
            </h3>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-200">
              {[
                'HITRUST, HIPAA, FDA, CLIA, NIST',
                'HL7, FHIR', 
                'EHR/EMR (Epic, Athena, Cerner, etc.)',
                'Compliance with ISO27001, SOC2, ISO9001',
                'Acute Care clinical and administrative workflows and data stack such as ADT, laboratory results, observations, medication orders, billing',
                'Clinical Genomics and Precision Medicine data processing and analytics',
                'Common healthcare industry standards and nomenclatures: UB, ICD, CPT, DSM, SNOMED, LOINC, NCD, RxNorm, DiagnosisRx, and radiology imaging (DICOM)'
              ].map((item, index) => (
                <div key={index} className="px-6 py-4">
                  <p className="text-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Diverse HealthTech Expertise Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Diverse HealthTech Expertise at your
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal">
              Fingertips
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {healthTechExpertise.map((item, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              We turn Ideas into Products. Challenges
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal">
              into Wins. Product Owners into Heroes.
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="text-lg font-semibold text-orange-600">
                    {testimonial.company === 'Trapelo' ? '🧬 trapelo' : '💊 epion health'}
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-lg font-semibold text-charcoal">{testimonial.author}</p>
                  <p className="text-charcoal-light">{testimonial.title}, {testimonial.company}</p>
                </div>
                
                <div className="text-orange-600 text-2xl mb-4">&ldquo;</div>
                <blockquote className="text-charcoal leading-relaxed mb-6">
                  {testimonial.quote}
                </blockquote>
                <div className="text-orange-600 text-2xl text-right">&rdquo;</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Awards Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Awards and Recognition
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: 'ISO 27001', icon: '🔒' },
              { name: 'IAOP 2024', icon: '🌐' },
              { name: 'Health Tech Digital', icon: '🏆' },
              { name: 'BioIT World', icon: '🥇' },
              { name: 'Clutch', icon: '⭐' },
              { name: 'Inc 5000', icon: '🚀' }
            ].map((award, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2 opacity-60 hover:opacity-100 transition-opacity">
                  {award.icon}
                </div>
                <p className="text-sm font-medium text-charcoal">{award.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Your Product Aspirations Section */}
      <Section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Your Product Aspirations. Delivered
            </h2>
          </div>
          
          <div className="space-y-12">
            {productAspirations.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="flex items-start space-x-6">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-4">{item.title}</h3>
                    <p className="text-charcoal-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-200"
            >
              Talk to our Engineering Experts
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Designed to Reduce Time to Market Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Designed to Reduce Time to Market
            </h2>
            <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
              Every project team is structured to optimize your product delivery goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timeToMarketFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-4">{feature.title}</h3>
                    <p className="text-charcoal-light leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pillars of Product Success Section */}
      <Section className="py-20 bg-gray-50">
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
              <div key={index} className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{pillar.icon}</div>
                <h3 className="text-lg font-semibold text-charcoal mb-4">{pillar.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Transforming Great Ideas Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Transforming Great Ideas
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal">
              into Amazing Products
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Engineering Takeover and Full Platform Development for a Globally Recognized Healthcare Solutions Provider',
                href: '/case-studies/full-platform-development-for-a-healthcare-solutions-provider'
              },
              {
                title: 'Bhisey supports Trapelo on the journey to AWS Cloud ensuring HIPAA-Compliance',
                href: '/case-studies/Bhisey-supports-trapelo-on-the-journey-to-aws-cloud-ensuring-hipaa-compliance'
              },
              {
                title: 'Astellas: Business-Critical Ethics and Compliance Platform Development',
                href: '/case-studies/astellas-business-critical-ethics-and-compliance-platform-development'
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <div className="text-white text-6xl">
                    {index === 0 ? '🏥' : index === 1 ? '☁️' : '⚖️'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-4">{caseStudy.title}</h3>
                  <Link
                    href={caseStudy.href}
                    className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
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

      {/* Contact Section */}
      <ContactSection 
        title="See How We Can Bring Your Product to Life"
        subtitle=""
      />
    </main>
  );
}