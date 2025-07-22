const BonusProductExposure = () => {
  return (
    <section className="w-full px-lg py-2xl bg-white">
      <div className="max-w-1200 mx-auto">
        <div className="text-center mb-xl">
          <h2 className="font-inter text-4xl lg:text-5xl font-bold text-gray-900 mb-md">
            Bonus: Continuous Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get more value with our ongoing commitment to keeping your AI solutions at the cutting edge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {/* Constant Updates */}
          <div className="bg-gray-50 rounded-xl p-xl">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-lg mx-auto">
              <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="font-inter text-2xl font-bold text-gray-900 mb-md text-center">
              Constant Updates & Improvements
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed text-center mb-lg">
              Your AI systems evolve with the latest advancements. We continuously update and optimize your solutions to ensure peak performance and competitive advantage.
            </p>
            <ul className="space-y-sm text-gray-600">
              <li className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Monthly performance reviews and optimizations</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Latest AI model integrations and upgrades</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Security patches and compliance updates</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Feature enhancements based on usage analytics</span>
              </li>
            </ul>
          </div>

          {/* Advanced Models */}
          <div className="bg-gray-50 rounded-xl p-xl">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-lg mx-auto">
              <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-inter text-2xl font-bold text-gray-900 mb-md text-center">
              Cutting-Edge AI Models
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed text-center mb-lg">
              Access to proprietary and state-of-the-art AI models tailored specifically for your industry and use cases, ensuring maximum efficiency and results.
            </p>
            <ul className="space-y-sm text-gray-600">
              <li className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Custom-trained models for your specific business needs</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Access to latest GPT, Claude, and specialized AI models</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Multi-modal AI capabilities (text, image, voice, data)</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-md">✓</span>
                <span>Proprietary algorithms developed by our research team</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-xl">
          <p className="text-gray-600 mb-md text-lg">
            These benefits are included with all our Custom AI Solutions packages
          </p>
          <button className="px-xl py-md border-2 border-accent-dark text-accent-dark hover:bg-accent-dark hover:text-gray-900 font-medium rounded-lg transition-colors">
            Learn More About Our Approach
          </button>
        </div>
      </div>
    </section>
  );
};

export default BonusProductExposure; 