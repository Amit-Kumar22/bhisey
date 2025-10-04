"use client";

import React from 'react';
import { ContactSection, TestimonialSlider, ClientLogoMarquee } from '@/components/reusable';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { ArrowRight, Cloud, Shield, Zap, Database, BarChart3, Globe, Users, CheckCircle, Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function GoogleCloudServicesPage() {
  const testimonials = [
    {
      quote: "They listen to and understand our needs and execute timely on viable plans. They help us from a strategic perspective to plan and build for our future process. Bhisey acts in the capacity of a consulting partner and understands our business. They are respectful of our budgets and proceed as such. The team produces high quality work and helps us iterate constantly to improve our product. Great people, have a great culture which translates to successful outcomes.",
      author: "Rob Feldman",
      title: "CEO, College Interactive",
      company: "",
      image: "/testimonials/rob-feldman.jpg"
    },
    {
      quote: "Bhisey put together an excellent team of business analysts, project managers, and technical resources who are seasoned, professional, and reliable with milestones. The team developed new data pipelines processing terabytes of data in GCP leveraging BigQuery, Python, TensorFlow, BigQuery's machine learning functionality for optimization, and dashboards in Data Studio for the reporting.",
      author: "Krishna Boppana",
      title: "Head of Technology, Havas",
      company: "",
      image: "/testimonials/krishna-boppana.jpg"
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Google Cloud Application Development Services
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
                Ignite Innovation and Accelerate Speed to Market with secure and scalable solutions on Google Cloud
              </p>
              <div className="mb-8">
                <p className="text-base leading-relaxed mb-4 opacity-90">
                  One-size-fits-all software can&apos;t deliver the competitive advantage you need in today&apos;s digital landscape. But building custom solutions often means struggling to find the right talent, fast enough. Partner with Bhisey to unlock full digital potential.
                </p>
                <p className="text-base leading-relaxed opacity-90">
                  As a trusted GCP partner, we will help you leverage the latest cloud-native tools to get you up and running quickly, so you can focus on what matters most: winning in the digital marketplace.
                </p>
              </div>
              <button className="inline-flex items-center px-6 py-3 bg-white text-accent-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Talk to GCP Experts
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="flex justify-end">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-center">
                  <Image
                    src="/partners/google-cloud-partner-logo.png"
                    alt="Google Cloud Partner"
                    width={200}
                    height={100}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Client Spotlight */}
      <Section className="bg-gray-50 py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Client Spotlight
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by 350+ Clients Worldwide
            </p>
          </div>
          <ClientLogoMarquee logos={clientLogos} />
        </Container>
      </Section>

      {/* Achieve Operational Agility Section */}
      <Section className="bg-accent-500 text-white py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Achieve Operational Agility, Reduce Costs and Improve Software Performance with Google Cloud
            </h2>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto opacity-90">
              Unlock the potential of your business with Bhisey and GCP, a dynamic catalyst for innovation that offers robust data analytics solutions, future-proof infrastructure, cutting-edge security capabilities and seamless orchestration through Kubernetes, ensuring efficient containerized application deployment and management.
            </p>
            <div className="mt-8">
              <p className="text-base leading-relaxed max-w-4xl mx-auto opacity-90">
                Our team of certified specialists has a proven track record of designing, building, and deploying flexible cloud architectures that align with your long-term business objectives. Throughout your cloud journey, we provide comprehensive support, including GCP application development, streamlined cloud adoption, and data-driven decision making in a cutting-edge environment. We are experts in many Google Cloud Platform development services including application design and engineering, enterprise architecture and infrastructure implementation, efficient cloud migration, application containerization, and CI/CD.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Google Cloud Software Development Services */}
      <Section className="bg-white py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Google Cloud Software Development Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* GCP Application Development Services */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">GCP Application Development Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">GCP Application Development</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Legacy Application Modernization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">GCP Integration Services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">GCP Optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Containerization</span>
                </li>
              </ul>
            </div>

            {/* Cloud Migration */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Cloud Migration</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">On-Premises, AWS, Azure migration to Google Cloud Platform</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Hybrid Cloud with Kubernetes</span>
                </li>
              </ul>
            </div>

            {/* Cloud DevOps-as-a-Service */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Cloud DevOps-as-a-Service</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">GCP Native CI/CD</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Infrastructure as a Code</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Automation, Orchestration and Testing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Software Release Automation on GCP</span>
                </li>
              </ul>
            </div>

            {/* Cloud Managed Services */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Cloud Managed Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Infrastructure Modernization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">24x7 Managed Services</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Business Intelligence Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Business Intelligence and Analytics on GCP</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Data Warehousing on GCP</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Business Intelligence Solutions</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Teradata Migration</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Predictive Analytics</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Marketing Analytics Platforms on GCP</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Genomics Data Analytics</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors">
              Talk to an Expert
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <TestimonialSlider
        testimonials={testimonials}
        title="Testimonials"
        className="bg-gray-50"
      />

      {/* Collaboration Options */}
      <Section className="bg-white py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              You Choose How We Collaborate with You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Time & Materials */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Time & Materials</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tailored for flexible engagements such as discovery, rapid prototyping, and maintenance, our T&M model empowers you to adjust your level of commitment swiftly, ensuring flexibility that aligns with your evolving needs.
              </p>
            </div>

            {/* Fixed Price */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Fixed Price</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our Fixed Price model comes with comprehensive proposals, schedules, and assured deliverables perfect for projects with clearly defined objectives and milestones.
              </p>
            </div>

            {/* Retainer Agreement */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Retainer Agreement</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Through monthly or annual retainer agreements, we offer a well-structured engagement that proves ideal for project kickoffs and in-progress work.
              </p>
            </div>

            {/* Hybrid */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Hybrid</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer you a perfect combination of structure and flexibility, choosing pricing and engagement models that embrace the unique nature of each project.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </Container>
      </Section>

      {/* GCP Serverless Approach */}
      <Section className="bg-accent-500 text-white py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Is GCP&apos;s serverless approach right for you?
            </h2>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto opacity-90">
              Google Cloud is an innovation enabler for your business with powerful data analytics options, ML/AI pipelines, future-proof infrastructure and state-of-the-art security capabilities. If you&apos;re considering modernizing your applications or building new ones, a GCP serverless approach can be a strategic decision for achieving cost savings, scalability, faster development cycles, and improved operational efficiency.
            </p>
            <p className="text-base leading-relaxed max-w-4xl mx-auto mt-4 opacity-90">
              A serverless approach offers several benefits for businesses, making it an attractive option for many applications. The key advantages include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cost-Effectiveness */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cost-Effectiveness</h3>
              <p className="text-sm leading-relaxed opacity-90">
                You only pay for the resources you use. Since serverless eliminates the need to provision and manage servers, you&apos;re not charged for idle resources. This is especially beneficial for applications with fluctuating workloads.
              </p>
            </div>

            {/* Scalability */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Scalability</h3>
              <p className="text-sm leading-relaxed opacity-90">
                Serverless applications automatically scale up or down based on demand. This ensures your application can handle surges in traffic without compromising performance or incurring unexpected costs.
              </p>
            </div>

            {/* Increased Agility */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Increased Agility</h3>
              <p className="text-sm leading-relaxed opacity-90">
                Serverless allows for quicker iteration and easier updates to your application. This agility is crucial in today&apos;s fast-paced business environment where you need to adapt to changing market demands.
              </p>
            </div>

            {/* Faster Development and Deployment */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Faster Development and Deployment</h3>
              <p className="text-sm leading-relaxed opacity-90">
                With serverless, you don&apos;t need to worry about server management from your IT team, freeing up developers to focus on core application logic.
              </p>
            </div>

            {/* Improved Operational Efficiency */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Improved Operational Efficiency</h3>
              <p className="text-sm leading-relaxed opacity-90">
                Serverless removes the burden of server management from your IT team, freeing up resources and allowing them to focus on more strategic initiatives.
              </p>
            </div>

            {/* Focus on Core Business */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Focus on Core Business</h3>
              <p className="text-sm leading-relaxed opacity-90">
                By leveraging serverless, businesses can offload infrastructure management tasks to cloud providers, enabling them to focus on their core business functions.
              </p>
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

// Case Studies Section Component
function CaseStudiesSection() {
  return (
    <Section className="bg-white py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Case Studies
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-video bg-gray-100 relative">
              <Image
                src="/case-studies/global-media-company.jpg"
                alt="Global Media Company Case Study"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                One of the Largest Global Media Companies Automates and Deepens Consumer and...
              </h3>
              <a
                href="#"
                className="inline-flex items-center text-accent-500 font-medium hover:text-accent-600"
              >
                Learn More
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}