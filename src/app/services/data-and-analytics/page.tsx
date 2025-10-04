import React from 'react';
import { HeroBanner, ClientLogoMarquee, BhiseyDifferenceGrid, AwardsRecognitionGrid, ContactSection } from '@/components/reusable';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Link from 'next/link';

export const metadata = {
  title: 'Data and Analytics Services | Bhisey',
  description: 'Transform your data into competitive advantage with our full-cycle data and analytics services. 30+ years of experience in data engineering, architecture, and machine learning.'
};

export default function DataAndAnalyticsPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <HeroBanner
        alignment="left"
        overlay="none"
        variant="compact"
        title="Data and Analytics Services"
        subtitle="Imagine a constant flow of data-driven insights guiding you toward smarter decisions, greater business agility, and, ultimately, competitive advantage. With Bhisey's full-cycle data and analytics services, you can monetize your data, break data silos and unlock the full potential of your data goldmine. Backed by deep domain understanding, a solid grasp of modern data technologies, and advanced analytics skills, we can help you take your data narrative to the next level."
        primaryCta={{ href: '#contact', text: 'Talk to an Expert' }}
        className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 text-white"
      />

      {/* Client Spotlight + CTA Panel */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-orange-600 md:text-4xl mb-2">Client Spotlight</h2>
            <p className="text-sm md:text-base text-orange-500">Trusted by 350+ Clients Worldwide</p>
          </div>
          <ClientLogoMarquee speed="fast" pauseOnHover className="mb-8 bg-gray-50 rounded-md" logos={[] as any} showTitle={false} />
          
          <div className="rounded-xl bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 p-10 md:p-16 text-center text-white shadow-md">
            <h3 className="mb-4 text-white text-xl md:text-2xl font-semibold tracking-tight">Data and Analytics Challenges? Solved.</h3>
            <p className="mb-8 text-sm md:text-base text-orange-100">Looking to extract business value from existing data?</p>
            <Link href="#contact" className="inline-flex items-center rounded-md bg-orange-700 hover:bg-orange-800 px-6 py-3 text-sm font-semibold text-white shadow transition focus:outline-none focus:ring-2 focus:ring-orange-300">
              Talk to our Experts →
            </Link>
          </div>
        </Container>
      </Section>

      {/* The Bhisey Difference */}
      <BhiseyDifferenceGrid
        title="The Bhisey Difference"
        className="bg-white"
        items={[
          { title: 'Partner by Design', description: 'Learn More' },
          { title: 'Product Driven Engagement', description: 'Learn More' },
          { title: 'People You Can Count On', description: 'Learn More' },
          { title: 'Proven Success', description: 'Learn More' }
        ]}
      />

      {/* Designed to Deliver Section */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">Designed to Deliver Faster Time to Innovation</h2>
            <p className="text-base md:text-lg text-charcoal-light">Every project team is structured to optimize your custom software development objectives and business goals.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { 
                title: 'US-based Project Leadership', 
                text: 'Our Delivery Manager is a senior technology leader that becomes an extension of your team, ensuring your software development milestones and goals are met from kickoff to delivery.' 
              },
              { 
                title: 'Optimized Global Talent and Skill Mix', 
                text: 'Our teams are strategically staffed to deliver industry-leading breadth and depth of technology skills and expertise while optimizing delivery costs.' 
              },
              { 
                title: 'On-demand Hard-to-find Experts', 
                text: 'Specialized resources like business analysts, architects, DevSecOps, AI/ML engineers, and others can be added on-demand to serve specific software project requirements.' 
              },
              { 
                title: 'Cost-effective US-based UX Talent', 
                text: 'Our partnership with Bentley University\'s User Experience Center enables us to deliver award-winning designs and user experiences at an affordable price point.' 
              }
            ].map(card => (
              <div key={card.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50">
                    <div className="w-6 h-6 bg-teal-500 rounded" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-lg font-semibold text-charcoal">{card.title}</h3>
                    <p className="text-sm leading-relaxed text-charcoal-light">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Expert Data Analytics Services */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <h2 className="mb-10 text-center text-3xl md:text-4xl font-bold text-orange-600">Expert Data Analytics Services for Your Scenario</h2>
          <p className="text-center text-base md:text-lg text-charcoal-light mb-12 max-w-4xl mx-auto">
            At Bhisey, we help turn data into industry success by leveraging the power of predictive and prescriptive analytics to uncover hidden patterns, mitigate risks, and seize new opportunities.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg border border-gray-200 p-8 shadow-sm bg-white">
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <div className="w-6 h-6 bg-orange-500 rounded-full" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-xl font-semibold text-orange-600">Healthcare</h3>
                  <ul className="space-y-3 text-sm text-charcoal-light">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      Integrating data from EHRs/EMRs, ERP systems, lab results, medical databases, etc. to support clinical decision-making
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      Population-level data analysis to identify trends, patterns, and risk factors
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      Personalized care plans and treatments
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      Healthcare insurance fraud detection
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      Healthcare supply chain optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Explore our Data and Analytics Services */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-orange-500 text-xl md:text-2xl font-semibold mb-2">Explore our Data and Analytics Services rooted in</h2>
            <h3 className="text-orange-500 text-2xl md:text-3xl font-bold">30+ years of hands-on experience</h3>
          </div>
          
          <div className="space-y-8">
            {[
              {
                title: 'Data Platform Architecture Design',
                description: 'Start your data journey off on the right foot with a robust data architecture that allows you to take the most of your data. Our team of seasoned data architects and engineers work closely with you to design a future-proof data architecture that aligns with your growth strategy. Whether it\'s a cloud-based, on-premise, or hybrid solution, we define data models, underlying data structures, integration approaches, data governance strategies and more to ensure your data is consistent, secure, and readily accessible.'
              },
              {
                title: 'Data Engineering',
                description: 'Streamline your data from multiple sources into a unified system. Our highly experienced data engineers build scalable yet flexible ETL and ELT pipelines that seamlessly integrate data in different formats, with different structures, and via different APIs and custom connectors. Data Platforms we help clients build are scalable, secure, and can handle the increasing data volumes.'
              }
            ].map(service => (
              <div key={service.title} className="border-l-4 border-orange-500 pl-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50">
                    <div className="w-6 h-6 bg-orange-500 rounded" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-4 text-xl font-semibold text-charcoal">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-charcoal-light">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Awards & Partnerships */}
      <AwardsRecognitionGrid />

      {/* Client Success Stories */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <h2 className="mb-12 text-center text-3xl md:text-4xl font-bold text-orange-600">Client Success Stories</h2>
          <div className="space-y-6">
            {[
              {
                title: 'SafeTherapeutics: Improving Patient Outcomes by Reducing Adverse Drug Reactions',
                description: 'Learn More'
              },
              {
                title: 'Bhisey supports Trapelo on the journey to AWS Cloud ensuring HIPAA-Compliance',
                description: 'Learn More'
              },
              {
                title: 'Enhancing Data Management and Application Efficiency for a Leading Fleet Solutions Provider',
                description: 'Learn More'
              }
            ].map((story, index) => (
              <div key={index} className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg">
                <div className="w-24 h-16 bg-gray-200 rounded flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-orange-600 mb-2">{story.title}</h3>
                  <Link href="#" className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                    {story.description} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Turn Your Data into a Superpower CTA */}
      <Section className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400" spacing="xl">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-orange-100 text-3xl md:text-4xl font-bold mb-4">Turn Your Data into a Superpower</h2>
            <p className="text-orange-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              We are here to find the best solution to your data challenges
            </p>
            <Link href="#contact" className="inline-flex items-center rounded-md bg-orange-700 hover:bg-orange-800 px-8 py-4 text-base font-semibold text-white shadow transition focus:outline-none focus:ring-2 focus:ring-orange-300">
              Let&apos;s Talk →
            </Link>
          </div>
        </Container>
      </Section>

      {/* Tech Spotlight */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <h2 className="mb-8 text-center text-3xl md:text-4xl font-bold text-orange-600">Tech spotlight</h2>
          <p className="text-center text-base md:text-lg text-charcoal-light mb-12 max-w-4xl mx-auto">
            As your technology partner, we leverage state-of-the-art technology to ensure reliability and longevity of your custom data solutions. Being cloud and platform-agnostic and customer-focused, we carefully consider our clients&apos; needs to choose the best tools and frameworks aligned with their long-term objectives.
          </p>
          
          <div className="space-y-4">
            {[
              { category: 'Cloud', technologies: 'AWS, Azure, GCP' },
              { category: 'Data storage', technologies: 'Snowflake, Google BigQuery, Amazon, Redshift, Amazon S3, Azure Data Lake Storage' },
              { category: 'Data integration and processing', technologies: 'SSIS, Oracle Data Integrator, Talend, Apache NiFi, Informatica PowerCenter, Azure Data Factory, Google Cloud Dataflow, AWS Glue, Apache Hadoop, Apache Spark' },
              { category: 'Data visualization', technologies: 'Tableau, Power BI, Looker, Qlik Sense, Sisense' },
              { category: 'Machine learning', technologies: 'TensorFlow, Keras, PyTorch, NumPy, XGBoost, LightGBM, Pandas, Amazon SageMaker, Google Cloud AI Platform, Apache Spark, Jupyter Notebook' }
            ].map((tech) => (
              <div key={tech.category} className="flex flex-col md:flex-row gap-4 p-4 bg-orange-50 rounded-lg">
                <div className="md:w-48 flex-shrink-0">
                  <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                    {tech.category}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-charcoal-light">{tech.technologies}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-orange-600 md:text-4xl">Ready to Discuss Your Data and Analytics Needs?</h2>
            <p className="text-base leading-relaxed text-charcoal-light md:text-lg">
              Let&apos;s reimagine the way you think about your data. Send us a message describing your goals, and let&apos;s explore how our data engineering services can drive your success.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            {/* Form */}
            <div className="md:col-span-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Enter your company name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">How can we help?*</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us, how can we help you?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm text-orange-600 cursor-pointer">
                    <span className="px-3 py-2 border border-orange-300 rounded text-sm">Choose File</span>
                    Upload your RFP or other relevant files (Optional)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Info Panel */}
            <aside className="rounded-xl bg-orange-50 p-6 lg:p-8">
              <h3 className="mb-4 text-xl font-semibold text-charcoal">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-orange-100 text-orange-600">
                    📞
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">617-340-3850</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-orange-100 text-orange-600">
                    ✉️
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">contact@Bhiseysoft.com</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-charcoal">Find Us on Social Media</h4>
                <div className="flex flex-wrap gap-3">
                  <button className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-sm font-semibold text-charcoal shadow-sm ring-1 ring-orange-100 transition hover:scale-105 hover:text-orange-600">
                    X
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-sm font-semibold text-charcoal shadow-sm ring-1 ring-orange-100 transition hover:scale-105 hover:text-orange-600">
                    in
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </main>
  );
}