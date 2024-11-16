import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function AuditPage() {
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [showPrompts, setShowPrompts] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo(0, 0);
    }
  }, [isSubmitted]);

  const messagePrompts = [
    {
      title: "Current Process",
      text: "Our current sales process involves manual prospecting and follow-ups. Looking to automate and scale."
    },
    {
      title: "Lead Generation",
      text: "We need help finding and qualifying leads more efficiently. Currently spending too much time on research."
    },
    {
      title: "Outreach",
      text: "Want to automate our outreach while keeping it personal. Looking for ways to improve response rates."
    },
    {
      title: "Time Management",
      text: "Our team spends too much time on administrative tasks instead of building relationships with prospects."
    },
    {
      title: "Scale Challenge",
      text: "We're growing rapidly and need to scale our sales operations without losing quality of engagement."
    },
    {
      title: "Integration",
      text: "Looking to integrate AI with our existing CRM and sales tools to streamline our workflow."
    }
  ];

  const handlePromptClick = (promptText: string) => {
    setSelectedPrompt(promptText);
    setShowPrompts(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://hook.eu2.make.com/pmnejvr8w8t0uncr18rlzzpk1thpjd8s', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          window.open('https://calendar.app.google/ZEtwGVn76QbsDnzr9', '_blank');
        }, 100);
      } else {
        console.error('Webhook submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary-50">
              <Check className="w-8 h-8 text-primary-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thank You!
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              We've received your information and our team will shortly start working on where we can improve your sales process using information you've provided.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              You'll receive your detailed audit report via email shortly. We'll go through the findings and our recommendations during our upcoming Google Meet call.
            </p>
            <p className="text-gray-600 mb-8">
              We've opened our calendar in a new tab for you to schedule the discussion.
            </p>
            <p className="text-gray-500">
              If the calendar didn't open automatically, please{' '}
              <a 
                href="https://calendar.app.google/ZEtwGVn76QbsDnzr9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600"
              >
                click here
              </a>
              {' '}to schedule your meeting.
            </p>
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get Your Free AI Sales Audit
              </h1>
              <p className="text-xl text-gray-600">
                Let's analyze your current sales process and show you how AI can help
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Work email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyUrl" className="block text-sm font-medium mb-2">Company LinkedIn URL</label>
                  <div className="relative">
                    <input
                      type="url"
                      id="companyUrl"
                      name="companyUrl"
                      placeholder="https://linkedin.com/company/your-company"
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                    <Linkedin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium mb-2">What is your main interest?</label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Select your main area of interest...</option>
                  <option value="lead-research">AI Lead Research</option>
                  <option value="outreach">Smart Outreach</option>
                  <option value="scheduling">Meeting Scheduling</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Tell us about your current process</label>
                {showPrompts && (
                  <>
                    <p className="text-sm text-gray-500 mb-3">Here are some quick starters to help you describe your needs:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {messagePrompts.map((prompt) => (
                        <button
                          key={prompt.title}
                          type="button"
                          onClick={() => handlePromptClick(prompt.text)}
                          className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors"
                        >
                          {prompt.title}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={selectedPrompt}
                  onChange={(e) => setSelectedPrompt(e.target.value)}
                  onClick={() => setShowPrompts(true)}
                  placeholder="Describe your current sales process and challenges..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-4 rounded-lg transition-colors mt-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get Your Free AI Audit'}
              </button>
            </motion.form>
          </>
        )}
      </div>
    </div>
  );
}

export default AuditPage;