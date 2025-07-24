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
  detailedSolution: string;
  implementationSteps: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

const CaseStudyPage = () => {
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get case study ID from URL
    const pathParts = window.location.pathname.split('/');
    const id = parseInt(pathParts[pathParts.length - 1]);
    
    // Detailed case study data
    const caseStudies: CaseStudy[] = [
      {
        id: 1,
        title: "Large Supermarket Chain: AI System Cuts Negotiation Costs by 35%",
        client: "Major European Supermarket Chain",
        industry: "Retail & Supply Chain",
        challenge: "A large supermarket chain was losing money on supplier negotiations. Their manual process was slow and they couldn't track market prices well. This led to paying too much and missing good deals.",
        solution: "We built an AI system that watches market trends and supplier patterns. It helps their team know when to negotiate and what prices to expect.",
        detailedSolution: "Our solution included: (1) AI system that tracks real-time prices and seasonal patterns, (2) Smart suggestions for when and how to negotiate, (3) Automatic contract review, (4) Simple dashboards for the procurement team, (5) Easy connection to their existing systems.",
        implementationSteps: [
          "Looked at their current negotiation process and supplier relationships",
          "Set up data collection from suppliers and market sources", 
          "Built AI models using 5+ years of their negotiation history",
          "Added real-time alerts for the procurement team",
          "Trained staff on the new AI tools",
          "Set up ongoing improvements based on results"
        ],
        results: [
          "35% reduction in procurement costs in the first year",
          "60% better negotiation timing and accuracy", 
          "45% faster contract processing",
          "€18M saved annually across all suppliers",
          "98% of procurement team actively uses the system"
        ],
        metrics: [
          { label: "Cost Reduction", value: "35%", description: "Annual procurement savings" },
          { label: "Processing Speed", value: "45%", description: "Faster negotiations" },
          { label: "Annual Savings", value: "€18M", description: "Total money saved" },
          { label: "Accuracy", value: "60%", description: "Better negotiation results" }
        ],
        image: "/images/Growth/pexels-asphotograpy-1002703.jpg",
        tags: ["Negotiation Management", "Cost Reduction", "Large Business", "Supply Chain"]
      },
      {
        id: 2,
        title: "Commercial Solar Enterprise: AI-Powered Energy Consumption Analysis Increases Conversions 4x",
        client: "Leading Commercial Solar Solutions Provider",
        industry: "Renewable Energy & B2B Sales",
        challenge: "A major commercial solar company was struggling to identify the most valuable pain points for potential clients. Traditional sales approaches weren't uncovering the critical energy consumption inefficiencies that would drive purchasing decisions, resulting in low conversion rates and lengthy sales cycles.",
        solution: "We created an AI system that analyzes commercial facilities' energy consumption patterns to identify the most valuable pain points that competitors couldn't find, enabling hyper-personalized outreach strategies.",
        detailedSolution: "Our solution combined: (1) Advanced energy consumption analysis using satellite imagery, utility data, and building characteristics, (2) AI-powered pain point identification that discovers hidden energy inefficiencies, (3) Personalized ROI calculators for each prospect based on their specific energy profile, (4) Automated outreach sequences with custom energy audit reports, (5) Predictive lead scoring based on energy saving potential.",
        implementationSteps: [
          "Analyzed 10,000+ commercial facilities to identify energy consumption patterns",
          "Built proprietary AI models for energy inefficiency detection using multiple data sources",
          "Developed automated energy audit report generation system",
          "Created personalized outreach templates based on specific pain points discovered",
          "Integrated with CRM and sales automation tools for seamless workflow",
          "Trained sales team on leveraging AI-generated insights for consultative selling"
        ],
        results: [
          "400% increase in conversion rates from outreach campaigns",
          "65% reduction in sales cycle length",
          "85% improvement in lead qualification accuracy",
          "250% increase in average deal size",
          "$12M additional revenue in first 18 months"
        ],
        metrics: [
          { label: "Conversion Rate", value: "4x", description: "Increase in sales conversions" },
          { label: "Sales Cycle", value: "65%", description: "Reduction in time to close" },
          { label: "Deal Size", value: "250%", description: "Average contract value increase" },
          { label: "Revenue Impact", value: "$12M", description: "Additional revenue generated" }
        ],
                  image: "/images/Growth/pexels-airin-party-252379-767240.jpg",
          tags: ["Solar Energy", "Lead Generation", "B2B Sales", "Energy Analysis"]
      },
      {
        id: 3,
        title: "Healthcare Network: AI Operations Streamlining Reduces Patient Processing Time by 60%",
        client: "Regional Healthcare Network",
        industry: "Healthcare & Medical Services",
        challenge: "A healthcare network was transitioning from government work to private practice while struggling with inefficient internal operations. Manual patient processing, scheduling conflicts, and poor resource allocation were creating bottlenecks and reducing patient satisfaction during their critical transition period.",
        solution: "We developed a comprehensive AI-powered operations system that streamlined patient care workflows, optimized resource allocation, and automated administrative processes while building a new website to support their private practice transition.",
        detailedSolution: "Our integrated approach included: (1) AI-powered patient scheduling and resource optimization system, (2) Automated administrative workflow management, (3) Predictive staffing and capacity planning, (4) Modern website with patient portal and online booking capabilities, (5) AI-driven patient triage and care coordination, (6) Performance analytics dashboard for continuous operational improvement.",
        implementationSteps: [
          "Conducted comprehensive operational audit of existing healthcare workflows",
          "Designed and built modern, mobile-responsive website with patient portal integration",
          "Implemented AI scheduling system with conflict detection and resource optimization",
          "Deployed automated patient intake and triage processes",
          "Created staff training programs for new digital workflows and systems",
          "Established KPI monitoring and continuous improvement processes"
        ],
        results: [
          "60% reduction in patient processing time",
          "45% improvement in appointment scheduling efficiency",
          "80% reduction in administrative overhead",
          "35% increase in patient satisfaction scores",
          "50% reduction in appointment no-shows through automated reminders"
        ],
        metrics: [
          { label: "Processing Time", value: "60%", description: "Faster patient handling" },
          { label: "Scheduling Efficiency", value: "45%", description: "Better appointment management" },
          { label: "Admin Overhead", value: "80%", description: "Reduced manual work" },
          { label: "Patient Satisfaction", value: "35%", description: "Improved patient experience" }
        ],
                  image: "/images/Growth/pexels-gochrisgoxyz-1643409.jpg",
          tags: ["Healthcare", "Operations", "Private Transition", "Patient Experience"]
      },
      {
        id: 4,
        title: "Enterprise ERP Solutions: AI-Driven Buying Signals Increase Enterprise Conversion by 250%",
        client: "U.S.-Based Enterprise ERP Solutions Provider",
        industry: "Enterprise Software & B2B Technology",
        challenge: "A leading ERP solutions provider was struggling to identify qualified enterprise prospects and demonstrate clear value propositions. Without detailed buying signals and cost-benefit analysis, their sales team couldn't effectively engage with high-value enterprise clients, resulting in low conversion rates and long sales cycles.",
        solution: "We built an AI system that identifies detailed buying signals, analyzes tech stacks, and automatically calculates exact cost savings and migration impacts, enabling pre-qualified outreach with compelling value propositions.",
        detailedSolution: "Our comprehensive solution featured: (1) AI-powered tech stack analysis and compatibility assessment, (2) Automated buying signal detection from multiple data sources, (3) ROI and cost savings calculators specific to each prospect's current setup, (4) Migration impact analysis and timeline predictions, (5) Personalized business case generation for each enterprise prospect, (6) Integration with CRM for seamless sales workflow automation.",
        implementationSteps: [
          "Analyzed 50,000+ enterprise prospects to identify optimal buying signal patterns",
          "Built proprietary tech stack analysis engine using multiple data sources",
          "Developed automated cost-benefit analysis tools for different ERP scenarios",
          "Created personalized business case templates based on industry and company size",
          "Integrated with existing CRM and marketing automation platforms",
          "Trained sales team on leveraging AI-generated insights for enterprise sales"
        ],
        results: [
          "250% increase in enterprise conversion rates",
          "70% improvement in reply rates to outreach campaigns",
          "55% reduction in sales cycle length",
          "180% increase in average contract value",
          "$25M additional pipeline generated in first year"
        ],
        metrics: [
          { label: "Conversion Rate", value: "250%", description: "Enterprise sales improvement" },
          { label: "Reply Rate", value: "70%", description: "Better outreach engagement" },
          { label: "Sales Cycle", value: "55%", description: "Faster deal closure" },
          { label: "Pipeline Value", value: "$25M", description: "Additional qualified pipeline" }
        ],
                  image: "/images/Growth/pexels-ian-panelo-3571551.jpg",
          tags: ["ERP", "Buying Signals", "Enterprise Sales", "B2B Technology"]
      },
      {
        id: 5,
        title: "Website Design Agency: AI-Powered Website Generation Reduces Delivery Time by 80%",
        client: "Premium Website Design Agency",
        industry: "Digital Agency & Web Development",
        challenge: "A successful website design agency was struggling with lengthy delivery times for lower-ticket clients while maintaining their high-quality standards. Manual design processes, time-intensive client consultations, and custom development were creating bottlenecks that limited their ability to serve smaller clients profitably.",
        solution: "We developed an AI-powered website generation system with natural language interface that maintains their quality standards while dramatically reducing delivery times for lower-ticket clients through intelligent automation and inspiration sourcing.",
        detailedSolution: "Our innovative solution included: (1) AI-powered design generation that maintains agency quality standards, (2) Natural language chat interface for client requirements gathering, (3) Automated inspiration sourcing from top websites and design trends, (4) Intelligent template customization based on industry and client preferences, (5) Streamlined approval and revision workflows, (6) Quality assurance automation to ensure brand consistency.",
        implementationSteps: [
          "Analyzed 500+ high-quality websites to train AI design generation models",
          "Built natural language processing system for client requirement interpretation",
          "Developed automated inspiration sourcing and design adaptation algorithms",
          "Created streamlined client onboarding and approval workflows",
          "Implemented quality assurance checks and brand consistency validation",
          "Trained team on new AI-assisted design processes and client management"
        ],
        results: [
          "80% reduction in website delivery time",
          "400% increase in lower-ticket client capacity",
          "60% improvement in client satisfaction scores",
          "200% increase in profit margins on smaller projects",
          "90% reduction in revision cycles through better initial designs"
        ],
        metrics: [
          { label: "Delivery Time", value: "80%", description: "Faster project completion" },
          { label: "Client Capacity", value: "400%", description: "More clients served" },
          { label: "Profit Margin", value: "200%", description: "Better project profitability" },
          { label: "Client Satisfaction", value: "60%", description: "Improved client experience" }
        ],
                  image: "/images/Growth/pexels-lauripoldre-30894193.jpg",
          tags: ["Web Design", "AI Generation", "Process Automation", "Digital Agency"]
      },
      {
        id: 6,
        title: "Private Equity Firm: AI Due Diligence System Accelerates Deal Flow by 300%",
        client: "Leading Private Equity Investment Firm",
        industry: "Private Equity & Investment Management",
        challenge: "A prominent private equity firm was facing significant bottlenecks in their deal sourcing and due diligence processes. Manual screening of potential acquisition targets, lengthy pre-qualification procedures, and inefficient outreach strategies were limiting their ability to identify and close on high-value opportunities in competitive markets.",
        solution: "We developed a comprehensive AI-powered due diligence and deal sourcing system that automates company screening, pre-qualification workflows, and outreach strategies using vast amounts of publicly available data.",
        detailedSolution: "Our sophisticated solution integrated: (1) AI-powered data aggregation engine that processes thousands of public data sources including financial filings, news, patents, and industry reports, (2) Automated company screening and scoring system based on investment criteria, (3) Intelligent pre-qualification workflows that assess acquisition readiness and fit, (4) Advanced outreach automation with personalized messaging based on company-specific insights, (5) Real-time market intelligence and competitive analysis, (6) Predictive modeling for deal success probability.",
        implementationSteps: [
          "Conducted comprehensive analysis of existing deal sourcing and due diligence workflows",
          "Built proprietary data aggregation system accessing 500+ public data sources",
          "Developed AI scoring algorithms trained on historical successful deals and market patterns",
          "Created automated pre-qualification frameworks tailored to firm's investment thesis",
          "Implemented intelligent outreach systems with personalized messaging capabilities",
          "Trained investment team on new AI-assisted deal sourcing and evaluation processes"
        ],
        results: [
          "300% acceleration in deal flow identification and initial screening",
          "75% reduction in time spent on manual due diligence research",
          "200% improvement in outreach response rates from target companies",
          "150% increase in qualified deal opportunities in pipeline",
          "65% reduction in time from initial contact to letter of intent"
        ],
        metrics: [
          { label: "Deal Flow", value: "300%", description: "Faster deal identification" },
          { label: "Due Diligence", value: "75%", description: "Less manual research time" },
          { label: "Response Rate", value: "200%", description: "Better outreach results" },
          { label: "Pipeline Quality", value: "150%", description: "More qualified opportunities" }
        ],
                  image: "/images/Growth/pexels-minan1398-1650627.jpg",
          tags: ["Private Equity", "Due Diligence", "Deal Flow", "Investment Management"]
      }
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
            onClick={() => {
              window.history.pushState({}, '', '/');
              window.location.reload();
            }}
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
          <div className="flex items-center">
            <img 
              src="/images/Black Imperium Logo.png" 
              alt="Imperium Growth Logo" 
              className="h-16 md:h-20 cursor-pointer"
              onClick={() => {
                window.history.pushState({}, '', '/');
                window.location.reload();
              }}
            />
          </div>
          <button 
            onClick={() => {
              window.history.pushState({}, '', '/');
              window.location.reload();
            }}
            className="px-lg py-sm bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
          >
            Back to Case Studies
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
            <h1 className="neuton-regular text-4xl lg:text-5xl text-gray-900 mb-lg leading-tight">
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
            {/* Challenge */}
            <div>
              <h2 className="neuton-regular text-2xl text-gray-900 mb-lg">The Challenge</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
            </div>

            {/* Solution Overview */}
            <div>
              <h2 className="neuton-regular text-2xl text-gray-900 mb-lg">Our Solution</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-lg">{caseStudy.solution}</p>
              <p className="text-base text-gray-600 leading-relaxed">{caseStudy.detailedSolution}</p>
            </div>

            {/* Implementation Steps */}
            <div>
              <h2 className="neuton-regular text-2xl text-gray-900 mb-lg">Implementation Process</h2>
              <div className="space-y-md">
                {caseStudy.implementationSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-accent text-gray-900 rounded-full flex items-center justify-center font-bold text-sm mr-md flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div>
              <h2 className="neuton-regular text-2xl text-gray-900 mb-lg">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-lg mb-lg">
                {caseStudy.metrics.map((metric, index) => (
                  <div key={index} className="text-center bg-gray-50 rounded-lg p-lg">
                    <div className="text-3xl font-bold text-accent-dark mb-sm">{metric.value}</div>
                    <div className="text-sm font-semibold text-gray-900 mb-xs">{metric.label}</div>
                    <div className="text-xs text-gray-600">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results Achieved */}
            <div>
              <h2 className="neuton-regular text-2xl text-gray-900 mb-lg">Results Achieved</h2>
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

          {/* Back to Case Studies Button */}
          <div className="mt-2xl text-center">
            <button 
              onClick={() => window.location.href = '/'}
              className="inline-flex items-center px-lg py-md bg-gray-900 text-white hover:bg-gray-800 transition-colors font-medium rounded-lg"
            >
              <svg className="w-5 h-5 mr-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Case Studies
            </button>
          </div>

          {/* CTA Section */}
          <div className="mt-2xl text-center bg-gray-50 rounded-xl p-xl">
            <h2 className="neuton-regular text-2xl text-gray-900 mb-md">
              Ready for Your AI Transformation?
            </h2>
            <p className="text-lg text-gray-600 mb-lg">
              Let's discuss how we can deliver similar results for your business.
            </p>
            <button className="inline-flex items-center px-xl py-lg bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                              <img
                  src="/images/Alex.jpeg"
                  alt="Alex Kaymakanov" 
                className="w-10 h-10 rounded-full mr-md object-cover"
              />
              <div className="w-2 h-2 bg-green-500 rounded-full mr-sm animate-pulse"></div>
              Schedule a Consultation
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudyPage; 