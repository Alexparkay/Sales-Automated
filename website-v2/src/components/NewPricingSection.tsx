const NewPricingSection = () => {
  return (
    <section className="w-full px-lg py-2xl bg-white">
      <div className="max-w-1200 mx-auto">
        <div className="text-left mb-xl">
          <h2 className="font-inter text-4xl lg:text-5xl font-bold text-gray-900 mb-md">
            Book an AI consultation or custom implementation
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg mb-xl">
          {/* AI Consulting Call */}
          <div className="bg-gray-900 rounded-xl p-xl text-white relative bg-leaves-1 bg-cover bg-center overflow-hidden">
            {/* Semi-transparent overlay to maintain readability */}
            <div className="absolute inset-0 bg-gray-900/85 rounded-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-lg">
                <div className="w-8 h-8 bg-gray-600 rounded mr-md flex items-center justify-center">
                  <span className="text-white text-sm">🤖</span>
                </div>
                <div>
                  <h3 className="font-inter text-2xl font-bold text-white">Book a consulting call with Alex</h3>
                  <p className="text-3xl font-bold text-white">£250 <span className="text-sm font-normal text-gray-300">/ hour</span></p>
                </div>
              </div>
            
            <p className="text-gray-300 mb-lg">
              Get expert AI transformation guidance directly from Alex. Perfect for strategic planning, implementation advice, or technical consultations on your AI journey.
            </p>
            
            <div className="flex items-center mb-lg">
              <div className="w-8 h-8 bg-gray-600 rounded-full mr-md flex items-center justify-center">
                <span className="text-white text-xs">💡</span>
              </div>
              <button className="bg-accent text-white px-lg py-md rounded-lg font-semibold hover:bg-accent-dark transition-colors flex-1">
                Book AI consultation →
              </button>
            </div>
            
            <div className="space-y-md text-gray-300">
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Direct consultation with Alex Kaymakanov, AI transformation expert and company founder</span>
              </div>
              
              <p className="text-accent text-sm font-medium">
                Note: We provide personalized AI guidance based on our experience with 400+ AI implementations across multiple industries.
              </p>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Strategic AI implementation roadmap tailored to your business needs</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Technical feasibility assessment and technology stack recommendations</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>ROI projections and implementation timeline planning</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Hourly billing with flexible scheduling</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Follow-up resources and implementation guidance</span>
              </div>
            </div>
            
            <div className="mt-lg">
              <p className="text-gray-400 text-sm">
                Questions? <button className="text-accent hover:underline">Write to us</button>
              </p>
            </div>
          </div>
        </div>

          {/* Custom AI Implementation */}
          <div className="bg-gray-50 rounded-xl p-xl border border-gray-200 relative">
            <div className="flex items-center mb-lg">
              <div className="w-8 h-8 bg-accent rounded mr-md flex items-center justify-center">
                <span className="text-white text-sm">🚀</span>
              </div>
              <div>
                <h3 className="font-inter text-2xl font-bold text-gray-900">Book with Alex (Custom)</h3>
                <p className="text-3xl font-bold text-gray-900">Custom Quote</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-lg">
              Complete AI transformation solutions including implementation, consulting, audits, and ongoing support. Tailored to your specific business requirements and goals.
            </p>
            
            <div className="flex items-center mb-lg">
              <div className="w-8 h-8 bg-accent rounded-full mr-md flex items-center justify-center">
                <span className="text-white text-xs">⚡</span>
              </div>
              <button className="bg-gray-900 text-white px-lg py-md rounded-lg font-semibold hover:bg-gray-800 transition-colors flex-1">
                Get custom AI solution →
              </button>
            </div>
            
            <div className="space-y-md text-gray-600">
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Comprehensive AI audit and business analysis by our expert team</span>
              </div>
              
              <p className="text-accent text-sm font-medium">
                Guarantee: We deliver measurable results with our proven AI implementation methodology, backed by 400+ successful transformations.
              </p>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Complete end-to-end AI implementation and system integration</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Custom AI model development and training for your specific use cases</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Team training and change management support</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Ongoing optimization and performance monitoring</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>24/7 support and maintenance included</span>
              </div>
            </div>
            
            <div className="mt-lg">
              <p className="text-gray-600 text-sm">
                Questions? <button className="text-accent hover:underline">Write to us</button>
              </p>
            </div>
          </div>
        </div>
        
        {/* Bonus Section */}
        <div className="bg-gray-50 rounded-xl p-xl">
          <div className="flex items-center mb-md">
            <div className="w-8 h-8 bg-accent rounded mr-md flex items-center justify-center">
              <span className="text-white text-sm">🎁</span>
            </div>
            <h3 className="font-inter text-2xl font-bold text-gray-900">
              Bonus: AI Success Stories
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <div>
              <p className="text-gray-600 mb-md">
                After successful implementation, your AI transformation story could be featured in our case studies and success showcases.
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                For exceptional results, Alex will create detailed case studies shared across our channels, reaching 370,000+ professionals to showcase your AI transformation success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPricingSection; 