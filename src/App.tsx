import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import LoadingAnimation from './components/LoadingAnimation';

// Import all pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import SolutionsPage from './pages/SolutionsPage';
import ResourcesPage from './pages/ResourcesPage';
import ResourceContentPage from './pages/ResourceContentPage';
import SchedulePage from './pages/SchedulePage';

// Import resource pages
import AIOutreachSystemWebinar from './pages/resources/AIOutreachSystemWebinar';
import AISalesAutomationMasterclass from './pages/resources/AISalesAutomationMasterclass';
import AILeadGenerationBlueprint from './pages/resources/AILeadGenerationBlueprint';
import AISalesPlaybook from './pages/resources/100MAISalesPlaybook';
import AICRMIntegrationGuide from './pages/resources/AICRMIntegrationGuide';

function Footer() {
  const location = useLocation();
  const isWhiteBackground = location.pathname === '/' || location.pathname === '/solutions' || location.pathname === '/about-us';
  const isResourcesPage = location.pathname === '/resources-hub';

  return (
    <div className={`w-full px-6 pb-6 ${isWhiteBackground ? 'bg-white' : ''}`}>
      <div className={`relative ${isResourcesPage ? 'bg-transparent' : 'bg-gradient-to-br from-slate-900 via-slate-800/95 to-slate-900'} rounded-[2rem] overflow-hidden ${isResourcesPage ? '' : 'border border-white/10'}`}>
        {/* Background Image from Growth folder */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            src="/images/Growth/pexels-sohi-807598.jpg" 
            alt="Growth Background" 
            className={`w-full h-full object-cover ${isResourcesPage ? 'opacity-10' : 'opacity-40'}`}
            initial={{ scale: 1 }}
            animate={{ 
              scale: 1.05,
              transition: { 
                duration: 20, 
                repeat: Infinity, 
                repeatType: "reverse" 
              } 
            }}
          />
        </div>
        <div className={`absolute inset-0 ${isResourcesPage ? 'bg-transparent' : 'bg-gradient-to-t from-emerald-900/40 via-slate-800/60 to-slate-900/70'} opacity-100 pointer-events-none z-10`}></div>
        
        <div className="relative z-20">
          <div className={`py-8 md:py-10 px-8 ${isResourcesPage ? 'bg-transparent' : 'bg-gradient-to-r from-slate-900/80 via-slate-800/5 to-slate-900/80'}`}>
            <div className={`absolute inset-0 ${isResourcesPage ? 'bg-transparent' : 'bg-gradient-to-b from-emerald-800/5 to-transparent'} opacity-20 pointer-events-none`}></div>
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              <div className="flex flex-col items-center md:items-start w-full md:w-auto">
                <h2 className="text-2xl md:text-3xl font-bold">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                    Transform Your Business Growth
                  </span>
                </h2>
                <p className="mt-2 text-gray-300 text-sm md:text-base text-center md:text-left">
                  Partner with us to unlock your company's full revenue potential through AI-powered solutions
                </p>
              </div>
              <Link 
                to="/schedule"
                className="px-6 py-2.5 text-sm font-medium text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors whitespace-nowrap mt-4 md:mt-0"
              >
                Schedule a Meeting
              </Link>
            </div>
          </div>
        </div>

        <div className={`${isResourcesPage ? '' : 'border-t border-white/10'}`}>
          <div className="relative z-20">
            <div className={`py-4 px-8 ${isResourcesPage ? 'bg-transparent' : 'bg-gradient-to-r from-slate-900/80 via-slate-800/5 to-slate-900/80'} flex flex-col md:flex-row items-center justify-between w-full`}>
              <div className={`absolute inset-0 ${isResourcesPage ? 'bg-transparent' : 'bg-gradient-to-t from-emerald-900/5 to-transparent'} opacity-20 pointer-events-none`}></div>
              <div className="flex items-center gap-2">
                <Link to="/" className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  Imperium Growth
                </Link>
                <span className="text-gray-400 text-sm">|</span>
                <span className="text-gray-400 text-sm">Revenue Growth Partner</span>
              </div>
              <p className="text-gray-400 text-sm mt-2 md:mt-0">
                © {new Date().getFullYear()} Imperium Growth. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const isSchedulePage = location.pathname === '/schedule';
  const isResourcePage = location.pathname.startsWith('/resources/');
  const isResourcesHub = location.pathname === '/resources-hub';
  
  const [showLoadingAnimation, setShowLoadingAnimation] = useState(true);
  const [hasCheckedStorage, setHasCheckedStorage] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasSeenAnimation = localStorage.getItem('hasSeenImperiumAnimation');
    
    if (hasSeenAnimation) {
      setShowLoadingAnimation(false);
    } else {
      setShowLoadingAnimation(true);
      // Mark that the user has seen the animation
      localStorage.setItem('hasSeenImperiumAnimation', 'true');
    }
    
    setHasCheckedStorage(true);
    
    // For testing: Uncomment this line to clear the localStorage flag and see the animation again
    // localStorage.removeItem('hasSeenImperiumAnimation');
  }, []);

  const handleAnimationComplete = () => {
    console.log("Animation complete callback triggered");
    setShowLoadingAnimation(false);
  };

  // Don't render anything until we've checked localStorage
  if (!hasCheckedStorage) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      {showLoadingAnimation ? (
        <LoadingAnimation onAnimationComplete={handleAnimationComplete} />
      ) : (
        <>
          <ScrollToTop />
          <Navigation darkTheme={isResourcePage || isResourcesHub || isSchedulePage} />
          <main className={`flex-grow ${isSchedulePage ? 'overflow-hidden' : ''}`}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/resources-hub" element={<ResourcesPage />} />
              <Route path="/resources-hub/:id" element={<ResourceContentPage />} />
              
              {/* Resource content pages */}
              <Route path="/resources/ai-outreach-system-webinar" element={<AIOutreachSystemWebinar />} />
              <Route path="/resources/ai-sales-automation-masterclass" element={<AISalesAutomationMasterclass />} />
              <Route path="/resources/ai-lead-generation-blueprint" element={<AILeadGenerationBlueprint />} />
              <Route path="/resources/100m-ai-sales-playbook" element={<AISalesPlaybook />} />
              <Route path="/resources/ai-crm-integration-guide" element={<AICRMIntegrationGuide />} />
              
              <Route path="/schedule" element={<SchedulePage />} />
            </Routes>
          </main>
          {!isSchedulePage && <Footer />}
        </>
      )}
    </div>
  );
}

export default App;