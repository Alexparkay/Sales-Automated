const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-900 border-t border-gray-200">
      <div className="max-w-1200 mx-auto px-lg py-xl md:py-2xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg md:gap-xl mb-xl md:mb-2xl">
          {/* Left Column - About & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-md md:mb-lg">
              <img 
                src="/images/Black Imperium Logo.png" 
                alt="Imperium Growth Logo" 
                className="h-8 md:h-10 mr-sm md:mr-md"
              />
              <h3 className="neuton-regular text-xl md:text-2xl text-gray-900">Imperium Growth</h3>
            </div>
            
            <p className="text-gray-600 mb-md md:mb-lg text-base md:text-lg leading-relaxed">
              Your AI Transformation Partners. We deliver enterprise AI solutions, custom implementations, and strategic consulting that drives measurable ROI from day one.
            </p>
            
            <div className="space-y-sm md:space-y-md mb-md md:mb-lg">
              <div className="flex items-center">
                <span className="text-accent-dark font-medium mr-sm md:mr-md text-sm md:text-base">Email:</span>
                <a href="mailto:alex@imperiumgrowth.com" className="text-gray-600 hover:text-accent-dark transition-colors underline text-sm md:text-base">
                  alex@imperiumgrowth.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-accent-dark font-medium mr-sm md:mr-md text-sm md:text-base">AI Strategy:</span>
                <a 
                  href="https://calendly.com/alex-imperium-growth/30min?back=1&month=2025-07" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-accent-dark transition-colors underline text-sm md:text-base"
                >
                  Get Your Free AI Consultation →
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="neuton-regular text-gray-900 mb-sm md:mb-md text-base md:text-base">Trusted by leading companies across industries:</h4>
              <div className="flex flex-wrap items-center gap-sm md:gap-lg">
                <span className="text-gray-600 font-medium text-sm md:text-base">Fortune 500</span>
                <span className="text-gray-600 font-medium text-sm md:text-base">Healthcare</span>
                <span className="text-gray-600 font-medium text-sm md:text-base">Finance</span>
                <span className="text-gray-600 font-medium text-sm md:text-base">Technology</span>
              </div>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h4 className="neuton-regular text-base md:text-lg text-gray-900 mb-md md:mb-lg">AI Services</h4>
            <ul className="space-y-sm md:space-y-md">
              <li><a href="#why-difference" className="text-gray-600 hover:text-accent-dark transition-colors text-sm md:text-base">AI Strategy Consulting</a></li>
              <li><a href="#why-difference" className="text-gray-600 hover:text-accent-dark transition-colors text-sm md:text-base">AI Audits & Analysis</a></li>
              <li><a href="#why-difference" className="text-gray-600 hover:text-accent-dark transition-colors text-sm md:text-base">Custom AI Solutions</a></li>
              <li><a href="#why-difference" className="text-gray-600 hover:text-accent-dark transition-colors text-sm md:text-base">Enterprise AI Implementation</a></li>
              <li><a href="#why-difference" className="text-gray-600 hover:text-accent-dark transition-colors text-sm md:text-base">AI Transformation</a></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className="neuton-regular text-base md:text-lg text-gray-900 mb-md md:mb-lg">Company</h4>
            <ul className="space-y-sm md:space-y-md">
              <li><a href="#work" className="text-gray-600 hover:text-accent-dark transition-colors text-sm md:text-base">AI Case Studies</a></li>
              <li><a href="#people-love" className="text-gray-600 hover:text-accent-dark transition-colors text-sm md:text-base">Client Results</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-accent-dark transition-colors text-sm md:text-base">About Our Team</a></li>
              <li><a href="#hero" className="text-gray-600 hover:text-accent-dark transition-colors text-sm md:text-base">Our Partners</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-accent-dark transition-colors text-sm md:text-base">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="border-t border-gray-200 pt-md md:pt-lg mb-md md:mb-lg">
          <p className="text-gray-600 mb-sm md:mb-md text-sm md:text-base">Find us on:</p>
          <div className="flex flex-wrap space-x-md md:space-x-lg">
            <a href="https://www.youtube.com/@AlexKaymakanovAI" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent-dark transition-colors font-medium underline text-sm md:text-base">
              YouTube
            </a>
            <a href="https://www.instagram.com/alexai.co/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent-dark transition-colors font-medium underline text-sm md:text-base">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/alexkaymakanov/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent-dark transition-colors font-medium underline text-sm md:text-base">
              LinkedIn
            </a>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-md md:pt-lg">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-sm md:mb-0">
              <p className="font-inter text-sm md:text-body-md text-gray-600">
                © 2025 Imperium Growth. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-md md:space-x-lg">
              <a 
                href="/privacy" 
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/privacy');
                  // Trigger a popstate event to update the app state
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className="font-inter text-sm md:text-body-md text-gray-600 hover:text-accent-dark transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/terms');
                  // Trigger a popstate event to update the app state
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className="font-inter text-sm md:text-body-md text-gray-600 hover:text-accent-dark transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        
        {/* Large Imperium Growth Logo */}
        <div className="text-center mt-lg md:mt-2xl">
          <div className="neuton-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-gray-100 select-none leading-none px-sm">
            Imperium Growth
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 