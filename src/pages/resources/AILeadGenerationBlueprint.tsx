import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Share, Clock, Tag, ArrowLeft, CheckCircle, Youtube, FileText, Check } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AbstractShapes from '../../components/AbstractShapes';

const AILeadGenerationBlueprint: React.FC = () => {
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
    id: 'ai-lead-generation-blueprint',
    title: 'The Ultimate AI-Driven Lead Generation Blueprint',
    date: 'February 2, 2025',
    category: 'Video Guide',
    description: 'Build a fully automated pipeline that generates leads while you sleep with live walkthroughs of email sequences, LinkedIn automation & CRM sync.',
    content: `
The days of manual prospecting and cold outreach are over. In this comprehensive guide, we reveal our proprietary AI-driven lead generation system that has helped our clients generate thousands of qualified leads on autopilot.

## The Problem with Traditional Lead Generation

Most businesses still rely on outdated methods for generating leads:

- Manual research that consumes hours of valuable time
- Generic outreach that fails to resonate with prospects
- Inconsistent follow-up that lets opportunities slip away
- Disconnected tools that create data silos and inefficiencies

These approaches not only waste resources but also produce mediocre results. The modern business landscape demands a more sophisticated, automated approach to lead generation.

## The AI Lead Generation Framework

Our blueprint is built around a five-stage framework that leverages artificial intelligence at every step:

### Stage 1: Intelligent Targeting

The foundation of effective lead generation is identifying the right prospects. Our AI-powered targeting system:

- Uses machine learning to analyze your best customers and identify common attributes
- Scrapes multiple data sources to build comprehensive prospect lists
- Applies predictive scoring to prioritize leads most likely to convert
- Continuously refines targeting criteria based on conversion data

In the video guide, we walk through the exact process of setting up these targeting parameters and demonstrate how to use tools like Clearbit, Apollo, and LinkedIn Sales Navigator in conjunction with custom AI models.

### Stage 2: Multi-Channel Outreach Automation

Once you've identified your targets, our system deploys a sophisticated multi-channel approach:

- Personalized email sequences that adapt based on prospect engagement
- LinkedIn connection and messaging workflows that mimic human interaction
- Automated content delivery based on prospect behavior and interests
- SMS and voice outreach for high-value prospects

We provide a detailed walkthrough of setting up these automation sequences using tools like Lemlist, Phantombuster, and custom GPT-powered personalization engines.

### Stage 3: AI-Powered Engagement Optimization

The key to high conversion rates is meaningful engagement. Our system:

- Uses natural language processing to analyze prospect responses
- Automatically adjusts messaging based on sentiment analysis
- Deploys custom chatbots to qualify leads through conversation
- Creates personalized content recommendations based on prospect interests

The video guide includes step-by-step instructions for implementing these engagement optimization techniques, with real examples from successful campaigns.

### Stage 4: Seamless CRM Integration

A lead generation system is only as good as its integration with your sales process:

- Automated lead enrichment that populates your CRM with comprehensive data
- Real-time synchronization between outreach tools and your CRM
- Intelligent lead routing based on sales rep expertise and capacity
- Automated task creation and follow-up reminders

We demonstrate how to set up these integrations with popular CRMs like HubSpot, Salesforce, and Pipedrive, ensuring no lead falls through the cracks.

### Stage 5: Continuous Optimization

The final stage is about refining your system for ever-improving results:

- A/B testing frameworks for messaging, sequences, and channels
- Performance dashboards that provide actionable insights
- Automated reporting that highlights opportunities for improvement
- Feedback loops that help your AI systems learn and adapt

## Real Results from Real Businesses

Throughout the blueprint, we showcase actual results from businesses that have implemented this framework:

- A B2B software company that generated 427 qualified leads in 30 days with zero manual outreach
- A professional services firm that reduced their cost per lead by 73% while increasing quality
- A startup that built a pipeline of $1.2M in potential revenue using this automated system

## What You'll Get

This comprehensive resource includes:

1. A 90-minute video walkthrough of the entire framework
2. Step-by-step implementation guides for each stage
3. Templates for email sequences, LinkedIn messages, and follow-up cadences
4. Custom scoring models for lead prioritization
5. Integration guides for popular CRMs and outreach tools

Whether you're a solo entrepreneur looking to scale your lead generation efforts or a marketing team seeking to modernize your approach, this blueprint provides everything you need to build a lead generation machine that works 24/7.
    `,
    readingTime: '12 min read',
    downloadLink: '#',
    youtubeVideoId: 'PEnlKhDo5F4',
    resources: [
      {
        title: 'AI-Powered Lead Qualification Framework',
        description: 'A comprehensive framework for scoring and qualifying leads using AI',
        downloadUrl: '#'
      },
      {
        title: 'Cold Email & LinkedIn Message Swipe Files',
        description: 'Ready-to-use templates for high-converting outreach messages',
        downloadUrl: '#'
      },
      {
        title: 'Google Sheets Lead Scoring Tracker',
        description: 'A customizable spreadsheet for tracking and scoring leads',
        downloadUrl: '#'
      }
    ],
    tags: ['Lead Generation', 'AI Automation', 'Email Sequences', 'LinkedIn', 'CRM Integration']
  };

  const relatedResources = [
    {
      id: 'ai-sales-automation-masterclass',
      title: 'AI-Powered Sales Automation Masterclass',
      date: 'January 10, 2025'
    },
    {
      id: 'ai-outreach-system-webinar',
      title: 'Cold Calling Is Dead: The AI Outreach System That Closes More Deals',
      date: 'January 25, 2025'
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
                    } else if (paragraph.match(/^\d+\./)) {
                      // Handle numbered lists
                      return (
                        <ol key={index} className="list-decimal list-inside space-y-2 my-4 text-gray-300">
                          {paragraph.split('\n').map((item, itemIndex) => {
                            const numberMatch = item.match(/^\d+\.\s(.*)/);
                            if (numberMatch) {
                              return (
                                <li key={itemIndex} className="ml-4">
                                  {numberMatch[1]}
                                </li>
                              );
                            }
                            return null;
                          })}
                        </ol>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AILeadGenerationBlueprint; 