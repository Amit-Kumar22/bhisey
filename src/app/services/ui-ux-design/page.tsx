

import React from 'react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Link from "next/link";
import { ContactSection } from '@/components/reusable/ContactSection';
import { ClientLogoMarquee } from '@/components/reusable/ClientLogoMarquee';
import { LatestNewsAndInsights } from '@/components/reusable/LatestNewsAndInsights';
import { Search, Layout, MousePointer, Map, Smartphone, CreditCard, Network, Target } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'UX & UI Design Services | Bhisey',
  description: 'Bring seamless user experience to the forefront of your digital products with Bhisey\'s UX and UI design services.'
};

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute right-0 top-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d={`M ${1200 + i * 20} ${100 + i * 10} Q ${600 + i * 30} ${200 + i * 15}, ${i * 20} ${150 + i * 10}`}
              fill="none"
              stroke="#ff6b35"
              strokeWidth="2"
              opacity={0.3 - i * 0.02}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-orange-500">UX & UI Design Services.</span>{" "}
          <span className="text-gray-800">Delivered</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-12">
          Bring seamless user experience to the forefront of your digital products.
        </p>
        <p className="text-2xl md:text-3xl text-gray-600 mb-12">
          Kanda&apos;s UX and UI team builds beautiful interfaces that deliver results. We don&apos;t just design applications that look good, we design them to achieve your goals.
        </p>
        <p className="text-2xl md:text-3xl text-gray-600 mb-12">
          Our UX/UI process prioritizes user needs and aligns perfectly with your business objectives. Every element we create contributes to your success and resonates with your target audience. From the initial wireframes to the final polished interfaces, we ensure your users can effortlessly navigate and enjoy the digital experience you&apos;ve envisioned.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Talk to an Expert→
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Client Logos Carousel */}
      <div className="mt-16 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap opacity-60">
          <div className="text-gray-400 text-sm font-medium">NEO GENOMICS</div>
          <div className="text-gray-400 text-sm font-medium">LIONBRIDGE</div>
          <div className="text-gray-400 text-sm font-medium">JOHNSON & JOHNSON</div>
        </div>
      </div>
    </section>
  );
}

// UI & UX Design Services Grid
const ServicesGrid = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "UX & UI Audit and Analysis",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "User Interface Wireframing",
    },
    {
      icon: <MousePointer className="w-8 h-8" />,
      title: "Clickable Prototype Development",
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "User Journey Mapping and Design",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Cross-Device User Experience and Responsive design",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Web and Mobile UX & UI Design Services",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Information Architecture Design",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Usability Testing",
    },
  ];

  return (
    <Section className="py-20 bg-white">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-600 mb-16">
          UI & UX Design Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="flex justify-center mb-6 text-teal-600">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-700 leading-tight">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

// The Bhisey Difference Section
const BhiseyDifferenceSection = () => {
  return (
    <Section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-4">
            The Bhisey Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlocking Breakthrough UX with Renowned Expertise
          </p>
        </div>
        
        <div className="relative mb-12">
          <div className="w-full h-96 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-cover bg-center" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Cpath d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z' fill='%23f3f4f6'/%3E%3C/svg%3E")`
            }}>
              {/* Campus illustration placeholder */}
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-32 h-32 bg-orange-200 rounded-lg mb-4 mx-auto flex items-center justify-center">
                    <span className="text-orange-600 text-sm font-semibold">Campus View</span>
                  </div>
                  <p className="text-gray-600 text-sm">Modern university campus with walkways and buildings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              For regulated industries and projects demanding exceptional user experience blended with knowledge of compliance principles, we be developed and continually refined a User Experience Center (UXC). This collaboration seamlessly blends academic rigor with real-world experience, delivering cost-effective solutions that elevate your product.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The UXC boasts an impressive two decades of success, conducting countless research studies and design interventions across diverse industries and verticals. Our user-needs research, strategy, and design ensures every aspect of your project caters directly to your target audience.
            </p>
          </div>
          
          <div>
            <div className="flex items-center mb-8">
              <div className="flex-1 bg-teal-200 h-2 rounded-full mr-4">
                <div className="bg-teal-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">UXC Involvement</span>
            </div>
            
            <div className="flex items-center mb-8">
              <div className="flex-1 bg-teal-200 h-2 rounded-full mr-4">
                <div className="bg-teal-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">UX Design Support</span>
            </div>
            
            <div className="flex items-center mb-8">
              <div className="flex-1 bg-teal-200 h-2 rounded-full mr-4">
                <div className="bg-teal-500 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Prototype Testing</span>
            </div>
            
            <div className="flex items-center">
              <div className="flex-1 bg-teal-200 h-2 rounded-full mr-4">
                <div className="bg-teal-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Summative Testing</span>
            </div>
          </div>
        </div>
        
        {/* Process Steps */}
        <div className="flex justify-center mt-16 overflow-x-auto">
          <div className="flex items-center space-x-4 md:space-x-8 min-w-max px-4">
            {['DISCOVER', 'SYNTHESIZE', 'IDEATE', 'FOCUS', 'BUILD', 'DEPLOY'].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-teal-600 transform rotate-45 flex items-center justify-center">
                    <span className="transform -rotate-45 text-white font-bold text-xs text-center leading-tight">
                      {step}
                    </span>
                  </div>
                </div>
                {index < 5 && <div className="w-6 md:w-8 h-0.5 bg-teal-300"></div>}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

// UI & UX Design Process Section
const DesignProcessSection = () => {
  const processSteps = [
    {
      title: "Customer Research",
      items: ["Field Research", "Focus Groups", "Surveys", "Personas", "Competitive Benchmarking", "Diary Studies"]
    },
    {
      title: "Product Evaluation", 
      items: ["Information Architecture", "Usability / Concept Testing", "Expert Reviews", "Eye Tracking / Biometrics", "Accessibility", "UX Scorecard"]
    },
    {
      title: "Design & Innovation",
      items: ["UX Strategy / Roadmaps", "Design Thinking / Ideation", "Wireframe Design", "Service Design / Journey Mapping"]
    },
    {
      title: "Usability Testing",
      items: ["User Interviews", "A/B Testing", "Click Tracking and Heatmaps", "Screen resolution, compatibility", "Crowd Testing"]
    }
  ];

  return (
    <Section className="py-20 bg-white">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-600 mb-8">
          UI & UX Design Process
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-600 text-center mb-8 max-w-4xl mx-auto leading-relaxed">
            For over three decades, we&apos;ve honed a design process that delivers exceptional UI and UX experiences. Our expert UX & UI designers don&apos;t just prioritize aesthetics; they leverage a user-centric approach, ensuring every element resonates with your target audience and contributes to your business goals. This translates into beautiful interfaces that not only look great but also deliver tangible results.
          </p>
          
          <p className="text-lg text-gray-600 text-center mb-16 max-w-4xl mx-auto leading-relaxed">
            We combine established design standards, efficient workflows, and a client-centric approach to ensure your project stays on track and meets your needs perfectly within the agreed timeline. Our team utilizes a broad suite of tools and technologies, coupled with deep domain expertise, to foster innovation at the intersection of quality, precision, and efficiency. The result? A seamless design journey that delivers polished interfaces your users will love to navigate and appreciate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white border-2 border-teal-200 rounded-lg overflow-hidden">
              <div className="bg-teal-500 text-white p-4 text-center font-bold text-lg">
                {step.title}
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="bg-gray-50 px-4 py-3 rounded text-center text-sm text-gray-700 border border-gray-100">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

// Clickable Prototype Section
const ClickablePrototypeSection = () => {
  return (
    <Section className="py-20 bg-gray-50">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-700 mb-12">
          Clickable Prototype Development
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Unique to Bhisey is our &ldquo;Clickable Prototype&rdquo; — developing a sampling of the foreseen screens with transitions, but without any underlying technical implementation. In our experience, when clients see the user flow, interactions, and how pages are transformed, they are much more likely to understand and provide constructive feedback on the product. Alternatively, dry verbal descriptions, or even wireframes embedded in Word documents, have proven to be a less effective way to assess the solution&apos;s UX flow and application usability.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            The prototype also serves as a proof of concept that the chosen technology stack is capable of satisfying its technical and business objectives. It can also be used to accompany the proposed solution as a demonstration environment to familiarize various internal and/or external stakeholders and to solicit their feedback.
          </p>
        </div>
      </Container>
    </Section>
  );
};

// Portfolio Section
const PortfolioSection = () => {
  return (
    <Section className="py-20 bg-white">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-600 mb-16">
          Portfolio
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="grid gap-8">
            {/* Airline interface mockup */}
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg overflow-hidden">
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full mb-4 mx-auto flex items-center justify-center">
                    <span className="text-blue-600 text-2xl">✈</span>
                  </div>
                  <p className="text-white text-sm font-semibold">THANK YOU!</p>
                  <p className="text-blue-100 text-xs">For choosing our airlines and enjoy your journey</p>
                </div>
              </div>
            </div>
            
            {/* Mobile app interfaces */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-600 rounded-lg h-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-white rounded mb-2 mx-auto"></div>
                  <p className="text-white text-xs font-semibold">MANAGED SERVICES</p>
                </div>
              </div>
              <div className="bg-teal-600 rounded-lg h-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-white rounded mb-2 mx-auto"></div>
                  <p className="text-white text-xs font-semibold">Financial Company</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-8">
            {/* Security dashboard */}
            <div className="relative bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg overflow-hidden">
              <div className="h-64 p-6">
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-semibold">Everything is OK</span>
                  </div>
                  <div className="text-xs text-gray-600">Security Active</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-xs text-gray-600 mb-2">Safe Browsing</div>
                  <div className="text-sm font-semibold">3 URLs scanned</div>
                </div>
              </div>
            </div>
            
            {/* User profiles */}
            <div className="bg-gray-100 rounded-lg h-32 p-4">
              <div className="flex space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex-1">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mb-2"></div>
                    <div className="h-2 bg-gray-300 rounded mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

// Main Page Component
export default function UIUXDesignPage() {
  // Client logos data - using placeholder SVG logos
  const clientLogos = [
    { name: 'Lorius', src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjEwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY2NjY2NiI+TG9yaXVzPC90ZXh0Pjwvc3ZnPg==', alt: 'Lorius logo' },
    { name: 'Sharecare', src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjEwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY2NjY2NiI+c2hhcmVjYXJlPC90ZXh0Pjwvc3ZnPg==', alt: 'Sharecare logo' },
    { name: 'Accenture', src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjEwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY2NjY2NiI+YWNjZW50dXJlPC90ZXh0Pjwvc3ZnPg==', alt: 'Accenture logo' },
    { name: 'Acumen', src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjEwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY2NjY2NiI+QUNVTUVOID48L3RleHQ+PC9zdmc+', alt: 'Acumen logo' },
    { name: 'Alphabet', src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjEwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY2NjY2NiI+QWxwaGFiZXQ8L3RleHQ+PC9zdmc+', alt: 'Alphabet logo' },
    { name: 'Astellas', src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjEwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY2NjY2NiI+YXN0ZWxsYXM8L3RleHQ+PC9zdmc+', alt: 'Astellas logo' },
  ];

  // News items data
  const newsItems = [
    {
      title: "Predictive Analytics in Commercial Real Estate: Forecasting Occupancy, Rent,...",
      excerpt: "The commercial real estate (CRE) industry is dealing with a lot of change right now. The economy is shifting, tenants want different things, and there's constant pressure to get...",
      href: "/insights/predictive-analytics-commercial-real-estate",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y5ZmJmZiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2VmZjZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWQpIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTUwIiByPSI2MCIgZmlsbD0iI2Y3OTUwMSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+",
      date: "Oct 15, 2024",
      category: "Analytics",
      readTime: "5 min read"
    },
    {
      title: "Cloud Migration for Hospitals Is No Longer Optional: How to Do It Right",
      excerpt: "Moving to the cloud has become a basic requirement for healthcare providers, not an optional strategy. Most hospitals already run some services in the cloud, yet the journey is f...",
      href: "/insights/cloud-migration-hospitals",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlY2ZkZjUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNkZGY0ZmYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNncmFkMikiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNTAiIHI9IjgwIiBmaWxsPSIjMTQ5OGI2IiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=",
      date: "Oct 10, 2024",
      category: "Healthcare",
      readTime: "7 min read"
    },
    {
      title: "IRS Modernization and Taxpayer Expectations: Is Your Firm's Software Ready?",
      excerpt: "The Internal Revenue Service is undergoing a major transformation. The changes go far beyond a routine upgrade; they replace the technology that handles 267 million tax returns...",
      href: "/insights/irs-modernization",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZWY5ZjMiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmM2Y0ZjYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNncmFkMykiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNTAiIHI9IjcwIiBmaWxsPSIjMTBiOTgxIiBvcGFjaXR5PSIwLjI1Ii8+PC9zdmc+",
      date: "Oct 5, 2024",
      category: "Government",
      readTime: "6 min read"
    }
  ];

  return (
    <main>
      <HeroSection />
      
      <ClientLogoMarquee
        title="Client Spotlight"
        logos={clientLogos}
        variant="standard"
        className="bg-white py-16"
        showTitle={true}
      />
      
      <ServicesGrid />
      <BhiseyDifferenceSection />
      <DesignProcessSection />
      <ClickablePrototypeSection />
      
      <LatestNewsAndInsights
        title="Latest Insights"
        newsItems={newsItems}
        viewAllLink={{
          text: "View All Insights",
          href: "/insights"
        }}
      />
      
      <PortfolioSection />
      
      <ContactSection />
    </main>
  );
}