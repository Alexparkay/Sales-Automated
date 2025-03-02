import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Youtube, Plus, X, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import AbstractShapes from '../components/AbstractShapes';

// Remove the 3D card flip styles and add sliding animation styles
const slideAnimationStyles = `
  .team-card {
    position: relative;
    overflow: hidden;
  }
  
  .team-card-content {
    width: 100%;
    height: 100%;
  }
`;

const AboutPage: React.FC = () => {
  const [expandedTeamMember, setExpandedTeamMember] = useState<number | null>(null);

  const toggleTeamMember = (index: number) => {
    setExpandedTeamMember(expandedTeamMember === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Add the styles to the page */}
      <style>{slideAnimationStyles}</style>
      
      {/* Hero Section - Dark Theme */}
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
            <source src="/videos/Growth5.mp4" type="video/mp4" />
          </video>
        </div>
        
        <AbstractShapes variant="hero" />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl ml-8 md:ml-16 lg:ml-24"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              About
              <span className="block mt-2 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Imperium Growth
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mt-4">
              Revolutionizing business growth through AI-powered solutions and strategic implementation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are - Team Section - Changing to Meet the Team */}
      <section className="py-24 bg-white">
        <div className="max-w-[95%] mx-auto px-4">
          <div className="mb-16 ml-0">
            <h2 className="text-4xl font-bold text-gray-900">Meet the Team</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl">
              We are a team of dedicated professionals committed to revolutionizing business growth through AI-powered solutions.
            </p>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Alex */}
            <div className="relative group team-card">
              <div className="aspect-[5/6] w-full overflow-hidden rounded-2xl shadow-xl relative group transition-all duration-300 hover:shadow-2xl">
                <motion.div
                  animate={{ 
                    x: expandedTeamMember === 0 ? "-100%" : 0
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full absolute inset-0 cursor-pointer team-card-content"
                  onClick={() => toggleTeamMember(0)}
                >
                  <img
                    src="/images/alex.jpeg"
                    alt="Alex Kaymakanov"
                    className="w-full h-full object-cover object-center-bottom scale-125"
                    style={{ objectPosition: "center 30%" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-0">The Visionary: Alex Kaymakanov</h3>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <Plus className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                </motion.div>
                
                <AnimatePresence>
                  {expandedTeamMember === 0 && (
                    <motion.div 
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 p-6 flex flex-col cursor-pointer team-card-content"
                      onClick={() => toggleTeamMember(0)}
                    >
                      {/* Background Growth Image */}
                      <div className="absolute inset-0 z-0 opacity-30">
                        <img
                          src="/images/Growth/pexels-aditya-aiyar-615049-1407305.jpg"
                          alt="Background"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTeamMember(0);
                          }}
                          className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600 transition-all duration-300"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="flex-grow flex flex-col justify-center relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2">The Visionary: Alex Kaymakanov</h3>
                        <p className="text-gray-300 mb-6 text-base leading-relaxed">
                          With a deep passion for AI and automation, Alex leads the development of innovative solutions that transform traditional business processes. His expertise in AI implementation and strategic growth has helped numerous companies achieve significant improvements in their operations and revenue generation.
                        </p>
                        <div className="flex items-center gap-4">
                          <a
                            href="https://www.youtube.com/@AlexKaymakanovAI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-medium text-white hover:text-gray-200 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Youtube className="w-4 h-4 mr-2 inline-block" />
                            Follow
                          </a>
                          <a
                            href="https://www.linkedin.com/in/alexkaymakanov/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-medium text-white hover:text-gray-200 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin className="w-4 h-4 mr-2 inline-block" />
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Giacomo */}
            <div className="relative group team-card">
              <div className="aspect-[5/6] w-full overflow-hidden rounded-2xl shadow-xl relative group transition-all duration-300 hover:shadow-2xl">
                <motion.div
                  animate={{ 
                    x: expandedTeamMember === 2 ? "-100%" : 0
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full absolute inset-0 cursor-pointer team-card-content"
                  onClick={() => toggleTeamMember(2)}
                >
                  <img
                    src="/images/giacomo.jpeg"
                    alt="Giacomo"
                    className="w-full h-full object-cover object-top scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-0">The Storyteller: Giacomo Heddle</h3>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <Plus className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                </motion.div>
                
                <AnimatePresence>
                  {expandedTeamMember === 2 && (
                    <motion.div 
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 p-6 flex flex-col cursor-pointer team-card-content"
                      onClick={() => toggleTeamMember(2)}
                    >
                      {/* Background Growth Image */}
                      <div className="absolute inset-0 z-0 opacity-30">
                        <img
                          src="/images/Growth/pexels-gochrisgoxyz-1643409.jpg"
                          alt="Background"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTeamMember(2);
                          }}
                          className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600 transition-all duration-300"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="flex-grow flex flex-col justify-center relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2">The Storyteller: Giacomo Heddle</h3>
                        <p className="text-gray-300 mb-6 text-base leading-relaxed">
                          As our Creative Director, Giacomo brings a unique blend of artistic vision and technical expertise to our team. His extensive background in video production and marketing asset development helps translate complex AI solutions into compelling visual narratives.
                        </p>
                        <div className="flex items-center">
                          <a
                            href="https://www.linkedin.com/in/giacomoheddle/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-medium text-white hover:text-gray-200 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin className="w-4 h-4 mr-2 inline-block" />
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Archie */}
            <div className="relative group team-card">
              <div className="aspect-[5/6] w-full overflow-hidden rounded-2xl shadow-xl relative group transition-all duration-300 hover:shadow-2xl">
                <motion.div
                  animate={{ 
                    x: expandedTeamMember === 1 ? "-100%" : 0
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full absolute inset-0 cursor-pointer team-card-content"
                  onClick={() => toggleTeamMember(1)}
                >
                  <img
                    src="/images/archie.jpeg"
                    alt="Archie Coll"
                    className="w-full h-full object-cover scale-105"
                    style={{ objectPosition: "center -10%" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-0">The Executor: Archie Nash</h3>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <Plus className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                </motion.div>
                
                <AnimatePresence>
                  {expandedTeamMember === 1 && (
                    <motion.div 
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 p-6 flex flex-col cursor-pointer team-card-content"
                      onClick={() => toggleTeamMember(1)}
                    >
                      {/* Background Growth Image */}
                      <div className="absolute inset-0 z-0 opacity-30">
                        <img
                          src="/images/Growth/pexels-ian-panelo-3571551.jpg"
                          alt="Background"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTeamMember(1);
                          }}
                          className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600 transition-all duration-300"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="flex-grow flex flex-col justify-center relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2">The Executor: Archie Nash</h3>
                        <p className="text-gray-300 mb-6 text-base leading-relaxed">
                          Bringing extensive experience in MSPs and cybersecurity sales, Archie excels at understanding client needs and developing tailored solutions. His background in cold calling and business development enables him to bridge the gap between traditional sales approaches and modern AI-driven strategies.
                        </p>
                        <div className="flex items-center">
                          <a
                            href="https://www.linkedin.com/in/archie-nash-966861286/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-medium text-white hover:text-gray-200 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin className="w-4 h-4 mr-2 inline-block" />
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="mb-12 ml-8 md:ml-16 lg:ml-24">
          <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
        </div>
        
        <div className="px-8 md:px-16 lg:px-24 max-w-[95%] mx-auto">
          <p className="text-gray-700 mb-6 leading-relaxed">
            It all began with Alex, who served as Head of Growth for a prominent AI company. During his tenure, he identified numerous pain points in traditional growth processes that were holding businesses back. Seeing the potential for optimization through AI and automation, Alex began developing innovative campaigns and strategies that delivered exceptional results.
          </p>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Driven by a vision to help more companies achieve transformative growth, Alex made the bold decision to leave his position and found Imperium Growth—a company dedicated to revolutionizing business growth through AI-powered solutions.
          </p>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Meanwhile, Archie was working at an MSP, making upwards of 150 cold calls daily that would typically result in just one to five meetings booked—an incredibly inefficient process that was all too common in the industry. When Archie discovered the groundbreaking approach Alex was pioneering, he immediately recognized its potential to transform the MSP landscape. The vision was so compelling that Archie left his position to join Imperium Growth, knowing that this innovative methodology would benefit MSPs worldwide.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Completing the founding team, Giacomo brought his exceptional talent for creating powerful narratives through videography and storytelling. His background in crafting compelling content proved instrumental in growing companies through education-based and problem-based marketing. Giacomo's ability to build brand authority and recognition through strategic storytelling became a cornerstone of Imperium Growth's approach to establishing market presence.
          </p>
        </div>
      </section>

      {/* What Makes Us Unique Section - Replacing How We Do It */}
      <section className="py-24 bg-white">
        <div className="mb-16 ml-8 md:ml-16 lg:ml-24">
          <h2 className="text-4xl font-bold text-gray-900">What Makes Us Unique</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl">
            Our approach to growth combines cutting-edge AI technology with deep industry expertise to deliver results that traditional methods simply can't match.
          </p>
        </div>
        
        <div className="max-w-[95%] mx-auto px-4">
          {/* Wide Diagram Section */}
          <div className="relative mb-20">
            {/* Background Element */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl -z-10"></div>
            
            {/* Process Flow */}
            <div className="py-16 px-8 md:px-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
                {/* Connection Lines - Only visible on md and up */}
                <div className="hidden md:block absolute top-1/2 left-[22%] right-[22%] h-1 bg-gradient-to-r from-emerald-300 to-teal-300 -z-1"></div>
                <div className="hidden md:block absolute top-1/2 left-[50%] right-[22%] h-1 bg-gradient-to-r from-teal-300 to-emerald-400 -z-1"></div>
                
                {/* Step 1 */}
                <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Analysis</h3>
                  <p className="text-gray-600 max-w-xs">
                    Our proprietary AI systems analyze your business processes and market position to identify high-impact opportunities.
                  </p>
                </div>
                
                {/* Step 2 */}
                <div className="w-full md:w-1/3 flex flex-col items-center text-center mt-12 md:mt-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-200">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Execution</h3>
                  <p className="text-gray-600 max-w-xs">
                    We build custom automation systems that execute growth strategies with precision and consistency.
                  </p>
                </div>
                
                {/* Step 3 */}
                <div className="w-full md:w-1/3 flex flex-col items-center text-center mt-12 md:mt-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-200">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Optimization</h3>
                  <p className="text-gray-600 max-w-xs">
                    Our systems learn and adapt in real-time, constantly refining strategies to maximize results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-2xl shadow-sm border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-400/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">MSP-Specific Expertise</h3>
              <p className="text-gray-600">
                Unlike generic growth agencies, we specialize in the unique challenges and opportunities of MSPs and IT service providers. Our team's firsthand experience in the industry means we understand your business from day one.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-2xl shadow-sm border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-400/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Guaranteed Results</h3>
              <p className="text-gray-600">
                We don't just promise results—we guarantee them. Our performance-based approach means we're fully invested in your success, and our systems are designed to deliver measurable ROI from day one.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-2xl shadow-sm border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-400/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">End-to-End Solution</h3>
              <p className="text-gray-600">
                We don't just provide tools or advice—we build complete revenue engines. From lead generation to client acquisition and retention, our comprehensive approach eliminates gaps and ensures seamless execution.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-2xl shadow-sm border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-400/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Native Approach</h3>
              <p className="text-gray-600">
                Unlike companies that bolt AI onto existing processes, our solutions are AI-native from the ground up. This fundamental difference allows us to achieve levels of efficiency and effectiveness that simply weren't possible before.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 ml-8 md:ml-16 lg:ml-24">
          <Link
            to="/solutions"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors shadow-md"
          >
            Explore Our Solutions <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="relative py-24 bg-white">
        <div className="mb-16 ml-8 md:ml-16 lg:ml-24">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Content
          </h2>
        </div>
        
        <div className="max-w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl bg-slate-100"
          >
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
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl bg-slate-100"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/oUvIa8i9Zvg?rel=0"
              title="AI Implementation Guide"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </div>
        
        <div className="mt-12 ml-8 md:ml-16 lg:ml-24">
          <a
            href="https://www.youtube.com/@AlexKaymakanovAI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            View More Videos <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;