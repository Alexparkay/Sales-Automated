import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProcessComparison from '../../components/ProcessComparison';

function SchedulingPage() {
  const comparisonData = {
    title: "Meeting Scheduling",
    traditional: {
      title: "Traditional Method",
      time: "2-3 hours/day",
      steps: [
        "📧 Manual email coordination",
        "🗓️ Calendar checking",
        "⏰ Timezone calculations",
        "📝 Manual follow-ups",
        "📋 Meeting prep reminders"
      ]
    },
    automated: {
      title: "AI-Powered Solution",
      time: "5 mins/day",
      steps: [
        "🤖 AI scheduling assistant",
        "🔄 Auto timezone detection",
        "📅 Smart calendar optimization",
        "✨ Automated reminders",
        "📊 Meeting analytics"
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
            AI Meeting Scheduler
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Eliminate scheduling back-and-forth with intelligent calendar management
          </p>
        </motion.div>

        <ProcessComparison {...comparisonData} />

        <div className="grid md:grid-cols-3 gap-12 mt-24">
          {[
            {
              icon: <Calendar className="w-8 h-8 text-primary-500" />,
              title: "Smart Scheduling",
              description: "AI finds the perfect meeting time across multiple calendars"
            },
            {
              icon: <Globe className="w-8 h-8 text-primary-500" />,
              title: "Time Zone Smart",
              description: "Automatic time zone detection and conversion"
            },
            {
              icon: <Clock className="w-8 h-8 text-primary-500" />,
              title: "Buffer Control",
              description: "Intelligent meeting spacing and preparation time"
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

export default SchedulingPage;