import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Bot, Menu, X, Linkedin, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all pages and components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AuditPage from './pages/AuditPage';
import CareersPage from './pages/CareersPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import VideosPage from './pages/VideosPage';
import LeadResearchPage from './pages/solutions/LeadResearchPage';
import OutreachPage from './pages/solutions/OutreachPage';
import SchedulingPage from './pages/solutions/SchedulingPage';
import CustomSolutionsPage from './pages/solutions/CustomSolutionsPage';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isHeroVisible = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-white/60 backdrop-blur-sm shadow-sm' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2"
          onClick={handleLogoClick}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <Bot 
              className={`transition-colors duration-300 ${
                isHeroVisible ? 'text-white' : 'text-primary-500'
              }`} 
              size={32} 
            />
            <span 
              className={`font-bold text-xl transition-colors duration-300 ${
                isHeroVisible ? 'text-white' : 'text-gray-900'
              }`}
            >
              Sales Automated
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/get-audit" className="btn-primary">
            Get Your Free AI Audit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={isHeroVisible ? 'text-white' : 'text-gray-900'} size={24} />
          ) : (
            <Menu className={isHeroVisible ? 'text-white' : 'text-gray-900'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/60 backdrop-blur-sm border-b border-gray-100 py-4">
          <div className="flex flex-col items-center gap-4">
            <Link to="/get-audit" className="btn-primary">
              Get Your Free AI Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
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
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <NavBar />
      
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <>
              {/* Hero section rendered directly */}
              <div className="relative z-0">
                <HomePage />
              </div>
              <footer className="bg-[#0a0f0d] text-white py-12 mt-32">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                      <Link to="/" className="flex items-center gap-2 mb-4">
                        <Bot className="text-primary-500" size={32} />
                        <span className="font-bold text-xl">Sales Automated</span>
                      </Link>
                      <p className="text-gray-400">
                        Your dedicated AI sales growth partner
                      </p>
                      <div className="flex gap-4 mt-4">
                        <a 
                          href="https://www.linkedin.com/company/salesautomated/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Linkedin size={24} />
                        </a>
                        <a 
                          href="https://www.youtube.com/@AGIntelligence" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Youtube size={24} />
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Company</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/about" className="hover:text-primary-400">About Us</Link></li>
                        <li><Link to="/case-studies" className="hover:text-primary-400">Case Studies</Link></li>
                        <li><Link to="/videos" className="hover:text-primary-400">Videos</Link></li>
                        <li><Link to="/careers" className="hover:text-primary-400">Careers</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Solutions</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/solutions/lead-research" className="hover:text-primary-400">Lead Research</Link></li>
                        <li><Link to="/solutions/outreach" className="hover:text-primary-400">Outreach Automation</Link></li>
                        <li><Link to="/solutions/scheduling" className="hover:text-primary-400">Meeting Scheduling</Link></li>
                        <li><Link to="/solutions/custom" className="hover:text-primary-400">Custom AI Solutions</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Contact</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>
                          <Link to="/contact" className="hover:text-primary-400">
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <a href="mailto:alex@salesautomated.ai" className="hover:text-primary-400">
                            alex@salesautomated.ai
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-[#151d17] mt-12 pt-8 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Sales Automated. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </>
          } />
          <Route path="/about" element={
            <PageTransition>
              <AboutPage />
              <footer className="bg-[#0a0f0d] text-white py-12 mt-32">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                      <Link to="/" className="flex items-center gap-2 mb-4">
                        <Bot className="text-primary-500" size={32} />
                        <span className="font-bold text-xl">Sales Automated</span>
                      </Link>
                      <p className="text-gray-400">
                        Your dedicated AI sales growth partner
                      </p>
                      <div className="flex gap-4 mt-4">
                        <a 
                          href="https://www.linkedin.com/company/salesautomated/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Linkedin size={24} />
                        </a>
                        <a 
                          href="https://www.youtube.com/@AGIntelligence" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Youtube size={24} />
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Company</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/about" className="hover:text-primary-400">About Us</Link></li>
                        <li><Link to="/case-studies" className="hover:text-primary-400">Case Studies</Link></li>
                        <li><Link to="/videos" className="hover:text-primary-400">Videos</Link></li>
                        <li><Link to="/careers" className="hover:text-primary-400">Careers</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Solutions</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/solutions/lead-research" className="hover:text-primary-400">Lead Research</Link></li>
                        <li><Link to="/solutions/outreach" className="hover:text-primary-400">Outreach Automation</Link></li>
                        <li><Link to="/solutions/scheduling" className="hover:text-primary-400">Meeting Scheduling</Link></li>
                        <li><Link to="/solutions/custom" className="hover:text-primary-400">Custom AI Solutions</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Contact</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>
                          <Link to="/contact" className="hover:text-primary-400">
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <a href="mailto:alex@salesautomated.ai" className="hover:text-primary-400">
                            alex@salesautomated.ai
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-[#151d17] mt-12 pt-8 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Sales Automated. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </PageTransition>
          } />
          <Route path="/get-audit" element={
            <PageTransition>
              <AuditPage />
              <footer className="bg-[#0a0f0d] text-white py-12 mt-32">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                      <Link to="/" className="flex items-center gap-2 mb-4">
                        <Bot className="text-primary-500" size={32} />
                        <span className="font-bold text-xl">Sales Automated</span>
                      </Link>
                      <p className="text-gray-400">
                        Your dedicated AI sales growth partner
                      </p>
                      <div className="flex gap-4 mt-4">
                        <a 
                          href="https://www.linkedin.com/company/salesautomated/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Linkedin size={24} />
                        </a>
                        <a 
                          href="https://www.youtube.com/@AGIntelligence" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Youtube size={24} />
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Company</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/about" className="hover:text-primary-400">About Us</Link></li>
                        <li><Link to="/case-studies" className="hover:text-primary-400">Case Studies</Link></li>
                        <li><Link to="/videos" className="hover:text-primary-400">Videos</Link></li>
                        <li><Link to="/careers" className="hover:text-primary-400">Careers</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Solutions</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/solutions/lead-research" className="hover:text-primary-400">Lead Research</Link></li>
                        <li><Link to="/solutions/outreach" className="hover:text-primary-400">Outreach Automation</Link></li>
                        <li><Link to="/solutions/scheduling" className="hover:text-primary-400">Meeting Scheduling</Link></li>
                        <li><Link to="/solutions/custom" className="hover:text-primary-400">Custom AI Solutions</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Contact</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>
                          <Link to="/contact" className="hover:text-primary-400">
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <a href="mailto:alex@salesautomated.ai" className="hover:text-primary-400">
                            alex@salesautomated.ai
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-[#151d17] mt-12 pt-8 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Sales Automated. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </PageTransition>
          } />
          <Route path="/careers" element={
            <PageTransition>
              <CareersPage />
              <footer className="bg-[#0a0f0d] text-white py-12 mt-32">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                      <Link to="/" className="flex items-center gap-2 mb-4">
                        <Bot className="text-primary-500" size={32} />
                        <span className="font-bold text-xl">Sales Automated</span>
                      </Link>
                      <p className="text-gray-400">
                        Your dedicated AI sales growth partner
                      </p>
                      <div className="flex gap-4 mt-4">
                        <a 
                          href="https://www.linkedin.com/company/salesautomated/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Linkedin size={24} />
                        </a>
                        <a 
                          href="https://www.youtube.com/@AGIntelligence" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Youtube size={24} />
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Company</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/about" className="hover:text-primary-400">About Us</Link></li>
                        <li><Link to="/case-studies" className="hover:text-primary-400">Case Studies</Link></li>
                        <li><Link to="/videos" className="hover:text-primary-400">Videos</Link></li>
                        <li><Link to="/careers" className="hover:text-primary-400">Careers</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Solutions</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/solutions/lead-research" className="hover:text-primary-400">Lead Research</Link></li>
                        <li><Link to="/solutions/outreach" className="hover:text-primary-400">Outreach Automation</Link></li>
                        <li><Link to="/solutions/scheduling" className="hover:text-primary-400">Meeting Scheduling</Link></li>
                        <li><Link to="/solutions/custom" className="hover:text-primary-400">Custom AI Solutions</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Contact</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>
                          <Link to="/contact" className="hover:text-primary-400">
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <a href="mailto:alex@salesautomated.ai" className="hover:text-primary-400">
                            alex@salesautomated.ai
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-[#151d17] mt-12 pt-8 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Sales Automated. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </PageTransition>
          } />
          <Route path="/case-studies" element={
            <PageTransition>
              <CaseStudiesPage />
              <footer className="bg-[#0a0f0d] text-white py-12 mt-32">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                      <Link to="/" className="flex items-center gap-2 mb-4">
                        <Bot className="text-primary-500" size={32} />
                        <span className="font-bold text-xl">Sales Automated</span>
                      </Link>
                      <p className="text-gray-400">
                        Your dedicated AI sales growth partner
                      </p>
                      <div className="flex gap-4 mt-4">
                        <a 
                          href="https://www.linkedin.com/company/salesautomated/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Linkedin size={24} />
                        </a>
                        <a 
                          href="https://www.youtube.com/@AGIntelligence" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Youtube size={24} />
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Company</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/about" className="hover:text-primary-400">About Us</Link></li>
                        <li><Link to="/case-studies" className="hover:text-primary-400">Case Studies</Link></li>
                        <li><Link to="/videos" className="hover:text-primary-400">Videos</Link></li>
                        <li><Link to="/careers" className="hover:text-primary-400">Careers</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Solutions</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/solutions/lead-research" className="hover:text-primary-400">Lead Research</Link></li>
                        <li><Link to="/solutions/outreach" className="hover:text-primary-400">Outreach Automation</Link></li>
                        <li><Link to="/solutions/scheduling" className="hover:text-primary-400">Meeting Scheduling</Link></li>
                        <li><Link to="/solutions/custom" className="hover:text-primary-400">Custom AI Solutions</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Contact</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>
                          <Link to="/contact" className="hover:text-primary-400">
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <a href="mailto:alex@salesautomated.ai" className="hover:text-primary-400">
                            alex@salesautomated.ai
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-[#151d17] mt-12 pt-8 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Sales Automated. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <ContactPage />
              <footer className="bg-[#0a0f0d] text-white py-12 mt-32">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                      <Link to="/" className="flex items-center gap-2 mb-4">
                        <Bot className="text-primary-500" size={32} />
                        <span className="font-bold text-xl">Sales Automated</span>
                      </Link>
                      <p className="text-gray-400">
                        Your dedicated AI sales growth partner
                      </p>
                      <div className="flex gap-4 mt-4">
                        <a 
                          href="https://www.linkedin.com/company/salesautomated/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Linkedin size={24} />
                        </a>
                        <a 
                          href="https://www.youtube.com/@AGIntelligence" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Youtube size={24} />
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Company</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/about" className="hover:text-primary-400">About Us</Link></li>
                        <li><Link to="/case-studies" className="hover:text-primary-400">Case Studies</Link></li>
                        <li><Link to="/videos" className="hover:text-primary-400">Videos</Link></li>
                        <li><Link to="/careers" className="hover:text-primary-400">Careers</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Solutions</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/solutions/lead-research" className="hover:text-primary-400">Lead Research</Link></li>
                        <li><Link to="/solutions/outreach" className="hover:text-primary-400">Outreach Automation</Link></li>
                        <li><Link to="/solutions/scheduling" className="hover:text-primary-400">Meeting Scheduling</Link></li>
                        <li><Link to="/solutions/custom" className="hover:text-primary-400">Custom AI Solutions</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Contact</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>
                          <Link to="/contact" className="hover:text-primary-400">
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <a href="mailto:alex@salesautomated.ai" className="hover:text-primary-400">
                            alex@salesautomated.ai
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-[#151d17] mt-12 pt-8 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Sales Automated. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </PageTransition>
          } />
          <Route path="/videos" element={
            <PageTransition>
              <VideosPage />
              <footer className="bg-[#0a0f0d] text-white py-12 mt-32">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                      <Link to="/" className="flex items-center gap-2 mb-4">
                        <Bot className="text-primary-500" size={32} />
                        <span className="font-bold text-xl">Sales Automated</span>
                      </Link>
                      <p className="text-gray-400">
                        Your dedicated AI sales growth partner
                      </p>
                      <div className="flex gap-4 mt-4">
                        <a 
                          href="https://www.linkedin.com/company/salesautomated/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Linkedin size={24} />
                        </a>
                        <a 
                          href="https://www.youtube.com/@AGIntelligence" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Youtube size={24} />
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Company</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/about" className="hover:text-primary-400">About Us</Link></li>
                        <li><Link to="/case-studies" className="hover:text-primary-400">Case Studies</Link></li>
                        <li><Link to="/videos" className="hover:text-primary-400">Videos</Link></li>
                        <li><Link to="/careers" className="hover:text-primary-400">Careers</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Solutions</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/solutions/lead-research" className="hover:text-primary-400">Lead Research</Link></li>
                        <li><Link to="/solutions/outreach" className="hover:text-primary-400">Outreach Automation</Link></li>
                        <li><Link to="/solutions/scheduling" className="hover:text-primary-400">Meeting Scheduling</Link></li>
                        <li><Link to="/solutions/custom" className="hover:text-primary-400">Custom AI Solutions</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Contact</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>
                          <Link to="/contact" className="hover:text-primary-400">
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <a href="mailto:alex@salesautomated.ai" className="hover:text-primary-400">
                            alex@salesautomated.ai
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-[#151d17] mt-12 pt-8 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Sales Automated. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </PageTransition>
          } />
          <Route path="/solutions/lead-research" element={
            <PageTransition>
              <LeadResearchPage />
              <footer className="bg-[#0a0f0d] text-white py-12 mt-32">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                      <Link to="/" className="flex items-center gap-2 mb-4">
                        <Bot className="text-primary-500" size={32} />
                        <span className="font-bold text-xl">Sales Automated</span>
                      </Link>
                      <p className="text-gray-400">
                        Your dedicated AI sales growth partner
                      </p>
                      <div className="flex gap-4 mt-4">
                        <a 
                          href="https://www.linkedin.com/company/salesautomated/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Linkedin size={24} />
                        </a>
                        <a 
                          href="https://www.youtube.com/@AGIntelligence" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Youtube size={24} />
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Company</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/about" className="hover:text-primary-400">About Us</Link></li>
                        <li><Link to="/case-studies" className="hover:text-primary-400">Case Studies</Link></li>
                        <li><Link to="/videos" className="hover:text-primary-400">Videos</Link></li>
                        <li><Link to="/careers" className="hover:text-primary-400">Careers</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Solutions</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/solutions/lead-research" className="hover:text-primary-400">Lead Research</Link></li>
                        <li><Link to="/solutions/outreach" className="hover:text-primary-400">Outreach Automation</Link></li>
                        <li><Link to="/solutions/scheduling" className="hover:text-primary-400">Meeting Scheduling</Link></li>
                        <li><Link to="/solutions/custom" className="hover:text-primary-400">Custom AI Solutions</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Contact</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>
                          <Link to="/contact" className="hover:text-primary-400">
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <a href="mailto:alex@salesautomated.ai" className="hover:text-primary-400">
                            alex@salesautomated.ai
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-[#151d17] mt-12 pt-8 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Sales Automated. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </PageTransition>
          } />
          <Route path="/solutions/outreach" element={
            <PageTransition>
              <OutreachPage />
              <footer className="bg-[#0a0f0d] text-white py-12 mt-32">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                      <Link to="/" className="flex items-center gap-2 mb-4">
                        <Bot className="text-primary-500" size={32} />
                        <span className="font-bold text-xl">Sales Automated</span>
                      </Link>
                      <p className="text-gray-400">
                        Your dedicated AI sales growth partner
                      </p>
                      <div className="flex gap-4 mt-4">
                        <a 
                          href="https://www.linkedin.com/company/salesautomated/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Linkedin size={24} />
                        </a>
                        <a 
                          href="https://www.youtube.com/@AGIntelligence" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Youtube size={24} />
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Company</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/about" className="hover:text-primary-400">About Us</Link></li>
                        <li><Link to="/case-studies" className="hover:text-primary-400">Case Studies</Link></li>
                        <li><Link to="/videos" className="hover:text-primary-400">Videos</Link></li>
                        <li><Link to="/careers" className="hover:text-primary-400">Careers</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Solutions</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/solutions/lead-research" className="hover:text-primary-400">Lead Research</Link></li>
                        <li><Link to="/solutions/outreach" className="hover:text-primary-400">Outreach Automation</Link></li>
                        <li><Link to="/solutions/scheduling" className="hover:text-primary-400">Meeting Scheduling</Link></li>
                        <li><Link to="/solutions/custom" className="hover:text-primary-400">Custom AI Solutions</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Contact</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>
                          <Link to="/contact" className="hover:text-primary-400">
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <a href="mailto:alex@salesautomated.ai" className="hover:text-primary-400">
                            alex@salesautomated.ai
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-[#151d17] mt-12 pt-8 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Sales Automated. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </PageTransition>
          } />
          <Route path="/solutions/scheduling" element={
            <PageTransition>
              <SchedulingPage />
              <footer className="bg-[#0a0f0d] text-white py-12 mt-32">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                      <Link to="/" className="flex items-center gap-2 mb-4">
                        <Bot className="text-primary-500" size={32} />
                        <span className="font-bold text-xl">Sales Automated</span>
                      </Link>
                      <p className="text-gray-400">
                        Your dedicated AI sales growth partner
                      </p>
                      <div className="flex gap-4 mt-4">
                        <a 
                          href="https://www.linkedin.com/company/salesautomated/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Linkedin size={24} />
                        </a>
                        <a 
                          href="https://www.youtube.com/@AGIntelligence" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Youtube size={24} />
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Company</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/about" className="hover:text-primary-400">About Us</Link></li>
                        <li><Link to="/case-studies" className="hover:text-primary-400">Case Studies</Link></li>
                        <li><Link to="/videos" className="hover:text-primary-400">Videos</Link></li>
                        <li><Link to="/careers" className="hover:text-primary-400">Careers</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Solutions</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/solutions/lead-research" className="hover:text-primary-400">Lead Research</Link></li>
                        <li><Link to="/solutions/outreach" className="hover:text-primary-400">Outreach Automation</Link></li>
                        <li><Link to="/solutions/scheduling" className="hover:text-primary-400">Meeting Scheduling</Link></li>
                        <li><Link to="/solutions/custom" className="hover:text-primary-400">Custom AI Solutions</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Contact</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>
                          <Link to="/contact" className="hover:text-primary-400">
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <a href="mailto:alex@salesautomated.ai" className="hover:text-primary-400">
                            alex@salesautomated.ai
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-[#151d17] mt-12 pt-8 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Sales Automated. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </PageTransition>
          } />
          <Route path="/solutions/custom" element={
            <PageTransition>
              <CustomSolutionsPage />
              <footer className="bg-[#0a0f0d] text-white py-12 mt-32">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                      <Link to="/" className="flex items-center gap-2 mb-4">
                        <Bot className="text-primary-500" size={32} />
                        <span className="font-bold text-xl">Sales Automated</span>
                      </Link>
                      <p className="text-gray-400">
                        Your dedicated AI sales growth partner
                      </p>
                      <div className="flex gap-4 mt-4">
                        <a 
                          href="https://www.linkedin.com/company/salesautomated/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Linkedin size={24} />
                        </a>
                        <a 
                          href="https://www.youtube.com/@AGIntelligence" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          <Youtube size={24} />
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Company</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/about" className="hover:text-primary-400">About Us</Link></li>
                        <li><Link to="/case-studies" className="hover:text-primary-400">Case Studies</Link></li>
                        <li><Link to="/videos" className="hover:text-primary-400">Videos</Link></li>
                        <li><Link to="/careers" className="hover:text-primary-400">Careers</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Solutions</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/solutions/lead-research" className="hover:text-primary-400">Lead Research</Link></li>
                        <li><Link to="/solutions/outreach" className="hover:text-primary-400">Outreach Automation</Link></li>
                        <li><Link to="/solutions/scheduling" className="hover:text-primary-400">Meeting Scheduling</Link></li>
                        <li><Link to="/solutions/custom" className="hover:text-primary-400">Custom AI Solutions</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Contact</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>
                          <Link to="/contact" className="hover:text-primary-400">
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <a href="mailto:alex@salesautomated.ai" className="hover:text-primary-400">
                            alex@salesautomated.ai
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-[#151d17] mt-12 pt-8 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Sales Automated. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;