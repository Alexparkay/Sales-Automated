import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, Users, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProcessComparison from '../../components/ProcessComparison';

function LeadResearchPage() {
  const comparisonData = {
    title: "Lead Research & Qualification",
    traditional: {
      title: "Traditional Method",
      time: "4-5 hours/day",
      steps: [
        "🔍 Manual LinkedIn searches",
        "👤 Individual profile reviews",
        "📝 Manual data entry",
        "✓ Basic qualification checks",
        "📊 Spreadsheet management"
      ]
    },
    automated: {
      title: "AI-Powered Solution",
      time: "15 mins/day",
      steps: [
        "🎯 Automated prospect matching",
        "🤖 AI-powered qualification",
        "⚡ Real-time data enrichment",
        "📈 Instant lead scoring",
        "🔄 Automated CRM updates"
      ]
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI-Powered Lead Research
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find your ideal prospects with precision targeting and automated research
          </p>
        </motion.div>

        <ProcessComparison {...comparisonData} />

        <div className="grid md:grid-cols-3 gap-12 mt-24">
          {[
            {
              icon: <Target className="w-8 h-8 text-primary-500" />,
              title: "Precision Targeting",
              description: "AI identifies your ideal customer profile and finds matching prospects"
            },
            {
              icon: <Database className="w-8 h-8 text-primary-500" />,
              title: "Enriched Data",
              description: "Comprehensive contact and company information automatically verified"
            },
            {
              icon: <Users className="w-8 h-8 text-primary-500" />,
              title: "Smart Segmentation",
              description: "Auto-categorize leads based on fit and potential value"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link to="/get-audit" className="btn-primary">
            Get Started <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LeadResearchPage;