import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Calendar, Youtube } from 'lucide-react';

function VideosPage() {
  const videos = [
    {
      title: "How AI is Revolutionizing B2B Sales",
      description: "Learn how modern AI tools are transforming the way companies approach B2B sales and lead generation.",
      thumbnail: "https://images.unsplash.com/photo-1560438718-eb61ede255eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      date: "March 2024",
      duration: "12:45",
      youtubeUrl: "https://youtube.com/watch?v=example1"
    },
    {
      title: "Automating Your Sales Outreach",
      description: "Discover the best practices for automating your sales outreach while maintaining a personal touch.",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      date: "February 2024",
      duration: "15:20",
      youtubeUrl: "https://youtube.com/watch?v=example2"
    },
    {
      title: "Smart Meeting Scheduling with AI",
      description: "See how AI can eliminate the back-and-forth of scheduling meetings and optimize your calendar.",
      thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      date: "January 2024",
      duration: "10:15",
      youtubeUrl: "https://youtube.com/watch?v=example3"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Videos by Sales Automated
          </h1>
          <p className="text-xl text-gray-600">
            Watch our latest videos on AI sales automation, tips, and industry insights
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {videos.map((video) => (
              <article
                key={video.title}
                className="group"
              >
                <a 
                  href={video.youtubeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-video mb-6 rounded-xl overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                        <Play className="text-white" size={32} />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/75 px-2 py-1 rounded text-white text-sm">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <Calendar size={16} />
                      {video.date}
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
                      {video.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4">
                      {video.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-primary-500 font-medium">
                      Watch Now 
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="https://www.youtube.com/@AGIntelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg transition-colors font-medium"
            >
              <Youtube size={24} />
              View All Videos
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideosPage;