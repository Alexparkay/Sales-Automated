import { useState, useEffect, useRef } from 'react';

const VideoIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log('🎬 VideoIntro component mounted - loading Imperium transition v4'); 
    
    const video = videoRef.current;
    if (video) {
      console.log('🎬 Video element found, attempting to play Imperium transition'); 
      
      // Handle video loading errors
      const handleVideoError = (error: any) => {
        console.error('🚨 Video loading error:', error);
        console.error('🚨 Failed to load: /images/imperium transition v4.mp4');
        setVideoError(true);
        // If video fails to load, complete the intro after a short delay
        setTimeout(() => {
          console.log('🎬 Video failed - completing intro with fallback');
          onComplete();
        }, 2000);
      };

      const handleVideoLoad = () => {
        console.log('✅ Imperium transition video loaded successfully'); 
      };

      // Auto-play the video
      video.play().catch(error => {
        console.log('⚠️ Auto-play was prevented:', error);
        console.log('🎬 Trying alternative approach...');
        // If autoplay fails, complete the intro after a short delay
        setTimeout(() => {
          console.log('🎬 Auto-play failed - completing intro');
          onComplete();
        }, 3000);
      });

      // Handle video end
      const handleVideoEnd = () => {
        console.log('🎬 Imperium transition video ended - starting fade out'); 
        // Start fading out immediately when video ends
        setIsFadingOut(true);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            console.log('🎬 Fade complete - revealing main website');
            onComplete();
          }, 100); // Short delay after fade completes
        }, 1000); // 1 second fade duration
      };

      video.addEventListener('ended', handleVideoEnd);
      video.addEventListener('error', handleVideoError);
      video.addEventListener('loadeddata', handleVideoLoad);

      return () => {
        video.removeEventListener('ended', handleVideoEnd);
        video.removeEventListener('error', handleVideoError);
        video.removeEventListener('loadeddata', handleVideoLoad);
      };
    } else {
      console.error('🚨 Video element not found in VideoIntro component');
    }
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-1000 ease-out ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
      {videoError ? (
        // Fallback content if video fails to load
        <div className="w-full h-full flex items-center justify-center bg-black">
          <div className="text-white text-center">
            <img 
              src="/images/Black Imperium Logo.png" 
              alt="Imperium Growth" 
              className="w-64 h-auto mx-auto mb-4 animate-pulse"
            />
            <p className="text-lg">Loading...</p>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default VideoIntro;