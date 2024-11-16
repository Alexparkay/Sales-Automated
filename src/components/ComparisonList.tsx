import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ComparisonList = () => {
  const features = [
    {
      emoji: "🎯",
      text: "AI-powered lead generation and qualification"
    },
    {
      emoji: "✨",
      text: "99.9% prospect match accuracy"
    },
    {
      emoji: "💬",
      text: "Smart multi-channel outreach"
    },
    {
      emoji: "📅",
      text: "Automated meeting scheduling"
    },
    {
      emoji: "📊",
      text: "Real-time performance analytics"
    },
    {
      emoji: "⚡",
      text: "24/7 automated follow-ups"
    },
    {
      emoji: "🛡️",
      text: "Enterprise-grade security"
    },
    {
      emoji: "🚀",
      text: "10X faster than manual processes"
    },
    {
      emoji: "🤝",
      text: "95% client satisfaction rate"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why Sales Automated is the{' '}
            <span className="text-primary-500">Right Choice</span>?
          </h2>
          <p className="text-lg text-gray-600">
            Our AI-powered platform brings all the benefits of automated sales without the complexity, 
            delivering real results through advanced automation and intelligent optimization.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-[1fr,1fr] shadow-2xl rounded-xl overflow-hidden">
            <div className="divide-y divide-gray-100">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white h-[72px] px-6"
                >
                  <span className="text-xl mr-2">{feature.emoji}</span>
                  <span className="text-xs sm:text-sm md:text-base font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-primary-500">
              {features.map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-center h-[72px]"
                >
                  <div className="bg-white/20 rounded-full p-3">
                    <CheckCircle2 className="text-white w-5 h-5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonList;