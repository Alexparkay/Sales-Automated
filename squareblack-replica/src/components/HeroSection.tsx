import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">25 years of delivering</span>
            <div className="relative inline-block mx-4">
              <div className="w-32 h-16 md:w-40 md:h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg inline-block mx-2 opacity-80"></div>
            </div>
            <span className="block mt-4">
              high‑converting
              <div className="relative inline-block mx-4">
                <div className="w-32 h-16 md:w-40 md:h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg inline-block mx-2 opacity-80"></div>
              </div>
              websites & apps
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Leverage our cross-industry extensive experience from working with both Fortune500 brands & startups.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="btn btn-primary group flex items-center gap-2 px-8 py-4 text-lg"
            >
              Book a call with Michal
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:hello@squareblack.com"
              className="btn btn-secondary px-8 py-4 text-lg"
            >
              Write an email to us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-32 w-1 h-1 bg-purple-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full opacity-50"></div>
      </div>
    </section>
  );
};

export default HeroSection;