const CaseStudiesPreview = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Supermarket Chain: AI Negotiation Management System Reduces Costs by 35%",
      image: "https://i.ibb.co/6rW8B9x/image.png",
      tags: ["Negotiation Management", "Cost Reduction", "Fortune 500"],
      size: "large" // Takes up 2 columns
    },
    {
      id: 2,
      title: "Commercial Solar Enterprise: AI-Powered Energy Consumption Analysis Increases Conversions 4x",
      image: "https://i.ibb.co/X2dGf32/image.png",
      tags: ["Solar Energy", "Lead Generation", "B2B Sales"],
      size: "medium"
    },
    {
      id: 3,
      title: "Healthcare Network: AI Operations Streamlining Reduces Patient Processing Time by 60%",
      image: "https://i.ibb.co/jGMmCns/image.png",
      tags: ["Healthcare", "Operations", "Private Transition"],
      size: "medium"
    },
    {
      id: 4,
      title: "Enterprise ERP Solutions: AI-Driven Buying Signals Increase Enterprise Conversion by 250%",
      image: "https://i.ibb.co/P9Nrvj4/image.png",
      tags: ["ERP", "Buying Signals", "Enterprise Sales"],
      size: "large"
    },
    {
      id: 5,
      title: "Website Design Agency: AI-Powered Website Generation Reduces Delivery Time by 80%",
      image: "https://i.ibb.co/yQzC6cZ/image.png",
      tags: ["Web Design", "AI Generation", "Process Automation"],
      size: "medium"
    },
    {
      id: 6,
      title: "Private Equity Firm: AI Due Diligence System Accelerates Deal Flow by 300%",
      image: "https://i.ibb.co/8DqQcTj/image.png",
      tags: ["Private Equity", "Due Diligence", "Deal Flow"],
      size: "medium"
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

  return (
    <section className="w-full px-lg py-2xl bg-white">
      <div className="max-w-1200 mx-auto">
        <div className="text-left mb-xl">
          <h2 className="font-inter text-4xl lg:text-5xl font-bold text-gray-900 mb-md">
            Proven AI Transformations
          </h2>
          <p className="text-xl text-gray-600">
            Real businesses, real results. See how we've revolutionized operations across industries.
          </p>
        </div>
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
                  <h3 className="font-inter text-xl font-semibold text-gray-900 mb-sm group-hover:text-accent-dark transition-colors leading-tight">
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
    </section>
  );
};

export default CaseStudiesPreview;