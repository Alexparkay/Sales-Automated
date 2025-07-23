const PricingSection = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/alex-imperium-growth/30min?back=1&month=2025-07', '_blank');
  };

  return (
    <section className="w-full px-lg py-xl bg-gray-50">
      <div className="max-w-1200 mx-auto">
        <div className="text-center mb-lg">
          <h2 className="neuton-regular text-3xl lg:text-4xl text-gray-900 mb-md">
            Start Your AI Transformation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect solution for your business needs. From strategic planning to full implementation, we've got you covered.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
          <div className="bg-dark-bg rounded-xl p-lg text-dark-text relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-accent text-gray-900 px-md py-xs rounded-full text-sm font-medium">
              Most Popular
            </div>
            <h3 className="neuton-regular text-xl text-dark-text mb-sm">AI Strategy & Roadmap</h3>
            <p className="text-2xl font-bold text-dark-text mb-sm">$4,997</p>
            <p className="text-dark-text-secondary mb-md text-base">
              Get a comprehensive AI transformation strategy tailored to your business goals and industry.
            </p>
            <button 
              onClick={handleBookCall}
              className="w-full inline-flex items-center justify-center px-lg py-md bg-accent text-black font-semibold rounded-lg hover:bg-accent-dark transition-colors shadow-button text-base"
            >
              <div className="relative mr-md">
                <img 
                  src="/images/alex.jpeg" 
                  alt="Alex Kaymakanov - AI Transformation Expert" 
                  className="w-6 h-6 rounded-full object-cover"
                />
                {/* Pulsing circle positioned at top right of profile picture */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              Get Your AI Strategy
            </button>
            <ul className="space-y-sm mt-lg text-dark-text-secondary">
              <li className="flex items-center text-sm">✔ Complete Business Analysis & AI Readiness Assessment</li>
              <li className="flex items-center text-sm">✔ Custom AI Implementation Roadmap</li>
              <li className="flex items-center text-sm">✔ Technology Stack Recommendations</li>
              <li className="flex items-center text-sm">✔ ROI Projections & Timeline Planning</li>
              <li className="flex items-center text-sm">✔ 2-Week Delivery + Strategy Session</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-lg border-2 border-gray-200 relative">
            <h3 className="neuton-regular text-xl text-gray-900 mb-sm">Custom AI Solutions</h3>
            <p className="text-2xl font-bold text-gray-900 mb-sm">Let's Talk</p>
            <p className="text-gray-600 mb-md text-base">
              Full-scale AI implementation with custom development, integration, and ongoing optimization.
            </p>
            <button className="w-full px-lg py-md bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors text-base">
              Schedule Consultation
            </button>
            <ul className="space-y-sm mt-lg text-gray-600">
              <li className="flex items-center text-sm">✔ Everything in Strategy Package</li>
              <li className="flex items-center text-sm">✔ Custom AI Model Development</li>
              <li className="flex items-center text-sm">✔ System Integration & Deployment</li>
              <li className="flex items-center text-sm">✔ Team Training & Change Management</li>
              <li className="flex items-center text-sm">✔ Ongoing Support & Optimization</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-lg">
          <p className="text-gray-600 mb-md">
            Not sure which option is right for you?
          </p>
          <button className="px-lg py-sm border-2 border-gray-300 hover:border-accent-dark text-gray-700 hover:text-accent-dark font-medium rounded-lg transition-colors">
            Book a Free Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;