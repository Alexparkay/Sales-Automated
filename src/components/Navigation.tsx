import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const styles = `
  .text-shadow-sm {
    text-shadow: 0 1px 2px rgba(0,0,0,0.1);
  }
  
  .logo-text-shadow {
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  
  .nav-text-shadow {
    text-shadow: 0 1px 3px rgba(0,0,0,0.15);
  }
`;

interface NavigationProps {
  darkTheme?: boolean;
}

function Navigation({ darkTheme }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  const navItems = [
    { name: 'Growth Solutions', path: '/solutions' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Resources Hub', path: '/resources-hub' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Only hide navbar at top of homepage
      if (location.pathname === '/') {
        if (window.scrollY > 50) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        // Always show navbar on other pages
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  // Check if current page should have dark theme
  // If darkTheme prop is provided, use it; otherwise, use the automatic detection
  const isDarkThemePage = darkTheme !== undefined 
    ? darkTheme 
    : location.pathname === '/resources-hub' || location.pathname === '/schedule';

  return (
    <>
      <style>{styles}</style>
      <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1200px] px-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-16'}`}>
        <nav className={`relative ${isDarkThemePage ? 'bg-slate-900/40 border-white/10 shadow-green-500/10' : 'bg-emerald-50/60 border-emerald-100/40 shadow-emerald-100/20'} backdrop-blur-sm shadow-xl rounded-3xl border px-8 py-4 overflow-hidden`}>
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
            <motion.img 
              src="/images/Growth/pexels-mdsnmdsnmdsn-1216345.jpg" 
              alt="Navigation Background" 
              className={`w-full h-full object-cover ${isDarkThemePage ? 'opacity-55' : 'opacity-45'}`}
              initial={{ scale: 1 }}
              animate={{ 
                scale: 1.05,
                transition: { 
                  duration: 30, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                } 
              }}
            />
            <div className={`absolute inset-0 ${isDarkThemePage ? 'bg-gradient-to-r from-slate-900/40 via-slate-800/30 to-slate-900/40' : 'bg-gradient-to-r from-emerald-50/50 via-teal-50/40 to-emerald-50/50'}`}></div>
          </div>
          
          <div className="flex justify-between items-center relative z-10">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent logo-text-shadow">
                Imperium Growth
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-all relative group ${
                    location.pathname === item.path 
                      ? 'text-emerald-600 font-bold nav-text-shadow' 
                      : isDarkThemePage 
                        ? 'text-white hover:text-green-400 nav-text-shadow' 
                        : 'text-gray-800 hover:text-emerald-600 nav-text-shadow'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400 transition-all group-hover:w-full ${
                    location.pathname === item.path ? 'w-full' : ''
                  }`} />
                </Link>
              ))}
              <Link
                to="/schedule"
                className="px-6 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors whitespace-nowrap shadow-md"
              >
                Schedule a Meeting
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-xl transition-colors ${
                  isDarkThemePage ? 'text-white hover:text-green-400 nav-text-shadow' : 'text-gray-800 hover:text-emerald-600 nav-text-shadow'
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className={`md:hidden absolute top-full left-0 right-0 mt-4 ${
              isDarkThemePage 
                ? 'bg-slate-900/40 border-white/10 shadow-green-500/10' 
                : 'bg-emerald-50/60 border-emerald-100/40 shadow-emerald-100/20'
              } backdrop-blur-sm rounded-2xl shadow-xl border z-20`}>
              <div className="py-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-6 py-3 text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-emerald-600 font-bold nav-text-shadow'
                        : isDarkThemePage
                          ? 'text-white hover:text-green-400 nav-text-shadow'
                          : 'text-gray-800 hover:text-emerald-600 nav-text-shadow'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/schedule"
                  className="block mx-6 mt-3 px-6 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors text-center shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Schedule a Meeting
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navigation; 