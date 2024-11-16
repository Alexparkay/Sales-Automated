import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, ArrowRight, Target, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

function CareersPage() {
  const positions = [
    {
      title: "Full Stack Software Developer",
      location: "Remote",
      type: "Full-time",
      description: "Join our engineering team to build cutting-edge AI sales automation solutions.",
      requirements: [
        "3+ years of experience with React and Node.js",
        "Experience with TypeScript and modern web technologies",
        "Strong understanding of software architecture and design patterns",
        "Background in AI/ML is a plus"
      ]
    },
    {
      title: "Editor/Videographer",
      location: "Remote",
      type: "Full-time",
      description: "Create compelling content that showcases our AI solutions and success stories.",
      requirements: [
        "3+ years of video editing experience",
        "Proficiency in Adobe Creative Suite",
        "Strong storytelling abilities",
        "Experience with B2B content creation"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join Our Mission
          </h1>
          <p className="text-xl text-gray-600">
            Help us revolutionize the future of sales with AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} />
                    <span>{position.location}</span>
                  </div>
                </div>
                <span className="bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium">
                  {position.type}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">{position.description}</p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Requirements:</h4>
                <ul className="space-y-3">
                  {position.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3 text-gray-600">
                      <ArrowRight size={18} className="mt-1 flex-shrink-0 text-primary-500" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors w-full justify-center font-medium"
              >
                Apply Now <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Target className="w-8 h-8 text-primary-500" />,
                title: "Innovation",
                description: "Work with cutting-edge AI technology and shape the future of sales"
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-primary-500" />,
                title: "Growth",
                description: "Continuous learning opportunities and career development paths"
              },
              {
                icon: <Zap className="w-8 h-8 text-primary-500" />,
                title: "Impact",
                description: "Make a real difference in how businesses approach sales globally"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareersPage;