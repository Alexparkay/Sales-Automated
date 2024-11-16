import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

function BlogPage() {
  const posts = [
    {
      title: "The Future of AI in Sales: 2024 Trends and Beyond",
      excerpt: "Explore the latest AI trends reshaping the sales landscape and how businesses can stay ahead of the curve.",
      author: "Alex Thompson",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "AI Trends"
    },
    {
      title: "Maximizing ROI with Sales Automation",
      excerpt: "Learn how leading companies are achieving unprecedented ROI through strategic implementation of sales automation.",
      author: "Sarah Chen",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "Strategy"
    },
    {
      title: "Building the Perfect Sales Tech Stack",
      excerpt: "A comprehensive guide to selecting and integrating the right tools for your sales process.",
      author: "Michael Roberts",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "Technology"
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
            Latest Insights
          </h1>
          <p className="text-xl text-gray-600">
            Expert perspectives on AI, sales automation, and revenue growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article
              key={post.title}
              whileHover={{ scale: 1.02 }}
              className="card overflow-hidden"
            >
              <div className="relative h-48 mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary-600">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <User size={16} />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  {post.date}
                </div>
              </div>
              
              <h2 className="text-xl font-bold mb-3">
                {post.title}
              </h2>
              
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              
              <button className="text-primary-500 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Read More <ArrowRight size={16} />
              </button>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BlogPage;