import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Settings, Search, MessageCircle, Check } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <Settings className="w-8 h-8" />,
      title: 'Product design',
      price: '$10000',
      period: '/ sprint',
      description: 'One single sprint is enough for a Landing Page design. If you have a bigger project or want a partnership, the amount of sprints needed is estimated individually.',
      features: [
        'Your project is done by an experienced Senior Designer and conversion specialist: Michal or Diana.',
        'Disclaimer: Unlike other agencies, we never outsource projects or hire juniors to ensure the best quality of the work we deliver to our clients. You always work with us directly.',
        'You get individually tailored, modern and functional product design',
        'You get a PDF report with detailed explanation behind our design decisions',
        'You receive an expert guidance on conversion, optimisation & copywriting for the future growth',
        'Bank transfer payment in 2 installments (60/40)',
        'Friendly contact 5/7 via Slack'
      ],
      cta: 'Book a design sprint',
      highlight: true,
    },
    {
      id: 2,
      icon: <Search className="w-8 h-8" />,
      title: 'One-time audit',
      price: '$2500',
      period: '',
      description: 'We look at your product screenshots or recorded flows and create a report based on heuristic evaluation and our unique experience.',
      features: [
        'The audit is performed by an experienced Senior Lead Designer & conversion specialist: Michał or Diana',
        'Disclaimer: Unlike other agencies, we never outsource projects or hire juniors to ensure the best quality of the work we deliver to our clients. You always work with us directly.',
        'Audit brainstorming is done by the entire team',
        'You receive a PDF report with in-depth analysis, design recommendations, our expert guidance on conversion, optimisation & future growth',
        'Paid upfront via bank transfer',
        'Audit received via email'
      ],
      cta: 'Buy one-time audit',
      highlight: false,
    },
    {
      id: 3,
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Product exposure',
      price: 'Bonus',
      period: '',
      description: 'After the product launches, you can get extra publicity via our social media channels. At no extra cost.',
      features: [
        'For select projects Michal will do a case study on YouTube, X and Medium reaching a combined group of over 370,000 people to boost the awareness of your business.'
      ],
      cta: 'Learn more',
      highlight: false,
      bonus: true,
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book a design sprint or audit
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-gray-900 rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl ${
                service.highlight 
                  ? 'border-green-400 shadow-green-400/20' 
                  : service.bonus 
                    ? 'border-yellow-400 shadow-yellow-400/20' 
                    : 'border-gray-800 hover:border-gray-700'
              }`}
            >
              {/* Badge */}
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-400 text-black px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              {service.bonus && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium">
                  Bonus
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  service.highlight 
                    ? 'bg-green-400 text-black' 
                    : service.bonus 
                      ? 'bg-yellow-400 text-black' 
                      : 'bg-gray-800 text-white'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">
                    {service.price}
                  </span>
                  <span className="text-gray-400">
                    {service.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 text-center">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center">
                <button className={`btn group flex items-center gap-2 w-full justify-center ${
                  service.highlight 
                    ? 'btn-accent' 
                    : service.bonus 
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                      : 'btn-primary'
                }`}>
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Contact info */}
              <div className="text-center mt-4">
                <a 
                  href="mailto:hello@squareblack.com" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Questions? Write to us
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 relative"
        >
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Curious on how we can{' '}
              <span className="inline-flex items-center gap-2">
                enhance
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14l3-3 3 3" />
                </svg>
              </span>
              {' '}the conversion & quality of your product?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button className="btn bg-black text-white hover:bg-gray-800 border-black">
                Book a call with Michal
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-black">
                We're available to talk
              </p>
            </div>
            <p className="text-black mt-4">
              Or write to us at{' '}
              <a href="mailto:hello@squareblack.com" className="underline font-medium">
                hello@squareblack.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;