import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [location.pathname]);

  return (
    <motion.div
      key={location.pathname}
      initial={{ 
        opacity: 0,
        filter: "blur(12px)",
        translateX: "100%" 
      }}
      animate={{ 
        opacity: 1,
        filter: "blur(0px)",
        translateX: 0 
      }}
      exit={{ 
        opacity: 0,
        filter: "blur(12px)",
        translateX: "-100%" 
      }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 0.35,
      }}
      className="w-full flex flex-col min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 