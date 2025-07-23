import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who will I be working with?",
      answer: "You'll be working directly with Alex Kaymakanov, founder and CEO of Imperium Growth. With over 15 years of experience in AI implementation and business transformation, Alex personally oversees all client projects to ensure exceptional results."
    },
    {
      question: "What differentiates you from other companies?",
      answer: "We're AI-native from the ground up, not just adding AI to existing processes. We build complete AI transformation solutions with guaranteed results and deep expertise across multiple industries. Our approach focuses on measurable ROI and long-term optimization."
    },
    {
      question: "How can I benefit from working with you?",
      answer: "Our clients typically see 40% cost reductions, 300% increases in conversion rates, and significant improvements in operational efficiency. We provide end-to-end AI transformation that delivers measurable results within 3-6 months."
    },
    {
      question: "Are you suitable for my business?",
      answer: "We work with businesses across various industries including healthcare, fintech, e-commerce, manufacturing, and SaaS. If you're looking to leverage AI for competitive advantage and operational efficiency, we can help transform your business."
    },
    {
      question: "How do we start and how your process looks?",
      answer: "We begin with a comprehensive discovery call to understand your business needs, followed by a detailed AI readiness assessment. Then we develop a custom roadmap and begin implementation with continuous optimization and support."
    },
    {
      question: "What is a design sprint?",
      answer: "A design sprint is an intensive 1-2 week process where we rapidly prototype and validate AI solutions for your specific business challenges. It's a fast, cost-effective way to test AI concepts before full implementation."
    },
    {
      question: "I have a designer/I don't have a designer",
      answer: "No problem! We can work with your existing design team or provide complete design services as part of our AI transformation package. Our approach adapts to your current resources and capabilities."
    },
    {
      question: "Can you also code the project for me?",
      answer: "Absolutely. We provide end-to-end development services including custom AI model development, system integration, deployment, and ongoing maintenance. Our technical team handles everything from concept to production."
    },
    {
      question: "How does the communication look like?",
      answer: "We maintain transparent communication through regular check-ins, detailed progress reports, and dedicated project management tools. You'll have direct access to Alex and the team throughout the entire process."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-lg py-2xl bg-white">
      <div className="max-w-1200 mx-auto">
        <div className="text-center mb-xl">
          <h2 className="font-inter text-4xl lg:text-5xl font-bold text-gray-900 mb-md">
            More Information
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2xl">
          {/* Left Column - Alex's Profile */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-xl">
              <div className="text-center mb-lg">
                <img 
                  src="/images/alex.jpeg" 
                  alt="Alex Kaymakanov"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-md"
                />
                <h3 className="font-inter text-xl font-bold text-gray-900 mb-xs">
                  Hello, it's Alex! 👋
                </h3>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-lg">
                AI transformation expert, founder and CEO of Imperium Growth with 15+ years of industry experience and strong business transformation background. Through the years, Alex has been responsible for various AI implementations, system optimizations and strategic upgrades for many notable companies including Fortune 500 clients, scale-ups, and emerging startups.
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-lg">
                He shares his AI knowledge through consulting, writes articles on LinkedIn, creates educational content, and runs Imperium Growth. His expertise spans across AI strategy, machine learning implementation, business process optimization, and digital transformation.
              </p>
              
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-md">
                  More questions? 
                  <a href="mailto:alex@imperium-growth.com" className="text-accent-dark hover:text-accent font-medium underline ml-1">
                    alex@imperium-growth.com
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
                    <h3 className="font-inter text-lg font-semibold text-gray-900 pr-md">
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