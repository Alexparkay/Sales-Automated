import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Server, Cloud, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

function MSPsPage() {
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
            <source src="/videos/Growth3.mp4" type="video/mp4" />
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
                Managed Service Providers
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Transform your MSP business with AI-powered client acquisition systems that eliminate manual processes and guarantee predictable growth.
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
              The MSP Growth Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional outreach methods are no longer effective. Cold calls yield minimal results, manual processes drain resources, and competition is fiercer than ever.
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
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">150+ Calls, 5 Meetings</h3>
              <p className="text-gray-600">
                The average MSP sales rep makes 150 cold calls daily, resulting in just 1-5 meetings booked. That's a 97% failure rate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Server className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">70% Non-Selling Time</h3>
              <p className="text-gray-600">
                Sales reps spend 70% of their time on administrative tasks, data entry, and manual follow-ups instead of selling.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">67% Revenue Loss</h3>
              <p className="text-gray-600">
                MSPs lose 67% of potential revenue to inefficient processes, poor lead qualification, and missed opportunities.
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
              The Imperium Solution for MSPs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build complete AI-powered revenue engines specifically designed for MSP workflows and challenges.
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  AI-Powered Client Acquisition
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Intelligent Lead Targeting</h4>
                      <p className="text-gray-600">AI identifies and qualifies prospects based on technology stack, growth indicators, and buying signals.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Automated Multi-Channel Outreach</h4>
                      <p className="text-gray-600">Personalized sequences across email, LinkedIn, and phone that book meetings on autopilot.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dynamic Sales Enablement</h4>
                      <p className="text-gray-600">AI-generated proposals, real-time objection handling, and automated follow-ups.</p>
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
                    <source src="/videos/Growth3.mp4" type="video/mp4" />
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
              Results That Speak for Themselves
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
                8x
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Faster Deal Cycles</h3>
              <p className="text-gray-600">Reduce time to close with pre-qualified, high-intent prospects</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-4">
                500+
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fortune 500 Meetings</h3>
              <p className="text-gray-600">Connect with enterprise clients through our AI qualification system</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-4">
                3.5x
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Revenue Growth</h3>
              <p className="text-gray-600">Average revenue increase within 12 months of implementation</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your MSP?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the MSPs that have already revolutionized their growth with Imperium's AI-powered systems.
            </p>
            <Link
              to="/schedule"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get Your Custom Growth System <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default MSPsPage;