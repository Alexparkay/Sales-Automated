import React, { useRef, useEffect } from 'react';

const VideoTest: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play().catch(error => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        controls
        className="w-full h-full object-cover"
      >
        <source src="/images/imperium transition v4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoTest; 