import React from 'react';
import { ContactSection, TestimonialSlider } from '@/components/reusable';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Link from 'next/link';

export const metadata = {
  title: 'DevOps Services and Solutions | Bhisey',
  description: 'Break the Silos, Unleash Agility: DevOps for the Modern Enterprise'
};

export default function DevOpsServicesPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-accent-600 via-accent-500 to-accent-600 text-white relative overflow-hidden" spacing="xl">
        <Container>
          <div className="relative z-10">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-white/80">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li className="text-white/60">&gt;</li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                <li className="text-white/60">&gt;</li>
                <li className="text-white font-medium">DevOps Services</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                DevOps Services and Solutions
              </h1>
              
              <h2 className="text-xl md:text-2xl mb-6 text-white/90">
                Break the Silos, Unleash Agility: DevOps for the Modern Enterprise
              </h2>
              
              <p className="text-base md:text-lg leading-relaxed mb-8 text-white/90 max-w-3xl">
                Are you tired of slow releases, siloed teams, and technical debt holding your business back? Bhisey Software DevOps Services 
                bridge the gap between Dev and Ops, fostering collaboration, innovation, and unmatched agility.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed mb-8 text-white/90 max-w-3xl">
                Achieve greater business agility, shorten time to market, ensure regulatory compliance, boost analytical capabilities while 
                reducing costs and decreasing technical debt. Bhisey&apos;s DevOps Experts will help you integrate DevOps into your business, 
                implement DevOps best practices including CI/CD, GitOps, DevSecOps, AI/ML, and containerization.
              </p>
              
              <Link
                href="#contact-us"
                className="inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-md transition-colors duration-200 border-2 border-accent-400"
              >
                Talk to an Expert →
              </Link>
            </div>
          </div>
          
          {/* Decorative icon/element in bottom right */}
          <div className="absolute bottom-8 right-8 w-16 h-16 opacity-20">
            <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
              <circle cx="32" cy="16" r="8"/>
              <circle cx="16" cy="32" r="8"/>
              <circle cx="48" cy="32" r="8"/>
              <circle cx="32" cy="48" r="8"/>
              <line x1="24" y1="24" x2="40" y2="40" stroke="currentColor" strokeWidth="3"/>
              <line x1="40" y1="24" x2="24" y2="40" stroke="currentColor" strokeWidth="3"/>
            </svg>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-accent-700 via-accent-600 to-accent-700 text-white" spacing="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              Would you like to
            </h3>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Increase business and technical efficiency?
            </p>
            <Link
              href="#contact-us"
              className="inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-md transition-colors duration-200"
            >
              Talk to DevOps Experts →
            </Link>
          </div>
        </Container>
      </Section>

      {/* Client Spotlight */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-500 mb-4">Client Spotlight</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {/* Client logos placeholders based on screenshots */}
            <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600 text-center px-2">
              City of Hope
            </div>
            <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600 text-center px-2">
              F-Secure
            </div>
            <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600 text-center px-2">
              Imprivata
            </div>
            <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600 text-center px-2">
              JGI
            </div>
            <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600 text-center px-2">
              Johnson & Johnson
            </div>
            <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600 text-center px-2">
              Digital Capital
            </div>
          </div>
        </Container>
      </Section>

      {/* Experience the Bhisey difference */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-500 mb-4">
              Experience the Bhisey difference
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-charcoal">
              We will help you achieve:
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔄",
                title: "Seamless deployments",
                description: "Release new features and updates faster with automated pipelines and continuous integration/continuous delivery (CI/CD)"
              },
              {
                icon: "⚡",
                title: "Boost analytical power",
                description: "Gain deeper insights and data-driven insights with improved data access and agile analytics solutions."
              },
              {
                icon: "🛡️",
                title: "Comply with confidence",
                description: "Ensure regulatory compliance and security through automated checks and continuous monitoring."
              },
              {
                icon: "📈",
                title: "Cut costs effectively",
                description: "Eliminate rework and streamline operations to maximize ROI and free up resources for strategic initiatives."
              },
              {
                icon: "🚀",
                title: "Unleash innovation",
                description: "Focus on core business activities and seizing new opportunities, while we handle the infrastructure and development complexities."
              },
              {
                icon: "⚙️",
                title: "Modernize your tech stack",
                description: "Reduce technical debt with automated infrastructure provisioning and cloud-native architectures."
              }
            ].map((item, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-charcoal mb-3">{item.title}</h4>
                <p className="text-sm text-charcoal-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Bhisey? */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-500 mb-8">
              Why Bhisey?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "30+ years of Best Practices in software product development and deployment"
              },
              {
                number: "02", 
                title: "Breadth and Depth of Technology Expertise at your fingertips"
              },
              {
                number: "03",
                title: "Seamless Integration with your engineering culture and development practices"
              },
              {
                number: "04",
                title: "Agile at our Core"
              },
              {
                number: "05",
                title: "Rapidly scale teams up (or down) maximizing efficiency and cost"
              },
              {
                number: "06",
                title: "Experts in Faster Time to Market without sacrificing High Quality"
              }
            ].map((item, index) => (
              <div key={index} className="text-left">
                <div className="text-4xl font-bold text-accent-500 mb-4">{item.number}</div>
                <p className="text-base text-charcoal leading-relaxed">{item.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits of DevOps Implementation */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-500 mb-8">
              Benefits of DevOps Implementation
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-charcoal leading-relaxed text-center">
              DevOps framework fosters seamless collaboration between developers and IT, streamlining processes and accelerating 
              time-to-market. The approach encourages rapid iteration and continuous improvement, allowing you to test and learn 
              swiftly. This minimizes risk and delivers results faster. Repetitive tasks are handled with precision and speed by 
              automated DevOps tools, freeing up your talent to focus on high-value innovation.
            </p>
          </div>
        </Container>
      </Section>

      {/* DevOps Solutions and Services */}
      <Section className="bg-gradient-to-r from-accent-700 via-accent-600 to-accent-700 text-white" spacing="xl">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              DevOps Solutions and Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* DevOps Assessment and Strategy */}
            <div>
              <h3 className="text-xl font-bold mb-6">DevOps Assessment and Strategy</h3>
              <ul className="space-y-3">
                {[
                  "Assess DevOps maturity level including DevOps culture, processes, and tools",
                  "Audit DevOps existing practices, infrastructure, and existing development pipeline", 
                  "Visualize and define an agile transformation roadmap tailored to your organizational needs and the pace of your delivery and innovation",
                  "Identify DevOps metrics, tools and processes",
                  "Develop a transformation timeline and define required skills and resources to achieve business specific goals on budget",
                  "Recommend an optimal DevOps toolchain"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent-300 mr-3">•</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DevOps Automation. CI/CD */}
            <div>
              <h3 className="text-xl font-bold mb-6">DevOps Automation. CI/CD</h3>
              <ul className="space-y-3">
                {[
                  "CI/CD pipeline Creation and Maintenance",
                  "Continuous Delivery pipeline automation and optimization",
                  "Version control and configuration management",
                  "Application deployment automation",
                  "Infrastructure provisioning and end-to-end infrastructure management",
                  "Test and QA automation, code quality control automation",
                  "Centralized log tracking and management"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent-300 mr-3">•</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* DevOps Management */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-500 mb-8">
              DevOps Management
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📚",
                title: "Continuous Learning",
                description: "In the world of Cloud DevOps tools, platforms and best practices are complex and are rapidly evolving. Continuous learning keeps Bhisey teams up-to-the-minute on the latest technologies, tools, automation and development methodologies."
              },
              {
                icon: "🔄",
                title: "Continuous Integration Services",
                description: "We assist your core team in ensuring a full-fledged integrated functioning of delivery pipeline automation cycle and in adapting your automated deployment cycle to changes."
              },
              {
                icon: "☁️",
                title: "Continuous Delivery Pipeline Management & Optimization",
                description: "We take care of release management, continuous deployment, replica environment, new server setup, change management and performance optimization on an ongoing basis."
              }
            ].map((item, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-charcoal mb-4">{item.title}</h4>
                <p className="text-sm text-charcoal-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Infrastructure Management */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-500 mb-6">
              Infrastructure Management
            </h2>
            <p className="text-base md:text-lg text-charcoal-light max-w-3xl mx-auto mb-8">
              Struggling with manual infrastructure provisioning, inefficient monitoring, and unpredictable scaling?
            </p>
            <p className="text-base md:text-lg text-charcoal max-w-3xl mx-auto">
              As a DevOps partner Bhisey helps clients deliver:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏗️",
                title: "Automated Environment Provisioning",
                description: "We leverage automation tools to instantly deploy consistent, pre-configured environments, accelerating your development cycles."
              },
              {
                icon: "💻",
                title: "Proactive Monitoring and Alerting",
                description: "We identify and notify you of potential issues before they impact your product, ensuring smooth operations and optimal performance."
              },
              {
                icon: "🔀",
                title: "Dynamic Autoscaling",
                description: "Meet fluctuating demands head-on with intelligent auto scaling solutions. Our tools automatically adjust resources based on real-time usage, guaranteeing seamless scalability and cost optimization."
              }
            ].map((item, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-charcoal mb-4">{item.title}</h4>
                <p className="text-sm text-charcoal-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bhisey Approach */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-500 mb-8">
              Bhisey Approach
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "</> ",
                title: "Infrastructure as Code (IaC)",
                description: "Define your infrastructure in code for consistent, repeatable deployments and easy version control."
              },
              {
                icon: "⏰",
                title: "Advanced Monitoring & Alerting",
                description: "Gain real-time insights into your infrastructure health with actionable alerts for proactive issue management."
              },
              {
                icon: "📊",
                title: "Strategic Capacity Planning",
                description: "Proactively anticipate future resource needs to avoid performance bottlenecks and maintain optimal costs."
              }
            ].map((item, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-charcoal mb-4">{item.title}</h4>
                <p className="text-sm text-charcoal-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="#contact-us"
              className="inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-md transition-colors duration-200"
            >
              Let&apos;s Discuss your Project →
            </Link>
          </div>
        </Container>
      </Section>

      {/* DevSecOps and Security Management */}
      <Section className="bg-gradient-to-r from-accent-700 via-accent-600 to-accent-700 text-white" spacing="xl">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              DevSecOps and Security Management
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              In today&apos;s threat-laden landscape, securing your software at every stage of development is no longer an option, it&apos;s a 
              necessity. Bhisey&apos;s DevSecOps offering seamlessly integrates security best practices within your DevOps pipeline, enabling 
              you to deliver high-quality, secure software at rapid velocity.
            </p>
            
            <p>
              Our expert consultants guide you through the DevSecOps transformation, integrating security tools and processes into your 
              existing workflow. We help you automate security testing, identify vulnerabilities, ensure continuous compliance and foster a 
              culture of shared security responsibility across your development, operations, and security teams.
            </p>
            
            <p>
              The result? Faster deployments, reduced vulnerabilities, and increased confidence in the security of your code 
              and applications.
            </p>
          </div>
        </Container>
      </Section>

      {/* DevOps Tools and Technologies */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-500 mb-8">
              DevOps Tools and Technologies
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                category: "Continuous Integration",
                tools: ["Bitbucket", "Git", "GitHub", "Jenkins", "SonarQube"]
              },
              {
                category: "Code Management", 
                tools: ["Bitbucket", "GitHub", "GitLab", "SonarQube", "Xcode"]
              },
              {
                category: "Build",
                tools: ["Apache Ant", "Gradle", "Maven", "Xcode"]
              },
              {
                category: "Microservices",
                tools: ["Amazon ECS", "Azure Kubernetes Services", "Docker", "Kubernetes"]
              },
              {
                category: "Continuous Testing",
                tools: ["BlazeMeter", "Apache JMeter", "Selenium", "Tsung"]
              },
              {
                category: "Security Testing",
                tools: ["Burp Suite", "nmap.org", "WireShark"]
              }
            ].map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="lg:w-48 flex-shrink-0">
                    <h3 className="text-base font-semibold text-charcoal bg-blue-100 px-4 py-3 rounded text-center">
                      {section.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {section.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center gap-3 px-4 py-2 bg-white rounded border text-sm text-charcoal">
                        <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">
                          {tool.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-medium">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bhisey DevOps Practice gives you */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-500 mb-8">
              Bhisey DevOps Practice gives you
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "📋",
                title: "A Solid Plan",
                description: "for a painless and predictable move to DevOps practices under AWS, Google Cloud or Azure - not as a one size fits all, but tailored specifically to the state of your release and deployment pipeline."
              },
              {
                icon: "🔧",
                title: "Automation & Testing",
                description: "We'll help you build or automate your CI/CD pipeline as well as application and environment testing processes for fast, reliable and predictable releases."
              },
              {
                icon: "☁️",
                title: "Optimization",
                description: "of the costs of using a cloud provider of your choice, and the ability to adjust your product architecture to minimize those costs."
              },
              {
                icon: "🔗",
                title: "Integration",
                description: "of our DevOps personnel and/or assistance in training your people to keep DevOps running smoothly once you are up and running."
              }
            ].map((item, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-charcoal mb-4">{item.title}</h4>
                <p className="text-sm text-charcoal-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <TestimonialSlider
        testimonials={[
          {
            quote: "Bhisey have been a fantastic partner to Imprivata for many years now bringing extensive knowledge of AWS and its services. Some of their DevOps Engineers have worked on key cloud products for us for several years and have become trusted leaders in our extended DevOps team.",
            author: "Fergal Sweeney",
            title: "Director of DevOps",
            company: "Imprivata"
          },
          {
            quote: "I am very likely to recommend Bhisey Software because of their strong commitment to make their customers successful. Examples that come to mind include: my ability to call directly into Bhisey leadership when needed, adaptability to the changes in my business, access to top shelf engineering and technical talent.",
            author: "John Scano", 
            title: "Chief Development Officer",
            company: "Lookout"
          }
        ]}
        title="Testimonials"
        className="bg-background-light"
      />

      {/* Contact Section */}
      <ContactSection
        title="Contact Us"
        subtitle="Please provide your contact details and some information about your project, and our Team will respond promptly to see how we can best assist you. To send us an RFP, simply attach the document to the form below."
      />
    </main>
  );
}