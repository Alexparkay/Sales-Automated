import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MouseParallaxProps {
  children: React.ReactNode;
  offset?: number;
}

const MouseParallax: React.FC<MouseParallaxProps> = ({ children, offset = 50 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;

      x.set(deltaX * offset);
      y.set(deltaY * offset);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [offset]);

  return (
    <div ref={ref} className="relative">
      <motion.div style={{ x: springX, y: springY }}>
        {children}
      </motion.div>
    </div>
  );
};

export default MouseParallax;