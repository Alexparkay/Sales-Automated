import React from 'react';
import { motion } from 'framer-motion';

interface AbstractShapeProps {
  variant?: 'hero' | 'section1' | 'section2';
  className?: string;
}

const abstractGreenImages = {
  fluid1: "https://images.unsplash.com/photo-1636819488537-a9b1e5655e58?q=80&w=1800&auto=format&fit=crop",
  fluid2: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1800&auto=format&fit=crop",
  pattern1: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1800&auto=format&fit=crop",
  organic1: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f9?q=80&w=1800&auto=format&fit=crop"
};

const AbstractShapes: React.FC<AbstractShapeProps> = ({ variant = 'hero', className = '' }) => {
  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Abstract background pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${abstractGreenImages.pattern1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(30px)'
          }}
        />
        
        {/* Gradient overlays */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-[10%] right-[5%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-green-400/30 to-emerald-600/30 blur-3xl"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -top-[20%] -left-[10%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-emerald-500/20 to-green-300/20 blur-3xl"
        />

        {/* Fluid abstract image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-[3rem] overflow-hidden"
          style={{
            backgroundImage: `url(${abstractGreenImages.fluid1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'rotate(12deg)'
          }}
        />
        
        {/* Additional decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-gradient-to-tr from-emerald-400/30 to-green-300/30 rounded-full blur-xl"
        />
      </div>
    );
  }

  if (variant === 'section1') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Organic shapes background */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${abstractGreenImages.organic1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)'
          }}
        />

        {/* Animated gradient shapes */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-300/20 rounded-[4rem] blur-3xl"
        />
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-bl from-emerald-400/20 to-green-300/20 rounded-full blur-3xl"
        />

        {/* Fluid abstract overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${abstractGreenImages.fluid2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
        />
      </div>
    );
  }

  // section2 variant
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Radial gradient background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(52,211,153,0.1) 0%, transparent 70%)'
        }}
      />

      {/* Abstract pattern overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${abstractGreenImages.pattern1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(15px)'
        }}
      />

      {/* Bottom gradient */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-green-50/50 via-emerald-50/30 to-transparent"
      />

      {/* Animated gradient orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-300/20 rounded-full blur-3xl"
      />
    </div>
  );
};

export default AbstractShapes; 