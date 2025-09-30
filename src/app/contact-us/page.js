import { ContactForm } from '@/components/forms/ContactForm';
import { ClientLogoMarquee } from '@/components/reusable/ClientLogoMarquee';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

// Contact Hero Section
const ContactHero = () => (
  <Section className="py-20 bg-gradient-to-br from-accent-500 to-accent-600">
    <Container>
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Thank you for your interest in{' '}
          <span className="block text-accent-100">Bhisey Software</span>
        </h1>
        <p className="text-xl md:text-2xl text-accent-100 leading-relaxed">
          Please provide your contact details and some information about your project, 
          and our Team will respond promptly to see how we can best assist you.
        </p>
        <p className="text-lg text-accent-200 mt-4">
          To send us an RFP, simply attach the document to the form below.
        </p>
      </div>
    </Container>
  </Section>
);

// Contact Form Section
const ContactFormSection = () => (
  <Section className="py-16 bg-white">
    <Container>
      <div className="max-w-4xl mx-auto">
        <div className="bg-background-light p-8 md:p-12 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Contact Us</h2>
          <ContactForm />
        </div>
      </div>
    </Container>
  </Section>
);

// Company Locations Section
const LocationsSection = () => (
  <Section className="py-16 bg-background-light">
    <Container>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
          Our Locations
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Headquarters */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-charcoal mb-4">Headquarters</h3>
          <div className="space-y-2 text-charcoal-light">
            <p>123 Innovation Drive</p>
            <p>Tech City, TC 12345</p>
            <p className="mt-4">
              <a href="tel:+1-555-123-4567" className="text-accent-500 hover:text-accent-600 font-semibold">
                +1 (555) 123-4567
              </a>
            </p>
            <p>
              <a href="mailto:contact@bhiseysoftware.com" className="text-accent-500 hover:text-accent-600">
                contact@bhiseysoftware.com
              </a>
            </p>
          </div>
        </div>

        {/* West Coast Office */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-charcoal mb-4">West Coast Office</h3>
          <div className="space-y-2 text-charcoal-light">
            <p>456 Silicon Valley Blvd</p>
            <p>San Francisco, CA 94102</p>
            <p className="mt-4">
              <a href="tel:+1-555-987-6543" className="text-accent-500 hover:text-accent-600 font-semibold">
                +1 (555) 987-6543
              </a>
            </p>
          </div>
        </div>

        {/* European Office */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-charcoal mb-4">European Office</h3>
          <div className="space-y-2 text-charcoal-light">
            <p>789 Tech Park</p>
            <p>London, UK EC1A 1AA</p>
            <p className="mt-4">
              <a href="tel:+44-20-7123-4567" className="text-accent-500 hover:text-accent-600 font-semibold">
                +44 20 7123 4567
              </a>
            </p>
          </div>
        </div>
      </div>
    </Container>
  </Section>
);

// Social Media Links
const SocialMediaSection = () => (
  <Section className="py-12 bg-white">
    <Container>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-charcoal mb-6">Find Us on Social Media</h3>
        <div className="flex justify-center space-x-6">
          <a 
            href="https://linkedin.com/company/bhisey-software" 
            className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white hover:bg-accent-600 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            href="https://twitter.com/bhiseysoftware" 
            className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white hover:bg-accent-600 transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </div>
    </Container>
  </Section>
);

export default function ContactUsPage() {
  return (
    <>
      {/* Hero Section */}
      <ContactHero />
      
      {/* Contact Form */}
      <ContactFormSection />
      
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
        title="Clients Who Trust Us"
        speed="slow"
        direction="left"
        pauseOnHover={true}
      />
      
      {/* Locations */}
      <LocationsSection />
      
      {/* Social Media */}
      <SocialMediaSection />
    </>
  );
}