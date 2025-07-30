import { useState, useEffect, useRef } from 'react';

const VideoIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Local MP4 video path
  const VIDEO_PATH = "/images/imperium transition v4.mp4";

  useEffect(() => {
    console.log('🎬 VideoIntro component mounted - loading local MP4 video'); 
    
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      console.log('🎬 Video ended - completing intro');
      handleComplete();
    };

    const handleVideoError = () => {
      console.log('🎬 Video failed to load - showing fallback');
      setVideoError(true);
      setShowFallback(true);
      setTimeout(() => {
        handleComplete();
      }, 3000);
    };

    const handleCanPlay = () => {
      console.log('🎬 Video can play - starting playback');
      video.play().catch(handleVideoError);
    };

    // Add event listeners
    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('error', handleVideoError);
    video.addEventListener('canplay', handleCanPlay);

    // Cleanup
    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('error', handleVideoError);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const handleComplete = () => {
    console.log('🎬 VideoIntro completing - starting fade out');
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 1000);
  };



  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-1000 ease-out ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
      {showFallback || videoError ? (
        // Fallback content when video fails to load
        <div className="w-full h-full flex items-center justify-center bg-black">
          <div className="text-white text-center">
            <img 
              src="/images/Black Imperium Logo.png" 
              alt="Imperium Growth" 
              className="w-64 h-auto mx-auto mb-4 animate-pulse"
            />
            <p className="text-lg">Welcome to Imperium Growth</p>
          </div>
        </div>
      ) : (
        // Local MP4 video
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={VIDEO_PATH}
            autoPlay
            muted
            playsInline
            style={{ pointerEvents: 'none' }}
          />
        </div>
      )}
    </div>
  );
};

export default VideoIntro;