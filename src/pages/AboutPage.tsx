import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Users, Target, Rocket, Linkedin, Mail } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

function AboutPage() {
  const [imageLoadError, setImageLoadError] = useState({ alex: false, giacomo: false });

  const teamMembers = [
    {
      name: "Alex Kaymakanov",
      role: "Co-Founder & Head of Automation",
      image: "/images/alex.jpeg",
      bio: "Alex leads our automation and product development, bringing cutting-edge AI solutions to streamline sales processes.",
      linkedin: "https://www.linkedin.com/in/alexkaymakanov/",
      email: "alex@salesautomated.ai"
    },
    {
      name: "Giacomo Heddle",
      role: "Co-Founder & Head of Content Strategy",
      image: "/images/giacomo.jpeg",
      bio: "Giacomo drives our content strategy and creation, ensuring our solutions effectively communicate and deliver value to our clients.",
      linkedin: "https://www.linkedin.com/in/giacomoheddle/",
      email: "giacomo@salesautomated.ai"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-primary-50 via-white to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Message & Commitment
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              As co-founders, we share a commitment to making AI practical and impactful for businesses. Our partnership is built on shared values and a dedication to helping our clients see real results.
            </p>
            <p className="text-xl text-gray-600 mb-12">
              We've been fortunate to work with forward-thinking companies over the years, forming lasting partnerships that inspire us to keep improving.
            </p>
            <p className="text-xl text-gray-600">
              AI isn't just about technology—it's about creating value, building trust, and guiding businesses like yours to succeed in a changing world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6 mx-auto">
                <div className="w-64 h-64 mx-auto bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale"
                    onError={(e) => {
                      console.error(`Failed to load image: ${member.image}`);
                      const imgElement = e.target as HTMLImageElement;
                      imgElement.onerror = null;
                    }}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary-600 mb-4">{member.role}</p>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">{member.bio}</p>
              <div className="flex justify-center gap-4">
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-500 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href={`mailto:${member.email}`}
                  className="text-gray-600 hover:text-primary-500 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-white text-center mb-12">Building alliances with industry leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex justify-center">
                <img
                  src={`/images/partners/partner${i}.svg`}
                  alt={`Partner ${i}`}
                  className={`
                    w-auto object-contain opacity-70 hover:opacity-100 transition-opacity
                    ${i === 3 ? 'h-24' : i === 4 ? 'h-12' : 'h-16'} 
                    ${i === 4 || i === 5 ? 'grayscale contrast-125 brightness-200' : 'grayscale brightness-0 invert'}
                  `}
                  style={{
                    maxWidth: i === 3 ? '240px' : i === 4 ? '120px' : '160px',
                    minWidth: i === 3 ? '140px' : i === 4 ? '80px' : '100px',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;