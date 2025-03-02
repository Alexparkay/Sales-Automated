import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Share, Clock, Tag, ArrowLeft, CheckCircle, FileText, BarChart, Check } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AbstractShapes from '../../components/AbstractShapes';

const AISalesPlaybook: React.FC = () => {
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
    id: '100m-ai-sales-playbook',
    title: 'The $100M AI Sales Playbook',
    date: 'February 17, 2025',
    category: 'Whitepaper',
    description: 'Data-backed insights on how top B2B companies scale with AI and why traditional sales teams are dying (and what\'s replacing them).',
    content: `
The sales landscape is undergoing a radical transformation. Companies that embrace AI-powered sales processes are outperforming their competitors by orders of magnitude, while traditional sales organizations struggle to keep pace. This comprehensive playbook reveals the strategies and systems that have helped our clients generate over $100 million in revenue through AI-enhanced sales operations.

## The Death of Traditional Sales

Our research across 500+ B2B companies reveals a stark reality: traditional sales approaches are becoming increasingly ineffective:

- 78% of traditional sales teams are missing their quotas
- Customer acquisition costs have increased by 67% in the last five years
- Sales cycles have lengthened by 38% for companies using conventional methods
- 82% of buyers prefer to engage with digital content over salespeople during research

These trends aren't temporary—they represent a fundamental shift in how B2B purchases are made. The companies thriving in this new environment have completely reimagined their sales approach around AI capabilities.

## The Five Pillars of AI-Powered Sales

Our analysis of top-performing organizations reveals five core pillars that form the foundation of modern sales success:

### Pillar 1: Intelligent Prospecting

The most successful companies have abandoned spray-and-pray prospecting in favor of AI-driven targeting:

- They use machine learning to analyze their customer base and identify high-value prospect segments
- They deploy predictive algorithms that score leads based on likelihood to convert
- They automate the enrichment and validation of prospect data
- They continuously refine their ICP (Ideal Customer Profile) based on conversion data

Case Study: How Company X used AI prospecting to reduce CAC by 62% while increasing deal size by 41%

### Pillar 2: Hyper-Personalized Engagement

Top performers have moved beyond basic personalization to create truly individualized buying experiences:

- They use natural language processing to analyze prospect communications and digital footprints
- They dynamically generate personalized content and messaging for each prospect
- They deploy conversational AI to engage prospects across multiple channels
- They create custom buying journeys based on prospect behavior and preferences

Case Study: How Company Y achieved a 317% increase in response rates through AI-powered personalization

### Pillar 3: Augmented Sales Intelligence

Leading organizations equip their sales teams with AI tools that provide unprecedented insights:

- They use conversation intelligence to analyze sales calls and identify winning patterns
- They deploy real-time coaching systems that guide reps during customer interactions
- They implement competitive intelligence tools that track market movements
- They leverage sentiment analysis to gauge prospect engagement and buying signals

Case Study: How Company Z reduced ramp time for new sales hires by 73% using AI coaching

### Pillar 4: Automated Sales Operations

The most efficient sales organizations have automated the majority of administrative tasks:

- They use AI to handle meeting scheduling, follow-ups, and routine communications
- They automate CRM updates and data entry through natural language processing
- They deploy intelligent workflows that route leads and opportunities to the right resources
- They use predictive analytics to forecast sales with 93% accuracy

Case Study: How Company A reclaimed 27 hours per week per rep by automating low-value tasks

### Pillar 5: Continuous Optimization

Top performers have built systems that constantly learn and improve:

- They implement A/B testing frameworks across all customer touchpoints
- They use machine learning to identify successful patterns and replicate them
- They analyze lost deals to identify improvement opportunities
- They create feedback loops between marketing, sales, and customer success

Case Study: How Company B increased conversion rates by 42% through systematic optimization

## The AI Sales Tech Stack

Our research identified the core technologies that power high-performing sales organizations:

1. **Data Enrichment & Intelligence**: Tools like Clearbit, ZoomInfo, and Apollo
2. **Conversational AI**: Platforms like Drift, Intercom, and custom GPT solutions
3. **Sales Engagement**: Systems like Outreach, SalesLoft, and Lemlist
4. **Conversation Intelligence**: Tools like Gong, Chorus, and Dialpad
5. **Revenue Operations**: Platforms like HubSpot, Salesforce, and Clari
6. **Analytics & Optimization**: Solutions like Tableau, Looker, and custom dashboards

For each category, we provide detailed implementation guides and integration strategies.

## The 90-Day Implementation Roadmap

Transforming your sales organization doesn't happen overnight. Our playbook includes a detailed 90-day implementation plan:

- Days 1-30: Assessment, planning, and initial tech stack deployment
- Days 31-60: Process redesign, team training, and pilot program launch
- Days 61-90: Scaling, optimization, and performance measurement

We break down each phase into specific action items, complete with templates and checklists.

## Measuring Success: The New Sales KPIs

Traditional sales metrics don't capture the full impact of AI-powered sales. Our playbook introduces a new framework for measuring success:

- Engagement Quality Score (EQS)
- Conversion Velocity Index (CVI)
- Revenue Efficiency Ratio (RER)
- Customer Fit Percentage (CFP)
- Automation Impact Factor (AIF)

For each metric, we provide calculation methodologies and benchmark data from top-performing organizations.

## The Future of Sales: Beyond 2025

We conclude with our research-backed predictions for the next wave of sales innovation:

- The rise of fully autonomous sales systems for transactional products
- The evolution of sales roles toward strategy and relationship management
- The integration of extended reality (XR) into remote selling
- The emergence of predictive deal intelligence

Companies that position themselves ahead of these trends will gain significant competitive advantages in the coming years.

This playbook isn't just theoretical—it's a practical guide based on real-world implementations that have generated over $100 million in revenue. Whether you're looking to optimize an existing sales operation or build a new one from the ground up, these strategies will help you create a sales system that consistently outperforms the competition.
    `,
    readingTime: '18 min read',
    downloadLink: '#',
    youtubeVideoId: 'PEnlKhDo5F4',
    resources: [
      {
        title: 'Full AI Sales Playbook PDF',
        description: 'The complete 75-page playbook with detailed implementation guides',
        downloadUrl: '#'
      },
      {
        title: 'AI Tools That Replace an SDR',
        description: 'Comprehensive cheat sheet of AI tools that can automate SDR functions',
        downloadUrl: '#'
      }
    ],
    tags: ['AI Sales', 'Sales Playbook', 'B2B Sales', 'Revenue Growth', 'Sales Automation']
  };

  const relatedResources = [
    {
      id: 'ai-sales-automation-masterclass',
      title: 'AI-Powered Sales Automation Masterclass',
      date: 'January 10, 2025'
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
                <FileText className="w-4 h-4 mr-1" />
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
                Download Whitepaper
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
              
              {/* Key Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                  <BarChart className="w-8 h-8 text-green-400 mb-2" />
                  <div className="text-3xl font-bold text-white">78%</div>
                  <div className="text-sm text-gray-400">of traditional sales teams missing quotas</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                  <BarChart className="w-8 h-8 text-green-400 mb-2" />
                  <div className="text-3xl font-bold text-white">67%</div>
                  <div className="text-sm text-gray-400">increase in customer acquisition costs</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                  <BarChart className="w-8 h-8 text-green-400 mb-2" />
                  <div className="text-3xl font-bold text-white">38%</div>
                  <div className="text-sm text-gray-400">longer sales cycles with conventional methods</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                  <BarChart className="w-8 h-8 text-green-400 mb-2" />
                  <div className="text-3xl font-bold text-white">82%</div>
                  <div className="text-sm text-gray-400">of buyers prefer digital content over salespeople</div>
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
                    } else if (paragraph.startsWith('Case Study:')) {
                      // Handle case studies with special formatting
                      return (
                        <div key={index} className="bg-slate-700/30 p-4 rounded-lg border-l-4 border-green-400 my-4">
                          <p className="text-gray-300 italic">
                            {paragraph}
                          </p>
                        </div>
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
              
              {/* Featured Quote */}
              <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Featured Quote</h3>
                <blockquote className="border-l-4 border-green-400 pl-4 italic text-gray-300">
                  "Companies that embrace AI-powered sales processes are outperforming their competitors by orders of magnitude, while traditional sales organizations struggle to keep pace."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISalesPlaybook; 