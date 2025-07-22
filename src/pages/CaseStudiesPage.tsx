import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Users, Target, CheckCircle, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Metric {
  label: string;
  value: string;
}

interface CaseStudy {
  title: string;
  headline: string;
  industry: string;
  metrics: Metric[];
  description: string;
  icon: JSX.Element;
}

function CaseStudiesPage(): JSX.Element {
  const caseStudies: CaseStudy[] = [
    {
      title: 'Eternal Soft Solutions',
      headline: 'Connected Eternal Soft Solutions with Fortune 500 Company',
      industry: 'IT Services',
      metrics: [
        { label: 'Deal Length Reduction', value: '8x' },
        { label: 'Client Type', value: 'Fortune 500' },
        { label: 'Sustainability', value: 'Long-term' }
      ],
      description: 'We hooked them up with a Fortune 500 company which sustained them for long periods of time, resulting in an 8x reduction in deal length due to high qualification processes',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Bond Media',
      headline: 'Opportunity Generated with Fortune 500 Companies',
      industry: 'Digital Media',
      metrics: [
        { label: 'Company Type', value: 'Fortune 500' },
        { label: 'Technology', value: 'AI/ML' },
        { label: 'Complexity', value: 'Advanced' }
      ],
      description: 'Involving developers including complex AI machine learning tasks',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Apexion',
      headline: 'Advanced Data Solutions for Renewable Energy Partners',
      industry: 'Renewable Energy',
      metrics: [
        { label: 'Data Complexity', value: 'Superior' },
        { label: 'System Type', value: 'AI Acquisition' },
        { label: 'Analytics Level', value: 'Advanced' }
      ],
      description: 'We\'ve helped with various data points for their renewable energy partners and built out AI client acquisition systems which incorporate levels of data higher than data scientists can even obtain',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Marx',
      headline: 'Enterprise-Level AI System Implementation',
      industry: 'Enterprise Technology',
      metrics: [
        { label: 'Cost Savings', value: '$100M+' },
        { label: 'Project Scale', value: 'Enterprise' },
        { label: 'Impact', value: 'Long-term' }
      ],
      description: 'We delivered for an enterprise client one of the largest projects - a very complex AI system which saves them hundreds of millions in long term costs',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'QSolar',
      headline: 'Revolutionary Client Acquisition Software',
      industry: 'Solar Energy',
      metrics: [
        { label: 'Software Type', value: 'Custom' },
        { label: 'Technology', value: 'AI Imaging' },
        { label: 'Automation', value: 'Advanced' }
      ],
      description: 'We\'re helping build a custom client acquisition software bespoke to QSolar which will revolutionize the way they gain clients due to AI imaging machine learning technologies and advanced automation systems',
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Client Success
              <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Discover how we've helped businesses achieve exceptional growth through innovative AI-powered solutions and strategic partnerships.
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
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-emerald-100 transition-colors shadow-sm hover:shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
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
                    <h3 className="text-xl text-emerald-600 font-semibold mb-4">
                      {study.headline}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {study.description}
                    </p>
                    <button className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors">
                      Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {study.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 rounded-xl text-center"
                      >
                        <p className="text-3xl font-bold text-emerald-600 mb-2">
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
                Let's discuss how we can help you achieve similar results with our proven AI-powered growth strategies.
              </p>
              <Link
                to="/schedule"
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-emerald-600 to-green-500 rounded-full hover:opacity-90 transition-opacity"
              >
                Schedule Your Growth Call <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudiesPage;