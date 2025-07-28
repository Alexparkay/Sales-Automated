import { useState } from 'react';

const CaseStudiesPreview = () => {
  const [showAll, setShowAll] = useState(false);
  
  // All case studies in one array - 8 total
  const allCaseStudies = [
    {
      id: 1,
      title: "Commercial Solar Enterprise: AI System Generates $203.6M Pipeline in 6 Months",
      image: "/images/Case Studie Graphics/Imperium Solis Small.jpg",
      tags: ["Solar Energy", "Lead Generation", "B2B Sales"],
      size: "large",
      industry: "Clean Energy",
      primaryColor: "from-green-500 to-green-600",
      accentColor: "bg-green-400",
      icon: "☀️"
    },
    {
      id: 2,
      title: "Fortune 500 Supermarket Chain: AI Negotiation System Revolutionizes Procurement Operations",
      image: "/images/Case Studie Graphics/Aldi small.jpg",
      tags: ["Negotiation Management", "Cost Reduction", "Fortune 500"],
      size: "medium",
      industry: "Retail & Supply Chain",
      primaryColor: "from-green-600 to-green-700",
      accentColor: "bg-green-500",
      icon: "🏪"
    },
    {
      id: 3,
      title: "Imperium MSP: AI-Powered Software Intelligence Scales Revenue from $6M to $50M",
      image: "/images/Case Studie Graphics/Imperium msp Small.jpg",
      tags: ["MSP", "Software Licensing", "B2B Outreach"],
      size: "medium",
      industry: "Managed Service Providers",
      primaryColor: "from-blue-600 to-blue-700",
      accentColor: "bg-blue-500",
      icon: "🔧"
    },
    {
      id: 4,
      title: "Enterprise ERP Solutions: SAP Migration Intelligence Delivers 3x ROI in 4 Months",
      image: "/images/Case Studie Graphics/Imperium ERP Small.jpg",
      tags: ["ERP", "Buying Signals", "Enterprise Sales"],
      size: "large",
      industry: "Enterprise Software",
      primaryColor: "from-green-400 to-green-500",
      accentColor: "bg-green-300",
      icon: "🏢"
    },
    {
      id: 5,
      title: "Chinese Data Centers: Water Cooling Intelligence Captures 3 Major UK Deals Worth $10M+",
      image: "/images/Case Studie Graphics/Hetone Small.jpg",
      tags: ["Data Centers", "Infrastructure", "Cost Optimization"],
      size: "medium",
      industry: "Data Center Management",
      primaryColor: "from-purple-600 to-purple-700",
      accentColor: "bg-purple-500",
      icon: "🖥️"
    },
    {
      id: 6,
      title: "Private Equity Manufacturing: AI-Powered Owner Intelligence Streamlines Acquisition Pipeline",
      image: "/images/Case Studie Graphics/Imperium Database Small.jpg",
      tags: ["Private Equity", "Due Diligence", "Deal Flow"],
      size: "large",
      industry: "Financial Services",
      primaryColor: "from-green-300 to-green-400",
      accentColor: "bg-green-200",
      icon: "💼"
    },
    {
      id: 7,
      title: "Website Design Agency: AI Qualifying System Delivers Premium Websites Before Payment",
      image: "/images/Case Studie Graphics/webdesign image.jpg",
      tags: ["Web Design", "AI Generation", "Process Automation"],
      size: "large",
      industry: "Digital Agency",
      primaryColor: "from-indigo-600 to-indigo-700",
      accentColor: "bg-indigo-500",
      icon: "💻"
    },
    {
      id: 8,
      title: "Bill Gates-Backed $100M Startup Scales GTM with 179D Tax Incentive Intelligence",
      image: "/images/Case Studie Graphics/Imerium Luxwall Small.jpg",
      tags: ["Energy Efficiency", "Building Analysis", "Sustainability"],
      size: "medium",
      industry: "Energy & Construction",
      primaryColor: "from-amber-500 to-amber-600",
      accentColor: "bg-amber-400",
      icon: "🏗️"
    }
  ];

  const handleCaseStudyClick = (id: number) => {
    // Navigate to individual case study page using custom event
    const event = new CustomEvent('navigateToCase', { detail: { id } });
    window.dispatchEvent(event);
  };

  const getGridClasses = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-1";
      case "medium":
        return "md:col-span-1 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  // Desktop: Show first 4 initially, then all 8 when expanded
  // Mobile: Show first 2 initially, then all 8 when expanded
  const displayedCaseStudies = showAll ? allCaseStudies : allCaseStudies.slice(0, 4);
  const displayedMobileCaseStudies = showAll ? allCaseStudies : allCaseStudies.slice(0, 2);

  return (
    <section id="work" className="w-full px-lg py-sm bg-white">
      <div className="max-w-1200 mx-auto">
        {/* Desktop: Show case studies with see more functionality */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl auto-rows-fr">
            {displayedCaseStudies.map((study) => (
              <div 
                key={study.id} 
                className={`group cursor-pointer ${getGridClasses(study.size)}`}
                onClick={() => handleCaseStudyClick(study.id)}
              >
                <div className="h-full">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-lg">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="space-y-md">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight group-hover:text-accent-dark transition-colors duration-300">
                      {study.title}
                    </h3>
                    <div className="flex items-center text-gray-600 hover:text-accent-dark transition-colors duration-300">
                      <span className="text-sm font-medium tracking-wide uppercase mr-2">
                        Case Study
                      </span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button for Desktop */}
          {!showAll && allCaseStudies.length > 4 && (
            <div className="text-center mt-xl">
              <button 
                onClick={() => setShowAll(true)}
                className="px-xl py-lg bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300"
              >
                Show more case studies
              </button>
            </div>
          )}

          {/* Show Less Button for Desktop */}
          {showAll && (
            <div className="text-center mt-xl">
              <button 
                onClick={() => setShowAll(false)}
                className="px-xl py-lg bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 border border-gray-200"
              >
                Show Less
                <svg className="w-5 h-5 ml-2 inline rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Mobile: Show 2 initially with see more button */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-xl">
            {displayedMobileCaseStudies.map((caseStudy) => (
              <div 
                key={caseStudy.id} 
                className="group cursor-pointer"
                onClick={() => handleCaseStudyClick(caseStudy.id)}
              >
                <div className="h-full">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-lg">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="space-y-md">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight group-hover:text-accent-dark transition-colors duration-300">
                      {caseStudy.title}
                    </h3>
                    <div className="flex items-center text-gray-600 hover:text-accent-dark transition-colors duration-300">
                      <span className="text-sm font-medium tracking-wide uppercase mr-2">
                        Case Study
                      </span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button for Mobile */}
          {!showAll && allCaseStudies.length > 2 && (
            <div className="text-center mt-lg">
              <button 
                onClick={() => setShowAll(true)}
                className="px-lg py-md bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Show more case studies
              </button>
            </div>
          )}

          {/* Show Less Button for Mobile */}
          {showAll && (
            <div className="text-center mt-lg">
              <button 
                onClick={() => setShowAll(false)}
                className="px-lg py-md bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors border border-gray-200"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;