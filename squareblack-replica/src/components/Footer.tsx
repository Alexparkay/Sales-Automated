import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Let's make the
              <span className="relative mx-4">
                <span className="text-green-400">most</span>
                <div className="absolute -right-8 top-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg opacity-30 rotate-12"></div>
                </div>
              </span>
              <br />
              out
              <span className="relative mx-4">
                <span className="text-blue-400">of</span>
                <div className="absolute -right-8 top-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg opacity-30 -rotate-12"></div>
                </div>
              </span>
              <br />
              your product
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Leverage our cross-industry experience from working with both Fortune500 brands & emerging startups.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="btn btn-primary group flex items-center gap-2 px-8 py-4 text-lg"
              >
                Book a call with Michal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="text-gray-400">
                We're available to talk
              </div>
            </div>
            
            <p className="text-gray-400 mt-4">
              Or write to us at{' '}
              <a 
                href="mailto:hello@squareblack.com" 
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                hello@squareblack.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm"></div>
              </div>
              <span className="text-white font-bold text-xl">SquareBlack</span>
            </div>
            
            <div className="flex items-center gap-6 text-gray-400">
              <a 
                href="mailto:hello@squareblack.com" 
                className="hover:text-white transition-colors"
              >
                hello@squareblack.com
              </a>
              <div className="flex items-center gap-2">
                <span>25+ years</span>
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 text-gray-500 text-sm">
            <p>© 2024 SquareBlack. All rights reserved. Pixel-perfect replica for educational purposes.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;