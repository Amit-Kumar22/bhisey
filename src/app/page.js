import { HeroBanner } from '@/components/reusable/HeroBanner';
import { ClientLogoMarquee } from '@/components/reusable/ClientLogoMarquee';
import { TestimonialSlider } from '@/components/reusable/TestimonialSlider';
import { AwardsStrip } from '@/components/reusable/AwardsStrip';
import { CTASection } from '@/components/reusable/CTASection';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

// Main page component sections
const BhiseyDifference = () => (
  <Section className="py-16 bg-white">
    <Container>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
          The Bhisey Difference
        </h2>
        <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
          We&apos;re not just another software development company. We&apos;re your technology partner, 
          committed to your success from concept to launch and beyond.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-charcoal mb-3">Partner by Design</h3>
          <p className="text-charcoal-light">
            We work closely with you to understand your business goals and deliver solutions that drive results.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-charcoal mb-3">Product-Driven Engagement</h3>
          <p className="text-charcoal-light">
            Every project is managed with a product mindset, ensuring quality and user-centric solutions.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-charcoal mb-3">People You Can Count On</h3>
          <p className="text-charcoal-light">
            Our experienced team brings deep expertise and commitment to every project we undertake.
          </p>
        </div>
      </div>
    </Container>
  </Section>
);

const ServicesGrid = () => (
  <Section className="py-16 bg-background-light">
    <Container>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
          You Think it. We Build it.
        </h2>
        <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
          From initial concept to full-scale deployment, we deliver custom software solutions 
          that solve real business problems and drive growth.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Custom Software Development",
            description: "Tailored solutions built to your exact specifications and business requirements.",
            icon: "💻"
          },
          {
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications for iOS and Android.",
            icon: "📱"
          },
          {
            title: "Cloud Solutions",
            description: "Scalable cloud architecture and migration services on AWS, Azure, and GCP.",
            icon: "☁️"
          },
          {
            title: "Digital Health",
            description: "HIPAA-compliant healthcare technology solutions and telemedicine platforms.",
            icon: "🏥"
          },
          {
            title: "SaaS Platforms",
            description: "Multi-tenant software-as-a-service platforms with enterprise-grade security.",
            icon: "🚀"
          },
          {
            title: "AI & Machine Learning",
            description: "Intelligent solutions leveraging the latest in artificial intelligence technology.",
            icon: "🤖"
          }
        ].map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-charcoal mb-3">{service.title}</h3>
            <p className="text-charcoal-light mb-4">{service.description}</p>
            <a href="/services" className="text-accent-500 font-semibold hover:text-accent-600 transition-colors">
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const Statistics = () => (
  <Section className="py-16 bg-accent-500">
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        <div>
          <div className="text-4xl font-bold mb-2">500+</div>
          <div className="text-accent-100">Projects Delivered</div>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2">15+</div>
          <div className="text-accent-100">Years Experience</div>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2">98%</div>
          <div className="text-accent-100">Client Satisfaction</div>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2">24/7</div>
          <div className="text-accent-100">Support Available</div>
        </div>
      </div>
    </Container>
  </Section>
);

const CaseStudies = () => (
  <Section className="py-16 bg-white">
    <Container>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
          Success Stories
        </h2>
        <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
          See how we&apos;ve helped companies transform their business with innovative technology solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-background-light p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-charcoal mb-4">Healthcare Platform Transformation</h3>
          <p className="text-charcoal-light mb-6">
            Built a comprehensive telemedicine platform that increased patient engagement by 300% 
            and reduced operational costs by 40% for a major healthcare provider.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-accent-500 font-semibold">Healthcare</span>
            <a href="/case-studies" className="text-accent-500 hover:text-accent-600 transition-colors">
              Read Case Study →
            </a>
          </div>
        </div>
        
        <div className="bg-background-light p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-charcoal mb-4">SaaS Platform Scaling</h3>
          <p className="text-charcoal-light mb-6">
            Helped a startup scale their SaaS platform to handle 10M+ users with 99.9% uptime 
            and lightning-fast performance across global markets.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-accent-500 font-semibold">SaaS</span>
            <a href="/case-studies" className="text-accent-500 hover:text-accent-600 transition-colors">
              Read Case Study →
            </a>
          </div>
        </div>
      </div>
    </Container>
  </Section>
);

const IndustryExpertise = () => (
  <Section className="py-16 bg-background-light">
    <Container>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
          Industry Expertise
        </h2>
        <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
          We bring deep domain knowledge and industry-specific solutions to help you navigate 
          complex regulatory requirements and business challenges.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">🏥</span>
          </div>
          <h3 className="text-xl font-bold text-charcoal mb-3">Digital Health</h3>
          <p className="text-charcoal-light">
            HIPAA-compliant solutions, EHR integrations, telemedicine platforms, and healthcare analytics.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">💼</span>
          </div>
          <h3 className="text-xl font-bold text-charcoal mb-3">SaaS & Enterprise</h3>
          <p className="text-charcoal-light">
            Multi-tenant architectures, enterprise integrations, scalable platforms, and B2B solutions.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">🏦</span>
          </div>
          <h3 className="text-xl font-bold text-charcoal mb-3">FinTech</h3>
          <p className="text-charcoal-light">
            Secure payment processing, compliance frameworks, risk management, and financial analytics.
          </p>
        </div>
      </div>
    </Container>
  </Section>
);

const YoutubeTestimonials = () => (
  <Section className="py-16 bg-white">
    <Container>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
          See what people have to say about Bhisey
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left side - Main Large Video (3 columns) */}
        <div className="lg:col-span-3">
          <div className="relative w-full h-0 pb-[40%] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
              title="Bhisey Software Client Testimonial - Main Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {/* <div className="mt-4">
            <h3 className="text-lg font-bold text-charcoal mb-2">
              Client Success Story: Digital Transformation
            </h3>
            <p className="text-charcoal-light text-sm">
              Watch how Bhisey helped transform a Fortune 500 company&apos;s entire technology infrastructure, 
              resulting in 40% efficiency improvement and millions in cost savings.
            </p>
          </div> */}
        </div>
        
        {/* Right side - 3 Small Videos stacked (1 column) */}
        <div className="lg:col-span-1 space-y-2">
          {/* First Small Video */}
          <div>
            <div className="relative w-full h-0 pb-[40%] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/JkK8g6FMEXE?rel=0&modestbranding=1"
                title="Bhisey Software Client Testimonial - Healthcare"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Second Small Video */}
          <div>
            <div className="relative w-full h-0 pb-[40%] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/QB7ACr7pUuE?rel=0&modestbranding=1"
                title="Bhisey Software Client Testimonial - SaaS Platform"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Third Small Video */}
          <div>
            <div className="relative w-full h-0 pb-[40%] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Ks-_Mh1QhMc?rel=0&modestbranding=1"
                title="Bhisey Software Client Testimonial - Mobile App"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* <div className="mt-1">
              <h4 className="text-xs font-bold text-charcoal mb-1">
                Mobile App
              </h4>
              <p className="text-charcoal-light text-xs">
                Cross-platform
              </p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Testimonial Cards below videos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-background-light p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold text-lg">JS</span>
            </div>
            <div>
              <p className="font-bold text-charcoal">John Smith</p>
              <p className="text-charcoal-light text-sm">CTO, HealthTech Inc</p>
            </div>
          </div>
          <p className="text-charcoal-light text-sm italic">
            &quot;Bhisey&apos;s expertise in healthcare technology is unmatched. They delivered our platform ahead of schedule.&quot;
          </p>
        </div>
        
        <div className="bg-background-light p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold text-lg">MJ</span>
            </div>
            <div>
              <p className="font-bold text-charcoal">Maria Johnson</p>
              <p className="text-charcoal-light text-sm">VP Engineering, SaaS Pro</p>
            </div>
          </div>
          <p className="text-charcoal-light text-sm italic">
            &quot;Best development partner we&apos;ve ever worked with. Highly recommend Bhisey for any serious project.&quot;
          </p>
        </div>

        <div className="bg-background-light p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold text-lg">DR</span>
            </div>
            <div>
              <p className="font-bold text-charcoal">David Rodriguez</p>
              <p className="text-charcoal-light text-sm">Founder, TechFlow</p>
            </div>
          </div>
          <p className="text-charcoal-light text-sm italic">
            &quot;They transformed our vision into reality. Outstanding technical expertise and project management.&quot;
          </p>
        </div>
      </div>
    </Container>
  </Section>
);

const TechnicalExpertise = () => (
  <Section className="py-16 bg-background-light">
    <Container>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
          Technical Expertise
        </h2>
        <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
          Our team masters the latest technologies and frameworks to deliver cutting-edge solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {[
          { name: "React", logo: "⚛️" },
          { name: "Node.js", logo: "🟢" },
          { name: "Python", logo: "🐍" },
          { name: "AWS", logo: "☁️" },
          { name: "Docker", logo: "🐳" },
          { name: "Kubernetes", logo: "⚙️" }
        ].map((tech, index) => (
          <div key={index} className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-2">{tech.logo}</div>
            <div className="text-sm font-semibold text-charcoal">{tech.name}</div>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const LatestNews = () => (
  <Section className="py-16 bg-white">
    <Container>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
          Latest News & Insights
        </h2>
        <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
          Stay updated with our latest thoughts on technology trends and industry insights.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "The Future of AI in Healthcare",
            excerpt: "Exploring how artificial intelligence is revolutionizing patient care and medical diagnostics.",
            date: "Sep 15, 2025",
            category: "AI & Healthcare"
          },
          {
            title: "Cloud Migration Best Practices",
            excerpt: "A comprehensive guide to successfully migrating your enterprise applications to the cloud.",
            date: "Sep 10, 2025", 
            category: "Cloud Computing"
          },
          {
            title: "Building Scalable SaaS Platforms",
            excerpt: "Key architectural decisions and patterns for creating multi-tenant software platforms.",
            date: "Sep 5, 2025",
            category: "SaaS Development"
          }
        ].map((article, index) => (
          <article key={index} className="bg-background-light p-6 rounded-lg">
            <div className="text-sm text-accent-500 font-semibold mb-2">{article.category}</div>
            <h3 className="text-xl font-bold text-charcoal mb-3">{article.title}</h3>
            <p className="text-charcoal-light mb-4">{article.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-charcoal-light">{article.date}</span>
              <a href="/news" className="text-accent-500 hover:text-accent-600 transition-colors font-semibold">
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
    </Container>
  </Section>
);

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroBanner 
        title="Product Promises. Delivered"
        subtitle="We build custom software solutions that solve real business problems and drive measurable results. From concept to launch, we're your trusted technology partner."
        primaryCta={{
          text: "Start Your Project",
          href: "/contact-us"
        }}
        secondaryCta={{
          text: "View Our Work", 
          href: "/case-studies"
        }}
        backgroundImage="/home1.png"
        variant="full-width"
        layout="centered"
        overlay="gradient"
      />
      
      {/* Client Logos */}
      <ClientLogoMarquee 
        logos={[
          { name: "Google", src: "/logo1.png", alt: "Google" },
          { name: "Microsoft", src: "/logo2.png", alt: "Microsoft" },
          { name: "Amazon", src: "/logo3.png", alt: "Amazon" },
          { name: "Netflix", src: "/logo4.png", alt: "Netflix" },
          { name: "Spotify", src: "/logo5.png", alt: "Spotify" },
          { name: "Airbnb", src: "/logo6.png", alt: "Airbnb" }
        ]}
        title="Trusted by industry leaders"
        speed="slow"
        direction="left"
        pauseOnHover={true}
      />
      
      {/* Statistics */}
      {/* <Statistics /> */}
      
      {/* The Bhisey Difference */}
      <BhiseyDifference />
      
      {/* Services Grid */}
      <ServicesGrid />
      
      {/* Client Testimonials */}
      <TestimonialSlider 
        testimonials={[
          {
            quote: "Bhisey transformed our healthcare platform and delivered results beyond our expectations. Their expertise in HIPAA compliance and scalable architecture was exactly what we needed.",
            author: "Sarah Johnson",
            title: "CTO",
            company: "HealthTech Solutions",
            avatar: "/testimonial1.jpg"
          },
          {
            quote: "Working with Bhisey was a game-changer for our SaaS platform. They helped us scale to handle millions of users while maintaining 99.9% uptime.",
            author: "Michael Chen",
            title: "Founder & CEO",
            company: "CloudFlow Inc",
            avatar: "/testimonial2.jpg"
          },
          {
            quote: "The team at Bhisey doesn't just write code - they understand business. They helped us build a solution that truly drives ROI.",
            author: "Emily Rodriguez",
            title: "VP of Technology",
            company: "FinanceForward",
            avatar: "/testimonial3.jpg"
          }
        ]}
        autoplay={true}
        showDots={true}
        showArrows={true}
        variant="cards"
      />
      
      {/* Awards & Certifications */}
      <AwardsStrip 
        awards={[
          { name: "Google Cloud Partner", src: "/home1.png", alt: "Google Cloud Partner" },
          { name: "AWS Advanced Consulting Partner", src: "/home2.png", alt: "AWS Partner" },
          { name: "Microsoft Gold Partner", src: "/home3.png", alt: "Microsoft Partner" },
          { name: "ISO 27001 Certified", src: "/home4.png", alt: "ISO Certified" },
          { name: "Clutch IT Services", src: "/home5.png", alt: "Clutch Award" },
          { name: "Inc 5000", src: "/home6.png", alt: "Inc 5000" }
        ]}
        variant="standard"
        layout="horizontal"
        backgroundColor="light"
        showTitle={true}
      />
      
      {/* Industry Expertise */}
      <IndustryExpertise />
      
      {/* YouTube Testimonials */}
      <YoutubeTestimonials />
      
      {/* Technical Expertise */}
      <TechnicalExpertise />
      
      {/* Case Studies */}
      <CaseStudies />
      
      {/* Latest News */}
      <LatestNews />
      
      {/* Final CTA */}
      <CTASection 
        title="Ready to build something amazing?"
        subtitle="Let's discuss your project and see how we can help bring your vision to life."
        primaryCta={{
          text: "Start Your Project",
          href: "/contact-us"
        }}
        secondaryCta={{
          text: "View Our Services",
          href: "/services"
        }}
        backgroundColor="accent"
        layout="centered"
      />
    </>
  );
}
