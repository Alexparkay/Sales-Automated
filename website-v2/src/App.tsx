import { useState, useEffect } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import CaseStudiesPreview from './components/CaseStudiesPreview'
import WhyWeMakeADifference from './components/WhyWeMakeADifference'
import PeopleLoveWorkingWithUs from './components/PeopleLoveWorkingWithUs'
import WhyWeDiffer from './components/WhyWeDiffer'
import NewPricingSection from './components/NewPricingSection'
import MainCTA from './components/MainCTA'
import FinalCTA from './components/FinalCTA'
import ClientScroll from './components/ClientScroll'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import CaseStudyPage from './components/CaseStudyPage'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import VideoIntro from './components/VideoIntro'

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [showVideoIntro, setShowVideoIntro] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    // Check if this is truly the first visit to the website
    const hasVisitedBefore = localStorage.getItem('imperiumVisited');
    const path = window.location.pathname;
    
    // Only show intro on the very first visit to the website (when on home page and never visited before)
    if (path === '/' && !hasVisitedBefore) {
      setShowVideoIntro(true);
      setIsFirstVisit(true);
      // Mark that the user has visited the website
      localStorage.setItem('imperiumVisited', 'true');
    } else {
      setShowVideoIntro(false);
      setIsFirstVisit(false);
    }

    // Handle URL routing
    const handleRouting = () => {
      const currentPath = window.location.pathname;
      if (currentPath.startsWith('/case-study/')) {
        setCurrentView('case-study');
      } else if (currentPath === '/privacy') {
        setCurrentView('privacy-policy');
      } else if (currentPath === '/terms') {
        setCurrentView('terms-of-service');
      } else {
        setCurrentView('home');
      }
    };

    handleRouting();
    
    // Listen for popstate events (back/forward button)
    window.addEventListener('popstate', handleRouting);
    
    return () => {
      window.removeEventListener('popstate', handleRouting);
    };
  }, []);

  // Handle video intro completion
  const handleVideoIntroComplete = () => {
    setShowVideoIntro(false);
  };

  // Override the default case study click handler
  useEffect(() => {
    const handleCaseStudyNavigation = (event: CustomEvent) => {
      const id = event.detail.id;
      window.history.pushState({}, '', `/case-study/${id}`);
      setCurrentView('case-study');
    };

    window.addEventListener('navigateToCase', handleCaseStudyNavigation as EventListener);
    
    return () => {
      window.removeEventListener('navigateToCase', handleCaseStudyNavigation as EventListener);
    };
  }, []);

  if (currentView === 'case-study') {
    return <CaseStudyPage />;
  }

  if (currentView === 'privacy-policy') {
    return <PrivacyPolicy />;
  }

  if (currentView === 'terms-of-service') {
    return <TermsOfService />;
  }

  return (
    <div className="min-h-screen bg-white">
      {showVideoIntro && (
        <VideoIntro onComplete={handleVideoIntroComplete} />
      )}
      <Header />
      <main>
        {/* 1. Hero Section */}
        <div id="hero"><Hero /></div>
        
        {/* 2. Client Scroll (brands) - Full Width */}
        <ClientScroll />
        
        {/* 3. Case Studies */}
        <div id="work"><CaseStudiesPreview /></div>
        
        {/* 4. Why We Make A Difference (new section matching image) */}
        <div id="why-difference"><WhyWeMakeADifference /></div>
        
        {/* 5. People Love Working With Us */}
        <div id="people-love"><PeopleLoveWorkingWithUs /></div>
        
        {/* 6. Why We Differ (AI Transformation CTA) */}
        <div id="difference"><WhyWeDiffer /></div>
        
        {/* 7. New Pricing Section (Book a Design Sprint or Audit) */}
        <div id="new-pricing"><NewPricingSection /></div>
        
        {/* 8. FAQ (More Information with Alex's profile) */}
        <div id="faq"><FAQ /></div>
        
        {/* 9. Call to Action "Ready to Transform Your Business" */}
        <div id="cta-1"><MainCTA /></div>
        
        <Footer />
      </main>
    </div>
  )
}

export default App;