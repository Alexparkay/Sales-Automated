import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who will I be working with?",
      answer: "You'll be working with our team of 42+ independent specialists including developers, AI consultants, data scientists, and transformation experts. We have the facilities and skilled professionals to accommodate projects of any scale and complexity, ensuring we can achieve all your AI transformation goals."
    },
    {
      question: "What differentiates you from other companies?",
      answer: "We're AI-native from the ground up, not just adding AI to existing processes. We build complete AI transformation solutions with guaranteed results and deep expertise across multiple industries. Our approach focuses on measurable ROI and long-term optimization with direct correlation to revenue growth."
    },
    {
      question: "How can I benefit from working with you?",
      answer: "Our clients typically see 300%+ increases in performance, significant cost reductions, and measurable improvements in operational efficiency. We provide end-to-end AI transformation that delivers results from day one, not after 6-12 months like typical AI projects."
    },
    {
      question: "Are you suitable for my business?",
      answer: "We work with businesses across various industries including healthcare, fintech, e-commerce, manufacturing, private equity, and Fortune 500 companies. If you're looking to leverage AI for competitive advantage and operational efficiency, we can help transform your business."
    },
    {
      question: "How do we start and what does your process look like?",
      answer: "We begin with a comprehensive AI audit and discovery call to understand your business needs, followed by strategic analysis and identification of quick wins. Then we develop a custom 4-week roadmap and begin implementation with continuous optimization and support."
    },
    {
      question: "What is an AI audit sprint?",
      answer: "An AI audit sprint is an intensive 1-2 week process where we comprehensively analyze your current processes, identify AI transformation opportunities, and rapidly prototype solutions for your specific business challenges. It's a fast, cost-effective way to understand your AI potential before full implementation."
    },
    {
      question: "I use ChatGPT/AI tools - what's the difference?",
      answer: "While ChatGPT and basic AI tools provide surface-level automation (about 1% of AI's potential), we build custom enterprise AI systems that directly correlate to revenue growth and KPIs. We create comprehensive AI strategies, custom implementations, and integrated solutions that transform entire business operations, not just individual tasks."
    },
    {
      question: "Can you also code projects for me?",
      answer: "Absolutely. We provide end-to-end development services including custom AI model development, system integration, deployment, and ongoing maintenance. Our technical team of 42+ specialists handles everything from concept to production, with the capability to scale to any project size."
    },
    {
      question: "How does communication look like?",
      answer: "You have direct access to Alex and his team throughout the entire process. We maintain transparent communication through regular check-ins, detailed progress reports, and dedicated project management tools with real-time updates on your AI transformation progress."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-lg py-2xl bg-white">
      <div className="max-w-1200 mx-auto">
        <div className="text-center mb-xl">
          <h2 className="neuton-regular text-4xl lg:text-5xl text-gray-900 mb-md">
            More Information
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2xl">
          {/* Left Column - Alex's Profile */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-xl">
              <div className="text-center mb-lg">
                              <img
                src="/images/Alex.jpeg"
                alt="Alex Kaymakanov"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-md"
                />
                <h3 className="neuton-regular text-xl text-gray-900 mb-xs">
                  Hello, it's Alex! 👋
                </h3>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-lg">
                Alex worked at a leading AI company doing consulting and transformation when he realized he could have a direct correlation to ROI and tangible results with AI solutions. This insight led him to start his own company specializing in building AI systems that generated significant returns for companies because they were directly correlated to growth, not just small automations.
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-lg">
                Having been in the AI space for the last three years since AI really emerged, Alex stays up to date with all the latest trends and developments, even thinking long-term about how AGI will impact businesses and making businesses AI-native. That's why he made his own business AI-native and all of his employees and team are as efficient as possible with AI due to the efficiency which AI provides. This is the expertise he'd like to share and discuss with you for your business transformation.
              </p>
              
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-md">
                  More questions? 
                  <a href="mailto:alex@imperiumgrowth.com" className="text-accent-dark hover:text-accent font-medium underline ml-1">
                    alex@imperiumgrowth.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - FAQ Questions */}
          <div className="lg:col-span-2">
            <div className="space-y-md">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-md">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex items-center justify-between py-md"
                  >
                    <h3 className="neuton-regular text-lg text-gray-900 pr-md">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <svg 
                        className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="pb-md">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;