const WhyWeDiffer = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/alex-imperium-growth/30min?back=1&month=2025-07', '_blank');
  };

  return (
    <section className="w-full px-xs py-xl bg-white">
      <div className="w-full">
        {/* Single Large Dark Box with Gradient - Full Width */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-3xl mx-xs p-xl text-center bg-leaves-4 bg-cover bg-center relative overflow-hidden">
          {/* Very dark overlay with radial gradient - image barely visible */}
          <div className="absolute inset-0 bg-gradient-radial from-black/70 via-black/85 to-black/95 rounded-3xl"></div>
          <div className="relative z-10">
            {/* Main Heading */}
            <h2 className="neuton-regular text-3xl lg:text-4xl text-white mb-lg leading-tight">
              Ready to Build Something
              <br />
              <span className="text-accent">That Actually Works?</span>
              <br />
              Let's Start Your AI Project.
            </h2>
            
            {/* CTA Button */}
            <div className="mb-lg">
              <button 
                onClick={handleBookCall}
                className="inline-flex items-center bg-accent text-black px-xl py-md rounded-2xl font-semibold text-lg hover:bg-accent/90 transition-colors mb-md"
              >
                <div className="relative mr-md">
                  <img 
                    src="/images/Alex.jpeg" 
                    alt="Alex Kaymakanov - AI Solutions Expert" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {/* Pulsing circle positioned at top right of profile picture */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                Get Your AI Strategy Session<span className="hidden md:inline"> →</span>
              </button>
            </div>
            
            {/* Availability Status with Flashing Light */}
            <div className="flex items-center justify-center mb-md">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-md animate-pulse"></div>
              <span className="text-white font-medium text-base">Available for new AI projects</span>
            </div>
            
            {/* Contact Info */}
            <p className="text-gray-300 text-sm">
              Or email us at alex@imperiumgrowth.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeDiffer;