import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, BarChart2, Target, Lightbulb, Cpu, LineChart, Users, Workflow, Database, Zap, Plus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AbstractShapes from '../components/AbstractShapes';

const SolutionsPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const deepAnalysis = [
    {
      id: 'business-analysis',
      title: 'Full Business System Analysis',
      description: 'Understanding your entire revenue engine. We conduct a detailed audit of your sales, marketing, and fulfillment processes, identifying inefficiencies and gaps that may be hindering your growth.'
    },
    {
      id: 'market-positioning',
      title: 'Market Positioning & Competitor Insights',
      description: 'Gaining a strategic edge in your industry. We analyze your market position, competitive landscape, and customer perception to refine your unique value proposition and messaging.'
    },
    {
      id: 'lead-sales-process',
      title: 'Lead & Sales Process Optimization',
      description: 'Maximizing conversions at every stage of your funnel. Through an in-depth assessment of your lead generation and sales processes, we pinpoint areas for improvement, ensuring higher close rates and shorter sales cycles.'
    },
    {
      id: 'ai-readiness',
      title: 'AI Readiness & Tech Stack Evaluation',
      description: 'Preparing your business for AI-driven growth. We assess your current tech stack and business processes to determine how AI can be seamlessly integrated for maximum efficiency and scalability.'
    }
  ];

  const customSolutions = [
    {
      id: 'lead-targeting',
      title: 'AI-Powered Lead Targeting',
      description: 'Laser-focused outreach that delivers results. We build intelligent prospecting systems that identify high-intent leads and engage them with hyper-personalized messaging.'
    },
    {
      id: 'multi-touch-outreach',
      title: 'Automated Multi-Touch Outreach',
      description: 'Building relationships at scale. Our AI-driven email, LinkedIn, and ad outreach systems ensure you connect with the right prospects at the right time, nurturing them through an optimized journey.'
    },
    {
      id: 'sales-playbooks',
      title: 'Dynamic Sales Playbooks',
      description: 'Turning every SDR into a top performer. We create dynamic, data-driven sales scripts and objection-handling frameworks that adapt in real-time based on prospect engagement.'
    },
    {
      id: 'conversion-content',
      title: 'Conversion-Optimized Content & Assets',
      description: 'Sales materials that do the heavy lifting. From personalized pitch decks to AI-generated proposals, we provide the tools your team needs to close deals faster and more effectively.'
    }
  ];

  const implementation = [
    {
      id: 'crm-integration',
      title: 'CRM & Tech Stack Integration',
      description: 'Connecting everything for full visibility. We integrate AI-powered automation into your CRM and marketing systems, ensuring a unified, data-driven approach to client acquisition.'
    },
    {
      id: 'sales-enablement',
      title: 'AI-Driven Sales Enablement',
      description: 'Supercharging your team\'s productivity. We implement automated follow-ups, meeting scheduling, and real-time sales assistance tools to maximize efficiency.'
    },
    {
      id: 'performance-tracking',
      title: 'Real-Time Performance Tracking',
      description: 'Turning data into actionable insights. Our systems continuously monitor campaign performance, lead engagement, and sales efficiency, enabling ongoing optimization.'
    },
    {
      id: 'optimization-support',
      title: 'Continuous Optimization & Support',
      description: 'Scaling beyond implementation. We provide ongoing strategy adjustments, AI model refinements, and training to ensure long-term growth and adaptability.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-teal-950 bg-opacity-90 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 bg-black bg-opacity-50">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src="/videos/Growth6.mp4" type="video/mp4" />
          </video>
        </div>
        
        <AbstractShapes variant="hero" />
        <div className="w-full px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left ml-6 md:ml-12 lg:ml-24 mr-6 md:mr-12 lg:mr-24"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Growth Solutions
              <span className="block mt-2 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                For Your Business
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Comprehensive analysis and custom AI solutions designed to accelerate your business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-24">
        <div className="w-full px-6">
          <div className="max-w-3xl ml-6 md:ml-12 lg:ml-24 mr-6 md:mr-12 lg:mr-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              End-to-End Growth Process
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We deliver complete AI-powered growth solutions or optimize specific parts of your revenue engine based on your needs.
            </p>
            
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Deep Analysis</h3>
                  <p className="text-gray-600 mt-1">We start by understanding your entire business system, market position, and identifying optimization opportunities.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Custom Solutions</h3>
                  <p className="text-gray-600 mt-1">Based on our analysis, we build tailored AI-powered systems for lead targeting, outreach, and sales enablement.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <p className="text-gray-600 mt-1">We integrate our solutions with your existing tech stack and provide ongoing optimization and support.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <p className="text-gray-700 italic">
                Scroll down to explore each phase in detail and discover how our comprehensive approach transforms your growth strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Sections */}
      <section className="py-24">
        <div className="w-full px-6">
          {/* Deep Analysis */}
          <div id="deep-analysis" className="mb-20 scroll-mt-48 ml-6 md:ml-12 lg:ml-24 mr-6 md:mr-12 lg:mr-24">
            <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
              <div className="w-full lg:w-[40%] h-[500px] rounded-3xl overflow-hidden">
                <img
                  src="/images/Growth/pexels-manish-sharma-1900698-30906092.jpg"
                  alt="Deep Analysis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Deep Analysis
                </h2>
                <div className="space-y-4">
                  {deepAnalysis.map((item) => (
                    <div key={item.id} className="border-b border-gray-200 last:border-0">
                      <button
                        onClick={() => toggleSection(item.id)}
                        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                      >
                        <span className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors">
                          {item.title}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform duration-700 ease-in-out ${
                            expandedSection === item.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedSection === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                          className="pb-6"
                        >
                          <p className="text-gray-600">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Custom Solutions */}
          <div id="custom-solutions" className="mb-20 bg-slate-900 rounded-3xl p-12 scroll-mt-48 ml-6 md:ml-12 lg:ml-24 mr-6 md:mr-12 lg:mr-24">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="w-full lg:w-[40%] h-[500px] rounded-3xl overflow-hidden">
                <img
                  src="/images/Growth/pexels-airin-party-252379-767240.jpg"
                  alt="Custom Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Custom Solutions
                </h2>
                <div className="space-y-4">
                  {customSolutions.map((item) => (
                    <div key={item.id} className="border-b border-gray-700 last:border-0">
                      <button
                        onClick={() => toggleSection(item.id)}
                        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                      >
                        <span className="text-lg font-medium text-white hover:text-green-400 transition-colors">
                          {item.title}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform duration-700 ease-in-out ${
                            expandedSection === item.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedSection === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                          className="pb-6"
                        >
                          <p className="text-gray-300">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Implementation */}
          <div id="implementation" className="scroll-mt-48 ml-6 md:ml-12 lg:ml-24 mr-6 md:mr-12 lg:mr-24">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="w-full lg:w-[40%] h-[500px] rounded-3xl overflow-hidden">
                <img
                  src="/images/Growth/pexels-minan1398-1654255.jpg"
                  alt="Implementation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Implementation
                </h2>
                <div className="space-y-4">
                  {implementation.map((item) => (
                    <div key={item.id} className="border-b border-gray-200 last:border-0">
                      <button
                        onClick={() => toggleSection(item.id)}
                        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                      >
                        <span className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors">
                          {item.title}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform duration-700 ease-in-out ${
                            expandedSection === item.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedSection === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                          className="pb-6"
                        >
                          <p className="text-gray-600">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Are We For Section */}
      <section className="py-24 bg-gray-50">
        <div className="w-full">
          <div className="w-full px-6">
            <div className="ml-6 md:ml-12 lg:ml-24 mr-6 md:mr-12 lg:mr-24">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our Commitment to Your Success
              </h2>
              <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                Beyond our three-phase process, we believe in building lasting partnerships that drive continuous growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Bespoke Systems, Not Generic Solutions</h3>
                  <p className="text-gray-600 text-sm">
                    We don't believe in one-size-fits-all approaches. Every system we build is custom-designed for your specific business challenges, target audience, and growth objectives.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Direct Collaboration with Our Team</h3>
                  <p className="text-gray-600 text-sm">
                    You'll work directly with our founders and specialists—not account managers. This ensures that the strategic vision is maintained throughout implementation.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-Term Growth Partners</h3>
                  <p className="text-gray-600 text-sm">
                    Our relationship doesn't end after implementation. We're invested in your long-term success, continuously refining your systems as market conditions change and your business evolves.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-200 h-full bg-gradient-to-br from-white to-emerald-50">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2X ROI Guarantee</h3>
                  <p className="text-gray-600 text-sm">
                    We guarantee a minimum of 2X return on your investment, or we'll work for free until we achieve the results we've promised. Our success is directly tied to your growth.
                  </p>
                </div>
              </div>
              
              <div className="mt-10">
                <Link
                  to="/schedule"
                  className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-md transition-colors"
                >
                  Schedule a Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="w-full">
          <div className="ml-6 md:ml-12 lg:ml-24 mr-6 md:mr-12 lg:mr-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-16">
              Frequently asked questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection('faq-1')}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-900">
                      What industries does Imperium Growth specialize in?
                    </span>
                    <Plus className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      expandedSection === 'faq-1' ? 'rotate-45' : ''
                    }`} />
                  </button>
                  {expandedSection === 'faq-1' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.3, delay: 0.1 } 
                      }}
                      className="pb-6 overflow-hidden"
                    >
                      <motion.p 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        className="text-gray-600"
                      >
                        We primarily work with IT service providers, B2B companies, Managed Service Providers (MSPs), cybersecurity firms, and AI-driven SaaS businesses.
                      </motion.p>
                    </motion.div>
                  )}
                </div>

                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection('faq-2')}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-900">
                      How does Imperium Growth differ from a traditional marketing agency?
                    </span>
                    <Plus className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      expandedSection === 'faq-2' ? 'rotate-45' : ''
                    }`} />
                  </button>
                  {expandedSection === 'faq-2' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.3, delay: 0.1 } 
                      }}
                      className="pb-6 overflow-hidden"
                    >
                      <motion.p 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        className="text-gray-600"
                      >
                        Unlike traditional agencies, we don't just focus on generating leads—we build full AI-powered client acquisition systems that handle everything from lead targeting to deal closure.
                      </motion.p>
                    </motion.div>
                  )}
                </div>

                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection('faq-3')}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-900">
                      How long does it take to see results?
                    </span>
                    <Plus className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      expandedSection === 'faq-3' ? 'rotate-45' : ''
                    }`} />
                  </button>
                  {expandedSection === 'faq-3' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.3, delay: 0.1 } 
                      }}
                      className="pb-6 overflow-hidden"
                    >
                      <motion.p 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        className="text-gray-600"
                      >
                        Our AI-driven systems typically show measurable improvements within the first 60-90 days, with full scalability achieved within 6 months.
                      </motion.p>
                    </motion.div>
                  )}
                </div>

                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection('faq-4')}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-900">
                      Do you integrate with existing tech stacks?
                    </span>
                    <Plus className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      expandedSection === 'faq-4' ? 'rotate-45' : ''
                    }`} />
                  </button>
                  {expandedSection === 'faq-4' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.3, delay: 0.1 } 
                      }}
                      className="pb-6 overflow-hidden"
                    >
                      <motion.p 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        className="text-gray-600"
                      >
                        Yes, we seamlessly integrate with your existing CRM, marketing automation tools, and sales platforms to ensure a smooth transition.
                      </motion.p>
                    </motion.div>
                  )}
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection('faq-5')}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-900">
                      What level of involvement is required from my team?
                    </span>
                    <Plus className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      expandedSection === 'faq-5' ? 'rotate-45' : ''
                    }`} />
                  </button>
                  {expandedSection === 'faq-5' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.3, delay: 0.1 } 
                      }}
                      className="pb-6 overflow-hidden"
                    >
                      <motion.p 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        className="text-gray-600"
                      >
                        Minimal. We handle strategy, execution, and optimization, allowing your team to focus on closing deals rather than worrying about lead generation.
                      </motion.p>
                    </motion.div>
                  )}
                </div>

                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection('faq-6')}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-900">
                      Is Imperium Growth suitable for small businesses and startups?
                    </span>
                    <Plus className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      expandedSection === 'faq-6' ? 'rotate-45' : ''
                    }`} />
                  </button>
                  {expandedSection === 'faq-6' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.3, delay: 0.1 } 
                      }}
                      className="pb-6 overflow-hidden"
                    >
                      <motion.p 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        className="text-gray-600"
                      >
                        Yes! Our scalable solutions are designed for businesses of all sizes, from high-growth startups to established enterprises looking to streamline and optimize their sales process.
                      </motion.p>
                    </motion.div>
                  )}
                </div>

                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection('faq-7')}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-900">
                      What is your pricing structure?
                    </span>
                    <Plus className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      expandedSection === 'faq-7' ? 'rotate-45' : ''
                    }`} />
                  </button>
                  {expandedSection === 'faq-7' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.3, delay: 0.1 } 
                      }}
                      className="pb-6 overflow-hidden"
                    >
                      <motion.p 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        className="text-gray-600"
                      >
                        We offer flexible pricing models, including performance-based plans where we share in your success. Get in touch to find the best option for your business.
                      </motion.p>
                    </motion.div>
                  )}
                </div>

                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection('faq-8')}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-900">
                      How do I get started?
                    </span>
                    <Plus className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      expandedSection === 'faq-8' ? 'rotate-45' : ''
                    }`} />
                  </button>
                  {expandedSection === 'faq-8' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.3, delay: 0.1 } 
                      }}
                      className="pb-6 overflow-hidden"
                    >
                      <motion.p 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        className="text-gray-600"
                      >
                        Book a consultation with us today to discuss your growth goals and explore how our AI-driven solutions can transform your business.
                      </motion.p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage; 