import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Share, Clock, Tag, ArrowLeft, CheckCircle, Youtube, Database, Code, Check } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AbstractShapes from '../../components/AbstractShapes';

const AICRMIntegrationGuide: React.FC = () => {
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
    id: 'ai-crm-integration-guide',
    title: 'How to Set Up AI-Driven Sales & CRM Integration',
    date: 'March 1, 2025',
    category: 'Video Guide',
    description: 'Learn how to automate CRM workflows for sales efficiency with the exact tools to connect AI into HubSpot, Salesforce, or Pipedrive.',
    content: `
In today's competitive business landscape, the difference between high-performing sales teams and average ones often comes down to how effectively they leverage their CRM. This comprehensive guide will show you how to transform your CRM from a passive data repository into an active AI-powered sales acceleration system.

## The Problem with Traditional CRM Usage

Most organizations use their CRM as little more than a glorified spreadsheet:

- Sales reps spend hours manually entering data
- Critical information is often outdated or incomplete
- Follow-ups fall through the cracks
- Insights remain buried in data that nobody has time to analyze

The result? A system that costs more in time and effort than it delivers in value. But it doesn't have to be this way.

## The AI-Powered CRM Revolution

By integrating artificial intelligence into your CRM workflows, you can:

- Automate data entry and enrichment
- Ensure timely and personalized follow-ups
- Surface actionable insights from customer interactions
- Predict which deals are most likely to close
- Optimize sales processes based on what actually works

This guide will walk you through the exact steps to implement these capabilities, regardless of which CRM you're using.

## Step 1: Preparing Your CRM for AI Integration

Before adding AI capabilities, you need to ensure your CRM is properly configured:

### Data Standardization

AI systems require clean, consistent data to function effectively:

- Establish standardized field formats and naming conventions
- Implement validation rules to prevent bad data entry
- Create required fields for critical information
- Set up automated data cleansing processes

We demonstrate these configurations in HubSpot, Salesforce, and Pipedrive, with specific examples for each platform.

### API Access and Authentication

To connect AI tools to your CRM, you'll need proper API access:

- How to create API keys with appropriate permissions
- Setting up OAuth authentication for secure connections
- Establishing webhooks for real-time data synchronization
- Managing rate limits and API quotas

The video includes step-by-step walkthroughs of setting up these connections for each major CRM platform.

## Step 2: Implementing Core AI Capabilities

Once your CRM is prepared, you can begin adding AI functionality:

### Automated Data Capture and Enrichment

- Setting up email and calendar integration to automatically log activities
- Implementing conversation intelligence to capture call and meeting insights
- Configuring data enrichment tools to fill in missing prospect information
- Creating workflows that update contact records based on digital behavior

We demonstrate implementations using tools like Clearbit, ZoomInfo, Gong, and native CRM capabilities.

### Intelligent Lead Scoring and Routing

- Building custom lead scoring models based on your historical conversion data
- Setting up automated lead assignment based on rep expertise and capacity
- Implementing time-based escalation rules for unresponsive leads
- Creating territory management systems that optimize coverage

The guide includes templates for lead scoring models that you can adapt to your specific business.

### AI-Powered Follow-Up Automation

- Designing multi-channel follow-up sequences that adapt based on prospect engagement
- Implementing sentiment analysis to gauge prospect interest
- Creating automated meeting scheduling workflows
- Setting up intelligent reminders for manual follow-up when needed

We provide examples of effective follow-up sequences for different industries and sales motions.

### Sales Intelligence and Coaching

- Implementing conversation intelligence to analyze sales calls
- Setting up real-time coaching alerts for sales reps
- Creating dashboards that highlight winning behaviors
- Establishing automated training workflows for skill development

The video demonstrates how to configure these systems using tools like Gong, Chorus, and native CRM capabilities.

## Step 3: Advanced Integration Techniques

For organizations ready to take their AI integration to the next level:

### Custom AI Model Integration

- How to build and deploy custom machine learning models for your specific sales process
- Techniques for integrating GPT and other large language models into your CRM
- Methods for training AI on your historical sales data
- Approaches for continuous model improvement

We provide code examples and integration patterns for developers and technical teams.

### Multi-System Orchestration

- Strategies for connecting your CRM with marketing automation, customer service, and finance systems
- Techniques for maintaining data consistency across platforms
- Methods for creating cross-functional workflows
- Approaches for unified reporting and analytics

The guide includes architecture diagrams and integration patterns for common system combinations.

## Real-World Case Study: 70% Reduction in Sales Admin Time

Throughout the guide, we reference a detailed case study of how a B2B software company implemented these techniques:

- Their specific implementation challenges and how they overcame them
- The measurable results they achieved (70% reduction in admin time, 43% increase in win rate)
- The timeline and resources required for implementation
- Lessons learned and recommendations for similar organizations

## Implementation Roadmap

We conclude with a practical roadmap for implementing AI-powered CRM integration:

- Quick wins you can implement in days
- Medium-term projects that deliver significant value
- Long-term strategic initiatives for maximum impact
- Resource requirements and ROI calculations

Whether you're a sales operations professional, a CRM administrator, or a sales leader looking to drive efficiency, this guide provides everything you need to transform your CRM into a powerful AI-driven sales acceleration system.
    `,
    readingTime: '14 min read',
    downloadLink: '#',
    youtubeVideoId: 'PEnlKhDo5F4',
    resources: [
      {
        title: 'CRM Integration Checklist',
        description: 'A comprehensive checklist for integrating AI with your CRM system',
        downloadUrl: '#'
      },
      {
        title: 'Zapier & Make.com Automation Templates',
        description: 'Ready-to-use templates for automating common CRM workflows',
        downloadUrl: '#'
      }
    ],
    tags: ['CRM Integration', 'AI Automation', 'Sales Efficiency', 'HubSpot', 'Salesforce', 'Pipedrive']
  };

  const relatedResources = [
    {
      id: 'ai-sales-automation-masterclass',
      title: 'AI-Powered Sales Automation Masterclass',
      date: 'January 10, 2025'
    },
    {
      id: '100m-ai-sales-playbook',
      title: 'The $100M AI Sales Playbook',
      date: 'February 17, 2025'
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
            <h1 className="text-4xl font-bold text-white mb-6">
              {resource.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {resource.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={resource.downloadLink}
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 transition-colors shadow-md"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resources
              </a>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-300 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors shadow-md relative"
              >
                {showCopiedNotification ? (
                  <>
                    <Check className="w-5 h-5 mr-2 text-green-400" />
                    URL Copied!
                  </>
                ) : (
                  <>
                    <Share className="w-5 h-5 mr-2" />
                    Share
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {resource.youtubeVideoId && (
                <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 border border-white/10">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${resource.youtubeVideoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              )}
              
              {/* CRM Integration Diagram */}
              <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10 mb-12">
                <h3 className="text-xl font-bold text-white mb-4">AI-CRM Integration Architecture</h3>
                <div className="aspect-[16/9] bg-slate-700/50 rounded-lg flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 w-full max-w-3xl p-6">
                    {/* Data Sources */}
                    <div className="col-span-3 flex justify-around mb-4">
                      <div className="bg-slate-800 p-3 rounded-lg text-center w-24">
                        <Database className="w-6 h-6 text-green-400 mx-auto mb-2" />
                        <span className="text-xs text-white">Email Data</span>
                      </div>
                      <div className="bg-slate-800 p-3 rounded-lg text-center w-24">
                        <Database className="w-6 h-6 text-green-400 mx-auto mb-2" />
                        <span className="text-xs text-white">Call Data</span>
                      </div>
                      <div className="bg-slate-800 p-3 rounded-lg text-center w-24">
                        <Database className="w-6 h-6 text-green-400 mx-auto mb-2" />
                        <span className="text-xs text-white">Web Data</span>
                      </div>
                    </div>
                    
                    {/* Arrows down */}
                    <div className="col-span-3 flex justify-around h-8">
                      <ArrowRight className="w-6 h-6 text-green-400 rotate-90" />
                      <ArrowRight className="w-6 h-6 text-green-400 rotate-90" />
                      <ArrowRight className="w-6 h-6 text-green-400 rotate-90" />
                    </div>
                    
                    {/* AI Processing Layer */}
                    <div className="col-span-3 bg-green-900/30 p-4 rounded-lg border border-green-500/30 text-center mb-4">
                      <Code className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <span className="text-sm text-white font-medium">AI Processing Layer</span>
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        <div className="bg-slate-800/50 p-2 rounded text-xs text-gray-300">Data Enrichment</div>
                        <div className="bg-slate-800/50 p-2 rounded text-xs text-gray-300">Predictive Scoring</div>
                        <div className="bg-slate-800/50 p-2 rounded text-xs text-gray-300">NLP Analysis</div>
                      </div>
                    </div>
                    
                    {/* Arrow down */}
                    <div className="col-span-3 flex justify-center h-8">
                      <ArrowRight className="w-6 h-6 text-green-400 rotate-90" />
                    </div>
                    
                    {/* CRM Systems */}
                    <div className="bg-slate-800 p-3 rounded-lg text-center">
                      <Database className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <span className="text-xs text-white">Salesforce</span>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg text-center">
                      <Database className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                      <span className="text-xs text-white">HubSpot</span>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg text-center">
                      <Database className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <span className="text-xs text-white">Pipedrive</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                  {resource.content.split('\n\n').map((paragraph, index) => {
                    // Check if paragraph is a header
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    } else if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={index} className="text-xl font-bold text-white mt-6 mb-3">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    } else if (paragraph.startsWith('- ')) {
                      // Handle bullet points
                      return (
                        <ul key={index} className="list-none space-y-2 my-4">
                          {paragraph.split('\n').map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{item.replace('- ', '')}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    } else {
                      return (
                        <p key={index} className="text-gray-300 mb-6">
                          {paragraph}
                        </p>
                      );
                    }
                  })}
                </div>
              </div>
              
              {/* Included Resources Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Included Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {resource.resources.map((item, index) => (
                    <div key={index} className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-green-400/30 transition-all group">
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                      <a 
                        href={item.downloadUrl} 
                        className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        <span>Download</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tags */}
              <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 text-sm text-green-400 bg-green-400/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Resources */}
              <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Related Resources</h3>
                <div className="space-y-4">
                  {relatedResources.map((related, index) => (
                    <Link
                      key={index}
                      to={`/resources/${related.id}`}
                      className="block group"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <h4 className="text-gray-300 group-hover:text-green-400 transition-colors">
                        {related.title}
                      </h4>
                      <span className="text-sm text-gray-500">{related.date}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Key Benefit */}
              <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Key Benefit</h3>
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                  <div className="text-3xl font-bold text-white mb-2">70%</div>
                  <p className="text-gray-300">Reduction in sales admin time achieved by implementing AI-CRM integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICRMIntegrationGuide; 