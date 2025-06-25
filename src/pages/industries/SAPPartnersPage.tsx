import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Cpu, BarChart3, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

function SAPPartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src="/videos/Growth5.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Solutions for
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                SAP Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Scale your SAP consulting practice with intelligent lead generation that identifies and engages enterprise-ready prospects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The SAP Partner Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SAP partners face unique challenges in reaching enterprise clients. Long sales cycles, complex decision-making processes, and intense competition require a sophisticated approach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">18-Month Sales Cycles</h3>
              <p className="text-gray-600">
                Enterprise SAP implementations require extensive stakeholder buy-in, creating lengthy sales processes that drain resources.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complex Decision-Making</h3>
              <p className="text-gray-600">
                Multiple stakeholders, budget committees, and technical evaluations make it difficult to navigate enterprise accounts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Limited Pipeline Visibility</h3>
              <p className="text-gray-600">
                Identifying companies ready for SAP transformation is like finding a needle in a haystack without the right tools.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Imperium Solution for SAP Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered systems that identify enterprise prospects ready for digital transformation and engage them with precision.
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Enterprise-Focused AI Systems
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Intent Signal Detection</h4>
                      <p className="text-gray-600">AI monitors digital transformation signals, leadership changes, and growth indicators to identify prospects.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Stakeholder Mapping</h4>
                      <p className="text-gray-600">Automatically identify and engage all decision-makers in the enterprise buying committee.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Enterprise Messaging</h4>
                      <p className="text-gray-600">Industry-specific value propositions that resonate with C-suite executives and IT leaders.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/Growth5.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Results for SAP Partners
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-4">
                73%
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Shorter Sales Cycles</h3>
              <p className="text-gray-600">Reduce enterprise sales cycles by pre-qualifying and nurturing prospects</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-4">
                $10M+
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pipeline Generated</h3>
              <p className="text-gray-600">Average pipeline value generated within first 6 months</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-4">
                42%
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Win Rate Increase</h3>
              <p className="text-gray-600">Higher close rates with better qualified opportunities</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12 text-center"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              SAP Partner Success Story
            </h3>
            <p className="text-xl text-gray-700 mb-8">
              "Imperium helped us connect with multiple Fortune 500 companies ready for SAP S/4HANA migration. Their AI system identified opportunities we would have never found, resulting in our largest deal ever - a $50M implementation project."
            </p>
            <p className="text-lg font-semibold text-emerald-600">
              - Director of Business Development, Global SAP Partner
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Scale Your SAP Practice?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the SAP partners using AI to win more enterprise deals.
            </p>
            <Link
              to="/schedule"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get Your Enterprise Growth System <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default SAPPartnersPage;