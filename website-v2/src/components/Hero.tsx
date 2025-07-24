const Hero = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/alex-imperium-growth/30min?back=1&month=2025-07', '_blank');
  };

  return (
    <section className="w-full px-lg py-xl md:py-2xl bg-white">
      <div className="max-w-1200 mx-auto text-center">
        {/* Main heading */}
        <h1 className="neuton-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-md md:mb-lg">
          AI Solutions That
          <br />
          <span className="text-accent-dark">Actually Work</span>
        </h1>
        <p className="font-inter text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-lg md:mb-xl leading-relaxed px-sm">
          We build custom AI tools for startups, growing companies, and established businesses. Get real results in weeks, not months.
        </p>
        
        {/* CTA Button with Alex's profile */}
        <button 
          onClick={handleBookCall}
          className="inline-flex items-center px-lg md:px-xl py-sm md:py-md bg-black text-white font-medium text-sm md:text-base rounded-lg hover:bg-gray-800 transition-colors shadow-button relative"
        >
          <div className="relative mr-sm md:mr-md">
                          <img
                src="/images/Alex.jpeg"
                alt="Alex Kaymakanov - AI Solutions Expert" 
              className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover"
            />
            {/* Pulsing circle positioned at top right of profile picture */}
            <div className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <span className="text-sm md:text-base">Get Your AI Strategy Session</span>
        </button>
      </div>
    </section>
  );
};

export default Hero; 