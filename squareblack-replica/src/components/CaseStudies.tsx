import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ChevronDown } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const caseStudies = [
    {
      id: 1,
      title: 'Our design for KupFundusz investment platform made their conversion rates skyrocket',
      description: 'Case study soon',
      image: '📊',
      metric: 'x3',
      metricIcon: <TrendingUp className="w-6 h-6 text-green-400" />,
      visible: true,
    },
    {
      id: 2,
      title: 'Making the all-in-one shopping app smart, beautiful and easy to use on the go',
      description: 'Case study soon',
      image: '🛒',
      client: 'Paypo',
      visible: true,
    },
    {
      id: 3,
      title: 'The redesigned Storyplanet app connects travellers and guides around the world',
      description: 'Case study soon',
      image: '🗺️',
      client: 'Storyplanet',
      visible: true,
    },
    {
      id: 4,
      title: 'We designed over 200 web & mobile screens for Estimade, a system for SaaS companies',
      description: 'Case study soon',
      image: '💻',
      client: 'Estimade',
      visible: true,
    },
    {
      id: 5,
      title: 'We designed a modern, functional wallet for Litecoin, a popular cryptocurrency',
      description: 'Case study soon',
      image: '₿',
      client: 'Litecoin',
      visible: true,
    },
    {
      id: 6,
      title: 'After our website redesign, Medidesk & Vetidesk conversion rates increased 3 times',
      description: 'Case study soon',
      image: '⚕️',
      client: 'Medidesk',
      metric: 'x3',
      metricIcon: <TrendingUp className="w-6 h-6 text-green-400" />,
      visible: !showMore,
    },
    {
      id: 7,
      title: 'We redesigned Decathlon Rent main marketing & e-commerce website for web and mobile',
      description: 'Case study soon',
      image: '🏃',
      client: 'Decathlon',
      visible: !showMore,
    },
    {
      id: 8,
      title: 'Visual & functional overhaul for one of the biggest polish weekly magazines',
      description: 'Case study soon',
      image: '📰',
      client: 'Tygodnik Powszechny',
      visible: !showMore,
    },
    {
      id: 9,
      title: 'Visual & functional overhaul of marketing pages for fxPRO, the world\'s no 1 broker',
      description: 'Case study soon',
      image: '📈',
      client: 'fxPro',
      visible: !showMore,
    },
  ];

  const visibleCaseStudies = showMore ? caseStudies : caseStudies.slice(0, 5);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:gap-12">
          {visibleCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Metric Badge */}
              {study.metric && (
                <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 border border-green-400/30">
                  <span className="text-2xl font-bold text-green-400">{study.metric}</span>
                  {study.metricIcon}
                </div>
              )}

              <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 group-hover:shadow-2xl">
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-8xl md:text-9xl opacity-30 group-hover:opacity-50 transition-opacity">
                    {study.image}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white group-hover:text-green-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {study.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="btn btn-secondary group flex items-center gap-2 mx-auto"
          >
            {showMore ? 'Show less projects' : 'Show more projects (9)'}
            <ChevronDown className={`w-5 h-5 transition-transform ${showMore ? 'rotate-180' : ''}`} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;