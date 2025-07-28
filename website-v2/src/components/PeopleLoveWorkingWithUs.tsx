import { useState, useRef } from 'react';

const PeopleLoveWorkingWithUs = () => {
  const [showMore, setShowMore] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [playingVideos, setPlayingVideos] = useState<{[key: number]: boolean}>({});
  const [videoPausedTimes, setVideoPausedTimes] = useState<{[key: number]: number}>({});
  const videoRefs = useRef<{[key: number]: HTMLVideoElement | null}>({});

  const initialTestimonials = [
    {
      id: 1,
      type: "video",
      name: "Anthony M",
      company: "Bond Media",
      videoThumbnail: "custom-video-1",
      videoUrl: "/Testemonials/Anthony Testamonial.mp4",
      industry: "Digital Marketing",
      primaryColor: "from-green-600 to-green-800",
      accentColor: "bg-green-600"
    },
    {
      id: 2,
      type: "text",
      title: "Fast response and helpful AI tools.",
      content: "We built our qualifying agent and they helped us get it working perfectly. The team was quick to respond and gave us real value with AI. Now we're planning more projects together.",
      name: "Anthony M",
      jobTitle: "CEO of Bond Media",
      avatar: "https://i.ibb.co/3zdWc7M/image.png"
    },
    {
      id: 3,
      type: "video",
      name: "M-A-R-C",
      company: "Q Solar & Rebel Group",
      videoThumbnail: "custom-video-2",
      videoUrl: "/Testemonials/Marc Testemonial-1.mp4",
      industry: "Solar Energy & Private Equity",
      primaryColor: "from-green-500 to-green-700",
      accentColor: "bg-green-500"
    },
    {
      id: 4,
      type: "text",
      title: "Great partnership across multiple projects.",
      content: "We've worked together on several projects - from private equity tools to energy solutions for buildings. Really solid work and quick response times on everything we've done together.",
      name: "Marc Q",
      jobTitle: "Director at Q Solar & CEO of Rebel Group",
      avatar: "https://i.ibb.co/nMSwZMb/image.png"
    },
    {
      id: 5,
      type: "text",
      title: "Great solar energy data solutions.",
      content: "Working with them on energy needs for office companies has been really good. They helped us get and improve key data for solar projects. The results have been solid and we're happy with their work.",
      name: "Leo M",
      jobTitle: "Co-founder of Apexion Solutions",
      avatar: "https://i.ibb.co/F8z0zQR/image.png"
    },
    {
      id: 6,
      type: "video",
      name: "Leo M",
      company: "Apexion Solutions",
      videoThumbnail: "custom-video-6",
      videoUrl: "/Testemonials/Leo Testamonial.mp4",
      industry: "Solar Energy Data",
      primaryColor: "from-green-300 to-green-500",
      accentColor: "bg-green-300"
    }
  ];

  const additionalTestimonials = [
    {
      id: 7,
      type: "text",
      title: "Good solutions for business needs.",
      content: "As a product manager, they helped us manage our team well and built a solution that worked for our business needs. Their project management was really good.",
      name: "Aishwarya S",
      jobTitle: "Independent Product Manager - Enterprise Funds",
      avatar: "https://i.ibb.co/3zdWc7M/image.png"
    },
    {
      id: 8,
      type: "video",
      name: "Aishwarya S",
      company: "Enterprise Solutions",
      videoThumbnail: "custom-video-4",
      videoUrl: "",
      industry: "Enterprise Product Management",
      primaryColor: "from-green-600 to-green-800",
      accentColor: "bg-green-600"
    },
    {
      id: 9,
      type: "video",
      name: "Prashant S",
      company: "AI Architecture Firm",
      videoThumbnail: "custom-video-5",
      videoUrl: "",
      industry: "AI Architecture & Development",
      primaryColor: "from-green-800 to-green-900",
      accentColor: "bg-green-800"
    },
    {
      id: 10,
      type: "text",
      title: "Smart AI system for our market needs.",
      content: "We used their AI skills to create a negotiation system for one of our biggest markets. The AI setup worked really well for our clients and did better than we expected.",
      name: "Prashant S",
      jobTitle: "AI Architecture Specialist",
      avatar: "https://i.ibb.co/nMSwZMb/image.png"
    },
    {
      id: 11,
      type: "video",
      name: "Nirav S",
      company: "Eternal Solutions",
      videoThumbnail: "custom-video-3",
      videoUrl: "",
      industry: "Software Solutions",
      primaryColor: "from-green-700 to-green-900",
      accentColor: "bg-green-700"
    },
    {
      id: 12,
      type: "text",
      title: "Solid ERP system that works well.",
      content: "The team built an ERP system for our company that made our operations much smoother. They paid attention to details and knew their stuff throughout the whole project.",
      name: "Nirav S",
      jobTitle: "Managing Director at Eternal Solutions",
      avatar: "https://i.ibb.co/F8z0zQR/image.png"
    }
  ];

  const allTestimonials = [...initialTestimonials, ...additionalTestimonials];
  const displayedTestimonials = showMore ? allTestimonials : [...initialTestimonials, ...additionalTestimonials.slice(0, 2)];
  const mobileDisplayedTestimonials = showAllMobile ? allTestimonials : initialTestimonials.slice(0, 2);

  // Pause all other videos when starting a new one
  const pauseAllOtherVideos = (currentId: number) => {
    Object.keys(videoRefs.current).forEach(id => {
      const videoId = parseInt(id);
      if (videoId !== currentId && videoRefs.current[videoId]) {
        const video = videoRefs.current[videoId];
        if (video && !video.paused) {
          // Store the current time before pausing
          setVideoPausedTimes(prev => ({...prev, [videoId]: video.currentTime}));
          video.pause();
          setPlayingVideos(prev => ({...prev, [videoId]: false}));
        }
      }
    });
  };

  const handleVideoClick = (testimonial: any) => {
    if (testimonial.videoUrl) {
      // Anthony gets ultra-simple handling - ONLY show video, let user click native play
      if (testimonial.name === "Anthony M") {
        if (videoPausedTimes[testimonial.id] === undefined) {
          pauseAllOtherVideos(testimonial.id);
          setVideoPausedTimes(prev => ({...prev, [testimonial.id]: 0})); // This shows the video
          // NO AUTO-PLAY - let native controls handle everything
        }
        return;
      }
      
      // Original complex logic for Leo/Marc (keep unchanged)
      pauseAllOtherVideos(testimonial.id);
      
      const videoElement = videoRefs.current[testimonial.id];
      if (videoElement) {
        if (playingVideos[testimonial.id]) {
          // If playing, pause the video and store the current time
          setVideoPausedTimes(prev => ({...prev, [testimonial.id]: videoElement.currentTime}));
          videoElement.pause();
        } else {
          // If not playing, check if this is the first time starting
          if (videoPausedTimes[testimonial.id] === undefined) {
            // First time starting - initialize the paused time to 0 and play immediately
            setVideoPausedTimes(prev => ({...prev, [testimonial.id]: 0}));
            videoElement.currentTime = 0;
            videoElement.play().catch(console.error);
          } else {
            // Resume from paused time
            const pausedTime = videoPausedTimes[testimonial.id];
            if (pausedTime !== undefined && pausedTime > 0) {
              videoElement.currentTime = pausedTime;
            }
            videoElement.play().catch(console.error);
          }
        }
      }
    } else {
      console.log('Video not available yet for:', testimonial.name);
    }
  };

  // Handle video play event (when video actually starts playing)
  const handleVideoPlay = (testimonial: any) => {
    // Pause all other videos when this one starts playing
    pauseAllOtherVideos(testimonial.id);
    setPlayingVideos(prev => ({...prev, [testimonial.id]: true}));
  };

  // Handle video pause event (when video is paused)
  const handleVideoPause = (testimonial: any) => {
    const videoElement = videoRefs.current[testimonial.id];
    if (videoElement) {
      // Store the current time when pausing
      setVideoPausedTimes(prev => ({...prev, [testimonial.id]: videoElement.currentTime}));
    }
    setPlayingVideos(prev => ({...prev, [testimonial.id]: false}));
  };

  // Handle video ended event
  const handleVideoEnded = (testimonial: any) => {
    // Reset the paused time when video ends
    setVideoPausedTimes(prev => ({...prev, [testimonial.id]: 0}));
    setPlayingVideos(prev => ({...prev, [testimonial.id]: false}));
  };

  // Completely separate Anthony video implementation
  const renderAnthonyVideo = (testimonial: any) => {
    const showVideo = videoPausedTimes[testimonial.id] !== undefined;
    
    return (
      <div className="relative min-h-[400px] bg-black rounded-xl overflow-hidden cursor-pointer group flex items-center justify-center">
        {/* Single video element for Anthony */}
        <video
          ref={(el) => { 
            videoRefs.current[testimonial.id] = el;
          }}
          className={`w-full h-full object-cover object-center scale-110 ${showVideo ? 'block' : 'hidden'}`}
          style={{ objectPosition: 'center', minHeight: '400px' }}
          controls={true}
          preload="auto"
          playsInline
          muted={false}
          onPlay={() => {
            pauseAllOtherVideos(testimonial.id);
            setPlayingVideos(prev => ({...prev, [testimonial.id]: true}));
          }}
          onPause={() => {
            setPlayingVideos(prev => ({...prev, [testimonial.id]: false}));
          }}
          onEnded={() => {
            setPlayingVideos(prev => ({...prev, [testimonial.id]: false}));
          }}
        >
          <source src={testimonial.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Show thumbnail when video hasn't been started */}
        {!showVideo && (
          <>
            <img 
              src="/Testemonials/Anthony Thumnail.jpeg"
              alt="Anthony M testimonial thumbnail"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: '400px' }}
            />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
              <div className="w-0 h-0 border-l-[24px] border-l-white border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent ml-2 drop-shadow-lg"></div>
            </div>
          </>
        )}
      </div>
    );
  };

  const renderCustomVideoVisual = (testimonial: any) => {
    // Handle Anthony completely separately  
    if (testimonial.name === "Anthony M") {
      return renderAnthonyVideo(testimonial);
    }
    
    // Original logic for Leo/Marc only
    const isPlaying = playingVideos[testimonial.id];
    const hasBeenStarted = videoPausedTimes[testimonial.id] !== undefined;
    
    // Get thumbnail path based on name
    const getThumbnailPath = (name: string) => {
      switch (name) {
        case "Leo M":
          return "/Testemonials/Leo Thumbnail.jpeg";
        case "M-A-R-C":
          return "/Testemonials/Marc Thumbnail.jpeg";
        default:
          return null;
      }
    };

    const thumbnailPath = getThumbnailPath(testimonial.name);
    const hasVideo = testimonial.videoUrl && testimonial.videoUrl !== "";

    if (hasVideo) {
      // Get scale and positioning based on person - Leo gets 7% bigger with less top spacing
      const getVideoScale = (name: string) => {
        return name === "Leo M" ? "scale-[1.17]" : "scale-110";
      };

      const getVideoPosition = (name: string) => {
        return name === "Leo M" ? "mt-1" : "";
      };

      return (
        <div className="relative min-h-[400px] bg-black rounded-xl overflow-hidden cursor-pointer group flex items-center justify-center">
          {/* Original complex video element for Leo/Marc only */}
          <video
            ref={(el) => { 
              videoRefs.current[testimonial.id] = el;
              // Simple restoration without complex logic
              if (el && videoPausedTimes[testimonial.id] !== undefined && videoPausedTimes[testimonial.id] > 0) {
                el.currentTime = videoPausedTimes[testimonial.id];
              }
            }}
            className={`w-full h-full object-cover object-center ${getVideoScale(testimonial.name)} ${getVideoPosition(testimonial.name)} ${hasBeenStarted ? 'block' : 'hidden'}`}
            style={{ objectPosition: 'center', minHeight: '400px' }}
            controls={isPlaying}
            preload="metadata"
            playsInline
            muted={false}
            onPlay={() => handleVideoPlay(testimonial)}
            onPause={() => handleVideoPause(testimonial)}
            onEnded={() => handleVideoEnded(testimonial)}
            onClick={(e) => e.stopPropagation()}
          >
            <source src={testimonial.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Show thumbnail only when never started */}
          {!hasBeenStarted && thumbnailPath && (
            <>
              <img 
                src={thumbnailPath}
                alt={`${testimonial.name} testimonial thumbnail`}
                className="w-full h-full object-cover object-center"
                style={{ minHeight: '400px' }}
              />
              
              {/* Simple triangle play button overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                <div className="w-0 h-0 border-l-[24px] border-l-white border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent ml-2 drop-shadow-lg"></div>
              </div>
            </>
          )}

          {/* Show play button overlay when paused (video freeze frame visible underneath) */}
          {hasBeenStarted && !isPlaying && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300">
              <div className="w-0 h-0 border-l-[24px] border-l-white border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent ml-2 drop-shadow-lg"></div>
            </div>
          )}
        </div>
      );
    }

    // Show "Video Coming Soon" for testimonials without videos
    return (
      <div className={`relative min-h-[400px] bg-gradient-to-br ${testimonial.primaryColor} rounded-xl overflow-hidden transform rotate-1 hover:rotate-0 transition-all duration-500 group-hover:scale-[1.02] cursor-pointer flex items-center justify-center`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-6 left-6 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-12 right-8 w-16 h-16 border border-white rounded-lg transform rotate-45"></div>
          <div className="absolute bottom-12 left-12 w-12 h-12 border border-white rounded-full"></div>
          <div className="absolute bottom-6 right-6 w-24 h-24 border border-white rounded-lg transform -rotate-12"></div>
        </div>
        
        {/* Video Interface Mockup */}
        <div className="absolute inset-4 bg-black/90 backdrop-blur-sm rounded-lg shadow-2xl transform -rotate-1">
          {/* Video Player Header */}
          <div className="h-10 bg-gray-900 rounded-t-lg flex items-center px-4 border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="ml-4 text-xs text-gray-400 font-mono">Video Testimonial</div>
            <div className="ml-auto">
              <div className="w-4 h-4 border border-gray-600 rounded-sm"></div>
            </div>
          </div>
          
          {/* Video Content Area */}
          <div className="relative h-full p-4 flex flex-col justify-center items-center">
            {/* Coming Soon Message */}
            <div className="text-center text-white mb-6">
              <div className="text-lg font-semibold mb-2 font-inter">Video Coming Soon</div>
              <div className="text-sm opacity-80 font-inter">We're working on bringing you this testimonial</div>
            </div>
            
            {/* Speaker Info */}
            <div className="text-center text-white">
              <h3 className="text-lg font-semibold mb-1 font-inter">{testimonial.name}</h3>
              <p className="text-sm opacity-80 mb-2 font-inter">{testimonial.company}</p>
              <div className="text-xs opacity-60 px-3 py-1 bg-white/10 rounded-full font-inter">
                {testimonial.industry}
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating UI Elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30 flex items-center justify-center transform rotate-12">
          <div className="w-3 h-3 bg-white/60 rounded-full"></div>
        </div>
        
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 transform -rotate-12"></div>
        
        {/* Coming Soon Indicator */}
        <div className="absolute top-6 left-6 px-2 py-1 bg-orange-500/80 backdrop-blur-sm rounded text-white text-xs font-medium font-inter">
          SOON
        </div>
      </div>
    );
  };

  const renderTestimonial = (testimonial: any, isMobile = false) => (
    <div key={testimonial.id} className="group h-full">
      {testimonial.type === "video" ? (
        // Video Testimonial with Custom Visual - same height as text boxes
        <div 
          className={`relative cursor-pointer group-hover:shadow-lg transition-all duration-300 h-full min-h-[400px] ${isMobile ? 'max-w-sm mx-auto' : ''}`}
          onClick={() => handleVideoClick(testimonial)}
        >
          {renderCustomVideoVisual(testimonial)}
        </div>
      ) : (
        // Text Testimonial with consistent height
        <div className={`bg-white rounded-xl p-lg shadow-card hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between min-h-[400px] ${isMobile ? 'max-w-sm mx-auto' : ''}`}>
          <div className="mb-md flex-grow">
            <h3 className={`neuton-regular ${isMobile ? 'text-base' : 'text-lg'} text-gray-900 mb-sm leading-tight`}>
              "{testimonial.title}"
            </h3>
            <p className={`font-inter ${isMobile ? 'text-sm' : 'text-base'} text-gray-600 leading-relaxed`}>
              {testimonial.content}
            </p>
          </div>
          <div className="flex items-center mt-auto">
            <div>
              <div className={`font-inter ${isMobile ? 'text-sm' : 'text-base'} font-medium text-gray-900`}>
                {testimonial.name}
              </div>
              <div className={`font-inter ${isMobile ? 'text-xs' : 'text-sm'} text-gray-500`}>
                {testimonial.jobTitle}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section id="people-love" className="w-full px-lg py-2xl bg-gray-50">
      <div className="max-w-1200 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-xl">
          <h2 className="neuton-regular text-4xl lg:text-5xl text-gray-900 mb-md">
            What Our Clients Say
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from startups, growing companies, and established businesses we've helped.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl" style={{ gridAutoRows: 'minmax(400px, auto)' }}>
            {displayedTestimonials.map((testimonial) => renderTestimonial(testimonial))}
          </div>
          
          {/* Show More Button for Desktop */}
          {!showMore && (
            <div className="text-center">
              <button 
                onClick={() => setShowMore(true)}
                className="px-xl py-md bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                See More Testimonials
              </button>
            </div>
          )}
          
          {/* Show Less Button for Desktop */}
          {showMore && (
            <div className="text-center">
              <button 
                onClick={() => setShowMore(false)}
                className="px-xl py-md bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                Show Less
              </button>
            </div>
          )}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-lg mb-xl">
            {mobileDisplayedTestimonials.map((testimonial) => renderTestimonial(testimonial, true))}
          </div>
          
          {/* Show More Button for Mobile */}
          {!showAllMobile && allTestimonials.length > 2 && (
            <div className="text-center">
              <button 
                onClick={() => setShowAllMobile(true)}
                className="px-xl py-md bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                See More Testimonials
              </button>
            </div>
          )}
          
          {/* Show Less Button for Mobile */}
          {showAllMobile && (
            <div className="text-center">
              <button 
                onClick={() => setShowAllMobile(false)}
                className="px-xl py-md bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PeopleLoveWorkingWithUs; 