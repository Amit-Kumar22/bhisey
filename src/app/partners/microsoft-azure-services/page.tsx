"use client";

import React from 'react';
import { ContactSection, TestimonialSlider, ClientLogoMarquee } from '@/components/reusable';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { ArrowRight, Shield, CheckCircle, Database, BarChart3, Lightbulb, Zap, Activity, Globe, Server, Cloud } from 'lucide-react';
import Image from 'next/image';

export default function MicrosoftAzureServicesPage() {
  const testimonials = [
    {
      quote: "Bhisey proved to be an exceptional choice for our development needs. They were much more of a partner to our startup than a vendor. The entire team treated our project like it was their own company, and the results showed that. Our customers were extremely pleased with the desktop and mobile applications. I would definitely recommend hiring Bhisey for any and all of your development needs.",
      author: "Andrew Duggan",
      title: "CEO, medQue",
      company: "",
      image: "/testimonials/andrew-duggan.jpg"
    },
    {
      quote: "As a conservation nonprofit, Bhisey has been critical to helping us revolutionize how we collect, manage, and store data. Their staff is incredibly passionate about the work we do and have been very flexible in finding solutions. Their tech staff is always available and incredibly quick to respond if there is ever an issue.",
      author: "Micah Jasny",
      title: "Botanical Coordinator, Native Plant Trust",
      company: "",
      image: "/testimonials/micah-jasny.jpg"
    }
  ];

  const clientLogos = [
    { name: 'City of Hope', src: '/logos/city-of-hope.png', alt: 'City of Hope' },
    { name: 'F-Secure', src: '/logos/f-secure.png', alt: 'F-Secure' },
    { name: 'Imprivata', src: '/logos/imprivata.png', alt: 'Imprivata' },
    { name: 'JGI', src: '/logos/jgi.png', alt: 'JGI' },
    { name: 'Johnson & Johnson', src: '/logos/johnson-and-johnson.png', alt: 'Johnson & Johnson' },
    { name: 'Lonbridge', src: '/logos/lonbridge.png', alt: 'Lonbridge' }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative bg-accent-500 text-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Microsoft Azure Development Services
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
                Future-proof your business with secure, scalable and compliant solutions on Microsoft Azure
              </p>
              <div className="mb-8">
                <p className="text-base leading-relaxed mb-4 opacity-90">
                  Bhisey is a certified Microsoft Azure partner specializing in application and platform engineering, optimization, and deployment. We leverage our extensive expertise to develop, manage, and deploy scalable and compliant cloud solutions on Microsoft&apos;s Azure platform.
                </p>
                <p className="text-base leading-relaxed opacity-90">
                  We empower Clients to accelerate the time-to-market of their critical software development projects by maximizing the advantages of Azure, regardless of their goals — migrating existing applications, modernizing legacy systems, or building cloud-native solutions.
                </p>
              </div>
              <button className="inline-flex items-center px-6 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors">
                Talk to Azure Experts
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="flex justify-end">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-accent-500 text-white px-4 py-2 rounded mb-2">
                      <span className="font-bold text-lg">Microsoft</span>
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Solutions Partner</div>
                    <div className="text-xs text-accent-600 font-semibold mt-1">
                      Digital & App Innovation
                    </div>
                    <div className="text-xs text-accent-600 font-semibold">
                      Azure
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Client Spotlight */}
      <Section className="bg-white py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Client Spotlight
            </h2>
            <p className="text-lg text-charcoal-light">
              Trusted by 350+ Clients Worldwide
            </p>
          </div>
          <ClientLogoMarquee logos={clientLogos} />
        </Container>
      </Section>

      {/* Why Consider Microsoft Azure Section */}
      <Section className="bg-accent-500 py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Consider Microsoft Azure for your Cloud Initiatives?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Compliance and Security */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Compliance and Security
              </h3>
              <p className="text-white/90 leading-relaxed">
                Azure offers the most extensive compliance coverage among public cloud providers. It is trusted by government and financial institutions, healthcare providers, and other regulated industries.
              </p>
            </div>

            {/* Open Source */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Open Source
              </h3>
              <p className="text-white/90 leading-relaxed">
                Azure has a robust and expansive set of services for running open source technology stacks, including Linux support, data bases, PaaS and Kubernetes.
              </p>
            </div>

            {/* Windows Server */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <Server className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Windows Server
              </h3>
              <p className="text-white/90 leading-relaxed">
                Azure offers flexible and cost-effective ways to run Windows Server applications in the cloud. You can build and deploy new Windows VMs or add hybrid capabilities to on-premises datacenters.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <TestimonialSlider
        testimonials={testimonials}
        title="Testimonials"
        className="bg-white"
      />

      {/* Why Bhisey Section */}
      <Section className="bg-accent-500 text-white py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Bhisey?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                90+ Projects on Azure
              </h3>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                55+ Certifications
              </h3>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <Activity className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                30+ Years of Excellence
              </h3>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6 text-white/90">
              Our clients choose Azure for its robust enterprise capabilities, seamless integration with Microsoft technologies, comprehensive set of hybrid cloud services and commitment to security and compliance. Azure is a great choice for global businesses due to its network of data centers worldwide, and those seeking to incorporate advanced analytics seamlessly into their applications with advanced AI and ML capabilities.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              Let Bhisey guide you on the journey to maximizing the full potential of Azure. With our track record of successful deployments, faster time-to-market, custom tailored flexible approach and diverse team of Azure experts, we are the right choice for your custom software development journey on Microsoft Azure.
            </p>
          </div>
        </Container>
      </Section>

      {/* Azure Development Services */}
      <Section className="bg-accent-500 py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Azure Development Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Azure Application Development Services */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Azure Application Development Services</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Microsoft Azure Application Development</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Legacy Application Modernization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Azure Integration Services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Cloud Optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Application Containerization</span>
                </li>
              </ul>
            </div>

            {/* Cloud Migration */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Cloud Migration</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>On-Premises, AWS, Azure migration to Microsoft Azure Platform</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Hybrid Cloud with Kubernetes</span>
                </li>
              </ul>
            </div>

            {/* Microsoft Azure DevOps Services */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Microsoft Azure DevOps Services</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>CI/CD Implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Infrastructure as a Code</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Quality Assurance, Automation, Orchestration and Testing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Software Release Automation on Microsoft Azure Platform</span>
                </li>
              </ul>
            </div>

            {/* Azure Managed Services */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Azure Managed Services</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Azure Infrastructure Modernization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>24x7 Managed Services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Application Support and Maintenance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Business Intelligence Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-white mb-6">Business Intelligence andAnalytics on Azure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Microsoft Azure Data Warehousing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Business Intelligence Solutions</span>
                </li>
              </ul>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Predictive Analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Let Us Help You Section */}
      <Section className="bg-white py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Let Us Help You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Modernize your applications
              </h3>
              <p className="text-charcoal-light">
                for improved performance, security, and user experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Optimize your data storage
              </h3>
              <p className="text-charcoal-light">
                for better accessibility, scalability, and cost efficiency.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Gain actionable insights
              </h3>
              <p className="text-charcoal-light">
                from your data with advanced analytics solutions.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors">
              Let&apos;s Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </Container>
      </Section>

      {/* Case Studies */}
      <CaseStudiesSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}

// Case Studies Section Component
function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Native Plant Trust: Conserving and Promoting New England Native Rare Plants to Ensure...",
      image: "/case-studies/native-plant-trust.jpg",
      link: "#"
    },
    {
      title: "Enhancing Data Management and Application Efficiency for a Leading Fleet Solutions Provider",
      image: "/case-studies/fleet-management.jpg",
      link: "#"
    },
    {
      title: "Astellas: Business-Critical Ethics and Compliance Platform Development",
      image: "/case-studies/astellas.jpg",
      link: "#"
    }
  ];

  return (
    <Section className="bg-accent-500 py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-accent-100 relative">
                <div className="w-full h-full bg-gradient-to-br from-accent-200 to-accent-300 flex items-center justify-center">
                  <Cloud className="w-16 h-16 text-accent-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 line-clamp-3 leading-tight">
                  {study.title}
                </h3>
                <a
                  href={study.link}
                  className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}