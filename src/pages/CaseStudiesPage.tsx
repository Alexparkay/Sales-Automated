import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Metric {
  label: string;
  value: string;
}

interface CaseStudy {
  title: string;
  industry: string;
  metrics: Metric[];
  description: string;
  icon: JSX.Element;
}

function CaseStudiesPage(): JSX.Element {
  const caseStudies: CaseStudy[] = [
    {
      title: 'Enterprise SaaS Growth Strategy',
      industry: 'Technology',
      metrics: [
        { label: 'Revenue Growth', value: '150%' },
        { label: 'Customer Acquisition', value: '3x' },
        { label: 'ROI', value: '380%' }
      ],
      description: 'Implemented comprehensive growth strategy for a B2B SaaS platform, resulting in significant revenue increase and market expansion.',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Market Expansion Success',
      industry: 'E-commerce',
      metrics: [
        { label: 'New Markets', value: '5' },
        { label: 'Revenue Growth', value: '200%' },
        { label: 'Customer Base', value: '4x' }
      ],
      description: 'Guided an e-commerce platform\'s expansion into new markets with AI-powered customer insights and localization strategies.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'AI-Driven Sales Transformation',
      industry: 'Manufacturing',
      metrics: [
        { label: 'Sales Efficiency', value: '85%' },
        { label: 'Lead Quality', value: '2.5x' },
        { label: 'Conversion Rate', value: '120%' }
      ],
      description: 'Revolutionized sales processes through AI implementation, dramatically improving efficiency and conversion rates.',
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Client Success
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Discover how we've helped businesses achieve exceptional growth through innovative strategies and AI solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                        {study.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {study.title}
                        </h2>
                        <p className="text-gray-600">
                          Industry: {study.industry}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">
                      {study.description}
                    </p>
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                      Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {study.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="bg-gray-50 p-4 rounded-xl text-center"
                      >
                        <p className="text-3xl font-bold text-blue-600 mb-2">
                          {metric.value}
                        </p>
                        <p className="text-sm text-gray-600">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 border border-gray-100 shadow-sm">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss how we can help you achieve similar results with our proven growth strategies.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full hover:opacity-90 transition-opacity"
              >
                Start Your Growth Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudiesPage;