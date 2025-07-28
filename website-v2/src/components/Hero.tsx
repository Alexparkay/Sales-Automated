const Hero = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/alex-imperium-growth/30min?back=1&month=2025-07', '_blank');
  };

  return (
    <section className="w-full px-lg py-xl md:py-2xl bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="neuton-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] mb-lg md:mb-xl max-w-5xl mx-auto">
          Your competitors are already using AI
          <br className="hidden sm:block" />
          <span className="block sm:inline"> to crush you.</span>
          <br />
          <span className="text-accent-dark block mt-sm sm:mt-md">
            We make sure you crush them back.
          </span>
        </h1>
        
        {/* Optimized subheading */}
        <div className="max-w-4xl mx-auto mb-xl md:mb-2xl">
          <p className="font-inter text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-md">
            Most businesses know they need AI but don't know where to start.
          </p>
          <p className="font-inter text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            We audit your pain points, build custom solutions, and implement in 90 days.
          </p>
          <p className="font-inter text-sm sm:text-base md:text-lg text-gray-500 mt-md leading-relaxed">
            ... and our partners have generated <span className="font-semibold text-accent-dark">250+ million in pipeline</span>.
          </p>
        </div>
        
        {/* CTA Button with Alex's profile */}
        <button 
          onClick={handleBookCall}
          className="inline-flex items-center px-xl md:px-2xl py-md md:py-lg bg-black text-white font-medium text-base md:text-lg rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative"
        >
          <div className="relative mr-md md:mr-lg">
            <img
              src="/images/Alex.jpeg"
              alt="Alex Kaymakanov - AI Solutions Expert" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
            />
            {/* Pulsing circle positioned at top right of profile picture */}
            <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <span className="text-base md:text-lg font-semibold">Get Your AI Strategy Session</span>
        </button>
      </div>
    </section>
  );
};

export default Hero; 