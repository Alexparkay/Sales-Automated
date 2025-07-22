import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BarChart3, Users, Lightbulb, Target, ChevronDown, Plus, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AbstractShapes from '../components/AbstractShapes';
import VideoSection from '../components/VideoSection';

// Software Dashboard Component
const SoftwareDashboard = () => {
  return (
    <div className="w-full h-full bg-gray-900 rounded-xl p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white text-lg font-semibold">Growth Analytics Dashboard</h3>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm mb-1">Qualified Leads</p>
          <p className="text-2xl font-bold text-emerald-400">2,847</p>
          <p className="text-xs text-green-400 mt-1">↑ 23% this month</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm mb-1">Conversion Rate</p>
          <p className="text-2xl font-bold text-blue-400">68.4%</p>
          <p className="text-xs text-green-400 mt-1">↑ 12% improvement</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm mb-1">Revenue Growth</p>
          <p className="text-2xl font-bold text-purple-400">$1.2M</p>
          <p className="text-xs text-green-400 mt-1">↑ 45% YoY</p>
        </div>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-3">
          <p className="text-gray-400 text-sm">Lead Scoring Algorithm Performance</p>
          <span className="text-xs text-emerald-400">Real-time</span>
        </div>
        <div className="h-32 relative">
          {/* Simulated Chart */}
          <svg className="w-full h-full">
            <polyline
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              points="0,100 50,80 100,60 150,65 200,45 250,40 300,25 350,30 400,15"
            />
          </svg>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-3 rounded-lg">
          <p className="text-gray-400 text-xs mb-2">AI Model Accuracy</p>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '94%' }}></div>
          </div>
          <p className="text-emerald-400 text-xs mt-1">94%</p>
        </div>
        <div className="bg-gray-800 p-3 rounded-lg">
          <p className="text-gray-400 text-xs mb-2">Automation Efficiency</p>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '87%' }}></div>
          </div>
          <p className="text-blue-400 text-xs mt-1">87%</p>
        </div>
      </div>
    </div>
  );
};

// Hero graphic component with connected pillars
const HeroGraphic = () => {
  const pillars = [
    { height: 180, delay: 0 },
    { height: 220, delay: 0.1 },
    { height: 200, delay: 0.2 },
    { height: 240, delay: 0.3 },
    { height: 190, delay: 0.4 },
    { height: 210, delay: 0.5 },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 600 300"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connection lines between pillars */}
        <g opacity="0.3">
          {pillars.map((_, index) => {
            if (index < pillars.length - 1) {
              const x1 = 50 + index * 100;
              const x2 = 50 + (index + 1) * 100;
              const y1 = 250 - pillars[index].height;
              const y2 = 250 - pillars[index + 1].height;
              
              return (
                <line
                  key={`line-${index}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              );
            }
            return null;
          })}
        </g>
        
        {/* Pillars */}
        {pillars.map((pillar, index) => (
          <motion.g key={index}>
            <motion.rect
              x={30 + index * 100}
              y={250 - pillar.height}
              width="40"
              height={pillar.height}
              fill="url(#gradient)"
              initial={{ height: 0, y: 250 }}
              animate={{ height: pillar.height, y: 250 - pillar.height }}
              transition={{
                duration: 1,
                delay: pillar.delay,
                ease: "easeOut"
              }}
            />
            {/* Connection dots */}
            <motion.circle
              cx={50 + index * 100}
              cy={250 - pillar.height}
              r="8"
              fill="#10b981"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                delay: pillar.delay + 0.5
              }}
            />
          </motion.g>
        ))}
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

function HomePage() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const [isVideoInView, setIsVideoInView] = useState(false);
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Auto-play video when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideoInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    return () => {
      if (videoSectionRef.current) {
        observer.unobserve(videoSectionRef.current);
      }
    };
  }, []);

  const processSteps = [
    {
      number: "1",
      title: "AI-Powered Lead Research",
      description: "Our proprietary AI analyzes thousands of data points to identify your ideal prospects with surgical precision."
    },
    {
      number: "2",
      title: "Hyper-Personalized Outreach",
      description: "Multi-channel campaigns that speak directly to each prospect's unique pain points and business needs."
    },
    {
      number: "3",
      title: "Intelligent Qualification",
      description: "AI-driven conversations that qualify leads and book meetings with decision-makers automatically."
    },
    {
      number: "4",
      title: "Sales Intelligence Delivery",
      description: "Comprehensive prospect insights delivered to your team before every meeting for higher close rates."
    },
    {
      number: "5",
      title: "Continuous Optimization",
      description: "Machine learning algorithms that improve targeting and messaging with every interaction."
    }
  ];

  const industries = [
    {
      name: "MSP",
      title: "Managed Service Providers",
      video: "/videos/Growth2.mp4",
      description: "Specialized solutions for MSPs to automate client acquisition and scale operations"
    },
    {
      name: "SAP",
      title: "SAP Partners",
      video: "/videos/Growth3.mp4",
      description: "Custom growth systems for SAP implementation partners and consultancies"
    },
    {
      name: "IT",
      title: "IT Services",
      video: "/videos/Growth4.mp4",
      description: "Comprehensive solutions for IT service companies to generate enterprise leads"
    }
  ];

  const results = [
    {
      metric: "300%",
      label: "Revenue Increased",
      description: "Average revenue growth for our clients within 12 months"
    },
    {
      metric: "500+",
      label: "Booked meetings with Fortune 500",
      description: "Our qualifying agent streamlines the process of booking clients and understanding their needs"
    },
    {
      metric: "87%",
      label: "Close Rate Improvement",
      description: "Higher conversion rates through AI-powered sales intelligence"
    }
  ];

  const caseStudies = [
    {
      company: "Eternal Soft Solutions",
      headline: "Connected Eternal Soft Solutions with Fortune 500 Company",
      description: "We hooked them up with a Fortune 500 company which sustained them for long periods of time, resulting in an 8x reduction in deal length due to high qualification processes",
      results: ["8x faster deal closure", "Fortune 500 partnership", "Sustained revenue growth"]
    },
    {
      company: "Bond Media",
      headline: "Opportunity Generated with Fortune 500 Companies",
      description: "Involving developers including complex AI machine learning tasks",
      results: ["Fortune 500 opportunities", "Complex AI implementation", "Advanced ML solutions"]
    },
    {
      company: "Apexion",
      headline: "Advanced Data Solutions for Renewable Energy Partners",
      description: "We've helped with various data points for their renewable energy partners and built out AI client acquisition systems which incorporate levels of data higher than data scientists can even obtain",
      results: ["Advanced data analytics", "AI acquisition systems", "Superior data insights"]
    },
    {
      company: "Marx",
      headline: "Enterprise-Level AI System Implementation",
      description: "We delivered for an enterprise client one of the largest projects - a very complex AI system which saves them hundreds of millions in long term costs",
      results: ["Hundreds of millions saved", "Enterprise AI system", "Long-term cost reduction"]
    },
    {
      company: "QSolar",
      headline: "Revolutionary Client Acquisition Software",
      description: "We're helping build a custom client acquisition software bespoke to QSolar which will revolutionize the way they gain clients due to AI imaging machine learning technologies and advanced automation systems",
      results: ["Custom acquisition software", "AI imaging technology", "Advanced automation"]
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Parallax Background Gradients */}
      <motion.div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ y }}
      >
        <div className="absolute top-[20%] left-[10%] w-96 h-96 rounded-full bg-gradient-to-br from-emerald-400/10 to-green-500/10 blur-3xl" />
        <div className="absolute top-[60%] right-[15%] w-80 h-80 rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-400/10 blur-3xl" />
        <div className="absolute bottom-[10%] left-[30%] w-72 h-72 rounded-full bg-gradient-to-br from-green-400/10 to-emerald-600/10 blur-3xl" />
      </motion.div>

      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen flex flex-col bg-slate-900 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/Growth7.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <AbstractShapes variant="hero" className="absolute inset-0 z-10" />
        
        {/* Header with Logo and CTA */}
        <div className="relative z-20 w-full px-8 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Imperium</h1>
          <Link
            to="/schedule"
            className="px-6 py-2.5 text-sm font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors"
          >
            Schedule Meeting
          </Link>
        </div>
        
        {/* Main Hero Content */}
        <div className="relative z-20 flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              MSPs Are Losing 
              <span className="block mt-2 bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                67% of Revenue
              </span>
              <span className="block mt-2 text-white">
                To Manual Processes
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl font-medium leading-relaxed">
              <span className="text-emerald-300 font-bold">Imperium Growth</span> delivers AI-powered client acquisition systems specifically for MSPs and IT service providers. We don't just book meetings—we build complete revenue engines that <span className="underline decoration-emerald-400 decoration-2">guarantee results</span>.
            </p>
          </motion.div>
          
          {/* Hero Graphic - Connected Pillars */}
          <div className="mt-16">
            <HeroGraphic />
          </div>
        </div>
      </section>

      {/* AI Revenue Engine Video Section - Completely Redesigned */}
      <section ref={videoSectionRef} className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-2xl text-gray-800 font-medium">
              Watch how we transform businesses with custom AI-powered growth systems
            </p>
          </motion.div>
          
          <div className="aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            {isVideoInView && (
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              >
                <source src="/videos/Imperiumanimation.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </section>

      {/* Process Section - Redesigned with Five Pillars */}
      <section className="relative py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            {/* Left side - Keep existing graphic */}
            <div className="lg:w-1/2">
              <div className="sticky top-24">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  {/* Process visualization */}
                  <div className="relative h-[500px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl"></div>
                    <HeroGraphic />
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Right side - Five Pillars content */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                The Five Pillars
              </h2>
              
              <div className="space-y-6 mb-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-700 font-bold text-lg">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="space-y-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  All you need to worry about is approving reports and highly qualified opportunities we pass over to your calendar
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The reports we give you are all custom towards minimizing your workload - you just have to handle the face-to-face meetings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section - New */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We build custom bespoke growth software solutions
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <SoftwareDashboard />
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve Section - New */}
      <section className="relative py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredIndustry(industry.name)}
                onMouseLeave={() => setHoveredIndustry(null)}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg bg-gray-900">
                  {/* Video that plays on hover */}
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    ref={(el) => {
                      if (el) {
                        if (hoveredIndustry === industry.name) {
                          el.play();
                        } else {
                          el.pause();
                          el.currentTime = 0;
                        }
                      }
                    }}
                  >
                    <source src={industry.video} type="video/mp4" />
                  </video>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2">{industry.title}</h3>
                    <p className="text-gray-200 text-sm">{industry.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section - New */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4">
                  {result.metric}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{result.label}</h3>
                <p className="text-gray-600">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Updated */}
      <section className="relative py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
          </motion.div>
          
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.company}</h3>
                    <h4 className="text-xl text-emerald-600 mb-4">{study.headline}</h4>
                    <p className="text-gray-600 mb-6">{study.description}</p>
                    <div className="flex flex-wrap gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-emerald-500" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg hover:opacity-90 transition-opacity"
            >
              View All Case Studies <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section - Keep existing */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[2000px] mx-auto">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-8">
              <h2 className="text-4xl font-bold text-gray-900">
                RESOURCES
                <span className="inline-block ml-3 text-emerald-700">(+)</span>
              </h2>
            </div>

            <div className="space-y-1">
              <Link
                to="/resources/ai-crm-integration-guide"
                className="block group"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="flex items-center gap-6 py-6 border-t border-gray-100 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50/50 hover:to-transparent">
                  <div className="w-32 h-32 ml-6 rounded-xl overflow-hidden relative group-hover:shadow-lg group-hover:shadow-green-400/20 transition-all duration-300">
                    <div className="absolute inset-0">
                      <img 
                        src="/images/Growth/pexels-lauripoldre-30894193.jpg" 
                        alt="AI-Driven CRM Integration" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/40 via-emerald-700/30 to-blue-900/40"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">March 1, 2025</div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      How to Set Up AI-Driven Sales & CRM Integration
                    </h3>
                  </div>

                  <div className="mr-6 text-emerald-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </Link>

              <Link
                to="/resources/100m-ai-sales-playbook"
                className="block group"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="flex items-center gap-6 py-6 border-t border-gray-100 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50/50 hover:to-transparent">
                  <div className="w-32 h-32 ml-6 rounded-xl overflow-hidden relative group-hover:shadow-lg group-hover:shadow-green-400/20 transition-all duration-300">
                    <div className="absolute inset-0">
                      <img 
                        src="/images/Growth/pexels-aditya-aiyar-615049-1407305.jpg" 
                        alt="$100M AI Sales Playbook" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/40 via-emerald-700/30 to-blue-900/40"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">February 17, 2025</div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      The $100M AI Sales Playbook
                    </h3>
                  </div>

                  <div className="mr-6 text-emerald-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </Link>

              <Link
                to="/resources/ai-lead-generation-blueprint"
                className="block group"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="flex items-center gap-6 py-6 border-t border-b border-gray-100 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50/50 hover:to-transparent">
                  <div className="w-32 h-32 ml-6 rounded-xl overflow-hidden relative group-hover:shadow-lg group-hover:shadow-green-400/20 transition-all duration-300">
                    <div className="absolute inset-0">
                      <img 
                        src="/images/Growth/pexels-minan1398-1650627.jpg" 
                        alt="AI Lead Generation Blueprint" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/40 via-emerald-700/30 to-blue-900/40"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">February 2, 2025</div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      The Ultimate AI-Driven Lead Generation Blueprint
                    </h3>
                  </div>

                  <div className="mr-6 text-emerald-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/resources-hub"
                className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-emerald-700 to-emerald-600 rounded-lg hover:opacity-90 transition-opacity"
                onClick={() => window.scrollTo(0, 0)}
              >
                See all
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;