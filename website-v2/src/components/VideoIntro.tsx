import { useState, useEffect, useRef } from 'react';

const VideoIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Auto-play the video
      video.play().catch(error => {
        console.log('Auto-play was prevented:', error);
        // If autoplay fails, we can still show the video with play button
      });

      // Handle video end
      const handleVideoEnd = () => {
        // Start fading out immediately when video ends
        setIsFadingOut(true);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            onComplete();
          }, 100); // Short delay after fade completes
        }, 1000); // 1 second fade duration
      };

      video.addEventListener('ended', handleVideoEnd);

      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-1000 ease-out ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-1000 ease-out ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
        muted
        playsInline
        preload="auto"
      >
        <source src="/images/imperium transition v4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoIntro;