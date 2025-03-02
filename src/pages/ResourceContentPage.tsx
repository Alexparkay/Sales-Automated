import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Share, Clock, Tag, ArrowLeft } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import AbstractShapes from '../components/AbstractShapes';

interface ResourceContent {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  content: string;
  readingTime: string;
  downloadLink: string;
  youtubeVideoId?: string;
}

const ResourceContentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // This would typically come from your data source or API
  const resource: ResourceContent = {
    id: 'openai-evals',
    title: 'OpenAI Evals Explained with Examples | AI Voice',
    date: 'October 18, 2024',
    category: 'Guide',
    description: 'Learn how to leverage OpenAIs Evals to garner more details of your AI Voice Conversations',
    content: `In this resource, I'll share with you all the details regarding my first tests with OpenAIs Evals. This tool allows you to analyze datasets, which can be any kind of data, but in our example, we specifically leverage it for voice data from Vapi.

While it's still pretty new, the utility is already there, which helps you to get more insights into what happens behind the scenes.`,
    readingTime: '8 min read',
    downloadLink: '#',
    youtubeVideoId: 'PEnlKhDo5F4'
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Back Button */}
      <div className="fixed top-32 left-4 md:left-8 z-10">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/resources')}
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
              <span className="px-2 py-1 text-xs font-medium text-green-400 bg-green-400/10 rounded-full">
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
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-green-400 to-emerald-300 rounded-full hover:opacity-90 transition-opacity"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resource
              </a>
              <button
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-300 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Share className="w-5 h-5 mr-2" />
                Share
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
                  {resource.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-300 mb-6">
                      {paragraph}
                    </p>
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
                  <span className="px-3 py-1 text-sm text-green-400 bg-green-400/10 rounded-full">OpenAI</span>
                  <span className="px-3 py-1 text-sm text-green-400 bg-green-400/10 rounded-full">Evals</span>
                  <span className="px-3 py-1 text-sm text-green-400 bg-green-400/10 rounded-full">AI Voice</span>
                  <span className="px-3 py-1 text-sm text-green-400 bg-green-400/10 rounded-full">Vapi</span>
                </div>
              </div>

              {/* Related Resources */}
              <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Related Resources</h3>
                <div className="space-y-4">
                  <Link
                    to="#"
                    className="block group"
                  >
                    <h4 className="text-gray-300 group-hover:text-green-400 transition-colors">
                      5 Hidden Vapi Features you WON'T find in the Dashboard
                    </h4>
                    <span className="text-sm text-gray-500">November 4, 2024</span>
                  </Link>
                  <Link
                    to="#"
                    className="block group"
                  >
                    <h4 className="text-gray-300 group-hover:text-green-400 transition-colors">
                      The dangers of Voice AI calling limits | Vapi
                    </h4>
                    <span className="text-sm text-gray-500">October 28, 2024</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceContentPage; 