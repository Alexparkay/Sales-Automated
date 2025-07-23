import { useState } from 'react';

const CaseStudiesPreview = () => {
  const [showAll, setShowAll] = useState(false);
  
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Supermarket Chain: AI Negotiation Management System Reduces Costs by 35%",
      image: "/images/Growth/pexels-asphotograpy-1002703.jpg",
      tags: ["Negotiation Management", "Cost Reduction", "Fortune 500"],
      size: "large",
      industry: "Retail & Supply Chain",
      primaryColor: "from-green-600 to-green-700",
      accentColor: "bg-green-500",
      icon: "🏪"
    },
    {
      id: 2,
      title: "Commercial Solar Enterprise: AI-Powered Energy Consumption Analysis Increases Conversions 4x",
      image: "/images/Growth/pexels-airin-party-252379-767240.jpg",
      tags: ["Solar Energy", "Lead Generation", "B2B Sales"],
      size: "medium",
      industry: "Clean Energy",
      primaryColor: "from-green-500 to-green-600",
      accentColor: "bg-green-400",
      icon: "☀️"
    },
    {
      id: 3,
      title: "Healthcare Network: AI Operations Streamlining Reduces Patient Processing Time by 60%",
      image: "/images/Growth/pexels-gochrisgoxyz-1643409.jpg",
      tags: ["Healthcare", "Operations", "Private Transition"],
      size: "medium",
      industry: "Healthcare Technology",
      primaryColor: "from-green-700 to-green-800",
      accentColor: "bg-green-600",
      icon: "🏥"
    },
    {
      id: 4,
      title: "Enterprise ERP Solutions: AI-Driven Buying Signals Increase Enterprise Conversion by 250%",
      image: "/images/Growth/pexels-ian-panelo-3571551.jpg",
      tags: ["ERP", "Buying Signals", "Enterprise Sales"],
      size: "large",
      industry: "Enterprise Software",
      primaryColor: "from-green-400 to-green-500",
      accentColor: "bg-green-300",
      icon: "🏢"
    },
    {
      id: 5,
      title: "Website Design Agency: AI-Powered Website Generation Reduces Delivery Time by 80%",
      image: "/images/Growth/pexels-lauripoldre-30894193.jpg",
      tags: ["Web Design", "AI Generation", "Process Automation"],
      size: "medium",
      industry: "Digital Agency",
      primaryColor: "from-green-800 to-green-900",
      accentColor: "bg-green-700",
      icon: "🎨"
    },
    {
      id: 6,
      title: "Private Equity Firm: AI Due Diligence System Accelerates Deal Flow by 300%",
      image: "/images/Growth/pexels-minan1398-1650627.jpg",
      tags: ["Private Equity", "Due Diligence", "Deal Flow"],
      size: "large",
      industry: "Financial Services",
      primaryColor: "from-green-300 to-green-400",
      accentColor: "bg-green-200",
      icon: "💼"
    }
  ];

  const handleCaseStudyClick = (id: number) => {
    // Navigate to individual case study page using custom event
    const event = new CustomEvent('navigateToCase', { detail: { id } });
    window.dispatchEvent(event);
  };

  const getGridClasses = (size: string, index: number) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-1";
      case "medium":
        return "md:col-span-1 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  // Show first 2 on mobile, all on desktop
  const displayedCaseStudies = showAll ? caseStudies : caseStudies.slice(0, 2);

  return (
    <section id="work" className="w-full px-lg py-sm bg-white">
      <div className="max-w-1200 mx-auto">
        {/* Desktop: Show all case studies */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg auto-rows-fr">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id} 
                className={`group cursor-pointer ${getGridClasses(study.size, index)}`}
                onClick={() => handleCaseStudyClick(study.id)}
              >
                <div className="bg-white rounded-xl overflow-hidden mb-md shadow-card hover:shadow-xl transition-all duration-300 h-full">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-lg">
                    <h3 className="neuton-regular text-xl text-gray-900 mb-sm group-hover:text-accent-dark transition-colors leading-tight">
                      {study.title}
                    </h3>
                    <div className="flex flex-wrap gap-xs">
                      {study.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-md py-xs bg-gray-50 text-gray-600 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-md flex items-center text-accent-dark font-medium group-hover:translate-x-2 transition-transform">
                      Read Case Study
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Show 2 initially with see more button */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-lg">
            {displayedCaseStudies.map((study, index) => (
              <div 
                key={study.id} 
                className="group cursor-pointer"
                onClick={() => handleCaseStudyClick(study.id)}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-lg">
                    <h3 className="neuton-regular text-lg text-gray-900 mb-sm group-hover:text-accent-dark transition-colors leading-tight">
                      {study.title}
                    </h3>
                    <div className="flex flex-wrap gap-xs">
                      {study.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-sm py-xs bg-gray-50 text-gray-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-md flex items-center text-accent-dark font-medium group-hover:translate-x-2 transition-transform text-sm">
                      Read Case Study
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button for Mobile */}
          {!showAll && caseStudies.length > 2 && (
            <div className="text-center mt-lg">
              <button 
                onClick={() => setShowAll(true)}
                className="px-lg py-md bg-gray-50 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
              >
                See More Case Studies
              </button>
            </div>
          )}

          {/* Show Less Button for Mobile */}
          {showAll && (
            <div className="text-center mt-lg">
              <button 
                onClick={() => setShowAll(false)}
                className="px-lg py-md bg-gray-50 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
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