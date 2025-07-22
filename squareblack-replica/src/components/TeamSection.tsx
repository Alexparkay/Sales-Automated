import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Youtube, Book, Users } from 'lucide-react';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Michal',
      title: 'Product designer, university teacher (IDF, SWPS), writer and conference speaker',
      experience: '25+ years of industry experience (since 1998)',
      description: 'Michal has worked on projects for global brands like Orange, Samsung, Nestle, BMW, Renault, mBank, Seachange, Thomson Reuters and many emerging startups.',
      achievements: [
        'Shares his design knowledge at his popular YouTube channel',
        'Writes articles on Medium',
        'Created over 20 design courses and runs a Design Academy',
        'His learning materials inspired over 200,000 designers',
        'He also coined the terms Neumorphism and Glassmorphism'
      ],
      avatar: '👨‍💻',
      links: {
        youtube: 'https://www.youtube.com/@MalewiczHype',
        medium: 'https://michalmalewicz.medium.com/',
        academy: 'https://hype4.academy/'
      }
    },
    {
      id: 2,
      name: 'Diana',
      title: 'Product designer with 15+ years of industry experience and strong fintech background',
      experience: '15+ years of industry experience',
      description: 'Through the years, Diana was responsible for various redesigns, rebrandings and usability upgrades for many noticeable polish and international clients.',
      achievements: [
        'Worked with Viacom, Booking Holdings, Analizy.pl, Payback, Paypo',
        'Experience with Sage, Decathlon, Wolters Kluwer, Oriflame',
        'Specialized in fintech and e-commerce projects',
        'Expert in conversion optimization and user experience'
      ],
      avatar: '👩‍💻',
      links: {}
    }
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
            More information
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              {/* Avatar and Greeting */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                  {member.avatar}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Hello, {index === 0 ? "it's" : "I'm"} {member.name} 👋
                  </h3>
                </div>
              </div>

              {/* Title and Experience */}
              <div className="mb-6">
                <p className="text-gray-300 text-lg mb-2">{member.title}</p>
                <p className="text-green-400 font-medium">{member.experience}</p>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {member.description}
              </p>

              {/* Achievements */}
              <div className="space-y-3 mb-6">
                {member.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>

              {/* Links */}
              {Object.keys(member.links).length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {member.links.youtube && (
                    <a
                      href={member.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Youtube className="w-4 h-4" />
                      <span className="text-sm">YouTube</span>
                    </a>
                  )}
                  {member.links.medium && (
                    <a
                      href={member.links.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Medium</span>
                    </a>
                  )}
                  {member.links.academy && (
                    <a
                      href={member.links.academy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Book className="w-4 h-4" />
                      <span className="text-sm">Design Academy</span>
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Client Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Our clients 50+
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-12">
            {[
              { name: 'Viacom', description: 'Multiple web campaigns for Viacom subbrands in over 12 European markets.', icon: '📺' },
              { name: 'Oriflame', description: 'Two separate app designs for Oriflame resellers and customers for iOS and Android.', icon: '💄' },
              { name: 'Samsung', description: 'Multiple promo apps for new Samsung Galaxy Release events in Canada.', icon: '📱' },
              { name: 'Comedy Central', description: 'Campaign websites and engagement apps for stand-up comedy shows.', icon: '🎭' },
              { name: 'FxPro', description: 'One of FxPro landing page designs, audit and annotations on how to grow the brand.', icon: '📈' },
              { name: 'Vodafone', description: 'Vodafone customer support app for iOS, Android and Blackberry phones.', icon: '📞' },
              { name: 'Litecoin', description: 'Official Litecoin mobile app wallet design, website and promo materials.', icon: '₿' },
              { name: 'Booking Holdings', description: 'Visual evaluation of one of the hotel booking apps in glassmorphic style.', icon: '🏨' },
              { name: 'Kit', description: 'Building the webpages around the most recent convertkit to kit rebranding.', icon: '🎨' },
              { name: 'Nestle', description: 'Design and game ideas for kids around the candy brands. Interactive websites.', icon: '🍫' },
              { name: 'Decathlon', description: 'Decathlon rent redesign and flow changes for desktop and mobile breakpoints.', icon: '🏃' },
              { name: 'Renault', description: 'Renault Driver School website, invite templates and marketing materials.', icon: '🚗' },
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {client.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{client.name}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <button className="btn btn-secondary group">
              Show full list (50)
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;