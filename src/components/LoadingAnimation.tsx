import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingAnimationProps {
  onAnimationComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onAnimationComplete }) => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays
    const videoElement = videoRef.current;
    if (videoElement) {
      // Force video to load
      videoElement.load();
      
      // Try to play the video
      const playPromise = videoElement.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Video playback failed:", error);
          // If autoplay fails, we'll rely on the fallback timer
        });
      }
    }

    // Set a fallback timer in case the video doesn't trigger onEnded
    const timer = setTimeout(() => {
      if (!isVideoEnded) {
        console.log("Fallback timer triggered");
        setIsVideoEnded(true);
        onAnimationComplete();
      }
    }, 5000); // 5 seconds fallback

    // Prevent scrolling while animation is playing
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [isVideoEnded, onAnimationComplete]);

  const handleVideoEnded = () => {
    console.log("Video ended event triggered");
    setIsVideoEnded(true);
    onAnimationComplete();
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Video error:", e);
    setIsVideoEnded(true);
    onAnimationComplete();
  };

  return (
    <AnimatePresence>
      {!isVideoEnded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-black"
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0,
            width: '100vw',
            height: '100vh'
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            onError={handleVideoError}
            className="w-full h-full object-cover"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            preload="auto"
          >
            <source src="/images/imperium transition v4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation; 