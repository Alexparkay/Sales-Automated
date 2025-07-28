import { useState, useEffect, useRef } from 'react';

const VideoIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  // YouTube Video ID - Replace this with your actual YouTube video ID
  const YOUTUBE_VIDEO_ID = "YOUR_YOUTUBE_VIDEO_ID"; // Replace with actual ID

  useEffect(() => {
    console.log('🎬 VideoIntro component mounted - loading YouTube video'); 
    
    // If no YouTube ID is set, show fallback immediately
    if (YOUTUBE_VIDEO_ID === "YOUR_YOUTUBE_VIDEO_ID") {
      console.log('🎬 No YouTube video ID configured - showing fallback');
      setShowFallback(true);
      setTimeout(() => {
        console.log('🎬 Fallback timeout - completing intro');
        handleComplete();
      }, 3000);
      return;
    }

    // Auto-complete the intro after video duration (adjust as needed)
    const timer = setTimeout(() => {
      console.log('🎬 YouTube video timeout - completing intro');
      handleComplete();
    }, 8000); // Adjust based on your video length

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    console.log('🎬 VideoIntro completing - starting fade out');
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 1000);
  };

  // Skip intro button
  const handleSkip = () => {
    console.log('🎬 User skipped intro');
    handleComplete();
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-1000 ease-out ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
      {showFallback || YOUTUBE_VIDEO_ID === "YOUR_YOUTUBE_VIDEO_ID" ? (
        // Fallback content when no YouTube video is configured
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
        // YouTube embed
        <div className="relative w-full h-full">
          <iframe
            className="w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1`}
            title="Imperium Growth Intro"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ pointerEvents: 'none' }}
          />
          
          {/* Skip button */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm"
            style={{ pointerEvents: 'auto' }}
          >
            Skip Intro →
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoIntro;