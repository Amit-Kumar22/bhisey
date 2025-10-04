'use client';

import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
        {/* Decorative wave pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              d="M0,200 Q300,100 600,200 T1200,200 L1200,0 L0,0 Z"
              fill="none"
              stroke="#FB923C"
              strokeWidth="2"
              opacity="0.3"
            />
            <path
              d="M0,250 Q300,150 600,250 T1200,250 L1200,0 L0,0 Z"
              fill="none"
              stroke="#FB923C"
              strokeWidth="2"
              opacity="0.25"
            />
            <path
              d="M0,300 Q300,200 600,300 T1200,300 L1200,0 L0,0 Z"
              fill="none"
              stroke="#FB923C"
              strokeWidth="2"
              opacity="0.2"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600 mb-6">
            The Bhisey Team:
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 mb-8">
            Talent, Leadership, Commitment
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Bhisey, we believe in giving your projects the TLC they deserve. Our exceptional Talent, strong Leadership, and
            unwavering Commitment ensure that we deliver outstanding results for your business, transforming your vision
            into reality with the utmost care and expertise.
          </p>
        </div>
      </section>

      {/* Three Key Pillars Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Top Talent */}
          <div className="bg-orange-50 rounded-2xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Top Talent to Propel Your Business Forward
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Spread over 20+ countries across three continents, our global talent pool of over 850+ technical professionals provides a
              diverse mix of skills to meet the unique needs of every project. With a strong bench of specialists in AI/ML, DevOps, UX/UI, data
              analytics, and other advanced disciplines, we ensure your team has top-level expertise to drive your project to success.
            </p>
          </div>

          {/* Leadership */}
          <div className="bg-orange-50 rounded-2xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Leadership to See Things Through
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our US-based Delivery Managers are senior technology leaders that have navigated dozens of successful projects from start
              to finish. Keeping a keen eye on your business goal, they guide the team to deliver the results you expect.
            </p>
          </div>

          {/* Commitment */}
          <div className="bg-orange-50 rounded-2xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Commitment to Your Success
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our commitment to our people translates directly to their dedication to your success. We foster a supportive and engaging
              work environment, ensuring our team remains motivated and focused on delivering outstanding results for you. With an
              industry-leading turnover rate of less than 3%, we provide stability and consistency that you can rely on.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12">
            Through The Eyes of Our Customers
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <Image
                  src="/quark-logo.png"
                  alt="Quark Docurated"
                  width={200}
                  height={50}
                  className="h-10 w-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="mb-4">
                <h4 className="font-bold text-gray-800 text-lg">Daniel Ruvinsky</h4>
                <p className="text-orange-600 text-sm">Lead Solutions Architect, Docurated</p>
              </div>
              <div className="relative">
                <div className="text-orange-400 text-4xl mb-2">&ldquo;</div>
                <p className="text-gray-700 leading-relaxed pl-4">
                  Thanks to Bhisey&apos;s efforts, the client was acquired by another company, a major goal. Bhisey&apos;s diligence,
                  attention to detail, and systematic approach made for a successful partnership. Their willingness to work hard and
                  solve problems as they arose stood out.
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <Image
                  src="/epion-logo.png"
                  alt="Epion Health"
                  width={200}
                  height={50}
                  className="h-10 w-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="mb-4">
                <h4 className="font-bold text-gray-800 text-lg">Matt Racki</h4>
                <p className="text-orange-600 text-sm">CTO, Epion Health</p>
              </div>
              <div className="relative">
                <div className="text-orange-400 text-4xl mb-2">&ldquo;</div>
                <p className="text-gray-700 leading-relaxed pl-4">
                  Bhisey Software acts as a core member of our team, and they have been involved in all of our major projects. They
                  helped us build a mobile-first website, as well as a lot of features and functions on several of our products. Bhisey
                  has performed really well. Their team has really helped to bring our numbers up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12">
            Our Team at a Glance
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Stat 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">850+</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">TOP-NOTCH PROFESSIONALS</h3>
              <p className="text-gray-700 leading-relaxed">
                Architects, Engineers, PMs, BAs, UX/UI Designers, Data Scientists, AI/ML Specialists, DevOps, and more.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">&gt;80%</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">MASTERS AND PHDS</h3>
              <p className="text-gray-700 leading-relaxed">
                in Computer Science, Data Science, Machine Learning, and related fields.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">5+</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">YEARS AVG EXPERIENCE</h3>
              <p className="text-gray-700 leading-relaxed">
                developing business-critical software applications and solutions.
              </p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">&lt;3%</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">TURNOVER RATE</h3>
              <p className="text-gray-700 leading-relaxed">
                Every project team is dependable for the long run and highly committed to your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-12">
            Leadership Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Leader 1 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative bg-gray-200">
                <Image
                  src="/team/leader1.jpg"
                  alt="Alex Karpovsky"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Alex Karpovsky</h3>
                <p className="text-gray-600 mb-3">CEO</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative bg-gray-200">
                <Image
                  src="/team/leader2.jpg"
                  alt="Tibor Vais"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Tibor Vais</h3>
                <p className="text-gray-600 mb-3">President</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* Leader 3 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative bg-gray-200">
                <Image
                  src="/team/leader3.jpg"
                  alt="Vlad Hrabrov"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Vlad Hrabrov</h3>
                <p className="text-gray-600 mb-3">Executive Vice President</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* Leader 4 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative bg-gray-200">
                <Image
                  src="/team/leader4.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Leadership Member</h3>
                <p className="text-gray-600 mb-3">Senior Director</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* Leader 5 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative bg-gray-200">
                <Image
                  src="/team/leader5.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Leadership Member</h3>
                <p className="text-gray-600 mb-3">Director</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12">
            Our Global Reach Fuels Diverse Expertise
          </h2>

          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            {/* Map Container */}
            <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl overflow-hidden">
              {/* Globe/Map SVG */}
              <svg
                viewBox="0 0 1000 600"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* World map simplified outline */}
                <g opacity="0.3" fill="#FB923C">
                  <ellipse cx="500" cy="300" rx="350" ry="250" fill="none" stroke="#F97316" strokeWidth="2" />
                  <path d="M150,300 Q250,200 350,300 T550,300" fill="none" stroke="#F97316" strokeWidth="1.5" />
                  <path d="M150,350 Q250,250 350,350 T550,350" fill="none" stroke="#F97316" strokeWidth="1.5" />
                  <circle cx="200" cy="200" r="3" fill="#F97316" />
                  <circle cx="350" cy="250" r="3" fill="#F97316" />
                  <circle cx="500" cy="230" r="3" fill="#F97316" />
                  <circle cx="650" cy="260" r="3" fill="#F97316" />
                  <circle cx="750" cy="280" r="3" fill="#F97316" />
                  <circle cx="300" cy="350" r="3" fill="#F97316" />
                  <circle cx="550" cy="400" r="3" fill="#F97316" />
                </g>
              </svg>

              {/* Role Labels positioned around the map */}
              <div className="absolute inset-0">
                {/* Top Left */}
                <div className="absolute top-[15%] left-[15%] text-center">
                  <div className="bg-white rounded-lg px-3 py-2 shadow-md">
                    <div className="text-orange-600 mb-1">
                      <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                      Project<br />Managers
                    </div>
                  </div>
                </div>

                {/* Top Center */}
                <div className="absolute top-[10%] left-[45%] text-center">
                  <div className="bg-white rounded-lg px-3 py-2 shadow-md">
                    <div className="text-orange-600 mb-1">
                      <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                      AI / ML
                    </div>
                  </div>
                </div>

                {/* Top Right */}
                <div className="absolute top-[15%] right-[12%] text-center">
                  <div className="bg-white rounded-lg px-3 py-2 shadow-md">
                    <div className="text-orange-600 mb-1">
                      <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                      UX/UI<br />Designers
                    </div>
                  </div>
                </div>

                {/* Middle Left */}
                <div className="absolute top-[40%] left-[8%] text-center">
                  <div className="bg-white rounded-lg px-3 py-2 shadow-md">
                    <div className="text-orange-600 mb-1">
                      <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                      Technical<br />Leads
                    </div>
                  </div>
                </div>

                {/* Middle Right */}
                <div className="absolute top-[35%] right-[8%] text-center">
                  <div className="bg-white rounded-lg px-3 py-2 shadow-md">
                    <div className="text-orange-600 mb-1">
                      <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                        <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                        <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                      Data<br />Scientists
                    </div>
                  </div>
                </div>

                {/* Bottom Left */}
                <div className="absolute bottom-[15%] left-[12%] text-center">
                  <div className="bg-white rounded-lg px-3 py-2 shadow-md">
                    <div className="text-orange-600 mb-1">
                      <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                        <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                      Business<br />Analysts
                    </div>
                  </div>
                </div>

                {/* Bottom Center */}
                <div className="absolute bottom-[10%] left-[42%] text-center">
                  <div className="bg-white rounded-lg px-3 py-2 shadow-md">
                    <div className="text-orange-600 mb-1">
                      <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                      Software<br />Engineers
                    </div>
                  </div>
                </div>

                {/* Bottom Right 1 */}
                <div className="absolute bottom-[25%] right-[15%] text-center">
                  <div className="bg-white rounded-lg px-3 py-2 shadow-md">
                    <div className="text-orange-600 mb-1">
                      <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                      QA Engineers
                    </div>
                  </div>
                </div>

                {/* Bottom Right 2 */}
                <div className="absolute bottom-[8%] right-[25%] text-center">
                  <div className="bg-white rounded-lg px-3 py-2 shadow-md">
                    <div className="text-orange-600 mb-1">
                      <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                      Integration & Release<br />Engineers
                    </div>
                  </div>
                </div>

                {/* Middle Bottom */}
                <div className="absolute bottom-[35%] left-[35%] text-center">
                  <div className="bg-white rounded-lg px-3 py-2 shadow-md">
                    <div className="text-orange-600 mb-1">
                      <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                      DevOps<br />Engineers
                    </div>
                  </div>
                </div>

                {/* Additional position */}
                <div className="absolute top-[50%] right-[35%] text-center">
                  <div className="bg-white rounded-lg px-3 py-2 shadow-md">
                    <div className="text-orange-600 mb-1">
                      <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                      System<br />Designers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
