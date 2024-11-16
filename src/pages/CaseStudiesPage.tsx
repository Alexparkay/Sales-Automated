import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function CaseStudiesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const researchInsights = [
    {
      quote: "After implementing AI automation, we've seen a 75% reduction in time spent on repetitive sales tasks. It's completely transformed how we operate.",
      author: "Sarah Chen",
      role: "Sales Director",
      company: "Tech Solutions Inc.",
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Research Interview"
    },
    {
      quote: "The biggest challenge we faced was inconsistent follow-ups. Manual processes meant leads were falling through the cracks, costing us potential revenue.",
      author: "Michael Roberts",
      role: "Head of Sales",
      company: "Global Retail Corp",
      date: "February 2024",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Industry Analysis"
    },
    {
      quote: "Our research shows that companies spend an average of 4 hours per day on tasks that could be automated, representing a significant opportunity cost.",
      author: "Dr. Emily Wong",
      role: "Research Lead",
      company: "Sales Innovation Lab",
      date: "January 2024",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "White Paper"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % researchInsights.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? researchInsights.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      (prev + 1) % researchInsights.length
    );
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-medium">Research Insights</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              What Industry Leaders
              <br />
              Say About Sales Automation
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive research and interviews reveal the true impact of automation on modern sales processes.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-12 flex flex-col justify-center">
                    <span className="inline-block bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                      {researchInsights[currentIndex].category}
                    </span>
                    <blockquote className="text-2xl font-medium mb-8">
                      "{researchInsights[currentIndex].quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <img
                        src={researchInsights[currentIndex].image}
                        alt={researchInsights[currentIndex].author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold">
                          {researchInsights[currentIndex].author}
                        </div>
                        <div className="text-sm text-gray-600">
                          {researchInsights[currentIndex].role} at {researchInsights[currentIndex].company}
                        </div>
                        <div className="text-sm text-gray-400">
                          {researchInsights[currentIndex].date}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div 
                    className="relative h-[500px]"
                    style={{
                      backgroundImage: `url(${researchInsights[currentIndex].image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
            >
              <ArrowRight size={24} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {researchInsights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="mt-24 text-center">
            <Link to="/get-audit" className="btn-primary">
              Get Your Free AI Audit <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudiesPage;