import React, { Suspense, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, Calendar, MessageSquare, ArrowRight, ExternalLink, Zap, Target, Settings } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import GradientText from '../components/GradientText';
import HeroBackground from '../components/HeroBackground';
import ComparisonList from '../components/ComparisonList';

function HomePage() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen">
      <header className="relative min-h-[160vh] sm:min-h-[130vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0a0f0d] via-[#0d1410] to-[#1a4025]">
        <HeroBackground />
        
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white">Loading 3D Scene...</div>}>
            <Spline 
              scene="https://prod.spline.design/QpYXMqjz1woUvtn2/scene.splinecode"
              className={`w-[150vw] h-full ${isLargeScreen ? 'scale-[3.2]' : 'scale-[1.8]'}`}
              style={{
                position: 'absolute',
                top: isLargeScreen ? '50%' : '75%',
                left: '65%',
                transform: 'translate(-50%, -46%)',
                filter: 'drop-shadow(0 0 30px rgba(34, 197, 94, 0.2))',
                transformOrigin: 'center center',
                minWidth: '150vw',
              }}
            />
          </Suspense>
        </div>
        
        <div className="section relative py-16 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl px-4 md:px-0 mt-[-520px] sm:mt-[-280px] lg:mt-8 z-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-primary-500/20 mb-4 sm:mb-6 md:mb-8"
              >
                <Zap className="text-primary-500" size={14} />
                <span className="text-sm sm:text-base font-medium text-white">Transform Your Sales with Our AI Team</span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 tracking-tight leading-[1.1]">
                We'll 10X Your 
                <br className="hidden lg:block" />
                Sales Pipeline
                <GradientText className="block mt-2 sm:mt-3">
                  With AI Automation
                </GradientText>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-400 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-lg">
                Our expert AI team automates your prospecting, outreach, and follow-ups, learning and improving from every interaction
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      {/* CTA buttons section - visible on all screen sizes now */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-6 justify-start">
            <Link to="/get-audit" className="btn-primary">
              Get Your Free AI Sales Audit <ArrowRight size={20} />
            </Link>
            <Link to="/case-studies" className="btn-secondary">
              See Success Stories <ExternalLink size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Solutions Section - Updated grid layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <Link to="/solutions/lead-research" className="group">
              <div className="flex flex-col items-start h-full">
                <div className="bg-primary-50 p-2 rounded-lg mb-4">
                  <Target className="text-primary-500 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Find Your Perfect Prospects</h3>
                <p className="text-gray-600 mb-4">
                  Our AI identifies and verifies your ideal customers, gathering detailed insights to help you connect with decision-makers who need your solution.
                </p>
                <span className="text-primary-500 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Lead Research <ArrowRight size={20} />
                </span>
              </div>
            </Link>

            <Link to="/solutions/outreach" className="group">
              <div className="flex flex-col items-start h-full">
                <div className="bg-primary-50 p-2 rounded-lg mb-4">
                  <MessageSquare className="text-primary-500 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Connect at Scale</h3>
                <p className="text-gray-600 mb-4">
                  Engage prospects across multiple channels with personalized messages that adapt based on their interactions and behavior patterns.
                </p>
                <span className="text-primary-500 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Outreach Automation <ArrowRight size={20} />
                </span>
              </div>
            </Link>

            <Link to="/solutions/scheduling" className="group">
              <div className="flex flex-col items-start h-full">
                <div className="bg-primary-50 p-2 rounded-lg mb-4">
                  <Calendar className="text-primary-500 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Never Miss an Opportunity</h3>
                <p className="text-gray-600 mb-4">
                  Let AI handle the back-and-forth of scheduling, automatically finding the perfect time slots while you focus on closing deals.
                </p>
                <span className="text-primary-500 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Meeting Scheduling <ArrowRight size={20} />
                </span>
              </div>
            </Link>

            <Link to="/solutions/custom" className="group">
              <div className="flex flex-col items-start h-full">
                <div className="bg-primary-50 p-2 rounded-lg mb-4">
                  <Settings className="text-primary-500 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Built Around Your Process</h3>
                <p className="text-gray-600 mb-4">
                  Get a tailored AI solution that integrates seamlessly with your existing workflow and scales with your unique business needs.
                </p>
                <span className="text-primary-500 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Custom Solutions <ArrowRight size={20} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <ComparisonList />
      </section>

      <section className="section relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative card bg-gradient-to-br from-primary-50 to-white p-12 text-center border border-primary-100 shadow-xl overflow-hidden"
          >
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '30px 30px'
              }}
            />
            
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Ready to 
                <GradientText className="mx-2">10X</GradientText>
                Your Sales?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get your free AI audit and see how much we can automate
              </p>
              <Link 
                to="/get-audit"
                className="btn-primary text-lg px-8 py-4"
              >
                Get Your Free AI Sales Audit <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;