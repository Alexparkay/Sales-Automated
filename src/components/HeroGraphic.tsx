import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Search, MessageSquare, Calendar, Bot } from 'lucide-react';

const HeroGraphic = () => {
  const [isActive, setIsActive] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 300 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Trigger animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 500); // Small delay to let page render first

    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 20);
    mouseY.set(y * 20);
  };

  // Common convergence point for all paths
  const convergenceX = 400;
  const convergenceY = 500;

  return (
    <div className="relative w-[600px] h-[600px] scale-90">
      <svg width="600" height="600" viewBox="0 0 800 800" className="absolute top-0 right-0">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#16a34a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#15803d" stopOpacity="0.25" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <pattern id="dottedPattern" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="2" fill="url(#flowGradient)" />
          </pattern>
        </defs>

        {/* Paths with increased dot spacing */}
        <motion.path
          d={`M200,160 C300,200 300,350 ${convergenceX},${convergenceY}`}
          stroke="url(#dottedPattern)"
          strokeWidth="10"
          strokeDasharray="12 12"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            transition: { duration: 2, ease: "easeOut" }
          }}
        />

        <motion.path
          d={`M400,160 C350,250 450,350 ${convergenceX},${convergenceY}`}
          stroke="url(#dottedPattern)"
          strokeWidth="10"
          strokeDasharray="12 12"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            transition: { duration: 2, ease: "easeOut", delay: 0.2 }
          }}
        />

        <motion.path
          d={`M600,160 C500,300 450,400 ${convergenceX},${convergenceY}`}
          stroke="url(#dottedPattern)"
          strokeWidth="10"
          strokeDasharray="12 12"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            transition: { duration: 2, ease: "easeOut", delay: 0.4 }
          }}
        />

        <motion.g>
          {/* Source Icons at the top with stats */}
          <foreignObject x="120" y="40" width="160" height="160">
            <div className="w-[160px] h-[160px] flex flex-col items-center justify-center">
              <Search className="w-20 h-20 text-[#22c55e] mb-2" />
              <div className="text-[#22c55e] text-center">
                <div className="text-xl font-bold">10X</div>
                <div className="text-sm">Average ROI</div>
              </div>
            </div>
          </foreignObject>

          <foreignObject x="320" y="40" width="160" height="160">
            <div className="w-[160px] h-[160px] flex flex-col items-center justify-center">
              <MessageSquare className="w-20 h-20 text-[#22c55e] mb-2" />
              <div className="text-[#22c55e] text-center">
                <div className="text-xl font-bold">95%</div>
                <div className="text-sm">Time Saved</div>
              </div>
            </div>
          </foreignObject>

          <foreignObject x="520" y="40" width="160" height="160">
            <div className="w-[160px] h-[160px] flex flex-col items-center justify-center">
              <Calendar className="w-20 h-20 text-[#22c55e] mb-2" />
              <div className="text-[#22c55e] text-center">
                <div className="text-xl font-bold">24/7</div>
                <div className="text-sm">AI Working</div>
              </div>
            </div>
          </foreignObject>

          {/* Larger Bot icon at the bottom with mouse tracking */}
          <foreignObject x="200" y="400" width="400" height="400">
            <motion.div 
              className="w-full h-full flex items-center justify-center"
              onMouseMove={handleMouseMove}
              animate={{ 
                filter: 'grayscale(0%)',
                scale: [1, 1.2],
                transition: { duration: 0.5, delay: 2 }
              }}
              initial={{
                filter: 'grayscale(100%)',
                scale: 1
              }}
              style={{ x: springX, y: springY }}
            >
              <Bot className="w-96 h-96 text-[#22c55e]" />
            </motion.div>
          </foreignObject>
        </motion.g>

        {/* Celebration effect at convergence point */}
        <motion.circle
          cx={convergenceX}
          cy={convergenceY}
          r={4}
          fill="#22c55e"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.2,
            delay: 2,
            repeat: 0,
            ease: "easeOut"
          }}
        />
      </svg>
    </div>
  );
};

export default HeroGraphic;