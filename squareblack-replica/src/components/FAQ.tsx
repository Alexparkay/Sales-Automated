import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who will I be working with?',
      answer: 'You will either work with Michal or Diana - designers with over 20 years of experience. One of us will do most of the work, but we brainstorm all the major ideas together. We do not outsource design work to anyone else, like most companies do. This is also why we often have a waiting list for projects.'
    },
    {
      question: 'What differentiates you from other companies?',
      answer: 'We worked on over 500 products from practically every category. From financial portals and banking, all the way to mobile games and pregnancy trackers. That experience, combined with our unique methods (typeframing, hierarchy strips etc.) means we don\'t just "make pretty pixels". We work on a project in a way for it to meet your business goals and the final, beautiful UI is just a cherry on top. It has to work and make you money first. That\'s also why for most projects we provide post-launch strategy on what you can tweak, test and optimize later to continue growing.'
    },
    {
      question: 'How can I benefit from working with you?',
      answer: 'You have access to very experienced designers. We worked on practically every product category - from financial portals, through medical, banking, lifestyle, art, IoT devices and more. We worked on over 500 different apps and websites already and that experience allows us to guide you to a better design outcome faster.'
    },
    {
      question: 'Are you suitable for my business?',
      answer: 'We work with a wide range of companies - from Fortune500 all the way to single-founder startups.'
    },
    {
      question: 'How do we start and how your process looks?',
      answer: 'We adjust the design process to fit and match each client needs. We start with finding out what the business needs and looking at past data if there\'s any. This can include analytics, user comments or visual analytics recordings. Based on that we usually prepare a roadmap and plan to achieve the best result in the shortest time. We often start with a typeframe to get the initial flows down. Most of the iterations are happening on that stage. The final, beautiful, high-fidelity design comes once we have a full plan on how the website or app will achieve the goals it had set to achieve. That\'s the only way to ensure it won\'t just look beautiful, but also exceed its business goals.'
    },
    {
      question: 'What is a design sprint?',
      answer: 'Our design sprints are outcome based. They range from 2-3 weeks, depending on the complexity of the project and usually include a typeframing part and a high-fidelity design part. The typeframing part also consists of research and a small audit, so that we can make the right decisions in the design phase. A typical single sprint is often enough to complete one, full Landing Page design for desktops and phones. Or a big part of a mobile app.'
    },
    {
      question: 'I have a designer/I don\'t have a designer',
      answer: 'We often work with companies that already have a designer or a design team. In that case we focus on the most complex tasks and guiding the in-house design team. In many companies without a designer we work for a couple of months to get the product going and then recommend an in-house, guided by us designer and decrease the number of our own hours to mostly consulting related tasks.'
    },
    {
      question: 'Can you also code the project for me?',
      answer: 'We are not a software house, but we can code Landing Pages and simple web apps using React (Astro) and NextJS. A coding sprint (2 weeks) is $4000.'
    },
    {
      question: 'How does the communication look like?',
      answer: 'We create a shared Slack for daily communication. All project comms are handled through comments in our design software. We avoid calls because they break us out of the design flow - it\'s simply less efficient. This is why after the first, introductory call, any other call is counted as twice the number of hours it took. We prefer to design in that time.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 text-gray-400">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact for more questions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">
              More questions?
            </p>
            <a
              href="mailto:hello@squareblack.com"
              className="text-green-400 hover:text-green-300 font-medium transition-colors"
            >
              hello@squareblack.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;