import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Users, Lightbulb, Target, ChevronDown, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import AbstractShapes from '../components/AbstractShapes';
import VideoSection from '../components/VideoSection';

function HomePage() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-emerald-500 blur-[100px]" />
          <div className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-blue-600 blur-[120px]" />
          <div className="absolute bottom-[15%] left-[15%] w-80 h-80 rounded-full bg-teal-500 blur-[100px]" />
          <div className="absolute top-[60%] right-[25%] w-72 h-72 rounded-full bg-emerald-600 blur-[90px]" />
        </div>
      </div>

      {/* Hero Section - Dark */}
      <section className="relative h-screen flex items-end bg-slate-900 overflow-hidden">
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
          {/* Adding a darker overlay on top of the video */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <AbstractShapes variant="hero" className="absolute inset-0 z-10" />
        
        <div className="relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl pl-8 md:pl-12 lg:pl-16 mb-24"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-shadow-xl leading-tight tracking-tight">
              MSPs Are Losing 
              <span className="block mt-2 bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
                67% of Revenue
              </span>
              <span className="block mt-2 text-white text-shadow-xl">
                To Manual Processes
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl drop-shadow-lg font-medium leading-relaxed backdrop-blur-sm bg-black/10 p-4 rounded-lg border-l-4 border-emerald-400">
              <span className="text-emerald-300 font-bold">Imperium Growth</span> delivers AI-powered client acquisition systems specifically for MSPs and IT service providers. We don't just book meetings—we build complete revenue engines that <span className="underline decoration-emerald-400 decoration-2">guarantee results</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section - Light Background */}
      <section className="relative py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/PEnlKhDo5F4?rel=0"
              title="AI Automation Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Partner Section - Full Width */}
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
                    {/* Replace gradient background with actual images */}
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
                      
                      {/* Overlay to ensure text readability */}
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
                  {/* Plus icon outside the box */}
                  <div className="absolute -bottom-12 right-0 w-10 h-10 text-emerald-700 group-hover:opacity-0 transition-opacity duration-300">
                    <Plus className="w-full h-full" />
                  </div>
                  {/* Hover text */}
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
          {/* Large quotation mark background - making it much larger */}
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

      {/* Process Section - Growth Framework */}
      <section className="relative pt-24 pb-24 bg-transparent w-full overflow-hidden">
        {/* Remove video background */}
        
        <AbstractShapes variant="section1" />
        <div className="max-w-[2000px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-start gap-16 px-4 sm:px-6 lg:px-8">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How We Do It?
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI-powered solutions designed to accelerate your business growth and maximize revenue potential.
              </p>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {growthFramework.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative h-[580px] rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:scale-105">
                    {/* Replace gradient background with actual images */}
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
                      
                      {/* Darker overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-[#1a4147]/40 to-[#0f2e3a]/40" />
                      
                      {/* Add stronger vignette effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
                    </div>
                    
                    {/* Keep the soft light overlays for visual effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_theme(colors.emerald.400/15),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_theme(colors.teal.400/15),transparent_50%)]" />
                    
                    {/* Subtle border glow */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
                    
                    {/* Content container */}
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
          
          {/* Why we exist section */}
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

      {/* Full-screen Video Section */}
      <section className="relative h-screen flex items-center bg-slate-900 overflow-hidden">
        {/* Video Background */}
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
        
        {/* White paper reference - top left */}
        <div className="absolute top-12 left-16 z-20 max-w-4xl text-left">
          <h2 className="text-white font-bold text-3xl">
            White Paper: Industry Leader Interviews
          </h2>
        </div>
        
        {/* Key Findings Section */}
        <div className="absolute bottom-32 left-16 z-20 w-[85%]">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            Key Findings:
            
            {/* Animation indicator - moved closer */}
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
            {/* Revolving text animation - synchronized with tabs */}
            <motion.div
              className="relative w-full"
              initial={{ opacity: 1 }}
            >
              {/* First sentence - synchronized with first tab */}
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
              
              {/* Second sentence - synchronized with second tab */}
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
              
              {/* Third sentence - synchronized with third tab */}
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
          
          {/* White paper link */}
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
                    {/* Real image from Growth folder */}
                    <div className="absolute inset-0">
                      <img 
                        src="/images/Growth/pexels-lauripoldre-30894193.jpg" 
                        alt="AI-Driven CRM Integration" 
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay to ensure visual consistency */}
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
                    {/* Real image from Growth folder */}
                    <div className="absolute inset-0">
                      <img 
                        src="/images/Growth/pexels-aditya-aiyar-615049-1407305.jpg" 
                        alt="$100M AI Sales Playbook" 
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay to ensure visual consistency */}
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
                    {/* Real image from Growth folder */}
                    <div className="absolute inset-0">
                      <img 
                        src="/images/Growth/pexels-minan1398-1650627.jpg" 
                        alt="AI Lead Generation Blueprint" 
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay to ensure visual consistency */}
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