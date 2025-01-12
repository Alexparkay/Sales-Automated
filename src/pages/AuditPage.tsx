import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Globe, ArrowRight } from 'lucide-react';

function AuditPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    message: '',
    companyUrl: '',
    interest: '',
    firstName: '',
    lastName: '',
    countryCode: '🇺🇸',
    phonePrefix: '+1',
    phone: '',
    email: '',
    companyName: ''
  });
  const [showPrompts, setShowPrompts] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 6;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePromptClick = (promptText: string) => {
    setFormData({
      ...formData,
      message: promptText
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the data with combined phone number
    const submitData = {
      ...formData,
      fullName: `${formData.firstName} ${formData.lastName}`,
      phone: `${formData.phonePrefix}${formData.phone}`,
      country: countryCodes.find(c => c.flag === formData.countryCode)?.country || '',
    };

    try {
      const response = await fetch('https://hook.eu2.make.com/lrsxr5yvoqerm5bbms14o98wpk0c1bml', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Webhook submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.shiftKey) {
        // Allow new line in textarea when Shift+Enter is pressed
        if (e.target instanceof HTMLTextAreaElement) {
          const { selectionStart, selectionEnd } = e.target;
          const newValue = formData.message.slice(0, selectionStart) + '\n' + formData.message.slice(selectionEnd);
          setFormData({
            ...formData,
            message: newValue
          });
        }
      } else {
        // Only proceed to next question on Enter without Shift
        if (currentStep < totalSteps) {
          handleNext();
        } else if (currentStep === totalSteps) {
          handleSubmit(e as any);
        }
      }
    }
  };

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

  const countryCodes = [
    { flag: '🇺🇸', prefix: '+1', country: 'United States' },
    { flag: '🇬🇧', prefix: '+44', country: 'United Kingdom' },
    { flag: '🇦🇺', prefix: '+61', country: 'Australia' },
    { flag: '🇫🇷', prefix: '+33', country: 'France' },
    { flag: '🇩🇪', prefix: '+49', country: 'Germany' },
    { flag: '🇯🇵', prefix: '+81', country: 'Japan' },
    { flag: '🇨🇳', prefix: '+86', country: 'China' },
    { flag: '🇮🇳', prefix: '+91', country: 'India' },
    { flag: '🇷🇺', prefix: '+7', country: 'Russia' },
    { flag: '🇧🇷', prefix: '+55', country: 'Brazil' },
    { flag: '🇪🇸', prefix: '+34', country: 'Spain' },
    { flag: '🇮🇹', prefix: '+39', country: 'Italy' },
    { flag: '🇳🇱', prefix: '+31', country: 'Netherlands' },
    { flag: '🇸🇪', prefix: '+46', country: 'Sweden' },
    { flag: '🇳🇴', prefix: '+47', country: 'Norway' },
    { flag: '🇩🇰', prefix: '+45', country: 'Denmark' },
    { flag: '🇫🇮', prefix: '+358', country: 'Finland' },
    { flag: '🇵🇱', prefix: '+48', country: 'Poland' },
    { flag: '🇭🇺', prefix: '+36', country: 'Hungary' },
    { flag: '🇨🇿', prefix: '+420', country: 'Czech Republic' },
    // Add more country codes as needed
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-left">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-gray-500 text-sm">1→</span>
                <h2 className="text-2xl font-medium">What do you want to automate?</h2>
              </div>
              <p className="text-gray-500 text-sm ml-6 mb-6">
                Tell us which areas of your business need automation
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4 ml-6">
                {messagePrompts.map((prompt) => (
                  <button
                    key={prompt.title}
                    type="button"
                    onClick={() => handlePromptClick(prompt.text)}
                    className={`text-xs px-3 py-1.5 ${
                      formData.message === prompt.text 
                        ? 'bg-black text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                    } rounded-full transition-colors`}
                  >
                    {prompt.title}
                  </button>
                ))}
              </div>
              <div className="ml-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      if (e.shiftKey) {
                        // Add new line
                        const { selectionStart, selectionEnd } = e.currentTarget;
                        const newValue = formData.message.slice(0, selectionStart) + '\n' + formData.message.slice(selectionEnd);
                        setFormData({
                          ...formData,
                          message: newValue
                        });
                      } else if (formData.message.trim()) { // Only proceed if there's content
                        handleNext();
                      }
                    }
                  }}
                  placeholder="Type your answer here..."
                  className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black outline-none px-0 py-2 transition-colors text-2xl leading-relaxed placeholder:text-gray-400"
                  style={{
                    resize: 'none',
                    overflow: 'hidden',
                    minHeight: '3rem',
                    height: 'auto'
                  }}
                />
                <div className="mt-2 text-sm text-gray-400">
                  press Enter ↵ (Shift+Enter for new line)
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-left">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-gray-500 text-sm">2→</span>
                <h2 className="text-2xl font-medium">What's your company website?</h2>
              </div>
              <p className="text-gray-500 text-sm ml-6 mb-6">
                If you don't have a website URL, please add your LinkedIn profile
              </p>
              <div className="ml-6">
                <input
                  type="text"
                  name="companyUrl"
                  value={formData.companyUrl}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="https://"
                  className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black outline-none px-0 py-2 transition-colors text-2xl placeholder:text-gray-400"
                />
                <div className="mt-2 text-sm text-gray-400">
                  press Enter ↵
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-left">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-gray-500 text-sm">3→</span>
                <h2 className="text-2xl font-medium">Which automations interest you most?</h2>
              </div>
              <p className="text-gray-500 text-sm ml-6 mb-6">
                Select the main area you'd like to focus on
              </p>
              <div className="ml-6">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black outline-none px-0 py-2 transition-colors text-2xl appearance-none cursor-pointer"
                >
                  <option value="" disabled>Choose an option...</option>
                  <option value="lead-research" className="py-2">🎯 AI Lead Research</option>
                  <option value="outreach" className="py-2">💬 Smart Outreach</option>
                  <option value="scheduling" className="py-2">📅 Meeting Scheduling</option>
                  <option value="custom" className="py-2">⚡ Custom Solution</option>
                </select>
                <div className="mt-2 text-sm text-gray-400">
                  press Enter ↵
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-left">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-gray-500 text-sm">4→</span>
                <h2 className="text-2xl font-medium">Tell us about yourself</h2>
              </div>
              <div className="ml-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName || ''}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="First name"
                    className="bg-transparent border-b-2 border-gray-300 focus:border-black outline-none px-0 py-2 transition-colors text-2xl"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName || ''}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Last name"
                    className="bg-transparent border-b-2 border-gray-300 focus:border-black outline-none px-0 py-2 transition-colors text-2xl"
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={(e) => {
                      const country = countryCodes.find(c => c.flag === e.target.value);
                      if (country) {
                        setFormData({
                          ...formData,
                          countryCode: country.flag,
                          phonePrefix: country.prefix
                        });
                      }
                    }}
                    className="w-[120px] bg-transparent border-b-2 border-gray-300 focus:border-black outline-none px-0 py-2 transition-colors text-2xl appearance-none cursor-pointer text-center"
                  >
                    {countryCodes.map(({ flag, country }) => (
                      <option key={flag} value={flag} className="text-xl">
                        {flag} {country}
                      </option>
                    ))}
                  </select>
                  <div className="flex items-center gap-1 flex-1">
                    <span className="text-2xl text-gray-500 min-w-[60px]">{formData.phonePrefix}</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        // Only allow numbers
                        const value = e.target.value.replace(/[^0-9]/g, '');
                        setFormData({
                          ...formData,
                          phone: value
                        });
                      }}
                      onKeyPress={(e) => {
                        // Prevent non-numeric input
                        if (!/[0-9]/.test(e.key) && e.key !== 'Enter') {
                          e.preventDefault();
                        }
                        // Handle Enter key
                        if (e.key === 'Enter') {
                          handleKeyPress(e);
                        }
                      }}
                      placeholder="Phone number"
                      className="flex-1 bg-transparent border-b-2 border-gray-300 focus:border-black outline-none px-0 py-2 transition-colors text-2xl"
                      inputMode="numeric" // Shows numeric keyboard on mobile
                      pattern="[0-9]*" // Additional validation for numbers only
                    />
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  press Enter ↵
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-left">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-gray-500 text-sm">5→</span>
                <h2 className="text-2xl font-medium">What's your email?</h2>
              </div>
              <div className="ml-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="name@company.com"
                  className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black outline-none px-0 py-2 transition-colors text-2xl placeholder:text-gray-400"
                />
                <div className="mt-2 text-sm text-gray-400">
                  press Enter ↵
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 6:
        return (
          <motion.div
            key="step6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-left">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-gray-500 text-sm">6→</span>
                <h2 className="text-2xl font-medium">What's your company name?</h2>
              </div>
              <p className="text-gray-500 text-sm ml-6 mb-6">
                Tell us where you work
              </p>
              <div className="ml-6">
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your company name"
                  className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black outline-none px-0 py-2 transition-colors text-2xl placeholder:text-gray-400"
                />
                <div className="mt-2 text-sm text-gray-400">
                  press Enter ↵
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    const textarea = document.querySelector('textarea');
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }, [formData.message]);

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-3xl mx-auto px-6 py-16">
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
              We've received your submission and we'll be in touch with you shortly.
            </p>
            <p className="text-lg text-gray-600">
              Our team will review your information and call in the next few minutes.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-3xl px-6">
        <form onSubmit={handleSubmit} className="w-full">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>

          <div className="mt-8 flex justify-between items-center ml-6 mr-6">
            <button
              type="button"
              onClick={currentStep === totalSteps ? handleSubmit : handleNext}
              className="bg-black text-white px-6 py-2 text-sm rounded hover:bg-gray-900 transition-colors flex items-center gap-2"
            >
              {currentStep === totalSteps ? 'Submit' : 'OK'} 
              <span className="text-xs text-gray-400">press Enter ↵</span>
            </button>

            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ArrowRight className="w-5 h-5 transform rotate-180" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuditPage;