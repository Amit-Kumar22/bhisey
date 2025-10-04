"use client";

import React from 'react';
import { ContactSection, TestimonialSlider, ClientLogoMarquee } from '@/components/reusable';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { ArrowRight, Cloud, Shield, Zap, Database, BarChart3, Lightbulb, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function AWSServicesPage() {
  const testimonials = [
    {
      quote: "On the product and technology side of our business, Bhisey is our most valuable and trusted partner. Their team members have become invaluable, long-term members of our Development, QA, and Product teams. At Appex, we've standardized on AWS, and Bhisey has been instrumental in our buildout and ongoing AWS cloud operations across our portfolio.",
      author: "Justin Bingham",
      title: "CTO, Appex",
      company: "",
      image: "/testimonials/justin-bingham.jpg"
    },
    {
      quote: "Bhisey Software has been our go-to partner for AWS-built cloud solutions from basic application development to complex data analytics. Bhisey took on the challenges with our startup team and brought the necessary technical expertise and rigorous processes to help transform ideas into an innovative end-to-end managed service, from initial platform architecture thinking to the final launch of our service. Bhisey employees are always professional and courteous; their team always comes up with thoughtful, elegant technical solutions to difficult problems.",
      author: "Alan Bugos",
      title: "Head of Technology, LifePod Solutions, Inc.",
      company: "",
      image: "/testimonials/alan-bugos.jpg"
    }
  ];

  const clientLogos = [
    { name: 'Brigham and Women\'s Hospital', src: '/logos/brigham-womens-hospital.png', alt: 'Brigham and Women\'s Hospital' },
    { name: 'City of Hope', src: '/logos/city-of-hope.png', alt: 'City of Hope' },
    { name: 'F-Secure', src: '/logos/f-secure.png', alt: 'F-Secure' },
    { name: 'Imprivata', src: '/logos/imprivata.png', alt: 'Imprivata' },
    { name: 'JGI', src: '/logos/jgi.png', alt: 'JGI' },
    { name: 'Johnson & Johnson', src: '/logos/johnson-and-johnson.png', alt: 'Johnson & Johnson' }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative bg-accent-500 text-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-accent-300">
                AWS Development Services &amp; Solutions
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
                Fuel your business growth with secure, robust and scalable solutions on AWS
              </p>
              <div className="mb-8">
                <p className="text-base leading-relaxed mb-4">
                  Bhisey is a reliable non-reseller cloud agnostic Advanced Tier Services partner in AWS development, management, optimization, automation, and deployment. We help clients to develop custom applications on AWS tailored to their unique business requirements and budget. From innovative startups to large enterprises, we leverage our thorough expertise to deliver, manage, and deploy scalable cloud solutions.
                </p>
                <p className="text-base leading-relaxed">
                  With over eight years as an AWS trusted services provider, Bhisey reduces time to the market and ensures that client cloud initiatives adhere to the best practices set by AWS.
                </p>
              </div>
              <button className="inline-flex items-center px-6 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors">
                Talk to AWS Experts
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="flex justify-end">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
                <div className="w-64 h-32 bg-white rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">aws</div>
                    <div className="text-xs text-gray-600 border border-gray-300 px-2 py-1 rounded">
                      PARTNER
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Advanced Tier Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Unlock Cloud Agility Section */}
      <Section className="bg-white py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Unlock Cloud Agility and Security with Bhisey&apos;s Expertise
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Supercharge Innovation */}
            <div className="bg-accent-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Supercharge Your Innovation
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                Get your new features and app updates to market faster. The Bhisey team will also improve your service level agreements (SLAs) and minimize downtime with reduced Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs)
              </p>
            </div>

            {/* Scale Seamlessly */}
            <div className="bg-accent-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Scale Seamlessly
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                Leverage the power of AWS to &quot;scale up&quot; and &quot;scale down&quot; your resources effortlessly, ensuring your applications are always available and meet demand.
              </p>
            </div>

            {/* Uncompromising Security */}
            <div className="bg-accent-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Uncompromising Security
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                Rest assured your data is always protected with our end-to-end privacy and security solutions. Bhisey adheres to the strictest industry standards and ensures IP protection, the integrity and confidentiality of your information.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Trusted AWS experts */}
            <div className="bg-accent-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Trusted AWS experts
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                We are an authorized AWS Advanced Tier Services partner with over 350+ successful projects, meaning we have the expertise to evaluate and optimize your cloud environment for peak efficiency and security.
              </p>
            </div>

            {/* Optimize Your Costs */}
            <div className="bg-accent-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Optimize Your Costs
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                We&apos;ll modernize your infrastructure and solutions using the most cost-effective methods available, without compromising performance or security.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Client Spotlight */}
      <Section className="bg-accent-50 py-16">
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

      {/* AWS Development Services */}
      <Section className="bg-accent-500 text-white py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent-300">
              AWS Development Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* AWS Application Development */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">AWS Application Development</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>AWS Web and Mobile Application Development</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Legacy Application Modernization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>AWS Integration Services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>AWS Optimization</span>
                </li>
              </ul>
            </div>

            {/* Cloud Migration */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Cloud Migration</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>On-Premises, GCP, Azure migration to AWS Platform</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Hybrid Cloud</span>
                </li>
              </ul>
            </div>

            {/* Cloud DevOps-as-a-Service */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Cloud DevOps-as-a-Service</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>AWS Native CI/CD</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Infrastructure as a Code</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>AWS Automation, Orchestration and Testing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Software Release Automation on AWS</span>
                </li>
              </ul>
            </div>

            {/* Cloud Managed Services */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Cloud Managed Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Infrastructure Modernization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>24x7 AWS Managed Services</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Business Intelligence Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">Business Intelligence and Analytics on AWS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Data Warehousing on AWS</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Cloud Business Intelligence Solutions</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Predictive Analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>ML and AI Services</span>
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
              <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Modernize your applications
              </h3>
              <p className="text-charcoal-light">
                for improved performance, security, and user experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Optimize your data storage
              </h3>
              <p className="text-charcoal-light">
                for better accessibility, scalability, and cost efficiency.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-accent-600" />
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
            <button className="inline-flex items-center px-8 py-4 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors">
              Let&apos;s Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <TestimonialSlider
        testimonials={testimonials}
        title="Testimonials"
        className="bg-background-light"
      />

      {/* Technical Expertise */}
      <TechnicalExpertiseSection />

      {/* Why Bhisey */}
      <Section className="bg-accent-500 text-white py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent-300">
              Why Bhisey?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                AWS Advanced Services Partner since 2016
              </h3>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                350+ Completed Projects on AWS
              </h3>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                30+ Years of Excellence
              </h3>
            </div>
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

// Technical Expertise Section Component
function TechnicalExpertiseSection() {
  const [activeTab, setActiveTab] = React.useState('DevOps');

  const tabs = [
    'DevOps', 'Mobile', 'Application', 'Data and Analytics', 
    'Infrastructure', 'AI and Machine Learning Section', 
    'Security, Identity & Compliance', 'Management & Governance'
  ];

  const awsServices = [
    { name: 'AWS CodeCommit', icon: '/aws-icons/codecommit.svg' },
    { name: 'AWS CodeDeploy', icon: '/aws-icons/codedeploy.svg' },
    { name: 'AWS CodePipeline', icon: '/aws-icons/codepipeline.svg' },
    { name: 'Amazon CloudWatch', icon: '/aws-icons/cloudwatch.svg' },
    { name: 'AWS Service Catalog', icon: '/aws-icons/service-catalog.svg' },
    { name: 'AWS Config', icon: '/aws-icons/config.svg' },
    { name: 'AWS CloudFormation', icon: '/aws-icons/cloudformation.svg' },
    { name: 'AWS OpsWorks', icon: '/aws-icons/opsworks.svg' }
  ];

  return (
    <Section className="bg-white py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Technical Expertise
          </h2>
          <p className="text-lg text-charcoal-light max-w-4xl mx-auto">
            As an AWS Advanced Consulting Partner, we offer robust expertise across a diverse spectrum of AWS technologies, supported by the successful completion of over 350+ projects.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-accent-600 text-white'
                  : 'bg-accent-100 text-charcoal hover:bg-accent-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* AWS Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {awsServices.map((service) => (
            <div
              key={service.name}
              className="bg-accent-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 border">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-600 rounded"></div>
              </div>
              <h3 className="text-sm font-medium text-charcoal">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// Case Studies Section Component
function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Bhisey supports Trapelo on the journey to AWS Cloud ensuring HIPAA-Compliance",
      image: "/case-studies/trapelo-lab.jpg",
      link: "#"
    },
    {
      title: "Engineering Takeover and Full Platform Development for a Globally Recognized Healthcare Provider",
      image: "/case-studies/healthcare-provider.jpg",
      link: "#"
    }
  ];

  return (
    <Section className="bg-white py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-accent-100 relative">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4 line-clamp-3">
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