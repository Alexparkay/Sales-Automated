import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Youtube, Video, FileText, Presentation, Database, Phone, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import AbstractShapes from '../components/AbstractShapes';

const ResourcesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const itemsPerPage = 10;

  const resources = [
    {
      id: 'ai-crm-integration-guide',
      date: 'March 1, 2025',
      title: 'How to Set Up AI-Driven Sales & CRM Integration',
      description: 'Learn how to automate CRM workflows for sales efficiency with the exact tools to connect AI into HubSpot, Salesforce, or Pipedrive.',
      downloadLink: '#',
      category: 'Video Guide'
    },
    {
      id: '100m-ai-sales-playbook',
      date: 'February 17, 2025',
      title: 'The $100M AI Sales Playbook',
      description: 'Data-backed insights on how top B2B companies scale with AI and why traditional sales teams are dying (and what\'s replacing them).',
      downloadLink: '#',
      category: 'Whitepaper'
    },
    {
      id: 'ai-lead-generation-blueprint',
      date: 'February 2, 2025',
      title: 'The Ultimate AI-Driven Lead Generation Blueprint',
      description: 'Build a fully automated pipeline that generates leads while you sleep with live walkthroughs of email sequences, LinkedIn automation & CRM sync.',
      downloadLink: '#',
      category: 'Video Guide'
    },
    {
      id: 'ai-outreach-system-webinar',
      date: 'January 25, 2025',
      title: 'Cold Calling Is Dead: The AI Outreach System That Closes More Deals',
      description: 'Discover why manual prospecting is outdated and how to replace it with AI through a live breakdown of Imperium Growth\'s outbound success process.',
      downloadLink: '#',
      category: 'Webinar'
    },
    {
      id: 'ai-sales-automation-masterclass',
      date: 'January 10, 2025',
      title: 'AI-Powered Sales Automation Masterclass',
      description: 'Learn how to build an AI-driven outbound sales machine from scratch with step-by-step tutorials on automating lead generation & outreach.',
      downloadLink: '#',
      category: 'Video Guide'
    }
  ];

  // Group categories for the filter
  const categories = useMemo(() => {
    const allCategories = resources.map(resource => resource.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, [resources]);

  // Filter resources by category
  const filteredResources = useMemo(() => {
    if (!activeCategory || activeCategory === 'All') {
      return resources;
    }
    return resources.filter(resource => resource.category === activeCategory);
  }, [resources, activeCategory]);

  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentResources = filteredResources.slice(startIndex, endIndex);

  // Reset to first page when changing category
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category === 'All' ? null : category);
    setCurrentPage(1);
  };

  const renderPaginationButtons = () => {
    if (totalPages <= 1) return null;

    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        buttons.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`w-10 h-10 rounded-full ${
              currentPage === i
                ? 'bg-green-400 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            } flex items-center justify-center`}
          >
            {i}
          </button>
        );
      } else if (
        i === currentPage - 2 ||
        i === currentPage + 2
      ) {
        buttons.push(
          <span key={i} className="text-gray-300 mx-2">...</span>
        );
      }
    }
    return buttons;
  };

  // Function to render the appropriate icon based on category
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Video Guide':
        return <Youtube className="w-4 h-4 mr-1" />;
      case 'Whitepaper':
        return <FileText className="w-4 h-4 mr-1" />;
      case 'Webinar':
        return <Presentation className="w-4 h-4 mr-1" />;
      default:
        return <Database className="w-4 h-4 mr-1" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 relative">
      {/* Hero Section with Video Background */}
      <section className="relative pt-32 pb-24 bg-slate-900 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 bg-black bg-opacity-50">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src="/videos/Growth3.mp4" type="video/mp4" />
          </video>
        </div>
        
        <AbstractShapes variant="hero" />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto px-4"
          >
            <h1 className="text-5xl font-bold text-white mb-6 text-left">
              AI Sales Growth
              <span className="block mt-2 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Resource Hub
              </span>
            </h1>
            <p className="text-xl text-gray-300 text-left">
              Access our premium collection of AI sales automation tools, templates, and implementation guides to scale your revenue
            </p>
          </motion.div>
        </div>
      </section>

      {/* Background Image - Very Subtle */}
      <div className="absolute inset-0 z-0 top-[400px]">
        <div className="absolute inset-0 bg-slate-900 bg-opacity-100"></div>
        <img 
          src="/images/Growth/pexels-aditya-aiyar-615049-1407305.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      {/* Resources List */}
      <section className="relative py-24 z-10 mt-0">
        <AbstractShapes variant="section1" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-medium text-white">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    (category === 'All' && !activeCategory) || category === activeCategory
                      ? 'bg-green-400 text-white'
                      : 'bg-slate-800/70 text-gray-300 hover:bg-slate-700/70'
                  }`}
                >
                  {category === 'All' ? 'All Resources' : category}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {currentResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-green-400/30 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-gray-400">
                        {resource.date}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium text-green-400 bg-green-400/10 rounded-full flex items-center">
                        {getCategoryIcon(resource.category)}
                        {resource.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {resource.description}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Link
                      to={`/resources/${resource.id}`}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-400/10 text-green-400 hover:bg-green-400/20 transition-colors"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {currentResources.length === 0 && (
            <div className="py-16 text-left">
              <div className="text-gray-400 mb-4">No resources found for this category</div>
              <button
                onClick={() => setActiveCategory(null)}
                className="px-4 py-2 bg-green-400/20 text-green-400 rounded-full text-sm font-medium hover:bg-green-400/30 transition-all"
              >
                View All Resources
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-start items-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full bg-white/10 text-gray-300 hover:bg-white/20 flex items-center justify-center disabled:opacity-50"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              {renderPaginationButtons()}
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full bg-white/10 text-gray-300 hover:bg-white/20 flex items-center justify-center disabled:opacity-50"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage; 