const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-900 border-t border-gray-200">
      <div className="max-w-1200 mx-auto px-lg py-2xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl mb-2xl">
          {/* Left Column - About & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-lg">
              <div className="w-8 h-8 bg-gray-900 text-white rounded mr-md flex items-center justify-center">
                <span className="font-inter font-bold text-lg">I</span>
              </div>
              <h3 className="font-inter text-2xl font-bold text-gray-900">Imperium Growth</h3>
            </div>
            
            <p className="text-gray-600 mb-lg text-lg leading-relaxed">
              Curious on how we could enhance the conversion & quality of your product?
            </p>
            
            <div className="space-y-md mb-lg">
              <div className="flex items-center">
                <span className="text-accent-dark font-medium mr-md">Email:</span>
                <a href="mailto:alex@imperium-growth.com" className="text-gray-600 hover:text-accent-dark transition-colors underline">
                  alex@imperium-growth.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-accent-dark font-medium mr-md">Call:</span>
                <a href="#contact" className="text-gray-600 hover:text-accent-dark transition-colors underline">
                  Book a call via Calendly →
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-md">Our work was featured on:</h4>
              <div className="flex flex-wrap items-center gap-lg">
                <span className="text-gray-600 font-medium">TechCrunch</span>
                <span className="text-gray-600 font-medium">Forbes</span>
                <span className="text-gray-600 font-medium">Business Insider</span>
                <span className="text-gray-600 font-medium">The Next Web</span>
              </div>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h4 className="font-inter text-lg font-semibold text-gray-900 mb-lg">Services</h4>
            <ul className="space-y-md">
              <li><a href="#new-pricing" className="text-gray-600 hover:text-accent-dark transition-colors">AI Consulting</a></li>
              <li><a href="#new-pricing" className="text-gray-600 hover:text-accent-dark transition-colors">Product Design</a></li>
              <li><a href="#new-pricing" className="text-gray-600 hover:text-accent-dark transition-colors">AI Audits</a></li>
              <li><a href="#work" className="text-gray-600 hover:text-accent-dark transition-colors">Custom AI Solutions</a></li>
              <li><a href="#work" className="text-gray-600 hover:text-accent-dark transition-colors">AI Implementation</a></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className="font-inter text-lg font-semibold text-gray-900 mb-lg">Company</h4>
            <ul className="space-y-md">
              <li><a href="#work" className="text-gray-600 hover:text-accent-dark transition-colors">Case Studies</a></li>
              <li><a href="#people-love" className="text-gray-600 hover:text-accent-dark transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-accent-dark transition-colors">About Alex</a></li>
              <li><a href="#clients" className="text-gray-600 hover:text-accent-dark transition-colors">Our Clients</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-accent-dark transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="border-t border-gray-200 pt-lg mb-lg">
          <p className="text-gray-600 mb-md">Find us on:</p>
          <div className="flex space-x-lg">
            <a href="https://youtube.com/@AlexKaymakanovAI" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent-dark transition-colors font-medium underline">
              YouTube
            </a>
            <a href="https://twitter.com/alexkaymakanov" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent-dark transition-colors font-medium underline">
              Twitter
            </a>
            <a href="https://medium.com/@alexkaymakanov" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent-dark transition-colors font-medium underline">
              Medium
            </a>
            <a href="https://linkedin.com/in/alexkaymakanov" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent-dark transition-colors font-medium underline">
              LinkedIn
            </a>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-lg">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-md md:mb-0">
              <p className="font-inter text-body-md text-gray-600">
                © 2024 Imperium Growth. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-lg">
              <a href="/privacy" className="font-inter text-body-md text-gray-600 hover:text-accent-dark transition-colors">Privacy Policy</a>
              <a href="/terms" className="font-inter text-body-md text-gray-600 hover:text-accent-dark transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
        
        {/* Large Imperium Growth Logo */}
        <div className="text-center mt-2xl">
          <div className="text-6xl font-bold text-gray-100 select-none">
            imperiumgrowth
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 