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
import { TestimonialSlider } from '@/components/reusable/TestimonialSlider';

// Page component
export default function AdTechMarTechSolutionsPage() {
  // Client logos data
  const clientLogos = [
    { name: 'Brigham and Womens Hospital', src: '/images/clients/brigham.png', alt: 'Brigham and Womens Hospital logo' },
    { name: 'City of Hope', src: '/images/clients/city-of-hope.png', alt: 'City of Hope logo' },
    { name: 'F-Secure', src: '/images/clients/f-secure.png', alt: 'F-Secure logo' },
    { name: 'Imprivata', src: '/images/clients/imprivata.png', alt: 'Imprivata logo' },
    { name: 'JGI', src: '/images/clients/jgi.png', alt: 'JGI logo' },
    { name: 'Johnson and Johnson', src: '/images/clients/johnson-and-johnson.png', alt: 'Johnson and Johnson logo' },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Bhisey was HuddleUp's software design and development partner for several years, helping to bring HuddleUp to the market. The team at Bhisey Software is excellent to work with, responsive, strategic, and attentive. Their technical knowledge is excellent as well as attention to detail and quick response to arising needs and changing priorities. The well-managed team boosted transparency and strong organizational skills.",
      author: "Goran Skorput",
      title: "CTO",
      company: "HuddleUp"
    },
    {
      quote: "Bhisey put together an excellent team of business analysts, project managers, and technical resources who are seasoned, professional, and reliable with milestones. The team developed new data pipelines processing terabytes of data in GCP leveraging BigQuery, Python, TensorFlow, BigQuery's machine learning functionality for optimization, and dashboards in Data Studio for the reporting.",
      author: "Krishna Boppana",
      title: "Head of Technology",
      company: "Havas"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative py-20 lg:py-32 bg-accent-500 overflow-hidden">
        <div className="absolute inset-0 bg-accent-600/30" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <nav className="flex items-center justify-center space-x-2 text-sm mb-8 opacity-90">
              <Link href="/" className="hover:text-accent-200 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/verticals" className="hover:text-accent-200 transition-colors">
                Verticals
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-accent-200">AdTech and MarTech Software Development Services</span>
            </nav>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              AdTech and MarTech Software Development Services
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed mb-10 text-accent-100">
              Are you looking to improve ad inventory efficiency, gain deeper insights into your target audience, or increase ROI of your marketing campaigns? As a full-service AdTech and MarTech software development partner, Bhisey has the necessary expertise and tech skills to help disruptive startups and leading advertising and media enterprises succeed in the evolving digital landscape. From programmatic ad solutions to data management platforms to marketing automation software, we work closely with our clients to deliver secure, reliable and scalable solutions that drive them towards their goals.
            </p>
            
            <Link
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-accent-600 bg-white rounded-lg hover:bg-accent-50 transition-colors duration-200"
            >
              Talk to an Expert
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Client Spotlight Section */}
      <Section className="py-16 bg-accent-50">
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

      {/* The Bhisey Difference Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-500 mb-6">
              The Bhisey Difference
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Partner by Design',
                icon: '🔗',
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
                icon: '📊',
                linkText: 'Learn More',
                href: '/why-Bhisey/proven-success'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 border border-accent-200 rounded-lg hover:shadow-lg transition-shadow">
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

      {/* Designed to Deliver Faster Time to Innovation Section */}
      <Section className="py-20 bg-accent-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Designed to Deliver Faster Time to Innovation
            </h2>
            <p className="text-lg text-charcoal-light max-w-4xl mx-auto">
              Every project team is structured to optimize your custom software development objectives and business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'US-based Project Leadership',
                description: 'Our Delivery Manager is a senior technology leader that becomes an extension of your team, ensuring your software development milestones and goals are met from kickoff to delivery.',
                icon: '👑'
              },
              {
                title: 'Optimized Global Talent and Skill Mix',
                description: 'Our teams are strategically staffed to deliver industry-leading breadth and depth of technology skills and expertise while optimizing delivery costs.',
                icon: '🌍'
              },
              {
                title: 'On-demand Hard-to-find Experts',
                description: 'Specialized resources like business analysts, architects, DevSecOps, AI/ML engineers, and others can be added on-demand to serve specific software project requirements.',
                icon: '👥'
              },
              {
                title: 'Cost-effective US-based UX Talent',
                description: 'Our partnership with Bentley University\'s User Experience Center enables us to deliver award-winning designs and user experiences at an affordable price point.',
                icon: '🎨'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-accent-200">
                <div className="flex items-start space-x-6">
                  <div className="text-4xl">{feature.icon}</div>
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

      {/* Whom we Serve Section */}
      <Section className="py-20 bg-accent-600 text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-100 mb-6">
              Whom we Serve
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Publishers',
                icon: '📰',
                description: 'We empower digital content creators and distributors to effectively capitalize on their digital assets through automated ad management workflows, seamless connection to multiple demand sources, and precise audience targeting'
              },
              {
                title: 'Advertisers',
                icon: '📢',
                description: 'With a focus on programmatic advertising and data-driven insights, we help advertisers automate ad space buying, optimize budget allocation, run ad campaigns across various inventory sources, all while staying on top of real-time performance metrics.'
              },
              {
                title: 'Marketing agencies',
                icon: '👥',
                description: 'We equip digital marketing agencies, media houses, and brands with custom martech solutions that help them fill the sales pipeline and turn more prospects into loyal customers.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-accent-500/30 rounded-lg p-8 backdrop-blur-sm">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-accent-100 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tap into our end-to-end AdTech Software Development Services Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Tap into our end-to-end AdTech Software Development Services
            </h2>
            <p className="text-lg text-charcoal-light max-w-4xl mx-auto">
              With a solid decade-long background in advertising technology, we know how to deliver powerful, feature-packed AdTech solutions built-to-spec for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-accent-600 mb-6">Programmatic advertising</h3>
              <p className="text-charcoal-light mb-6 leading-relaxed">
                The programmatic ecosystem is vast and complex. We build, customize, and integrate its components across all advertising channels — display, video, audio, social, native, in-app mobile, and digital out-of-home.
              </p>
              <ul className="space-y-2 text-charcoal-light">
                <li>• Supply-side platforms (SSP)</li>
                <li>• Demand-side platforms (DSP)</li>
                <li>• Ad servers</li>
                <li>• Ad exchanges</li>
                <li>• Ad networks</li>
                <li>• Private marketplaces</li>
                <li>• Real-time bidding (RTB) platforms</li>
                <li>• Header bidding platforms</li>
                <li>• Agency trading desk (ATD) software</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-accent-600 mb-6">Ad fraud detection and prevention</h3>
              <p className="text-charcoal-light mb-6 leading-relaxed">
                If wasted ad budgets and compromised brand identity are not in your plans, leverage our AdTech expertise to build a robust defense against domain spoofing, click/impression fraud, ad stacking, and other types of fraud.
              </p>
              <ul className="space-y-2 text-charcoal-light">
                <li>• Ad verification solutions</li>
                <li>• Viewability measurement tools</li>
                <li>• Traffic filtering systems</li>
                <li>• Anti-spam systems</li>
                <li>• Ad fraud analytics and reporting</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* MarTech Development Expertise Section */}
      <Section className="py-20 bg-accent-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              MarTech Development Expertise
            </h2>
            <p className="text-lg text-charcoal-light max-w-4xl mx-auto">
              In the world of marketing, a one-size-fits-all approach never cuts it. We build custom MarTech solutions that tailor experiences to your audiences, drive multichannel customer engagement, and ensure your brand stands out in a crowded marketplace.
            </p>
          </div>
          
          <div className="bg-accent-600 rounded-lg p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-accent-100 mb-6">
                Addressing your marketing technology challenges
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Automating',
                  icon: '⚙️',
                  items: [
                    'Lead management and nurturing',
                    'Email marketing',
                    'Social media automation',
                    'Custom CRM solutions',
                    'Conversational marketing via intelligent chatbots and messaging apps'
                  ]
                },
                {
                  title: 'Personalizing customer experiences',
                  icon: '🎯',
                  items: [
                    'Demographics, interests, and behavior-based segmentation',
                    'Personalization and product recommendation engines',
                    'Dynamic content optimization',
                    'Loyalty and referral platforms',
                    'A/B testing'
                  ]
                },
                {
                  title: 'Reliable performance analytics',
                  icon: '📊',
                  items: [
                    'Rich data visualization and interactive dashboards',
                    'Mission-critical metrics measurement (CTR, CPC, ROAS, conversion rate, customer lifetime value, and more)',
                    'Multi-channel attribution modeling',
                    'Predictive analytics solutions'
                  ]
                }
              ].map((category, index) => (
                <div key={index} className="bg-accent-500/30 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-3xl mb-4">{category.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-4">{category.title}</h4>
                  <ul className="space-y-2 text-accent-100">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              We turn Ideas into Products. Challenges into Wins. Product Owners into Heroes.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-accent-50 rounded-lg p-8 border border-accent-200">
                <div className="flex items-center mb-6">
                  <div className="text-lg font-semibold text-accent-600">
                    {testimonial.company === 'HuddleUp' ? '🔗 HuddleUp' : '📊 HAVAS'}
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-lg font-semibold text-charcoal">{testimonial.author}</p>
                  <p className="text-charcoal-light">{testimonial.title}, {testimonial.company}</p>
                </div>
                
                <div className="text-accent-600 text-2xl mb-4">&ldquo;</div>
                <blockquote className="text-charcoal leading-relaxed mb-6">
                  {testimonial.quote}
                </blockquote>
                <div className="text-accent-600 text-2xl text-right">&rdquo;</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Explore the added value Section */}
      <Section className="py-20 bg-accent-600 text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-100 mb-6">
              Explore the added value
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-accent-100 mb-6">
              of partnering with Bhisey
            </h3>
            <h4 className="text-2xl md:text-3xl font-bold text-accent-100">
              for MarTech and AdTech Software Development
            </h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI and ML',
                icon: '🤖',
                description: 'Boost the benefits of our strong AI and ML expertise to extend your programmatic advertising and marketing capabilities. We seamlessly embed ML algorithms into your solution to unlock deeper insights, improve targeting precision, optimize campaign performance, and drive unparalleled results for your business.'
              },
              {
                title: 'Data Excellence',
                icon: '📊',
                description: 'Bhisey\'s Data Scientists and Data Engineers are experts in turning raw big data into actionable intelligence. Through optimal integration model, we aggregate, retrieve, clean, process, and visualize your data, presenting it in intuitive dashboards. Whether you are analyzing marketing performance or optimizing ad sales, we are here to maximize your data potential.'
              },
              {
                title: 'Third-party Integrations',
                icon: '🔗',
                description: 'Expand your solution\'s potential by seamlessly integrating with modern AdTech and MarTech tools and solutions. Whether you need to connect your DSP with an SSP, an ad exchange, a data platform, or integrate your marketing platform with web analytics tools, we have you covered.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-accent-500/30 rounded-lg p-8 backdrop-blur-sm">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-accent-100 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Client Spotlight Case Studies Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Client Spotlight
            </h2>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                title: 'NEXAGE: Mobile SSP and Advertising Programmatic marketplace',
                linkText: 'Learn More',
                href: '/case-studies/nexage-mobile-ssp-advertising-programmatic-marketplace',
                image: '/images/case-studies/nexage-preview.jpg'
              },
              {
                title: 'Dun & Bradstreet: A dozen years of productive partnership',
                linkText: 'Learn More',
                href: '/case-studies/dun-bradstreet-productive-partnership',
                image: '/images/case-studies/dun-bradstreet-preview.jpg'
              }
            ].map((caseStudy, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center bg-accent-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full md:w-80 h-48 bg-accent-500 flex items-center justify-center">
                  <div className="text-white text-6xl">
                    {index === 0 ? '📱' : '🤝'}
                  </div>
                </div>
                <div className="flex-1 p-8">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">{caseStudy.title}</h3>
                  <Link
                    href={caseStudy.href}
                    className="text-accent-600 hover:text-accent-700 font-medium flex items-center"
                  >
                    {caseStudy.linkText}
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
        title="Contact Us"
        subtitle="Get in touch with our AdTech and MarTech experts to discuss your project requirements."
      />
    </main>
  );
}