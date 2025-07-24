import { useState } from 'react';

const PeopleLoveWorkingWithUs = () => {
  const [showMore, setShowMore] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const initialTestimonials = [
    {
      id: 1,
      type: "video",
      name: "Anthony M",
      company: "Bond Media",
      videoThumbnail: "custom-video-1",
      videoUrl: "",
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
      name: "Mark Q",
      company: "Q Solar & Rebel Group",
      videoThumbnail: "custom-video-2",
      videoUrl: "",
      industry: "Solar Energy & Private Equity",
      primaryColor: "from-green-500 to-green-700",
      accentColor: "bg-green-500"
    },
    {
      id: 4,
      type: "text",
      title: "Great partnership across multiple projects.",
      content: "We've worked together on several projects - from private equity tools to energy solutions for buildings. Really solid work and quick response times on everything we've done together.",
      name: "Mark Q",
      jobTitle: "Director at Q Solar & CEO of Rebel Group",
      avatar: "https://i.ibb.co/nMSwZMb/image.png"
    },
    {
      id: 5,
      type: "text",
      title: "Solid ERP system that works well.",
      content: "The team built an ERP system for our company that made our operations much smoother. They paid attention to details and knew their stuff throughout the whole project.",
      name: "Nirav S",
      jobTitle: "Managing Director at Eternal Solutions",
      avatar: "https://i.ibb.co/F8z0zQR/image.png"
    },
    {
      id: 6,
      type: "video",
      name: "Nirav S",
      company: "Eternal Solutions",
      videoThumbnail: "custom-video-3",
      videoUrl: "",
      industry: "Software Solutions",
      primaryColor: "from-green-700 to-green-900",
      accentColor: "bg-green-700"
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
      primaryColor: "from-green-400 to-green-600",
      accentColor: "bg-green-400"
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
      name: "Leo M",
      company: "Apexion Solutions",
      videoThumbnail: "custom-video-6",
      videoUrl: "",
      industry: "Solar Energy Data",
      primaryColor: "from-green-300 to-green-500",
      accentColor: "bg-green-300"
    },
    {
      id: 12,
      type: "text",
      title: "Great solar energy data solutions.",
      content: "Working with them on energy needs for office companies has been really good. They helped us get and improve key data for solar projects. The results have been solid and we're happy with their work.",
      name: "Leo M",
      jobTitle: "Co-founder of Apexion Solutions",
      avatar: "https://i.ibb.co/F8z0zQR/image.png"
    }
  ];

  const allTestimonials = [...initialTestimonials, ...additionalTestimonials];
  const displayedTestimonials = showMore ? allTestimonials : [...initialTestimonials, ...additionalTestimonials.slice(0, 2)];
  const mobileDisplayedTestimonials = showAllMobile ? allTestimonials : initialTestimonials.slice(0, 2);

  const handleVideoClick = (testimonial: any) => {
    if (testimonial.videoUrl) {
      // Open video in new tab or modal
      window.open(testimonial.videoUrl, '_blank');
    } else {
      console.log('Video not available yet for:', testimonial.name);
    }
  };

  const renderCustomVideoVisual = (testimonial: any) => {
    return (
      <div className={`relative aspect-[3/4] bg-gradient-to-br ${testimonial.primaryColor} rounded-xl overflow-hidden transform rotate-1 hover:rotate-0 transition-all duration-500 group-hover:scale-[1.02] cursor-pointer`}>
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
            {/* Play Button */}
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm border-2 border-white/40 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
              </div>
              {/* Pulse rings */}
              <div className="absolute inset-0 w-20 h-20 border-2 border-white/30 rounded-full animate-ping"></div>
              <div className="absolute inset-2 w-16 h-16 border border-white/20 rounded-full animate-ping animation-delay-75"></div>
            </div>
            
            {/* Speaker Info */}
            <div className="text-center text-white">
              <h3 className="text-lg font-semibold mb-1">{testimonial.name}</h3>
              <p className="text-sm opacity-80 mb-2">{testimonial.company}</p>
              <div className="text-xs opacity-60 px-3 py-1 bg-white/10 rounded-full">
                {testimonial.industry}
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="absolute bottom-6 left-4 right-4">
              <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                <div className={`h-full ${testimonial.accentColor} rounded-full w-0 group-hover:w-1/3 transition-all duration-1000`}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>0:00</span>
                <span>2:34</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating UI Elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30 flex items-center justify-center transform rotate-12">
          <div className="w-3 h-3 bg-white/60 rounded-full"></div>
        </div>
        
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 transform -rotate-12"></div>
        
        {/* Video Quality Indicator */}
        <div className="absolute top-6 left-6 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-white text-xs font-mono">
          4K HD
        </div>
        
        {/* Live Indicator */}
        <div className="absolute top-6 right-6 flex items-center space-x-1 px-2 py-1 bg-red-500/80 backdrop-blur-sm rounded text-white text-xs">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span>LIVE</span>
        </div>
      </div>
    );
  };

  const renderTestimonial = (testimonial: any, isMobile = false) => (
    <div key={testimonial.id} className="group">
      {testimonial.type === "video" ? (
        // Video Testimonial with Custom Visual
        <div 
          className={`relative cursor-pointer group-hover:shadow-lg transition-all duration-300 ${isMobile ? 'max-w-sm mx-auto' : ''}`}
          onClick={() => handleVideoClick(testimonial)}
        >
          {renderCustomVideoVisual(testimonial)}
        </div>
      ) : (
        // Text Testimonial
        <div className={`bg-white rounded-xl p-lg shadow-card hover:shadow-xl transition-all duration-300 h-full ${isMobile ? 'max-w-sm mx-auto' : ''}`}>
          <div className="mb-md">
            <h3 className={`neuton-regular ${isMobile ? 'text-base' : 'text-lg'} text-gray-900 mb-sm leading-tight`}>
              "{testimonial.title}"
            </h3>
            <p className={`font-inter ${isMobile ? 'text-sm' : 'text-base'} text-gray-600 leading-relaxed`}>
              {testimonial.content}
            </p>
          </div>
          <div className="flex items-center">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} rounded-full object-cover mr-sm`}
            />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg auto-rows-fr mb-xl">
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