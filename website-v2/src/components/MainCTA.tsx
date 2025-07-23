const MainCTA = () => {
  return (
    <section className="w-full px-xs py-2xl bg-white">
      <div className="w-full">
        {/* Single Large Dark Box with Gradient - Full Width */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-3xl mx-xs p-2xl text-center bg-leaves-1 bg-cover bg-center relative overflow-hidden">
          {/* Very dark overlay with radial gradient - image barely visible */}
          <div className="absolute inset-0 bg-gradient-radial from-black/70 via-black/85 to-black/95 rounded-3xl"></div>
          <div className="relative z-10">
            {/* Main Heading */}
            <h2 className="font-inter text-4xl lg:text-5xl font-bold text-white mb-xl leading-tight">
              Ready to Transform Your Business
              <br />
              with <span className="text-accent">AI-Powered Solutions?</span>
            </h2>
            
            <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto mb-xl">
              Let's discuss your specific challenges and explore how our AI solutions can drive measurable results for your organization.
            </p>
            
            {/* CTA Button */}
            <div className="mb-xl">
              <button className="inline-flex items-center bg-accent text-white px-2xl py-lg rounded-2xl font-semibold text-xl hover:bg-accent-dark transition-colors mb-md">
                <img 
                  src="/images/alex.jpeg" 
                  alt="Alex Kaymakanov" 
                  className="w-12 h-12 rounded-full mr-md object-cover"
                />
                <div className="w-3 h-3 bg-green-500 rounded-full mr-md animate-pulse"></div>
                Book a call with Alex →
              </button>
            </div>
            
            {/* Availability Status with Flashing Light */}
            <div className="flex items-center justify-center mb-md">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-md animate-pulse"></div>
              <span className="text-white font-medium text-lg">We're available to talk</span>
            </div>
            
            {/* Contact Info */}
            <p className="text-gray-300 text-base">
              Or write to us at alex@imperium-growth.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCTA;