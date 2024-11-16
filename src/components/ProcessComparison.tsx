import React from 'react';
import { motion } from 'framer-motion';

interface ProcessComparisonProps {
  title: string;
  traditional: {
    title: string;
    time: string;
    steps: string[];
  };
  automated: {
    title: string;
    time: string;
    steps: string[];
  };
}

const ProcessComparison: React.FC<ProcessComparisonProps> = ({ title, traditional, automated }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">{title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Traditional Method */}
        <div className="bg-red-50 rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
              Traditional Way • {traditional.time}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-6">{traditional.title}</h3>
          <div className="space-y-4">
            {traditional.steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-1 h-12 bg-red-200" />
                <div className="flex-1 bg-white/50 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-medium">{step}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="text-5xl font-bold text-red-600">{traditional.time}</div>
            <div className="text-sm text-gray-600 mt-2">Average Time</div>
          </div>
        </div>

        {/* Automated Solution */}
        <div className="bg-green-50 rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
              Our Solution • {automated.time}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-6">{automated.title}</h3>
          <div className="space-y-4">
            {automated.steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-1 h-12 bg-green-200" />
                <div className="flex-1 bg-white/50 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-medium">{step}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="text-5xl font-bold text-green-600">{automated.time}</div>
            <div className="text-sm text-gray-600 mt-2">Average Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessComparison;