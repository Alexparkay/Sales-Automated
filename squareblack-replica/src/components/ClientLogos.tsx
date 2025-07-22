import React from 'react';
import { motion } from 'framer-motion';

const ClientLogos: React.FC = () => {
  const clients = [
    { name: 'Kit', logo: '🎨' },
    { name: 'mBank', logo: '🏦' },
    { name: 'Reuters', logo: '📰' },
    { name: 'Comedy Central', logo: '🎭' },
    { name: 'Litecoin', logo: '₿' },
    { name: 'Decathlon', logo: '🏃' },
    { name: 'FxPro', logo: '📈' },
    { name: 'Viacom', logo: '📺' },
    { name: 'Samsung', logo: '📱' },
    { name: 'Booking', logo: '🏨' },
    { name: 'Nestle', logo: '🍫' },
    { name: 'Oriflame', logo: '💄' },
    { name: 'Paypo', logo: '💳' },
    { name: 'Renault', logo: '🚗' },
    { name: 'Vodafone', logo: '📞' },
  ];

  // Duplicate the array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-12 bg-black border-y border-gray-800">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-16"
            animate={{
              x: [0, -100 * clients.length],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{ width: 'max-content' }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 hover:border-gray-700 transition-colors">
                  <div className="text-2xl md:text-3xl opacity-70 hover:opacity-100 transition-opacity">
                    {client.logo}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;