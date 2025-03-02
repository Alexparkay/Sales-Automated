import React, { useEffect } from 'react';
import AbstractShapes from '../components/AbstractShapes';
import { motion } from 'framer-motion';

const SchedulePage: React.FC = () => {
  useEffect(() => {
    // Add Calendly script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    // Prevent scrolling on this page
    document.body.style.overflow = 'hidden';

    return () => {
      // Clean up
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      // Restore scrolling when component unmounts
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="h-screen bg-slate-900 relative overflow-hidden">
      {/* Background Image - Very Subtle */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-opacity-85"></div>
        <img 
          src="/images/Growth/pexels-aditya-aiyar-615049-1407305.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-15"
        />
      </div>
      
      {/* Content Section - Fixed Height */}
      <section className="relative h-full flex flex-col justify-center z-10 pt-16">
        <AbstractShapes variant="hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Schedule a
              <span className="block mt-2 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Discovery Call
              </span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Player - Full Size */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden h-[600px] bg-slate-800/30 backdrop-blur-sm border border-white/10"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/Growth8.mp4" type="video/mp4" />
              </video>
            </motion.div>
            
            {/* Calendly Widget */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl overflow-hidden border border-white/10"
            >
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/alex-salesautomated?hide_landing_page_details=1&hide_gdpr_banner=1&hide_event_type_details=1" 
                style={{ minWidth: '320px', height: '600px' }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage; 