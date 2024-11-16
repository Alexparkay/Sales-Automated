import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Workflow, Bot, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProcessComparison from '../../components/ProcessComparison';

function CustomSolutionsPage() {
  const comparisonData = {
    title: "Custom AI Solutions",
    traditional: {
      title: "Traditional Method",
      time: "Weeks/Months",
      steps: [
        "🔍 Manual process analysis",
        "📝 Custom development",
        "🔧 Multiple tools setup",
        "💼 Team training",
        "🐛 Ongoing maintenance"
      ]
    },
    automated: {
      title: "AI-Powered Solution",
      time: "Days",
      steps: [
        "🤖 AI process mapping",
        "⚡ Rapid deployment",
        "🔄 Seamless integration",
        "📊 Real-time optimization",
        "🚀 Continuous improvement"
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
            Custom AI Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Tailored AI automation solutions designed for your unique sales process
          </p>
        </motion.div>

        <ProcessComparison {...comparisonData} />

        <div className="grid md:grid-cols-3 gap-12 mt-24">
          {[
            {
              icon: <Settings className="w-8 h-8 text-primary-500" />,
              title: "Custom Integration",
              description: "Seamlessly connect with your existing tools and workflows"
            },
            {
              icon: <Workflow className="w-8 h-8 text-primary-500" />,
              title: "Process Automation",
              description: "Automate complex sales processes with custom AI workflows"
            },
            {
              icon: <Bot className="w-8 h-8 text-primary-500" />,
              title: "Specialized AI",
              description: "AI models trained specifically for your industry and needs"
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

export default CustomSolutionsPage;