const PricingSection = () => {
  return (
    <section className="w-full px-lg py-2xl bg-gray-50">
      <div className="max-w-1200 mx-auto">
        <div className="text-center mb-xl">
          <h2 className="font-inter text-4xl lg:text-5xl font-bold text-gray-900 mb-md">
            Start Your AI Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect solution for your business needs. From strategic planning to full implementation, we've got you covered.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
          <div className="bg-dark-bg rounded-xl p-xl text-dark-text relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-accent text-gray-900 px-md py-xs rounded-full text-sm font-medium">
              Most Popular
            </div>
            <h3 className="font-inter text-2xl font-bold text-dark-text mb-sm">AI Strategy & Roadmap</h3>
            <p className="text-3xl font-bold text-dark-text mb-sm">$4,997</p>
            <p className="text-dark-text-secondary mb-lg text-lg">
              Get a comprehensive AI transformation strategy tailored to your business goals and industry.
            </p>
            <button className="w-full px-xl py-lg bg-accent text-gray-900 font-semibold rounded-lg hover:bg-accent-dark transition-colors shadow-button text-lg">
              Get Your AI Strategy
            </button>
            <ul className="space-y-md mt-xl text-dark-text-secondary">
              <li className="flex items-center text-lg">✔ Complete Business Analysis & AI Readiness Assessment</li>
              <li className="flex items-center text-lg">✔ Custom AI Implementation Roadmap</li>
              <li className="flex items-center text-lg">✔ Technology Stack Recommendations</li>
              <li className="flex items-center text-lg">✔ ROI Projections & Timeline Planning</li>
              <li className="flex items-center text-lg">✔ 2-Week Delivery + Strategy Session</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-xl border-2 border-gray-200 relative">
            <h3 className="font-inter text-2xl font-bold text-gray-900 mb-sm">Custom AI Solutions</h3>
            <p className="text-3xl font-bold text-gray-900 mb-sm">Let's Talk</p>
            <p className="text-gray-600 mb-lg text-lg">
              Full-scale AI implementation with custom development, integration, and ongoing optimization.
            </p>
            <button className="w-full px-xl py-lg bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors text-lg">
              Schedule Consultation
            </button>
            <ul className="space-y-md mt-xl text-gray-600">
              <li className="flex items-center text-lg">✔ Everything in Strategy Package</li>
              <li className="flex items-center text-lg">✔ Custom AI Model Development</li>
              <li className="flex items-center text-lg">✔ System Integration & Deployment</li>
              <li className="flex items-center text-lg">✔ Team Training & Change Management</li>
              <li className="flex items-center text-lg">✔ Ongoing Support & Optimization</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-xl">
          <p className="text-gray-600 mb-md">
            Not sure which option is right for you?
          </p>
          <button className="px-xl py-md border-2 border-gray-300 hover:border-accent-dark text-gray-700 hover:text-accent-dark font-medium rounded-lg transition-colors">
            Book a Free Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;