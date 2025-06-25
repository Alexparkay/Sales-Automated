import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Users, Lightbulb, Target, ChevronDown, Plus, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import AbstractShapes from '../components/AbstractShapes';

function HomePage() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoInView, setIsVideoInView] = useState(false);

  // Auto-play video when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideoInView(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(e => console.log('Video play failed:', e));
        } else if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const growthFramework = [
    {
      title: 'DEEP ANALYSIS',
      details: [
        'Full Business System Analysis',
        'Market Positioning & Competitor Insights',
        'Lead & Sales Process Optimization',
        'AI Readiness & Tech Stack Evaluation'
      ]
    },
    {
      title: 'CUSTOM SOLUTIONS',
      details: [
        'AI-Powered Lead Targeting',
        'Automated Multi-Touch Outreach',
        'Dynamic Sales Playbooks',
        'Conversion-Optimized Content & Assets'
      ]
    },
    {
      title: 'IMPLEMENTATION',
      details: [
        'CRM & Tech Stack Integration',
        'AI-Driven Sales Enablement',
        'Real-Time Performance Tracking',
        'Continuous Optimization & Support'
      ]
    }
  ];

  const marketStats = [
    {
      id: 'adoption',
      value: '75%',
      label: 'AI Adoption Rate',
      description: '75% of small and medium-sized businesses (SMBs) are at least experimenting with AI, with growing businesses leading in adoption at 83%. SALESFORCE',
      image: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=1800&auto=format&fit=crop'
    },
    {
      id: 'growth',
      value: '2.1x',
      label: 'Revenue Growth',
      description: 'Over the past three years, AI leaders have achieved 1.5 times higher revenue growth compared to non-adopters, underscoring the financial benefits of AI integration. BOSTON CONSULTING GROUP',
      image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1800&auto=format&fit=crop'
    },
    {
      id: 'productivity',
      value: '67%',
      label: 'Sales Quota Challenges',
      description: "67% of sales representatives don't expect to meet their quotas this year, with non-selling tasks consuming 70% of their time—a gap AI can help bridge. SALESFORCE",
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1800&auto=format&fit=crop'
    },
    {
      id: 'opportunity',
      value: '84%',
      label: 'Competitive Advantage',
      description: '84% of businesses believe that AI will give them a competitive advantage, yet many have not fully integrated AI into their operations, risking falling behind',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1800&auto=format&fit=crop'
    }
  ];

  const industries = [
    {
      id: 'msp',
      title: 'MSPs',
      description: 'Transform your managed service business with AI-powered client acquisition systems designed specifically for MSP workflows.',
      video: '/videos/Growth3.mp4'
    },
    {
      id: 'sap',
      title: 'SAP Partners',
      description: 'Scale your SAP consulting practice with intelligent lead generation that identifies and engages enterprise-ready prospects.',
      video: '/videos/Growth5.mp4'
    },
    {
      id: 'it-services',
      title: 'IT Services',
      description: 'Revolutionize your IT services firm with automated outreach systems that book qualified meetings on autopilot.',
      video: '/videos/Growth6.mp4'
    }
  ];

  const results = [
    {
      value: '3.5x',
      label: 'Revenue Increased',
      description: 'Average revenue growth across our client portfolio'
    },
    {
      value: '500+',
      label: 'Booked meetings with Fortune 500',
      description: 'Our qualifying agent streamlines the process of booking clients and understanding their needs'
    }
  ];

  const caseStudies = [
    {
      company: 'Eternal Soft Solutions',
      headline: 'Connected Eternal Soft Solutions with Fortune 500 Company',
      description: 'We hooked them up with a Fortune 500 company which sustained them for long periods of time, resulting in an 8x reduction in deal length due to high qualification processes.'
    },
    {
      company: 'Bond Media',
      headline: 'Opportunity Generated with Fortune 500 Companies',
      description: 'Involving developers including complex AI machine learning tasks. Successfully connected them with multiple Fortune 500 opportunities.'
    },
    {
      company: 'Apexion',
      headline: 'Advanced Data Solutions for Renewable Energy Partners',
      description: 'We\'ve helped with various data points for their renewable energy partners and built out AI client acquisition systems which incorporate levels of data higher than data scientists can even obtain.'
    },
    {
      company: 'Marx',
      headline: 'Enterprise-Level AI System Implementation',
      description: 'We delivered for an enterprise client one of the largest projects - a very complex AI system which saves them hundreds of millions in long term costs.'
    },
    {
      company: 'QSolar',
      headline: 'Revolutionary Client Acquisition Software',
      description: 'We\'re helping build a custom client acquisition software bespoke to QSolar which will revolutionize the way they gain clients due to AI imaging machine learning technologies and advanced automation systems.'
    }
  ];

  const fivePillars = [
    'Data-Driven Analysis & Market Intelligence',
    'AI-Powered Lead Generation & Qualification',
    'Multi-Channel Automated Outreach Systems',
    'Dynamic Sales Enablement & Optimization',
    'Continuous Learning & Performance Enhancement'
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background Pattern with Parallax Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <motion.div 
            className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-emerald-500 blur-[100px]"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-emerald-600 blur-[120px]"
            animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-[15%] left-[15%] w-80 h-80 rounded-full bg-emerald-500 blur-[100px]"
            animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
            transition={{ duration: 22, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-[60%] right-[25%] w-72 h-72 rounded-full bg-emerald-600 blur-[90px]"
            animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity }}
          />
        </div>
      </div>

      {/* Updated Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-white/80 backdrop-blur-sm">
        <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
          Imperium
        </div>
        <Link
          to="/schedule"
          className="px-6 py-2.5 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors shadow-md"
        >
          Schedule Meeting
        </Link>
      </nav>

      {/* Updated Hero Section */}
      <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden pt-20">
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
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <AbstractShapes variant="hero" className="absolute inset-0 z-10" />
        
        {/* Hero Content */}
        <div className="relative z-20 w-full px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              MSPs Are Losing 
              <span className="block mt-2 bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
                67% of Revenue
              </span>
              <span className="block mt-2 text-white">
                To Manual Processes
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl drop-shadow-lg font-medium leading-relaxed backdrop-blur-sm bg-black/10 p-4 rounded-lg border-l-4 border-emerald-400">
              <span className="text-emerald-300 font-bold">Imperium Growth</span> delivers AI-powered client acquisition systems specifically for MSPs and IT service providers. We don't just book meetings—we build complete revenue engines that <span className="underline decoration-emerald-400 decoration-2">guarantee results</span>.
            </p>
          </motion.div>
          
          {/* Connected Pillars Graphic */}
          <motion.div 
            className="absolute bottom-20 right-10 md:right-20 lg:right-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="relative w-64 h-64">
              {/* Multiple connected pillars representing company connections */}
              {[0, 1, 2, 3, 4].map((index) => (
                <motion.div
                  key={index}
                  className="absolute w-12 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg"
                  style={{
                    height: `${120 + index * 20}px`,
                    left: `${index * 45}px`,
                    bottom: 0,
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: `${120 + index * 20}px` }}
                  transition={{ delay: 1.5 + index * 0.2, duration: 0.8 }}
                >
                  {/* Connection lines between pillars */}
                  {index < 4 && (
                    <motion.div
                      className="absolute top-1/2 right-0 w-12 h-0.5 bg-emerald-400"
                      initial={{ width: 0 }}
                      animate={{ width: '45px' }}
                      transition={{ delay: 2 + index * 0.2, duration: 0.5 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Revenue Engine Video Section - Completely Redesigned */}
      <section className="relative py-32 bg-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-2xl text-gray-700 mb-12">
              Watch how we transform businesses with custom AI-powered growth systems
            </p>
            
            {/* Centered Video */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
              >
                <source src="/videos/Imperiumanimation.mp4" type="video/mp4" />
              </video>
              
              {/* Play button overlay */}
              {!isVideoInView && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-10 h-10 text-emerald-600 ml-1" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Section - Market Stats */}
      <section className="w-full bg-transparent py-24 pb-48">
        <div className="max-w-[2000px] mx-auto">
          <div className="max-w-3xl mb-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Market Stats:</h2>
            <p className="text-xl text-gray-600">The AI adoption gap between leaders and laggards is widening, with early adopters seeing significant revenue growth while others struggle with productivity challenges.</p>
          </div>

          <div className="mt-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 gap-y-24">
              {marketStats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <div className="absolute inset-0">
                      {index === 0 && (
                        <img 
                          src="/images/Growth/pexels-ian-panelo-3571551.jpg" 
                          alt="AI Adoption Rate" 
                          className="w-full h-full object-cover"
                        />
                      )}
                      {index === 1 && (
                        <img 
                          src="/images/Growth/pexels-sohi-807598.jpg" 
                          alt="Revenue Growth" 
                          className="w-full h-full object-cover"
                        />
                      )}
                      {index === 2 && (
                        <img 
                          src="/images/Growth/pexels-asphotograpy-1002703.jpg" 
                          alt="Sales Quota Challenges" 
                          className="w-full h-full object-cover"
                        />
                      )}
                      {index === 3 && (
                        <img 
                          src="/images/Growth/pexels-gochrisgoxyz-1643409.jpg" 
                          alt="Competitive Advantage" 
                          className="w-full h-full object-cover"
                        />
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="text-5xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                          {stat.value}
                        </div>
                        <div className="text-lg font-medium text-white group-hover:scale-105 transition-transform duration-300">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-12 right-0 w-10 h-10 text-emerald-700 group-hover:opacity-0 transition-opacity duration-300">
                    <Plus className="w-full h-full" />
                  </div>
                  <div className="absolute left-0 right-0 top-full pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-24 z-10">
                    <p className="text-gray-600 text-base pb-12">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative py-24 bg-gray-50">
        <div className="max-w-[2000px] mx-auto relative">
          <div className="absolute right-[10%] top-0 text-[500px] leading-none text-gray-200 opacity-60 font-serif">
            "
          </div>
          
          <div className="max-w-3xl mb-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-4xl relative z-10 px-4 sm:px-6 lg:px-8">
              <p className="text-2xl text-gray-800 leading-relaxed text-left">
                We empower MSPs and IT service providers with AI-driven client acquisition systems that deliver predictable, scalable growth. Unlike traditional agencies, we don't just book meetings—we build revenue engines, automating outreach, optimizing sales, and eliminating bottlenecks. With intelligent automation and precision targeting, we guarantee results. Your growth is inevitable with Imperium Growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Process Section with The Five Pillars */}
      <section className="relative py-24 bg-transparent w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-emerald-50/30 pointer-events-none"></div>
        <AbstractShapes variant="section1" />
        
        <div className="max-w-[2000px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-16 px-4 sm:px-6 lg:px-8">
            {/* Left side - Existing Graphic */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                How We Do It?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {growthFramework.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="relative h-[580px] rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:scale-105">
                      <div className="absolute inset-0">
                        {index === 0 && (
                          <img 
                            src="/images/Growth/pexels-david-alberto-carmona-coto-434794-1151418.jpg" 
                            alt="Deep Analysis" 
                            className="w-full h-full object-cover"
                          />
                        )}
                        {index === 1 && (
                          <img 
                            src="/images/Growth/pexels-mdsnmdsnmdsn-1216345.jpg" 
                            alt="Custom Solutions" 
                            className="w-full h-full object-cover"
                          />
                        )}
                        {index === 2 && (
                          <img 
                            src="/images/Growth/pexels-pixabay-432786.jpg" 
                            alt="Implementation" 
                            className="w-full h-full object-cover"
                          />
                        )}
                        
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-[#1a4147]/40 to-[#0f2e3a]/40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_theme(colors.emerald.400/15),transparent_50%)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_theme(colors.teal.400/15),transparent_50%)]" />
                      
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
                      
                      <div className="relative z-10 p-8 h-full flex flex-col">
                        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-emerald-200 mt-6 mb-10 text-center tracking-wide">
                          {step.title}
                        </h3>
                        
                        <div className="space-y-5 flex-grow flex flex-col justify-center">
                          {step.details.map((detail, idx) => (
                            <Link
                              key={idx}
                              to={`/solutions#${step.title.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block group/item"
                            >
                              <div 
                                className="w-[85%] ml-0 px-4 py-5 border border-emerald-300/30 rounded-xl bg-black/30 backdrop-blur-sm hover:bg-white hover:border-white transition-all duration-300 group-hover:border-white/50 shadow-lg shadow-black/20"
                              >
                                <span className="text-sm text-white text-left block break-words px-2 group-hover/item:text-[#1e4d56] transition-colors duration-300">
                                  {detail}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Right side - The Five Pillars */}
            <div className="lg:w-1/2 lg:pl-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  The Five Pillars
                </h2>
                
                <div className="space-y-6">
                  {fivePillars.map((pillar, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-emerald-700 font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 flex-1">{pillar}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12 space-y-6">
                  <p className="text-gray-700 italic">
                    All you need to worry about is approving reports and highly qualified opportunities we pass over to your calendar
                  </p>
                  <p className="text-gray-700 italic">
                    The reports we give you are all custom towards minimizing your workload - you just have to handle the face-to-face meetings
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="mt-24 px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Why we exist?
              </h3>
              <p className="text-xl text-gray-600">
                We realized the need for growth solutions which actually work and are AI-native. Most businesses struggled with fragmented tools and strategies that fail to deliver measurable results. Imperium was founded to bridge this gap, providing integrated AI solutions that transform how companies approach growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Build Section - New */}
      <section className="relative py-24 bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-transparent to-emerald-50/40 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          
          {/* Software Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-blue-600/20"></div>
            
            {/* Dashboard Header */}
            <div className="relative bg-gray-800 p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm">Imperium Growth Platform v2.0</div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="relative p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Metrics Panel */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-emerald-400 text-sm font-medium mb-4">Key Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400 text-sm">Lead Quality Score</span>
                      <span className="text-white font-bold">94%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400 text-sm">Response Rate</span>
                      <span className="text-white font-bold">67%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400 text-sm">Conversion Rate</span>
                      <span className="text-white font-bold">32%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Activity Feed */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-emerald-400 text-sm font-medium mb-4">Real-Time Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                    <div>
                      <p className="text-white text-sm">New lead qualified</p>
                      <p className="text-gray-500 text-xs">Microsoft - Enterprise</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                    <div>
                      <p className="text-white text-sm">Meeting scheduled</p>
                      <p className="text-gray-500 text-xs">IBM - 2:00 PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5"></div>
                    <div>
                      <p className="text-white text-sm">Follow-up sent</p>
                      <p className="text-gray-500 text-xs">Oracle - Day 3</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Revenue Chart */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-emerald-400 text-sm font-medium mb-4">Revenue Growth</h3>
                <div className="h-32 flex items-end justify-between gap-2">
                  <div className="w-full bg-emerald-500/20 rounded-t" style={{ height: '40%' }}></div>
                  <div className="w-full bg-emerald-500/40 rounded-t" style={{ height: '60%' }}></div>
                  <div className="w-full bg-emerald-500/60 rounded-t" style={{ height: '75%' }}></div>
                  <div className="w-full bg-emerald-500/80 rounded-t" style={{ height: '85%' }}></div>
                  <div className="w-full bg-emerald-500 rounded-t" style={{ height: '100%' }}></div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-white text-2xl font-bold">+234%</p>
                  <p className="text-gray-500 text-xs">Year over Year</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve Section - New */}
      <section className="relative py-24 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-emerald-50/30 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized AI solutions tailored for your industry's unique challenges
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredIndustry(industry.id)}
                onMouseLeave={() => setHoveredIndustry(null)}
              >
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl bg-gray-900">
                  {/* Video Background */}
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    {...(hoveredIndustry === industry.id && { autoPlay: true })}
                  >
                    <source src={industry.video} type="video/mp4" />
                  </video>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-3xl font-bold text-white mb-3">{industry.title}</h3>
                    <p className="text-gray-200">{industry.description}</p>
                    
                    <Link
                      to={`/industries/${industry.id}`}
                      className="mt-6 inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section - New */}
      <section className="relative py-24 bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-transparent to-emerald-50/40 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real outcomes from our AI-powered growth systems
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-4">
                  {result.value}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{result.label}</h3>
                <p className="text-gray-600">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - New */}
      <section className="relative py-24 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-emerald-50/30 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Success stories from companies that transformed their growth with Imperium
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 transition-colors"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">{study.headline}</h4>
                    <p className="text-gray-600">{study.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/schedule"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get Your Custom Growth System <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Full-screen Video Section - White Paper */}
      <section className="relative h-screen flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/Growth1.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
        
        <div className="absolute top-12 left-16 z-20 max-w-4xl text-left">
          <h2 className="text-white font-bold text-3xl">
            White Paper: Industry Leader Interviews
          </h2>
        </div>
        
        <div className="absolute bottom-32 left-16 z-20 w-[85%]">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            Key Findings:
            
            <div className="ml-4 flex items-center space-x-3">
              <motion.div 
                className="w-8 h-[3px] bg-white/30 rounded-full overflow-hidden"
                initial={{ opacity: 0.5 }}
              >
                <motion.div 
                  className="h-full bg-emerald-400"
                  animate={{ 
                    width: ["0%", "100%", "100%", "0%"],
                    opacity: [0.5, 1, 1, 0.5]
                  }}
                  transition={{
                    duration: 8,
                    times: [0, 0.1, 0.9, 1],
                    repeat: Infinity,
                    repeatDelay: 16
                  }}
                />
              </motion.div>
              
              <motion.div 
                className="w-8 h-[3px] bg-white/30 rounded-full overflow-hidden"
                initial={{ opacity: 0.5 }}
              >
                <motion.div 
                  className="h-full bg-emerald-400"
                  animate={{ 
                    width: ["0%", "100%", "100%", "0%"],
                    opacity: [0.5, 1, 1, 0.5]
                  }}
                  transition={{
                    duration: 8,
                    times: [0, 0.1, 0.9, 1],
                    repeat: Infinity,
                    repeatDelay: 16,
                    delay: 8
                  }}
                />
              </motion.div>
              
              <motion.div 
                className="w-8 h-[3px] bg-white/30 rounded-full overflow-hidden"
                initial={{ opacity: 0.5 }}
              >
                <motion.div 
                  className="h-full bg-emerald-400"
                  animate={{ 
                    width: ["0%", "100%", "100%", "0%"],
                    opacity: [0.5, 1, 1, 0.5]
                  }}
                  transition={{
                    duration: 8,
                    times: [0, 0.1, 0.9, 1],
                    repeat: Infinity,
                    repeatDelay: 16,
                    delay: 16
                  }}
                />
              </motion.div>
            </div>
          </h3>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-[200px] w-full"
          >
            <motion.div
              className="relative w-full"
              initial={{ opacity: 1 }}
            >
              <motion.p
                className="text-[40px] text-white leading-relaxed absolute w-full pr-48"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 8,
                  times: [0, 0.1, 0.9, 1],
                  repeat: Infinity,
                  repeatDelay: 16
                }}
                style={{ wordSpacing: '0.1em', letterSpacing: '0.01em' }}
              >
                Misdirected Investments: Companies wanted to act but
                lacked a cohesive strategy for identifying, acquiring,
                and nurturing the best-fit ventures.
              </motion.p>
              
              <motion.p
                className="text-[40px] text-white leading-relaxed absolute w-full pr-48"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 8,
                  times: [0, 0.1, 0.9, 1],
                  repeat: Infinity,
                  repeatDelay: 16,
                  delay: 8
                }}
                style={{ wordSpacing: '0.1em', letterSpacing: '0.01em' }}
              >
                Fragmented Approach: Organizations struggled with
                disconnected tools and processes that created
                inefficiencies and missed opportunities.
              </motion.p>
              
              <motion.p
                className="text-[40px] text-white leading-relaxed absolute w-full pr-48"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 8,
                  times: [0, 0.1, 0.9, 1],
                  repeat: Infinity,
                  repeatDelay: 16,
                  delay: 16
                }}
                style={{ wordSpacing: '0.1em', letterSpacing: '0.01em' }}
              >
                AI Implementation Gap: Despite high interest in AI,
                most companies lack the expertise to properly
                integrate it into their growth strategies.
              </motion.p>
            </motion.div>
          </motion.div>
          
          <Link 
            to="/resources/100m-ai-sales-playbook" 
            className="inline-flex items-center mt-4 text-emerald-300 hover:text-emerald-200 transition-colors group"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="text-lg font-medium">Check out our white paper for detailed insights</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Resources Section */}
      <section className="w-full bg-transparent py-16">
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