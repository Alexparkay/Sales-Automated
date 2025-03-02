import React from 'react';
import { motion } from 'framer-motion';

const BackgroundShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Top-right shape */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute -top-[10%] -right-[5%] w-[45%] h-[45%] rounded-full bg-gradient-to-br from-emerald-600/20 to-green-900/20 blur-3xl"
      />
      
      {/* Center-left shape */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-[30%] -left-[10%] w-[50%] h-[40%] rounded-full bg-gradient-to-tr from-green-800/20 to-emerald-500/20 blur-3xl"
      />
      
      {/* Bottom-right shape */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-[10%] right-[5%] w-[35%] h-[35%] rounded-full bg-gradient-to-bl from-emerald-700/20 to-green-600/20 blur-3xl"
      />
    </div>
  );
};

export default BackgroundShapes; 