import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Cory Miller',
      company: 'Kit.com',
      country: '🇺🇸',
      title: 'Outstanding work.',
      content: 'We\'re impressed of the quality of their designs and quick response times. The team always responded within hours whenever we need changes to be made on the prototype itself.',
      avatar: '👨‍💼',
    },
    {
      id: 2,
      name: 'Chris Lawrence',
      company: 'Swap.fm',
      country: '🇺🇸',
      title: 'The Squareblack team was open minded and resolved every issue quickly.',
      content: 'Our website received great feedback & the conversion rate has increased. Everything was delivered on time!',
      avatar: '👨‍💻',
    },
    {
      id: 3,
      name: 'Monika Starega',
      company: 'Head of Marketing at VIACOM',
      country: '🇵🇱',
      title: 'We consider them as professionals.',
      content: 'The team was very creative and provided us with a very high quality outcome of their work. They responded quickly to our remarks and proved to be focused on details.',
      avatar: '👩‍💼',
    },
    {
      id: 4,
      name: 'Dorota Pietrzak',
      company: 'Analizy Online',
      country: '🇵🇱',
      title: 'The Squareblack team was insightful and I had an excellent experience working with them.',
      content: 'The team were able to deliver something fast that also looked good. They\'re responsive and they performed very well.',
      avatar: '👩‍💻',
    },
    {
      id: 5,
      name: 'Charlie Sumner',
      company: 'Wholesale Central',
      country: '🇺🇸',
      title: 'We\'ve found that Squareblack is truly a result-driven partner.',
      content: 'The team impressed us with their flexibility. They provide good value and quick response to changes in the project.',
      avatar: '👨‍💼',
    },
    {
      id: 6,
      name: 'Rafał Młodzki',
      company: 'CEO of Photoaid',
      country: '🇵🇱',
      title: 'The Squareblack team was knowledgeable, experienced, responsive, prompt and always provided full explanation.',
      content: 'The conversion rate on our forms has increased, which was the main goal of our website redesign.',
      avatar: '👨‍💻',
    },
    {
      id: 7,
      name: 'Krzysztof Ogniewski',
      company: 'CEO at Elevato',
      country: '🇵🇱',
      title: 'Squareblack added great value with their insight into current trends and protocols.',
      content: 'The team became a key partner in achieving our outcome. The level of communication and quality of work left nothing to be desired.',
      avatar: '👨‍💼',
    },
    {
      id: 8,
      name: 'Ryan Dewhurst',
      company: 'CEO of WPScan',
      country: '🇺🇸',
      title: 'The quality and speed of the team\'s work were impressive.',
      content: 'The workflow between our teams was very effective and we\'re happy with the results.',
      avatar: '👨‍💻',
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
            People love working with us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-6 h-6 text-gray-600" />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {testimonial.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {testimonial.content}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{testimonial.country}</span>
                    <h5 className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </h5>
                  </div>
                  <p className="text-gray-500 text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center mt-12 gap-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-gray-700 hover:bg-gray-500 transition-colors"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;