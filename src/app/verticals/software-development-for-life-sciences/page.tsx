'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';

// Layout components
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

// Reusable components
import { ContactSection } from '@/components/reusable/ContactSection';
import { TestimonialSlider } from '@/components/reusable/TestimonialSlider';

// Page component
export default function SoftwareDevelopmentForLifeSciencesPage() {
  // Client logos data
  const clientLogos = [
    { name: 'Brigham and Women\'s Hospital', src: '/images/clients/brigham.png', alt: 'Brigham and Women\'s Hospital logo' },
    { name: 'City of Hope', src: '/images/clients/city-of-hope.png', alt: 'City of Hope logo' },
    { name: 'F-Secure', src: '/images/clients/f-secure.png', alt: 'F-Secure logo' },
    { name: 'Imprivata', src: '/images/clients/imprivata.png', alt: 'Imprivata logo' },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "To build a prototype on time and on budget, that doesn't happen. For Bhisey to actually do that is a pretty big accomplishment. Bhisey Life Sciences team is very competent in building cloud-based applications in tight time requirements.",
      author: "Chris McCready",
      title: "Principal Research Scientist, Sartorius",
      company: "Sartorius",
      image: "/images/testimonials/chris-mccready.jpg"
    },
    {
      quote: "Bhisey Software proved to be top-notch in terms of their technical skills and high-quality deliverables. The detail-oriented team communicated seamlessly and managed the project well, despite a time zone difference. Their industry knowledge and technology insights added value to the partnership.",
      author: "John Gurman",
      title: "SVP Technology, Sermo",
      company: "Sermo",
      image: "/images/testimonials/john-gurman.jpg"
    }
  ];

  // Complexities data
  const complexities = [
    {
      title: "Alignment and Communication",
      description: "Scientists may struggle to see how digital tools can solve scientific questions. Conversely, engineers may not fully comprehend the scope of scientific research and its process.",
      icon: "🔗"
    },
    {
      title: "Data Complexities",
      description: "Intricate, ever-evolving data sets that require specialized processing and analysis capabilities. Translating this complexity into efficient, scalable software can be difficult.",
      icon: "📊"
    },
    {
      title: "Algorithm Development",
      description: "Accurately translating scientific processes into robust algorithms demands expertise in both life sciences and software development. Finding individuals with this dual skillset can be challenging.",
      icon: "⚙️"
    },
    {
      title: "Regulatory Compliance",
      description: "Ensuring compliance adds another layer of complexity to development and requires navigating intricate legal and ethical frameworks.",
      icon: "📋"
    },
    {
      title: "Integration & Compatibility",
      description: "Integrating the new software with existing systems and ensuring compatibility with diverse hardware and software environments can be a significant hurdle.",
      icon: "🔧"
    }
  ];

  // Bhisey bridges features
  const BhiseyBridgeFeatures = [
    {
      text: "Dedicated Life Sciences Experts with Engineering skills effectively bridge the gap between scientific vision and development objectives",
      icon: "🧬"
    },
    {
      text: "Cohesive and Agile Dedicated Engineering teams",
      icon: "👥"
    },
    {
      text: "Rapidly scale teams up (or down), maximizing efficiency",
      icon: "⚖️"
    },
    {
      text: "Rigorous Client IP protection, security and compliance adherence practices",
      icon: "🛡️"
    },
    {
      text: "Advanced UX/UI capabilities",
      icon: "🎨"
    },
    {
      text: "In-Depth AI/ML Expertise",
      icon: "🤖"
    }
  ];

  // Life Sciences Practice services
  const lifeSciencesPractice = [
    { title: "Application Design & Development", icon: "💻" },
    { title: "Omics Data Analytics and Visualization", icon: "📈" },
    { title: "Big Data Solutions & Data Warehousing", icon: "🗄️" },
    { title: "Data Management Workflows", icon: "🔄" },
    { title: "DevOps and DevSecOps as a Service", icon: "♾️" },
    { title: "AI/ML Solutions & Modeling", icon: "🧠" },
    { title: "Manufacturing Process Automation & Digitization", icon: "⚙️" },
    { title: "Regulatory Compliance Support", icon: "📋" }
  ];

  // AI for Life Sciences workflow
  const aiWorkflow = [
    {
      category: "R&D",
      color: "bg-orange-500",
      items: [
        "Target identification and validation",
        "Digital data flow",
        "Patient stratification",
        "Molecular Design"
      ]
    },
    {
      category: "Manufacturing",
      color: "bg-orange-400",
      items: [
        "Proactive quality control",
        "Automated batch release",
        "Optimize yield and output"
      ]
    },
    {
      category: "Supply Chain",
      color: "bg-orange-300",
      items: [
        "Self-healing supply chain",
        "Demand and supply planning"
      ]
    },
    {
      category: "Commercial",
      color: "bg-orange-200",
      items: [
        "AI omnichannel engagement",
        "Incorporate patient voice into product iterations",
        "Optimizing interactions with healthcare practitioners",
        "Advance patient literacy"
      ]
    }
  ];

  // Case studies
  const caseStudies = [
    {
      title: "Astellas: Business-Critical Ethics and Compliance Platform Development",
      image: "/images/case-studies/astellas.jpg",
      href: "/case-studies/astellas"
    },
    {
      title: "Biosimulation Tool Performing in Silico Experiments",
      image: "/images/case-studies/biosimulation.jpg",
      href: "/case-studies/biosimulation"
    },
    {
      title: "SafeTherapeutics: Improving Patient Outcomes by Reducing Adverse Drug Reactions",
      image: "/images/case-studies/safetherapeutics.jpg",
      href: "/case-studies/safetherapeutics"
    }
  ];

  // Related articles
  const relatedArticles = [
    {
      title: "11 Steps to Implementing a Successful Healthcare Management...",
      description: "According to the HIPAA Journal, from 2009 to 2023, there were 5,887 reported healthcare data breaches involving over 500 records. Hacking was the leading cause of these...",
      image: "/images/articles/healthcare-management.jpg",
      href: "/articles/healthcare-management"
    },
    {
      title: "4 Significant Advantages of Digital Transformation in the Real Estate Sector",
      description: "In the wake of the digital revolution, companies throughout every sector have sought new ways to integrate cutting-edge digital technologies into their existing business processes in order t...",
      image: "/images/articles/digital-transformation.jpg",
      href: "/articles/digital-transformation"
    },
    {
      title: "5 Applications of Knowledge Graphs in Life Sciences",
      description: "The global big data in healthcare market is projected to grow from $57 billion in 2023 to $156 billion by 2030, with a CAGR of 15.1% during the forecast period of 2023-2030...",
      image: "/images/articles/knowledge-graphs.jpg",
      href: "/articles/knowledge-graphs"
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
              <span className="text-orange-200">Software Development for Life Sciences</span>
            </nav>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Transforming Scientific Vision into Software Solutions
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed mb-10 text-orange-100">
              Accurately translating Scientific Processes into robust algorithms demands expertise in 
              both Life Sciences and Software Development. Whether you&apos;re grappling with complex 
              omics data sets, translating scientific ideas into algorithms, optimizing manufacturing 
              processes, or navigating regulatory landscapes, Bhisey is your partner in transforming 
              challenges into opportunities. Let us help you harness the power of software to 
              accelerate scientific progress and bring your life-changing innovations to the world.
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
          
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {clientLogos.map((logo, index) => (
              <div key={index} className="opacity-60 hover:opacity-100 transition-opacity">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Complexities Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-8">
              Accelerating Scientific Progress Through Software-powered Innovation
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-8">
              is riddled with Complexities
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {complexities.map((item, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-charcoal mb-4">{item.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bhisey Bridges the Gap Section */}
      <Section className="py-20 bg-gradient-to-br from-orange-800 to-orange-900 text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Bhisey Bridges the Gap
            </h2>
            <p className="text-xl text-orange-100">
              We Effectively Integrate Diverse Skill sets to Achieve Faster Time to Market
            </p>
          </div>
          
          <div className="space-y-6">
            {BhiseyBridgeFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl">{feature.icon}</div>
                <p className="text-lg">{feature.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* The Bhisey Difference Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
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
                linkText: 'Proven Success',
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

      {/* Life Sciences Practice At A Glance Section */}
      <Section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Life Sciences Practice At A Glance
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lifeSciencesPractice.map((service, index) => (
              <div key={index} className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-charcoal">{service.title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* From R&D to EHR Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              From R&D to EHR
            </h2>
            <p className="text-xl text-charcoal-light">
              Expertise spanning Science, Medtech and Software Engineering
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Central Circle */}
            <div className="flex items-center justify-center mb-12">
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-center">
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-semibold mb-2">CATALYST EXPERIENCE IN</div>
                    <div className="text-xl font-bold">MEDICAL & LIFE SCIENCE</div>
                  </div>
                </div>
                
                {/* Surrounding Labels */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="text-orange-300 text-sm font-medium">MEDICAL</div>
                </div>
                
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="text-orange-300 text-sm font-medium">LIFE SCIENCE</div>
                </div>
              </div>
            </div>
            
            {/* Surrounding Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {[
                { icon: "🔬", label: "Laboratory Services" },
                { icon: "❤️", label: "Patient Monitoring" },
                { icon: "🩺", label: "Diagnostic Imaging" },
                { icon: "💊", label: "Pharma & BioTech Research" },
                { icon: "📋", label: "Clinical Studies" },
                { icon: "⚖️", label: "Regulatory Submittal & Compliance" },
                { icon: "🧬", label: "DNA Analysis & Discovery" },
                { icon: "🧪", label: "Bioprocessing" },
                { icon: "💉", label: "Medical Devices" },
                { icon: "📊", label: "Electronic" },
                { icon: "📈", label: "Provider" },
                { icon: "🏭", label: "Manufacturing" },
                { icon: "🔬", label: "Diagnostic Instruments" },
                { icon: "💉", label: "Precision Medicine" },
                { icon: "💊", label: "IoMT" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-xs text-charcoal-light">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Testimonials
            </h2>
          </div>
          
          <TestimonialSlider
            testimonials={testimonials}
            showTitle={false}
            variant="standard"
            className="bg-gray-50"
          />
        </Container>
      </Section>

      {/* AI for Life Sciences Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              AI for Life Sciences
            </h2>
            <p className="text-lg text-charcoal-light max-w-4xl mx-auto">
              Bhisey Expertise spans from the discovery of biological mechanisms to early disease diagnostics, 
              drug discovery, care personalization and management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiWorkflow.map((category, index) => (
              <div key={index} className="space-y-4">
                <div className={`${category.color} text-white text-center py-3 px-6 rounded-lg font-semibold`}>
                  {category.category}
                </div>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-sm text-charcoal-light">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case Studies Section */}
      <Section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Case Studies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <div className="text-white text-6xl">
                    {index === 0 ? '⚖️' : index === 1 ? '🔬' : '💊'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-4">{caseStudy.title}</h3>
                  <Link
                    href={caseStudy.href}
                    className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Related Articles Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Related Articles
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <div className="text-white text-6xl">
                    {index === 0 ? '🩺' : index === 1 ? '🏠' : '🧠'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-4">{article.title}</h3>
                  <p className="text-sm text-charcoal-light mb-4 leading-relaxed">{article.description}</p>
                  <Link
                    href={article.href}
                    className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <ContactSection 
        title="Contact Us"
        subtitle=""
      />
    </main>
  );
}