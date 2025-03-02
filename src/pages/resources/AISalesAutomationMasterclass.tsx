import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Share, Clock, Tag, ArrowLeft, CheckCircle, Youtube, Check } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AbstractShapes from '../../components/AbstractShapes';

const AISalesAutomationMasterclass: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCopiedNotification, setShowCopiedNotification] = useState(false);

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        setShowCopiedNotification(true);
        setTimeout(() => setShowCopiedNotification(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy URL: ', err);
      });
  };

  const resource = {
    id: 'ai-sales-automation-masterclass',
    title: 'AI-Powered Sales Automation Masterclass',
    date: 'January 10, 2025',
    category: 'Video Guide',
    description: 'Learn how to build an AI-driven outbound sales machine from scratch with step-by-step tutorials on automating lead generation & outreach.',
    content: `
In today's hyper-competitive market, traditional sales approaches are no longer enough. This comprehensive masterclass series takes you through the entire process of building an AI-powered sales machine that works 24/7 to generate qualified leads and convert them into customers.

## What You'll Learn

Our masterclass is divided into four modules, each focusing on a critical component of AI-driven sales automation:

### Module 1: Foundation - Building Your AI Sales Strategy
In this foundational module, we explore how to assess your current sales process and identify key opportunities for AI enhancement. You'll learn how to:

- Conduct a comprehensive sales process audit to identify bottlenecks and inefficiencies
- Map your ideal customer profile (ICP) for AI targeting precision
- Develop a data-driven sales strategy that leverages AI capabilities
- Set up the essential tech stack for automated outbound sales

### Module 2: Lead Generation & Qualification
The second module focuses on using AI to find and qualify the right prospects at scale:

- Configure AI tools to scrape and validate prospect data from multiple sources
- Implement scoring algorithms that prioritize leads based on likelihood to convert
- Create automated workflows that enrich lead data without manual intervention
- Build custom AI models that identify buying signals across digital channels

### Module 3: Outreach Automation & Personalization
In this module, we dive deep into creating personalized outreach campaigns at scale:

- Design multi-channel outreach sequences that adapt based on prospect behavior
- Implement AI-powered email personalization that goes beyond basic merge fields
- Create conversation frameworks for AI assistants to qualify leads through chat
- Develop automated follow-up systems that never let opportunities slip through the cracks

### Module 4: Conversion Optimization & Analytics
The final module focuses on optimizing your entire system for maximum conversion:

- Set up dashboards that provide real-time insights into your AI sales performance
- Implement A/B testing frameworks to continuously improve messaging and sequences
- Create feedback loops that help your AI systems learn and improve over time
- Develop integration points between your AI sales system and your core business processes

## Real-World Applications

Throughout the masterclass, we showcase real-world examples of companies that have successfully implemented these strategies, including:

- How a B2B SaaS company increased qualified meetings by 317% in 60 days
- How a professional services firm reduced their cost per acquisition by 68%
- How a tech startup scaled from 0 to $1M ARR with a team of just two salespeople

## Who This Is For

This masterclass is designed for:

- Sales leaders looking to scale their team's effectiveness without increasing headcount
- Founders and entrepreneurs who want to build scalable sales systems from day one
- Sales operations professionals responsible for optimizing sales processes
- Marketing teams looking to better integrate with sales through automation

Join us for this transformative journey into the future of sales, where AI doesn't replace human salespeople but instead supercharges their capabilities and results.
    `,
    readingTime: '15 min read',
    downloadLink: '#',
    youtubeVideoId: 'PEnlKhDo5F4',
    resources: [
      {
        title: 'AI Sales Workflow Template',
        description: 'A comprehensive template for mapping your entire AI-powered sales process',
        downloadUrl: '#'
      },
      {
        title: 'Cold Email Automation Scripts',
        description: 'Ready-to-use scripts for automating personalized cold email outreach',
        downloadUrl: '#'
      },
      {
        title: 'Sales Playbook with Follow-Up Sequences',
        description: 'Complete playbook with proven follow-up sequences for different prospect types',
        downloadUrl: '#'
      }
    ],
    tags: ['AI Sales', 'Automation', 'Lead Generation', 'Outreach', 'CRM Integration']
  };

  const relatedResources = [
    {
      id: 'ai-lead-generation-blueprint',
      title: 'The Ultimate AI-Driven Lead Generation Blueprint',
      date: 'February 2, 2025'
    },
    {
      id: 'ai-crm-integration-guide',
      title: 'How to Set Up AI-Driven Sales & CRM Integration',
      date: 'March 1, 2025'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Back Button */}
      <div className="fixed top-32 left-4 md:left-8 z-10">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/resources-hub')}
          className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 bg-slate-800/50 backdrop-blur-sm rounded-full border border-white/10 hover:bg-slate-700/50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Resources
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <AbstractShapes variant="hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm text-gray-400">{resource.date}</span>
              <span className="px-2 py-1 text-xs font-medium text-green-400 bg-green-400/10 rounded-full flex items-center">
                <Youtube className="w-4 h-4 mr-1" />
                {resource.category}
              </span>
              <span className="flex items-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                {resource.readingTime}
              </span>
            </div>
            // ... existing code ...
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AISalesAutomationMasterclass; 