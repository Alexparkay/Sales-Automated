const NewPricingSection = () => {
  return (
    <section className="w-full px-lg py-2xl bg-white">
      <div className="max-w-1200 mx-auto">
        <div className="text-left mb-xl">
          <h2 className="font-inter text-4xl lg:text-5xl font-bold text-gray-900 mb-md">
            Book a design sprint or audit
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg mb-xl">
          {/* Product Design Sprint */}
          <div className="bg-gray-900 rounded-xl p-xl text-white relative">
            <div className="flex items-center mb-lg">
              <div className="w-8 h-8 bg-gray-600 rounded mr-md flex items-center justify-center">
                <span className="text-white text-sm">🎨</span>
              </div>
              <div>
                <h3 className="font-inter text-2xl font-bold text-white">Product design</h3>
                <p className="text-3xl font-bold text-white">$10000 <span className="text-sm font-normal text-gray-300">/ sprint</span></p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-lg">
              One single sprint is enough for a Landing Page design. If you have a bigger project or want a partnership, the amount of sprints needed is estimated individually.
            </p>
            
            <div className="flex items-center mb-lg">
              <div className="w-8 h-8 bg-gray-600 rounded-full mr-md flex items-center justify-center">
                <span className="text-white text-xs">👥</span>
              </div>
              <button className="bg-accent text-gray-900 px-lg py-md rounded-lg font-semibold hover:bg-accent-dark transition-colors flex-1">
                Book a design sprint →
              </button>
            </div>
            
            <div className="space-y-md text-gray-300">
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Your project is done by an experienced Senior Designer and conversion specialist, Michal or Diana.</span>
              </div>
              
              <p className="text-accent text-sm font-medium">
                Disclaimer: Unlike other agencies, we never outsource projects or hire juniors to ensure the best quality of the work we deliver to our clients. You always work with us directly.
              </p>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>You get individually tailored, modern and functional product design</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>You get a PDF report with detailed explanation behind our design decisions</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>You receive an expert guidance on conversion, optimisation & copywriting for the future growth</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Bank transfer payment in 2 installments (60/40)</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Friendly contact 5/7 via Slack</span>
              </div>
            </div>
            
            <div className="mt-lg">
              <p className="text-gray-400 text-sm">
                Questions? <button className="text-accent hover:underline">Write to us</button>
              </p>
            </div>
          </div>

          {/* One-time Audit */}
          <div className="bg-gray-50 rounded-xl p-xl border border-gray-200 relative">
            <div className="flex items-center mb-lg">
              <div className="w-8 h-8 bg-accent rounded mr-md flex items-center justify-center">
                <span className="text-gray-900 text-sm">🔍</span>
              </div>
              <div>
                <h3 className="font-inter text-2xl font-bold text-gray-900">One-time audit</h3>
                <p className="text-3xl font-bold text-gray-900">$2500</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-lg">
              We look at your product screenshots or recorded flows and create a report based on heuristic evaluation and our unique experience.
            </p>
            
            <div className="flex items-center mb-lg">
              <div className="w-8 h-8 bg-accent rounded-full mr-md flex items-center justify-center">
                <span className="text-gray-900 text-xs">👥</span>
              </div>
              <button className="bg-gray-900 text-white px-lg py-md rounded-lg font-semibold hover:bg-gray-800 transition-colors flex-1">
                Buy one-time audit →
              </button>
            </div>
            
            <div className="space-y-md text-gray-600">
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>The audit is performed by an experienced Senior Lead Designer & conversion specialist, Michal or Diana.</span>
              </div>
              
              <p className="text-accent text-sm font-medium">
                Disclaimer: Unlike other agencies, we never outsource projects or hire juniors to ensure the best quality of the work we deliver to our clients. You always work with us directly.
              </p>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Audit brainstorming is done by the entire team</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>You receive a PDF report with in-depth analysis, design recommendations, our expert guidance on conversion, optimisation & future growth</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Paid upfront via bank transfer</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Audit received via email</span>
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
              <span className="text-gray-900 text-sm">🎁</span>
            </div>
            <h3 className="font-inter text-2xl font-bold text-gray-900">
              Bonus: Product exposure
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <div>
              <p className="text-gray-600 mb-md">
                After the product launches, you can get extra publicity via our social media channels. At no extra cost.
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                For select projects Michal will do a case study on YouTube, X and Medium reaching a combined group of over 370,000 people to boost the awareness of your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPricingSection; 