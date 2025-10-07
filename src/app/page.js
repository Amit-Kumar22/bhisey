import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/reusable/ContactSection";
import TestimonialsVideoWall from "@/components/reusable/TestimonialsVideoWall";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
            <span className="text-orange-500">Product Promises.</span>{" "}
            <span className="text-gray-800">Delivered</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-12">
            You Think it. We Build it.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
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

      {/* Product Challenges Section */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
            Product challenges? We take them head-on.
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 font-semibold">
            Can&apos;t-miss deadlines and Impossibly tight budgets?
          </p>
        </div>
      </section>

      {/* The Bhisey Difference Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gray-800">The </span>
            <span className="text-orange-500">Bhisey</span>
            <span className="text-gray-800"> Difference</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Partner by Design</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our US-based delivery managers are joined at the hip with your product owners – waking up every morning to ensure your product is delivered on time, on budget, and with the quality you expect.
              </p>
              <Link href="#" className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Product Driven Engagement</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our teams can rapidly scale up and down, adjusting the mix of resources and skills to optimize product deliverables, timeliness, and cost throughout the development lifecycle.
              </p>
              <Link href="#" className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">People You Can Count On</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We have the breadth and depth to deliver the right skills, scale, and speed. Yet we are nimble enough to bring hard-to-find expertise (e.g. AI/ML, DevOps) and domain knowledge into your project when needed, while keeping your overhead and costs down.
              </p>
              <Link href="#" className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Proven Success</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We have a track record of delivering products that secure a competitive advantage, generate revenues, and increase operational efficiency – all while religiously protecting your intellectual property.
              </p>
              <Link href="#" className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You Need Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            What You Need. When You Need It
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-orange-50 rounded-2xl p-12">
              <p className="text-gray-700 leading-relaxed text-lg">
                We have the breadth and depth to deliver the right skills, scale, and speed. Yet we are nimble enough to bring hard-to-find expertise (e.g. AI/ML, DevOps) and domain knowledge into your project when needed, while keeping your overhead and costs down.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-orange-500 font-bold text-xl mb-1">Lookout</div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="font-bold text-gray-800 text-lg">John Scano</div>
                <div className="text-gray-600">Chief Development Officer, Lookout</div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 relative">
                <svg className="w-8 h-8 text-orange-500 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 leading-relaxed">
                  I am very likely to recommend Bhisey Software because of their strong commitment to make their customers successful. Examples that come to mind include: my ability to call directly into Bhisey leadership when needed, adaptability to the changes in my business, access to top shelf engineering and technical talent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Earn Your Business Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            We Earn Your Business Every Day
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16">
                  <svg viewBox="0 0 120 40" className="w-full h-full">
                    <text x="10" y="30" fontSize="24" fill="#ff6b35" fontWeight="bold">trapelo</text>
                  </svg>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="font-bold text-gray-800 text-lg">Clynt Taylor</div>
                <div className="text-gray-600">CEO, Trapelo</div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <svg className="w-8 h-8 text-orange-500 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 leading-relaxed">
                  I have had a very positive experience working with Bhisey over the past eight years. They have partnered with us in designing and building very sophisticated applications in the use of precision medicine for cancer therapy selection. I highly recommend them for their expertise, professionalism and value.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-12">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Our customer-friendly policies ensure that we must continuously earn your business. Every month. Every week. Every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-8 mb-12">
            <div className="w-3 h-3 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Services</h2>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Custom Software Development</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Bhisey is a premier full-service Custom Software Development, Cloud Engineering, QA and DevOps company, specializing in the development of time-sensitive and innovative solutions. To every project, Bhisey brings a combination of domain expertise, exceptional engineering talent, rigorous Agile development processes, commitment to protection of client&apos;s IP and accountability of a US company with over two decades of impeccable reputation.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              Learn More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Awards and Recognition
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-xs font-bold">2024</div>
                <div className="text-xs">EXCELLENCE</div>
              </div>
            </div>
            <div className="w-32 h-32 flex items-center justify-center">
              <div className="text-center text-orange-500 font-bold">
                <div className="text-sm">IAOP</div>
                <div className="text-xs">OUTSOURCING 100</div>
              </div>
            </div>
            <div className="w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
              <div className="text-white text-center">
                <div className="font-bold text-lg">Inc.</div>
                <div className="text-xs">5000</div>
              </div>
            </div>
            <div className="w-32 h-32 border-4 border-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-xs font-bold text-purple-600">WINNER</div>
                <div className="text-xs">HEALTH TECH</div>
              </div>
            </div>
            <div className="w-32 h-32 bg-red-900 rounded-full flex items-center justify-center shadow-lg">
              <div className="text-white text-center">
                <div className="text-xs">BizTechMag 19</div>
                <div className="font-bold">BEST</div>
                <div className="text-xs">of Show</div>
              </div>
            </div>
            <div className="w-32 h-32 flex items-center justify-center">
              <div className="text-center">
                <div className="text-orange-500 text-2xl mb-1">☁️</div>
                <div className="text-xs font-bold">Google Cloud</div>
                <div className="text-xs">Partner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Industry Expertise
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: "❤️", title: "Healthcare" },
              { icon: "🧪", title: "Life Sciences" },
              { icon: "🏠", title: "Real Estate" },
              { icon: "🎯", title: "Marketing\nand Advertising" },
              { icon: "🛍️", title: "Retail\nand eCommerce" },
              { icon: "💰", title: "Finance\nand Banking" },
              { icon: "📚", title: "Education\nand E-Learning" },
              { icon: "✈️", title: "Travel\nand Hospitality" },
              { icon: "🔧", title: "Technology" },
              { icon: "🚚", title: "Logistics" },
              { icon: "🏭", title: "Manufacturing" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-4xl text-orange-500 mb-4">{item.icon}</div>
                <h3 className="text-gray-800 font-semibold whitespace-pre-line">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Video Section */}
      <TestimonialsVideoWall
        heading="See what people have to say about Bhisey"
        main={{
          id: "dQw4w9WgXcQ",
          title: "Testimonial of Rob Feldman, CEO of College Interactive. Mobile Application Development",
        }}
        side={[
          {
            id: "9bZkp7q19f0",
            thumbTitle: "Scott Blodgett, CIO, Lookout",
          },
          {
            id: "jNQXAC9IVRw",
            thumbTitle: "Goran Skorput, Chief Technology Officer",
          },
          {
            id: "yKNxeF4KMsY",
            thumbTitle: "Rob Feldman, Founder & CEO of College Interactive",
          },
        ]}
      />

      {/* Technical Expertise Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Breadth and depth of technical expertise at your fingertips
          </h2>

          <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm md:text-base">
            {[
              ".NET Core Web API", "AWS", ".NET", ".NET Core", "ADO.NET", "Adobe Flex",
              "Ajax", "Firebase", "GCP", "HTML", "C#", "Data Studio", "DataFlow", "DataPrep"
            ].map((tech, index) => (
              <span key={index} className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Case Studies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/images/case-1.webp')"}}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  A HIPAA Compliant Cloud Strategy. Choosing a Cloud Service Provider
                </h3>
                <Link href="#" className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/images/case-2.webp')"}}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  A leading exclusive invitation-only Online Retailer
                </h3>
                <Link href="#" className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/images/case-3.webp')"}}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Astellas: Business-Critical Ethics and Compliance Platform Development
                </h3>
                <Link href="#" className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Software Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Healthcare Software Development
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                While you build trust and credibility as a Digital Health company, Bhisey will back you up with reliability and agility on the technical side, reducing time to market and associated risks. We will help you transform your product roadmap into a HIPAA compliant, interoperable and secure state-of-the-art solution without draining your budget yet preserving quality. We have the engineering talent that has helped dozens of Digital Health and Life Sciences companies solve their most complex technology puzzles, and are trusted by companies like Janssen, Imprivata, CTCA and industry disruptors like Intervention Insights, Lifepod, Epion Health and others to achieve their complex technical objectives and meet their development milestones.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute top-8 right-8 bg-white px-4 py-2 rounded-lg shadow-lg z-10">
                <div className="flex items-center gap-2">
                  <div className="text-orange-500 font-bold">✓</div>
                  <div className="text-sm font-semibold">HIPAA COMPLIANT</div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/case-4.webp"
                  alt="Healthcare Software Development - HIPAA Compliant Solutions"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Software Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/case5.webp"
                  alt="SaaS Software Development Solutions"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                SaaS Software Development
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Bhisey is a premier custom software development and quality assurance company delivering complex world-class software solutions on a variety of technology platforms to clients ranging from Fortune 500 companies to dynamic startups. Our impeccable track record spans two decades and includes helping develop well over a thousand successful software initiatives that generated hundreds of millions of dollars for our clients
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Latest News
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {/* News Card 1 */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0 h-48 md:h-56 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: "url('/images/news-1.webp')"}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                    <div className="text-white text-center text-xs md:text-sm font-bold px-2">ISO/IEC 27001:2022</div>
                  </div>
                </div>
              </div>
              <div className="flex-grow bg-white p-4 md:p-6 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 line-clamp-3">
                  Bhisey Upgrades to ISO/IEC 27001:2022 Certification for Enhanced Information Security
                </h3>
                <p className="text-gray-600 text-sm mb-3 md:mb-4 line-clamp-3 flex-grow">
                  Bhisey Software is proud to announce that we have successfully obtained the ISO/IEC 27001:2022 certification for information security management systems. This achievement...
                </p>
                <Link href="#" className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 text-sm md:text-base mt-auto">
                  Learn More
                  <svg className="w-4 h-4 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0 h-48 md:h-56 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: "url('/images/news-2.webp')"}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white text-center font-bold text-xl md:text-2xl">TOP 100</div>
                </div>
              </div>
              <div className="flex-grow bg-white p-4 md:p-6 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 line-clamp-3">
                  Bhisey Software Named Among Top 100 Medical Software Development Companies of 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3 md:mb-4 line-clamp-3 flex-grow">
                  We at Bhisey Software are honored to announce our inclusion in the Top 100 Medical Software Development Companies for 2025, an achievement highlighted by the reputable...
                </p>
                <Link href="#" className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 text-sm md:text-base mt-auto">
                  Learn More
                  <svg className="w-4 h-4 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="flex-shrink-0 h-48 md:h-56 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: "url('/images/news-3.webp')"}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white text-center font-bold text-lg md:text-xl">AWS Healthcare</div>
                </div>
              </div>
              <div className="flex-grow bg-white p-4 md:p-6 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 line-clamp-3">
                  Bhisey Software Achieves AWS Healthcare Services Competency
                </h3>
                <p className="text-gray-600 text-sm mb-3 md:mb-4 line-clamp-3 flex-grow">
                  Bhisey Software has achieved the AWS Healthcare Services Competency designation. This accomplishment highlights more than a year of focused effort and teamwork. Awarded...
                </p>
                <Link href="#" className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 text-sm md:text-base mt-auto">
                  Learn More
                  <svg className="w-4 h-4 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm md:text-base"
            >
              Read All News
              <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section - Using existing component */}
      <ContactSection />
    </div>
  );
}
