import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 text-transparent bg-clip-text animate-gradient ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.span>
  );
};

export default GradientText;