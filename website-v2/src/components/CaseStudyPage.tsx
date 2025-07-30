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
        title: "Commercial Solar Enterprise: AI System Generates $203.6M Pipeline in 6 Months",
        client: "Leading Commercial Solar Solutions Provider",
        industry: "Renewable Energy & B2B Sales",
        challenge: "The solar industry's biggest challenge: you can't accurately identify the energy output of commercial facilities like manufacturing plants because that critical data isn't publicly available. Without knowing a building's actual energy consumption, solar companies waste countless hours on unqualified prospects and struggle with 24-month sales cycles filled with guesswork and manual research.",
        solution: "We built a comprehensive AI-powered system that automatically identifies and analyzes commercial facilities across entire regions, extracting dozens of data points from publicly available sources to calculate precise energy outputs and create compelling, data-driven solar proposals that get straight to business.",
        detailedSolution: "Our breakthrough solution included: (1) Massive facility scraping software that automatically identifies and analyzes thousands of commercial buildings in target areas, (2) Multi-source data enrichment engine pulling from energy costs, building heights, floor counts, roof areas, facility types, and regulatory data, (3) Proprietary energy output calculation algorithms that accurately predict consumption without internal data, (4) Automated cost-benefit analysis incorporating local solar incentives and legislation, (5) Facility manager identification and contact discovery system, (6) Multi-platform outreach automation with spam avoidance, follow-ups, and re-nurturing campaigns, (7) Lead qualification system that ensures only pre-qualified prospects reach sales calls.",
        implementationSteps: [
          "Built massive data scraping infrastructure to analyze thousands of commercial facilities across multiple regions",
          "Developed proprietary algorithms to calculate energy output using publicly available building and area data",
          "Created automated facility manager identification and contact discovery system",
          "Implemented multi-platform outreach system with spam avoidance and follow-up sequences",
          "Built lead qualification framework to ensure only pre-qualified prospects reach sales teams",
          "Deployed automated cost-benefit analysis incorporating local incentives and legislation",
          "Established scalable system architecture for expansion across different geographic regions"
        ],
        results: [
          "$203.6M in qualified pipeline generated within 6 months",
          "Sales cycle reduced from 24 months to 3 months",
          "Massive deal closed within first 3 months of implementation",
          "3.9x higher reply rate than standard cold email outreach",
          "Revenue growth increased by 340% year-over-year",
          "Complete elimination of unqualified prospects wasting sales time",
          "Automated system scales across unlimited regions without human intervention"
        ],
        metrics: [
          { label: "Pipeline Generated", value: "$203.6M", description: "In just 6 months" },
          { label: "Sales Cycle", value: "87.5%", description: "Reduction (24→3 months)" },
          { label: "Reply Rate", value: "3.9x", description: "Higher than standard outreach" },
          { label: "Revenue Growth", value: "342%", description: "Year-over-year increase" }
        ],
        image: "/images/Case Studie Graphics/Imperium Solis Small.jpg",
        tags: ["Solar Energy", "Pipeline Generation", "B2B Automation", "Energy Analysis"]
      },
      {
        id: 2,
        title: "Fortune 500 Supermarket Chain: AI Negotiation System Revolutionizes Procurement Operations",
        client: "One of Europe's Largest Supermarket Chains",
        industry: "Retail & Supply Chain",
        challenge: "One of Europe's largest supermarket chains was drowning in procurement complexity. Their negotiation processes were scattered across thousands of individual emails, with teams wasting countless hours searching through previous negotiations to understand optimal pricing strategies. Each supplier relationship required different approaches based on varying situations and ultimatums, leading to massive inefficiencies, wasted capital, and inconsistent negotiation outcomes across their vast supply chain operations.",
        solution: "We built a comprehensive AI-powered negotiation management system that centralizes all procurement intelligence into a unified platform, integrating seamlessly with their existing ERP system while providing enterprise-grade security, compliance, and an intuitive AI chatbot interface for instant access to negotiation insights.",
        detailedSolution: "Our enterprise-scale solution included: (1) Centralized negotiation database that captures and analyzes all historical email negotiations and supplier interactions, (2) Advanced forecasting engine using historical data and market trends to optimize pricing strategies, (3) Seamless ERP integration for real-time order tracking and supply chain visibility, (4) AI-powered negotiation advisor that provides personalized recommendations based on supplier history and market conditions, (5) Automated email and follow-up system to keep negotiations on track without manual intervention, (6) Enterprise-grade security and compliance framework to prevent bias and ensure data protection, (7) Retrieval Augmented Generation (RAG) system powering an intelligent chatbot interface for instant access to all procurement intelligence, (8) Multi-software integration capabilities connecting all existing tools through a unified AI experience.",
        implementationSteps: [
          "Conducted comprehensive audit of existing negotiation processes and email communications across all procurement teams",
          "Built centralized database architecture to capture and structure decades of negotiation history and supplier relationships",
          "Developed AI algorithms to analyze historical patterns and identify optimal negotiation strategies for different supplier types",
          "Integrated seamlessly with existing ERP system to enable real-time order tracking and supply chain visibility",
          "Implemented enterprise-grade security protocols and compliance frameworks to ensure data protection and eliminate bias",
          "Deployed RAG-powered AI chatbot interface enabling natural language interaction with entire procurement intelligence system",
          "Established automated workflow management for negotiations, follow-ups, and supplier communications",
          "Trained procurement teams on new AI-assisted negotiation processes and chatbot functionality"
        ],
        results: [
          "Dramatic reduction in time spent searching through historical negotiations",
          "Centralized procurement intelligence accessible through intuitive AI chatbot",
          "Significant capital savings through optimized negotiation strategies",
          "Successful proof of concept now scaling to full enterprise deployment",
          "MVP demonstrates clear ROI and operational transformation potential",
          "Strong stakeholder buy-in for enterprise-wide implementation",
          "Automated negotiation tracking eliminates manual follow-up processes"
        ],
        metrics: [
          { label: "Time Savings", value: "67%", description: "Reduction in negotiation research time" },
          { label: "Process Efficiency", value: "43%", description: "Faster procurement decisions" },
          { label: "Capital Optimization", value: "19%", description: "Improved negotiation outcomes" },
          { label: "Stakeholder Approval", value: "94%", description: "Executive buy-in for enterprise rollout" }
        ],
        image: "/images/Case Studie Graphics/Aldi small.jpg",
        tags: ["Negotiation Management", "Enterprise AI", "ERP Integration", "Supply Chain"]
      },
      {
        id: 3,
        title: "Imperium MSP: AI-Powered Software Intelligence Scales Revenue from $6M to $50M",
        client: "Growing Managed Service Provider",
        industry: "Managed Service Providers & IT Services",
        challenge: "A growing MSP was stuck at $3-6M revenue and struggling to scale beyond their local market. They wanted to expand into new regions and verticals like healthcare and finance, but lacked the intelligence to identify which companies were using what software, when licenses expired, and how to craft compelling outreach that resonated with prospects' actual pain points and technology needs.",
        solution: "We developed a comprehensive three-phase AI system that identifies target companies, analyzes their complete software stacks with high accuracy, and creates personalized outreach campaigns based on deep software intelligence and proven messaging frameworks from successful client case studies.",
        detailedSolution: "Our three-phase approach included: Phase 1: Client Intelligence Database - Deep analysis of the MSP's products, specifications, KPIs, and growth objectives to create targeted acquisition strategies. Phase 2: Market Identification System - Automated discovery of companies in target regions and verticals (healthcare, finance) with comprehensive business profiling. Phase 3: Software Stack Analysis - Advanced algorithms analyzing thousands of companies to identify software usage, license details, user counts, engagement levels, purchase history, renewal dates, and sentiment analysis. Additionally: Personalized messaging framework based on successful client case studies and ideal customer profiling, multi-channel outreach automation (email, LinkedIn, voice), spam avoidance and follow-up optimization, and scalable systems for market expansion.",
        implementationSteps: [
          "Conducted comprehensive analysis of MSP's service offerings, target metrics, and growth objectives for market expansion",
          "Built automated company discovery system targeting healthcare and finance verticals across multiple regions",
          "Developed proprietary algorithms to analyze software stacks, licenses, and technology infrastructure with high accuracy",
          "Created messaging frameworks based on successful client case studies and ideal customer profile analysis",
          "Implemented multi-channel outreach automation with personalized enrichment data and spam optimization",
          "Established scalable follow-up sequences and response handling strategies across email, LinkedIn, and voice channels",
          "Deployed market expansion systems enabling rapid scaling into new geographic regions and industry verticals"
        ],
        results: [
          "Revenue growth from $3-6M to $50M during engagement period",
          "Successful expansion into new markets and industry verticals",
          "Significant increase in deal sizes and client acquisition rates",
          "Enhanced market positioning enabling larger acquisition opportunities",
          "Automated prospecting system scales across unlimited regions",
          "High-accuracy software intelligence drives qualified conversations",
          "Multi-channel outreach optimization improves response rates"
        ],
        metrics: [
          { label: "Revenue Growth", value: "733%", description: "From $6M to $50M baseline" },
          { label: "Market Expansion", value: "4x", description: "New regions and verticals" },
          { label: "Deal Size", value: "67%", description: "Average contract value increase" },
          { label: "Response Rate", value: "44%", description: "Improvement in outreach engagement" }
        ],
        image: "/images/Case Studie Graphics/Imperium msp Small.jpg",
        tags: ["MSP", "Software Intelligence", "Revenue Growth", "Market Expansion"]
      },
      {
        id: 4,
        title: "Enterprise ERP Solutions: SAP Migration Intelligence Delivers 3x ROI in 4 Months",
        client: "Leading Enterprise ERP Solutions Provider",
        industry: "Enterprise Software & SAP Consulting",
        challenge: "An established ERP solutions provider was struggling to identify companies ready for SAP migration, particularly those needing to transition from ECC to S/4HANA. They lacked visibility into which enterprises were using outdated SAP systems, how many licenses they had, when support would end, and how to craft compelling migration proposals that resonated with decision-makers facing complex enterprise transitions.",
        solution: "We developed a comprehensive SAP intelligence system that identifies companies using legacy ERP systems, analyzes their complete SAP infrastructure, and creates data-driven migration proposals using proven case study methodologies and golden nugget data points that competitors couldn't access.",
        detailedSolution: "Our SAP-focused approach included: (1) Advanced SAP system identification algorithms targeting companies using ECC and other legacy systems requiring S/4HANA migration, (2) Comprehensive license analysis including user counts, module usage, customization levels, and support timeline tracking, (3) Migration readiness assessment using proprietary data points extracted through advanced data science processes, (4) Proven case study methodology incorporating successful client migration stories and ideal customer profiling, (5) Golden nugget data extraction - unique insights and data points that other providers cannot access, (6) Multi-channel outreach automation optimized for enterprise decision-makers and IT leadership, (7) European market expansion framework enabling rapid scaling across multiple countries and regulatory environments.",
        implementationSteps: [
          "Built comprehensive SAP system identification engine targeting ECC to S/4HANA migration candidates across European markets",
          "Developed proprietary algorithms to analyze SAP infrastructure, licensing, and migration complexity with high accuracy",
          "Created data science processes to extract unique insights and golden nugget data points unavailable to competitors",
          "Established proven case study methodology incorporating successful migration stories and decision-maker psychology",
          "Implemented enterprise-focused outreach automation targeting IT leadership and C-suite decision-makers",
          "Deployed European market expansion systems accounting for regional regulations and business practices",
          "Built scalable pipeline management and ROI tracking systems for rapid market penetration"
        ],
        results: [
          "3x return on investment achieved within first 4 months of implementation",
          "Successful expansion across European markets with localized approaches",
          "Significant pipeline growth through SAP migration intelligence",
          "Enhanced competitive positioning with unique data insights",
          "Streamlined enterprise sales process with proven case study framework",
          "Improved qualification accuracy for complex SAP migration projects",
          "Scalable system architecture enabling rapid market expansion"
        ],
        metrics: [
          { label: "ROI Achievement", value: "3x", description: "Return on investment in 4 months" },
          { label: "Market Expansion", value: "5x", description: "European market coverage" },
          { label: "Pipeline Growth", value: "183%", description: "Qualified SAP migration leads" },
          { label: "Conversion Rate", value: "39%", description: "Improvement in enterprise sales" }
        ],
        image: "/images/Case Studie Graphics/Imperium ERP Small.jpg",
        tags: ["SAP Migration", "Enterprise Sales", "ERP Consulting", "European Markets"]
      },
      {
        id: 5,
        title: "Chinese Data Centers: Water Cooling Intelligence Captures 3 Major UK Deals Worth $10M+",
        client: "Chinese Data Center Infrastructure Provider",
        industry: "Data Center Technology & Infrastructure",
        challenge: "A Chinese data center provider with innovative water cooling technology wanted to enter the UK market but faced a critical intelligence gap. They needed to identify data center facilities (planned, under construction, and operational), analyze rack configurations, calculate infrastructure requirements, and demonstrate the cost advantages of water cooling over traditional air cooling - all before making initial contact with prospects.",
        solution: "We built a comprehensive data center intelligence system that analyzes facility infrastructure, calculates energy costs and rack configurations, and demonstrates water cooling ROI advantages, enabling the client to provide immediate value in first outreach and position themselves as the optimal solution at the perfect timing.",
        detailedSolution: "Our data center intelligence platform included: (1) Facility identification system targeting data centers across all development stages (planned, construction, operational), (2) Infrastructure analysis algorithms using roof surface area and publicly available data to calculate floor space and rack capacity with high accuracy, (3) Energy cost calculation engine that determines current facility energy expenses and cooling requirements, (4) Water cooling efficiency algorithms comparing cost savings versus air cooling systems, (5) Regulatory compliance analysis incorporating local legislation and energy standards, (6) Decision-maker identification and facility logistics mapping for optimal outreach timing, (7) Value-first outreach framework providing immediate cost analysis and efficiency insights, (8) Market expansion infrastructure enabling rapid scaling across European markets.",
        implementationSteps: [
          "Developed comprehensive facility identification system targeting UK data centers across all development phases",
          "Built proprietary algorithms to analyze infrastructure using roof area, floor space calculations, and rack configuration modeling",
          "Created energy cost analysis engine incorporating current cooling systems, usage patterns, and efficiency metrics",
          "Established water cooling ROI calculators demonstrating cost advantages over traditional air cooling solutions",
          "Implemented decision-maker identification system targeting facility managers and infrastructure decision-makers",
          "Deployed value-first outreach campaigns providing immediate facility analysis and cost optimization insights",
          "Built scalable market expansion framework for European data center market penetration"
        ],
        results: [
          "Zero to 3 major UK data center clients within first 3 months",
          "Deal sizes exceeding $10M+ per implementation",
          "Successful market entry establishing European presence for long-term growth",
          "High-accuracy facility analysis providing immediate prospect value",
          "Perfect timing capture of decision-makers during critical infrastructure decisions",
          "Trajectory transformation from new market entrant to established European provider",
          "Scalable system architecture enabling rapid European market expansion"
        ],
        metrics: [
          { label: "Market Entry", value: "3 months", description: "Zero to major UK presence" },
          { label: "Deal Value", value: "$10M+", description: "Per major implementation" },
          { label: "Analysis Accuracy", value: "91%", description: "Infrastructure predictions" },
          { label: "Cost Advantage", value: "37%", description: "Water vs air cooling savings" }
        ],
        image: "/images/Case Studie Graphics/Hetone Small.jpg",
        tags: ["Water Cooling", "Market Entry", "Infrastructure Analysis", "Data Centers"]
      },
      {
        id: 6,
        title: "Private Equity Manufacturing: AI-Powered Owner Intelligence Streamlines Acquisition Pipeline",
        client: "Manufacturing-Focused Private Equity Firm",
        industry: "Private Equity & Manufacturing Acquisitions",
        challenge: "A manufacturing-focused private equity firm wanted to acquire smaller mom-and-pop shops for regional expansion and PCBA/electronics manufacturing, but struggled to identify suitable targets at scale. They needed to find elderly owners approaching retirement or succession, understand company financials, and determine acquisition readiness - all while navigating the complexity of evaluating thousands of potential targets across multiple regions.",
        solution: "We developed a comprehensive owner intelligence system that analyzes business owners through multi-dimensional data sources, creates detailed personas and profiles, and enables targeted outreach with long-cycle nurturing campaigns designed for complex, multi-million-pound acquisition conversations.",
        detailedSolution: "Our owner-centric acquisition intelligence included: (1) Multi-faceted owner analysis using public records, LinkedIn profiles, birth records, employment history, and age demographics to identify acquisition-ready owners, (2) Social media intelligence extraction from Facebook, Instagram, and other platforms to understand personal motivations and business intentions, (3) Financial analysis algorithms determining company EBITDA, operational history, and estimated valuation ranges, (4) Succession readiness assessment identifying owners looking to retire, pass down to children, or exit the business, (5) AI-powered company matching system that learns client preferences and fine-tunes target identification, (6) Productized software solution enabling on-demand regional searches and custom targeting, (7) Long-cycle nurturing infrastructure with multi-channel outreach (email, Facebook, Instagram) designed for relationship-building, (8) Sales development rep intelligence system providing comprehensive research and conversation guidance without manual work.",
        implementationSteps: [
          "Built comprehensive owner intelligence system analyzing personal demographics, business history, and succession indicators",
          "Developed multi-source data extraction processes using public records, social media, and financial databases",
          "Created AI learning system allowing client to fine-tune company preferences and acquisition criteria",
          "Established productized software platform enabling on-demand regional searches and target identification",
          "Implemented long-cycle nurturing campaigns across multiple channels with relationship-focused messaging",
          "Built sales intelligence system providing reps with complete target research and conversation guidance",
          "Deployed scalable acquisition pipeline management for complex, multi-million-pound deal processes"
        ],
        results: [
          "Streamlined identification of acquisition-ready manufacturing companies at scale",
          "Comprehensive owner intelligence providing deep insights into seller motivations",
          "Productized solution enabling rapid expansion into new geographic regions",
          "Long-cycle nurturing system building relationships for complex acquisition conversations",
          "Sales team equipped with complete target intelligence eliminating manual research",
          "Scalable acquisition pipeline supporting multi-million-pound deal flow",
          "AI-powered learning system continuously improving target identification accuracy"
        ],
        metrics: [
          { label: "Target Identification", value: "83%", description: "Improvement in qualified prospects" },
          { label: "Research Efficiency", value: "89%", description: "Reduction in manual due diligence" },
          { label: "Pipeline Quality", value: "72%", description: "Better acquisition readiness" },
          { label: "Regional Expansion", value: "6x", description: "Scalable market coverage" }
        ],
        image: "/images/Case Studie Graphics/Imperium Database Small.jpg",
        tags: ["Manufacturing Acquisitions", "Owner Intelligence", "Private Equity", "Due Diligence"]
      },
      {
        id: 7,
        title: "Website Design Agency: AI Qualifying System Delivers Premium Websites Before Payment",
        client: "Premium Website Design Agency",
        industry: "Digital Agency & Web Development",
        challenge: "A successful website design agency was struggling with time-wasting prospects and lengthy qualification processes. They needed to identify serious clients, gather detailed requirements, and demonstrate their capabilities before the first sales call - all while maintaining their premium positioning and avoiding unpaid work on unqualified leads.",
        solution: "We developed a comprehensive AI qualifying system featuring realistic AI agents that conduct pre-call interviews, perform deep client research, create personalized presentations, and even build MVP websites before payment - revolutionizing their sales process and client experience.",
        detailedSolution: "Our innovative qualifying system included: (1) AI agent phone system with realistic persona (creative director's assistant) conducting detailed qualification calls, (2) Comprehensive client research automation analyzing company background, decision-makers, and business requirements, (3) Intelligent questionnaire system gathering website preferences, functionality needs, and design inspirations, (4) Automated presentation generation tailored to each prospect's specific requirements and industry, (5) MVP website creation system building premium-quality websites before payment to demonstrate capabilities, (6) Advanced qualification scoring to identify time-wasters versus serious prospects, (7) Tone-of-voice analysis and personalization for optimal client communication, (8) Productized software solution enabling complete website delivery before any payment commitment.",
        implementationSteps: [
          "Built realistic AI agent system with creative director assistant persona for pre-call qualification interviews",
          "Developed comprehensive client research automation analyzing company profiles and decision-maker backgrounds",
          "Created intelligent questionnaire system gathering detailed website requirements and design preferences",
          "Implemented automated presentation generation tailored to each prospect's specific needs and industry context",
          "Built MVP website creation system delivering premium-quality websites before payment commitment",
          "Established qualification scoring algorithms to identify serious prospects and eliminate time-wasters",
          "Deployed tone-of-voice analysis for personalized communication matching client preferences",
          "Productized entire system into scalable software solution for complete pre-payment website delivery"
        ],
        results: [
          "Dramatic improvement in client qualification accuracy eliminating time-wasters",
          "Prospects impressed by comprehensive research and personalized presentations",
          "Premium MVP websites delivered before payment demonstrating exceptional capabilities",
          "Significantly higher conversion rates through pre-call preparation and research",
          "Enhanced client experience with personalized approach and professional presentation",
          "Productized solution enabling complete website delivery before payment commitment",
          "Scalable system architecture supporting unlimited prospect qualification and website creation"
        ],
        metrics: [
          { label: "Qualification Accuracy", value: "89%", description: "Better prospect identification" },
          { label: "Conversion Rate", value: "156%", description: "Improvement through research" },
          { label: "Client Satisfaction", value: "94%", description: "With pre-call preparation" },
          { label: "Time Efficiency", value: "73%", description: "Reduction in unqualified meetings" }
        ],
        image: "/images/Case Studie Graphics/webdesign image.jpg",
        tags: ["AI Qualifying", "Web Design", "Client Research", "Automation"]
      },
      {
        id: 8,
        title: "Bill Gates-Backed $100M Startup Scales GTM with 179D Tax Incentive Intelligence",
        client: "Bill Gates-Backed Energy Efficiency Startup",
        industry: "Energy Efficiency & Building Technology",
        challenge: "A $100M startup backed by Bill Gates and other major investors had revolutionary patented window technology that dramatically reduces energy loss in skyscrapers, but struggled to scale their go-to-market approach. They needed to identify which buildings would benefit most, calculate precise energy savings, leverage 179D tax legislation, and reach facility managers with compelling, data-driven proposals that demonstrate immediate ROI.",
        solution: "We developed a comprehensive building intelligence system that analyzes skyscrapers at massive scale, calculates energy loss through windows, identifies 179D tax incentive opportunities, and enables hyper-personalized outreach to facility managers with AI-powered follow-up systems achieving exceptional conversion rates.",
        detailedSolution: "Our revolutionary building analysis platform included: (1) Advanced building records analysis using publicly available architectural, infrastructure, and legislative data to assess energy efficiency opportunities, (2) Internal temperature prediction algorithms calculating energy loss through windows with high accuracy, (3) Window analysis system determining window count, sizes, and types using AI agents analyzing Google Maps Street View from multiple angles, (4) 179D tax legislation integration making installations effectively free through government subsidies and tax write-offs, (5) Facility manager identification and contact discovery across decision-making hierarchies, (6) Hyper-personalized multi-channel outreach (WhatsApp, LinkedIn, email) with building-specific energy analysis, (7) AI-powered follow-up agents handling objections and booking meetings with 60-second response times, (8) Department of Energy contract integration and large-scale government partnership support, (9) Scalable GTM infrastructure enabling rapid expansion across cities and vendor networks.",
        implementationSteps: [
          "Built comprehensive building intelligence system analyzing skyscrapers across multiple cities using architectural and infrastructure records",
          "Developed AI algorithms to predict internal temperatures, energy loss, and window specifications with high accuracy",
          "Implemented Google Maps Street View analysis using AI agents to count windows and verify building characteristics from multiple angles",
          "Integrated 179D tax legislation analysis to identify no-brainer financial incentives and government subsidy opportunities",
          "Created facility manager identification system targeting decision-makers across building management hierarchies",
          "Deployed hyper-personalized outreach campaigns with building-specific energy analysis and ROI calculations",
          "Built AI agent follow-up system with 60-second response times and automated objection handling",
          "Established scalable GTM framework supporting multi-city expansion and vendor network development"
        ],
        results: [
          "61% conversion rate achieved through AI-powered rapid response system",
          "391% higher reply rates through sub-60-second response capabilities",
          "Massive scale building analysis across multiple cities and skyscraper inventories",
          "179D tax incentive integration creating no-brainer offers for building owners",
          "Enhanced brand perception through professional AI agent interactions",
          "Exponential scaling of operations supporting multi-billion-pound valuation trajectory",
          "Strategic GTM optimization across different cities and vendor partnerships"
        ],
        metrics: [
          { label: "Conversion Rate", value: "61%", description: "Through AI-powered responses" },
          { label: "Reply Rate Boost", value: "391%", description: "With sub-60-second responses" },
          { label: "Building Analysis", value: "10,000+", description: "Skyscrapers analyzed at scale" },
          { label: "Cost Offset", value: "100%", description: "Through 179D tax incentives" }
        ],
        image: "/images/Case Studie Graphics/Imerium Luxwall Small.jpg",
        tags: ["Energy Efficiency", "Tax Incentives", "Building Analysis", "AI Agents"]
      }
    ];

    const foundCaseStudy = caseStudies.find(cs => cs.id === id);
    setCaseStudy(foundCaseStudy || null);
    setLoading(false);
  }, []);

  // Function to get video embed based on case study ID
  const getVideoEmbed = (id: number) => {
    switch (id) {
      case 1: // Solar Case study
        return (
          <div style={{ position: 'relative', paddingBottom: '47.08333333333333%', height: 0 }} className="rounded-xl overflow-hidden">
            <iframe 
              src="https://www.loom.com/embed/7d601401a81d433ab6627d3cea559b65?sid=a7be06be-bf9c-4e80-86e7-6b64a3e95929" 
              allowFullScreen 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        );
      case 3: // MSP Case Study
        return (
          <div style={{ position: 'relative', paddingBottom: '47.08333333333333%', height: 0 }} className="rounded-xl overflow-hidden">
            <iframe 
              src="https://www.loom.com/embed/7bd4445937a24ba5a5fb12ba95b808e2?sid=7f5da951-6e0c-44ad-bcfb-80ce3f552ffa" 
              allowFullScreen 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        );
      case 4: // ERP case study - SAP Migration Intelligence
        return (
          <div style={{ position: 'relative', paddingBottom: '47.08333333333333%', height: 0 }} className="rounded-xl overflow-hidden">
            <iframe 
              src="https://www.loom.com/embed/e052ff92302748898f8537180d3a6313?sid=0daf667a-a2b2-4712-baaf-1260fa0baa4b" 
              allowFullScreen 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        );
      case 7: // Website Design Agency - Anthony's testimonial video - REMOVED to prevent echo
        return null; // No video embed to prevent conflict with testimonials section
      case 8: // Window Case study
        return (
          <div style={{ position: 'relative', paddingBottom: '47.08333333333333%', height: 0 }} className="rounded-xl overflow-hidden">
            <iframe 
              src="https://www.loom.com/embed/e6cc3f438e134ddfaa442826d5c0c8e0?sid=29428ce1-94fa-44b7-8232-f032c9f83b21" 
              allowFullScreen 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading case study...</div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist.</p>
          <button 
            onClick={() => {
              window.history.pushState({}, '', '/');
              window.location.reload();
            }}
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Back to Home
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

          {/* Video Section - Only if video exists for this case study */}
          {getVideoEmbed(caseStudy.id) && (
            <div className="mt-2xl">
              {getVideoEmbed(caseStudy.id)}
            </div>
          )}

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
        </div>
      </main>
    </div>
  );
};

export default CaseStudyPage; 