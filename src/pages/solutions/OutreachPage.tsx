import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Send, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProcessComparison from '../../components/ProcessComparison';

function OutreachPage() {
  const comparisonData = {
    title: "Outreach & Follow-up",
    traditional: {
      title: "Traditional Method",
      time: "3-4 hours/day",
      steps: [
        "✍️ Manual email writing",
        "📱 Individual follow-ups",
        "👀 Response tracking",
        "📅 Calendar management",
        "📋 Manual task scheduling"
      ]
    },
    automated: {
      title: "AI-Powered Solution",
      time: "10 mins/day",
      steps: [
        "🤖 AI-generated personalized messages",
        "🔄 Automated multi-channel outreach",
        "⚡ Smart follow-up sequences",
        "📊 Real-time analytics",
        "🎯 A/B testing optimization"
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
            Smart Outreach Automation
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Personalized multi-channel campaigns that adapt and improve with every interaction
          </p>
        </motion.div>

        <ProcessComparison {...comparisonData} />

        <div className="grid md:grid-cols-3 gap-12 mt-24">
          {[
            {
              icon: <MessageSquare className="w-8 h-8 text-primary-500" />,
              title: "Smart Personalization",
              description: "AI crafts unique messages based on prospect data and behavior"
            },
            {
              icon: <Mail className="w-8 h-8 text-primary-500" />,
              title: "Multi-Channel",
              description: "Seamlessly coordinate across email, LinkedIn, and other platforms"
            },
            {
              icon: <Zap className="w-8 h-8 text-primary-500" />,
              title: "Auto-Optimization",
              description: "Campaigns that learn and improve from response patterns"
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

export default OutreachPage;