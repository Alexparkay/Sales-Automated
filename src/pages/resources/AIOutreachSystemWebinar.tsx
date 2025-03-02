import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Share, Clock, Tag, ArrowLeft, CheckCircle, Presentation, Phone, Mail, MessageSquare, Copy, Check } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AbstractShapes from '../../components/AbstractShapes';

const AIOutreachSystemWebinar: React.FC = () => {
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
    id: 'ai-outreach-system-webinar',
    title: 'Cold Calling Is Dead: The AI Outreach System That Closes More Deals',
    date: 'January 25, 2025',
    category: 'Webinar',
    description: 'Discover why manual prospecting is outdated and how to replace it with AI through a live breakdown of Imperium Growth\'s outbound success process.',
    content: `
The traditional approach to sales outreach is broken. Cold calling conversion rates have plummeted to less than 1%, and generic email blasts are routinely ignored. In this exclusive webinar, we reveal the AI-powered outreach system that has helped our clients achieve 5-10x higher response rates and dramatically increase their close rates.

## Why Traditional Outreach Is Failing

The data is clear: traditional outreach methods are becoming increasingly ineffective:

- Cold call connection rates have dropped by 67% in the last five years
- 91% of buyers never respond to cold outreach
- The average sales rep spends 40% of their time on activities that generate no revenue
- Only 24% of sales emails are ever opened

These trends aren't temporary—they represent a fundamental shift in buyer behavior and expectations. Today's buyers demand personalization, relevance, and value from the first interaction.

## The AI Outreach Revolution

Our AI-powered outreach system addresses these challenges by leveraging advanced technologies to:

- Identify the right prospects at the right time
- Personalize messaging at scale
- Engage across multiple channels in a coordinated way
- Adapt based on prospect behavior and feedback
- Continuously optimize for better results

In this webinar, we break down each component of this system and show you exactly how to implement it in your organization.

## Component 1: Predictive Prospect Identification

Traditional prospecting relies on static criteria that often miss the mark. Our AI approach uses:

- Behavioral intent signals that indicate buying readiness
- Predictive algorithms that identify prospects most likely to convert
- Automated enrichment that builds comprehensive prospect profiles
- Prioritization frameworks that focus efforts on high-value opportunities

We demonstrate how to set up these systems using a combination of off-the-shelf tools and custom configurations.

## Component 2: Multi-Channel Personalized Outreach

Generic messaging sent through a single channel rarely breaks through the noise. Our system leverages:

- AI-generated personalized messaging tailored to each prospect
- Coordinated multi-channel sequences (email, LinkedIn, phone, SMS)
- Dynamic content that adapts based on prospect engagement
- Automated follow-up that never lets opportunities slip through the cracks

The webinar includes a live demonstration of how to set up these sequences and the exact templates that have generated the highest response rates.

## Component 3: Conversational AI Qualification

Once a prospect engages, the next challenge is efficient qualification. Our approach uses:

- AI chatbots that qualify prospects through natural conversation
- Automated meeting scheduling that eliminates the back-and-forth
- Intelligent routing that connects prospects with the right resources
- Pre-meeting intelligence that prepares sales reps for success

We show you how to implement these capabilities using tools like Drift, Intercom, and custom GPT solutions.

## Component 4: Continuous Optimization Engine

The key to long-term success is systematic optimization. Our system includes:

- A/B testing frameworks for messaging, sequences, and channels
- Performance analytics that identify winning patterns
- Feedback loops that continuously improve targeting and personalization
- Competitive intelligence that keeps you ahead of the market

The webinar demonstrates how to set up these optimization processes and the metrics that matter most.

## Real Results from Real Companies

Throughout the webinar, we share case studies of companies that have implemented this system:

- How a B2B software company increased their meeting booking rate by 327%
- How a professional services firm reduced their cost per acquisition by 58%
- How a startup generated $1.3M in pipeline in 90 days with a team of two

## What You'll Get

In addition to the webinar recording, you'll receive:

1. Our complete AI outreach playbook with step-by-step implementation guides
2. Templates for high-converting email and LinkedIn messages
3. Configuration guides for popular outreach and automation tools
4. ROI calculator to project the impact on your business

Whether you're a sales leader looking to improve team performance, a founder trying to scale your outreach, or a sales rep wanting to exceed your quota, this webinar provides the blueprint for success in the AI-driven sales landscape.

## Q&A Highlights

During the live session, we addressed several important questions:

### How does this system work for different industries?

While the core framework remains consistent, we've successfully adapted it for SaaS, professional services, manufacturing, and financial services. The key is customizing the targeting criteria and messaging templates for your specific industry and buyer personas.

### What's the typical implementation timeline?

Most organizations can implement the basic system in 2-4 weeks. Full implementation with advanced optimization typically takes 2-3 months. We recommend a phased approach, starting with the components that will deliver the quickest wins for your specific situation.

### How does this integrate with our existing CRM and sales tools?

The system is designed to work with popular CRMs like Salesforce, HubSpot, and Pipedrive. We provide specific integration guides for each platform, as well as recommendations for complementary tools based on your existing tech stack.

### What kind of results can we expect?

While results vary by industry and target market, our clients typically see:
- 3-5x increase in response rates
- 30-50% reduction in sales cycle length
- 40-60% improvement in conversion rates
- 25-35% decrease in customer acquisition costs

The webinar includes a detailed breakdown of these metrics and the factors that influence them.
    `,
    readingTime: '10 min read',
    downloadLink: '#',
    youtubeVideoId: 'PEnlKhDo5F4',
    resources: [
      {
        title: 'AI Outreach Webinar Replay',
        description: 'Full recording of the live webinar with Q&A session',
        downloadUrl: '#'
      },
      {
        title: 'Cold Email + LinkedIn Templates',
        description: 'Ready-to-use templates for high-converting outreach campaigns',
        downloadUrl: '#'
      }
    ],
    tags: ['AI Outreach', 'Sales Automation', 'Multi-Channel', 'Cold Email', 'LinkedIn']
  };

  const relatedResources = [
    {
      id: 'ai-lead-generation-blueprint',
      title: 'The Ultimate AI-Driven Lead Generation Blueprint',
      date: 'February 2, 2025'
    },
    {
      id: 'ai-sales-automation-masterclass',
      title: 'AI-Powered Sales Automation Masterclass',
      date: 'January 10, 2025'
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
                <Presentation className="w-4 h-4 mr-1" />
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
              
              {/* Multi-Channel Outreach Visualization */}
              <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10 mb-12">
                <h3 className="text-xl font-bold text-white mb-6">Multi-Channel AI Outreach System</h3>
                <div className="relative h-64 md:h-80">
                  {/* Central Prospect Node */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-900/30 p-4 rounded-full border border-green-500/30 w-24 h-24 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-white font-bold">PROSPECT</div>
                    </div>
                  </div>
                  
                  {/* Email Channel */}
                  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-slate-800 p-3 rounded-lg w-28">
                    <div className="text-center">
                      <Mail className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-xs text-white">AI-Personalized Email</div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                      <ArrowRight className="w-6 h-6 text-blue-400 rotate-45" />
                    </div>
                  </div>
                  
                  {/* LinkedIn Channel */}
                  <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 bg-slate-800 p-3 rounded-lg w-28">
                    <div className="text-center">
                      <MessageSquare className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-xs text-white">LinkedIn Outreach</div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                      <ArrowRight className="w-6 h-6 text-blue-400 rotate-[135deg]" />
                    </div>
                  </div>
                  
                  {/* Phone Channel */}
                  <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 bg-slate-800 p-3 rounded-lg w-28">
                    <div className="text-center">
                      <Phone className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-xs text-white">AI Voice Outreach</div>
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2">
                      <ArrowRight className="w-6 h-6 text-blue-400 rotate-[315deg]" />
                    </div>
                  </div>
                  
                  {/* SMS Channel */}
                  <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 bg-slate-800 p-3 rounded-lg w-28">
                    <div className="text-center">
                      <MessageSquare className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-xs text-white">SMS Sequences</div>
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2">
                      <ArrowRight className="w-6 h-6 text-blue-400 rotate-[225deg]" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Key Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-slate-800/50 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-white">327%</div>
                  <div className="text-sm text-gray-400">increase in meeting booking rate</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-white">58%</div>
                  <div className="text-sm text-gray-400">reduction in cost per acquisition</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-white">$1.3M</div>
                  <div className="text-sm text-gray-400">pipeline generated in 90 days</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-white">67%</div>
                  <div className="text-sm text-gray-400">drop in cold call connection rates</div>
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
              
              {/* Webinar Presenter */}
              <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Webinar Presenter</h3>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-slate-700 overflow-hidden mr-4">
                    <img 
                      src="/images/Growth/presenter-avatar.jpg" 
                      alt="Presenter" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/150';
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Alex Peterson</h4>
                    <p className="text-gray-400 text-sm">Head of AI Sales Strategy</p>
                    <p className="text-gray-400 text-sm">Imperium Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIOutreachSystemWebinar; 