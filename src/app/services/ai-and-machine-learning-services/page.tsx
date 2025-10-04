import React from 'react';
import { ContactSection, TestimonialSlider, ClientLogoMarquee } from '@/components/reusable';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Link from 'next/link';
import Image from 'next/image';
import { Lightbulb, Users, TrendingUp, Zap, Sparkles, Eye, MessageCircle, Settings, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'AI and Machine Learning Services | Bhisey',
  description: 'Tap into our proven track record of incorporating AI and Machine Learning technologies to deliver tangible business value – creating a competitive advantage, growing revenues, and increasing operational efficiency.'
};

export default function AIAndMachineLearningServicesPage() {
  const testimonials = [
    {
      quote: "Bhisey team showcased unparalleled expertise, delivering a software product that not only met but exceeded our expectations. The collaborative was seamless, with transparent communication and a commitment to excellence evident throughout. Bhisey's work on our product not only functions flawlessly but has surpassed our performance projections. Their flexibility in incorporating feedback and dedication to customer satisfaction set them apart. I highly recommend Bhisey Software to any organization seeking a reliable and proficient software development team.",
      author: "John Eidukot",
      title: "CTO, Walters Golf Management",
      company: "WALTERS Golf Management",
      image: "/testimonial-john.jpg"
    },
    {
      quote: "Bhisey has been an attentive partner for us for the last five years, and has contributed to building a key piece of our software in a variety of ways. While this includes more obvious things like development and design, our Bhisey team goes above and beyond to contribute meaningfully to business objectives and to provide a holistic perspective during development discussions.",
      author: "Olivia Channon",
      title: "Content Director, NEOLab",
      company: "NEOLab",
      image: "/testimonial-olivia.jpg"
    }
  ];

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-slate-800 via-slate-700 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
        <Container className="relative z-10 py-20">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center space-x-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">AI and Machine Learning Services</span>
          </nav>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                AI and Machine Learning Services
              </span>
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-12 max-w-3xl">
              Tap into our proven track record of incorporating AI and Machine Learning 
              technologies to deliver tangible business value – creating a competitive 
              advantage, growing revenues, and increasing operational efficiency.
            </p>
            
            {/* Capability Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Empower users with data insights</h3>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Personalize the customer experience</h3>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Automate and streamline processes</h3>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Accelerate agility and innovation</h3>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Client Spotlight */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Client Spotlight</h2>
            <p className="text-lg text-charcoal-light">Trusted by 350+ Clients Worldwide</p>
          </div>
          
          {/* Client logos - simplified for demo */}
          <div className="flex justify-center items-center space-x-8 md:space-x-12 mb-16 grayscale opacity-60">
            <div className="text-2xl font-bold text-charcoal">rednucleus</div>
            <div className="text-2xl font-bold text-charcoal">SARTORIUS</div>
            <div className="text-2xl font-bold text-charcoal">sharecare</div>
            <div className="text-2xl font-bold text-charcoal">accenture</div>
            <div className="text-2xl font-bold text-charcoal">ACUMEN</div>
          </div>
          
          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-emerald-300">AI Excellence. Fast.</span>
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">Demands for</p>
            <Link 
              href="#contact" 
              className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Talk to our AI/ML experts
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Don't Get Left Behind */}
      <Section className="bg-gray-50" spacing="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Don&apos;t Get Left Behind</h2>
            <p className="text-lg text-charcoal-light max-w-4xl mx-auto leading-relaxed">
              AI is rapidly transforming every industry, creating opportunities for businesses that stay at the forefront of 
              technology to leap ahead of the competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Innovate</h3>
              <p className="text-charcoal-light leading-relaxed">
                Create dynamic solutions that drive continuous improvement in your products and services.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Automate</h3>
              <p className="text-charcoal-light leading-relaxed">
                Streamline processes to increase productivity with intelligent automation.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Optimize</h3>
              <p className="text-charcoal-light leading-relaxed">
                Leverage data insights to enhance decision-making and maximize business outcomes.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Personalize</h3>
              <p className="text-charcoal-light leading-relaxed">
                Deliver tailored experiences that meet individual customer needs and preferences.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* AI and Machine Learning Expertise */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-emerald-600">AI and Machine Learning Expertise:</span>
              <br />
              <span className="text-charcoal">From Generative to Predictive and Everything in Between</span>
            </h2>
            <p className="text-lg text-charcoal-light max-w-4xl mx-auto leading-relaxed">
              With a deep pool of resources around the globe, we are ready to provide the skills, scale, and speed to deliver 
              your AI and Machine Learning project on time and on budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-8 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Generative AI</h3>
              <p className="text-charcoal-light leading-relaxed">
                Harness the power of Generative AI to enhance customer interactions by generating human-like responses to 
                customer inquiries and automating issue resolution without human intervention.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-8 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Image & Voice Recognition</h3>
              <p className="text-charcoal-light leading-relaxed">
                Provide seamless and intuitive user experiences by implementing advanced features ranging from facial 
                recognition to object detection and speech-to-text conversion.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-8 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Natural Language Processing</h3>
              <p className="text-charcoal-light leading-relaxed">
                Unlock the potential of Natural Language Processing (NLP) to improve customer support through chatbots, automate text 
                recognition, and analyze user sentiment.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-8 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Process Automation</h3>
              <p className="text-charcoal-light leading-relaxed">
                Use the power of AI to intelligently automate complex tasks to reduce operational costs, minimize human error, and free up 
                your team to focus on more strategic initiatives.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* From Plug-and-Play to Fully Tailored */}
      <Section className="bg-gray-50" spacing="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">From Plug-and-Play to Fully Tailored</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-charcoal-light mb-2">From ready-to-use solutions to fully customized implementations,</p>
              <p className="text-lg text-charcoal-light">our teams are ready to deliver the solution that best meets your needs.</p>
            </div>
          </div>
          
          {/* Delivery Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-orange-500 transform -translate-y-1/2"></div>
            
            {/* Timeline points */}
            <div className="relative flex justify-between items-center">
              <div className="w-4 h-4 bg-emerald-400 rounded-full border-4 border-white shadow-lg z-10"></div>
              <div className="w-4 h-4 bg-emerald-400 rounded-full border-4 border-white shadow-lg z-10"></div>
              <div className="w-4 h-4 bg-emerald-400 rounded-full border-4 border-white shadow-lg z-10"></div>
              <div className="w-4 h-4 bg-emerald-400 rounded-full border-4 border-white shadow-lg z-10"></div>
              <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
            </div>
            
            {/* Timeline labels */}
            <div className="grid grid-cols-5 gap-4 mt-8">
              <div className="text-center">
                <h3 className="font-semibold text-charcoal mb-2">Off-the-Shelf with Minor Customization</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  Ideal for immediate deployment with minimal specific business requirements.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold text-charcoal mb-2">Configurable AI Platforms</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  More flexible AI platforms allowing significant configuration and tailoring without rapid development.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold text-charcoal mb-2">AI API & SDK Integration</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  Utilization of AI APIs and SDKs to integrate specific AI capabilities into existing systems, requiring moderate development effort.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold text-charcoal mb-2">Hybrid Solutions</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  Combination of off-the-shelf components with custom-developed elements to address unique requirements.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold text-charcoal mb-2">Custom-Built Solutions</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  Fully customized AI solutions developed from the ground up to meet precise business objectives and workflows.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* AI solutions for today's needs */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              AI solutions for today&apos;s needs<br />
              and tomorrow&apos;s vision
            </h2>
            <p className="text-lg text-charcoal-light max-w-4xl mx-auto leading-relaxed">
              Each project we undertake is anchored in our five pillars of success, providing a strong foundation for an AI 
              solution that not only meets your goals today, but can also scale and grow to serve you well into the future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-bold text-charcoal mb-3">Built for Business Impact</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Aligning our efforts with your strategic objectives, we deliver AI solutions that drive tangible business outcomes.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-bold text-charcoal mb-3">Ready to Deploy Expertise</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">
                With a deep pool of AI expertise, our teams are ready to hit the ground running and meet your time-to-market demands.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-bold text-charcoal mb-3">Secure from the Ground up</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">
                We proactively design and implement robust security at all levels, from authentication & authorization to communication & data protection.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-bold text-charcoal mb-3">Architected for Scale</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Our solutions are designed to handle increasing data and user loads, ensuring consistent performance as your business grows.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-bold text-charcoal mb-3">Adaptable to Change</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Our solutions are implemented and documented with your future needs in mind, allowing for seamless knowledge transfer and easy extensibility.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Success Stories Quote */}
      <Section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white" spacing="xl">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We turn your AI ideas into working solutions.<br />
              Challenges into wins. Product owners into<br />
              heroes.
            </h2>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <TestimonialSlider 
        testimonials={testimonials}
        title=""
        showTitle={false}
        className="bg-gray-50"
      />

      {/* Agile Delivery Framework */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              AI Expertise + Agile Delivery<br />
              = Better and Faster Results
            </h2>
          </div>
          
          {/* Framework visualization */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <h3 className="font-semibold text-charcoal">Scrum Framework</h3>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <h3 className="font-semibold text-charcoal">Kanban Framework</h3>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <h3 className="font-semibold text-charcoal">Lean Software Development</h3>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <h3 className="font-semibold text-charcoal">Extreme Programming</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <h3 className="font-semibold text-charcoal">Crystal Development Framework</h3>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <h3 className="font-semibold text-charcoal">Dynamic System Development</h3>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <h3 className="font-semibold text-charcoal">Feature-Driven Development</h3>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center max-w-4xl mx-auto">
            <p className="text-lg text-charcoal-light leading-relaxed">
              While our teams bring together AI and Machine Learning experts from all over the world, they are all fluent in the language of 
              Agile. Whether you have a preferred methodology for us to follow or need a hand establishing one, we&apos;ll put our extensive 
              Agile experience to work for you.
            </p>
          </div>
        </Container>
      </Section>

      {/* Case Study Featured */}
      <Section className="bg-gray-50" spacing="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Transforming Great Ideas into<br />
              Amazing AI-Powered Products
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto bg-gray-200">
                {/* Placeholder for case study image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span>Case Study Image</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-charcoal mb-4">
                  Biosimulation Tool Performing in Silico Experiments
                </h3>
                <Link 
                  href="#" 
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <ContactSection 
        title="See How We Can Help You Harness the Power of AI"
        subtitle="Please provide your contact details and some information about your project, and our Team will respond promptly to see how we can best assist you. To send us an RFP, simply attach the document to the form below."
        className="bg-white"
      />
    </main>
  );
}