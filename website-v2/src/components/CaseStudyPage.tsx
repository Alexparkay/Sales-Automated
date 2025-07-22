import { useEffect, useState } from 'react';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  tags: string[];
}

const CaseStudyPage = () => {
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get case study ID from URL
    const pathParts = window.location.pathname.split('/');
    const id = parseInt(pathParts[pathParts.length - 1]);
    
    // Mock case study data (in a real app, this would come from an API)
    const caseStudies: CaseStudy[] = [
      {
        id: 1,
        title: "Fortune 500 Manufacturing: 40% Cost Reduction Through AI Process Automation",
        client: "Global Manufacturing Corporation",
        industry: "Manufacturing",
        challenge: "Manual quality control processes were causing production delays and inconsistent product quality, resulting in millions in losses annually.",
        solution: "We implemented computer vision AI systems for real-time quality control, predictive maintenance algorithms, and automated workflow optimization.",
        results: [
          "40% reduction in production costs",
          "60% decrease in quality control time",
          "95% improvement in defect detection accuracy",
          "$12M annual savings achieved"
        ],
        image: "https://i.ibb.co/6rW8B9x/image.png",
        tags: ["Process Automation", "Cost Reduction", "Computer Vision"]
      },
      {
        id: 2,
        title: "FinTech Startup: AI-Powered Customer Acquisition Increased Conversions by 300%",
        client: "NextGen Financial Services",
        industry: "Financial Technology",
        challenge: "Low conversion rates and high customer acquisition costs were limiting growth potential in a competitive market.",
        solution: "Developed intelligent lead scoring, personalized recommendation engines, and automated nurture campaigns using machine learning.",
        results: [
          "300% increase in conversion rates",
          "50% reduction in customer acquisition cost",
          "85% improvement in lead quality",
          "2x faster sales cycle completion"
        ],
        image: "https://i.ibb.co/X2dGf32/image.png",
        tags: ["Customer Acquisition", "FinTech", "Machine Learning"]
      },
      // Add more case studies as needed...
    ];

    const foundCaseStudy = caseStudies.find(cs => cs.id === id);
    setCaseStudy(foundCaseStudy || null);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <button 
            onClick={() => window.history.back()}
            className="px-lg py-md bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full px-lg py-md bg-white border-b border-gray-200">
        <div className="max-w-1200 mx-auto flex items-center justify-between">
          <img src="/logo.png" alt="Imperium Growth Logo" className="h-8" />
          <button 
            onClick={() => window.history.back()}
            className="px-lg py-sm bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </header>

      {/* Case Study Content */}
      <main className="w-full px-lg py-2xl">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-2xl">
            <div className="flex flex-wrap gap-xs mb-lg">
              {caseStudy.tags.map((tag, index) => (
                <span key={index} className="px-md py-xs bg-accent text-gray-900 text-sm rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-inter text-4xl lg:text-5xl font-bold text-gray-900 mb-lg leading-tight">
              {caseStudy.title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xl">
              <div>
                <h3 className="font-semibold text-gray-900 mb-sm">Client</h3>
                <p className="text-gray-600">{caseStudy.client}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-sm">Industry</h3>
                <p className="text-gray-600">{caseStudy.industry}</p>
              </div>
            </div>
            <img 
              src={caseStudy.image} 
              alt={caseStudy.title}
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Content Sections */}
          <div className="space-y-2xl">
            <div>
              <h2 className="font-inter text-2xl font-bold text-gray-900 mb-lg">The Challenge</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
            </div>

            <div>
              <h2 className="font-inter text-2xl font-bold text-gray-900 mb-lg">Our Solution</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{caseStudy.solution}</p>
            </div>

            <div>
              <h2 className="font-inter text-2xl font-bold text-gray-900 mb-lg">Results Achieved</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-accent rounded-full mr-md"></div>
                      <p className="text-lg font-medium text-gray-900">{result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-2xl text-center bg-gray-50 rounded-xl p-xl">
            <h2 className="font-inter text-2xl font-bold text-gray-900 mb-md">
              Ready for Your AI Transformation?
            </h2>
            <p className="text-lg text-gray-600 mb-lg">
              Let's discuss how we can deliver similar results for your business.
            </p>
            <button className="px-xl py-lg bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudyPage; 