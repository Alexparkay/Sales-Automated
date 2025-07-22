import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Target, TrendingUp, Users } from 'lucide-react';

const WhyWeDifferent: React.FC = () => {
  const industries = [
    'Healthcare', 'Telecoms', 'Media', 'E-commerce', 'SaaS Startups', 'Payments',
    'Television', 'Banking', 'Manufacturing', 'Fintech', 'Sports & Fitness', 'Travel',
    'Food industry', 'Cryptocurrency', 'Cosmetics', 'Loyalty programmes', 'Automotive',
    'Big-data', 'Podcasting', 'Marketplaces', 'E-learning', 'Creator economy'
  ];

  const duplicatedIndustries = [...industries, ...industries];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Industries Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 text-gray-600 text-lg font-medium"
              animate={{
                x: [0, -100 * industries.length],
              }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              style={{ width: 'max-content' }}
            >
              {duplicatedIndustries.map((industry, index) => (
                <span key={`${industry}-${index}`} className="whitespace-nowrap">
                  {industry}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Column - Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">25 years of cross-industry experience in product design</h3>
              </div>
            </div>
            <p className="text-gray-400 text-lg">
              We did over 400 projects for dozens of industries from banking, TV channels all the way to pregnancy trackers.
            </p>
          </motion.div>

          {/* Center Column - Conversion Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-red-400 mb-2">0%</div>
                  <p className="text-gray-400">Most websites convert poorly</p>
                  <p className="text-sm text-gray-600">(bad UI, UX & SEO practices, missed product potential)</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-green-400 mb-2">🚀</div>
                  <p className="text-gray-400">Squareblack designs for conversion</p>
                  <p className="text-sm text-gray-600">(heuristic analysis based + regular optimization)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Conversion Focus */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Conversion-centric design, that turns visitors into clients</h3>
              </div>
            </div>
            <p className="text-gray-400 text-lg">
              Close more clients & grow business with highly optimized design, tailored to drive purchases and engagement.
            </p>
          </motion.div>
        </div>

        {/* Strategy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Long term optimization strategy & planning</h3>
            </div>
            <p className="text-gray-400 text-xl">
              We don't just design. We plan ahead on how to test, refine and further optimize the product so it continues growing.
            </p>
          </div>
        </motion.div>

        {/* Design Decisions Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Design decisions. Explained.</h3>
            </div>
            <p className="text-gray-400 text-xl">
              All the design decisions are explained in a PDF document when you receive the first project draft.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWeDifferent;