import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  image,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="card"
    >
      <div className="flex items-start gap-4 mb-4">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </motion.div>
  );
};

export default TestimonialCard;