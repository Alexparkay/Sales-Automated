import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { href: "#work", label: "Projects" },
    { href: "#people-love", label: "Solutions" },
    { href: "#clients", label: "Partners" },
    { href: "#new-pricing", label: "Pricing" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false); // Close mobile menu after clicking
  };

  const handleBookCall = () => {
    window.open('https://calendly.com/alex-imperium-growth/30min?back=1&month=2025-07', '_blank');
    setIsOpen(false); // Close mobile menu after clicking
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down - hide header but keep it accessible
          if (!isOpen) { // Only hide if menu is not open
            setIsVisible(false);
          }
        } else {
          // Scrolling up - always show header
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY, isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-menu-container') && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
      // Ensure header stays visible when menu is open
      setIsVisible(true);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header className={`w-full px-lg py-md bg-white sticky top-0 z-50 border-b border-gray-200 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <div className="max-w-1200 mx-auto flex items-center justify-between">
          {/* Logo - Left side */}
          <div className="flex items-center">
            <img 
              src="/images/Black Imperium Logo.png" 
              alt="Imperium Growth Logo" 
              className="h-16 md:h-20 cursor-pointer"
              onClick={() => {
                window.location.href = '/';
                setIsOpen(false);
              }}
            />
          </div>
          
          {/* Desktop Navigation - Right side */}
          <div className="hidden md:flex items-center space-x-lg">
            <nav className="flex items-center space-x-lg mr-lg">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  onClick={handleScroll}
                  className="font-inter text-body-lg text-gray-600 hover:text-accent-dark transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            {/* CTA Button */}
            <button 
              onClick={handleBookCall}
              className="inline-flex items-center px-md py-xs bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
            >
              Book a call
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-container md:hidden">
            <button 
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1 relative z-50" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Separate from header for better positioning */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Full screen white background */}
          <div className="absolute inset-0 bg-white"></div>
          
          {/* Fixed close button at top right */}
          <div className="absolute top-4 right-4 z-50">
            <button 
              className="flex flex-col justify-center items-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" 
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <span className="w-6 h-0.5 bg-gray-900 rotate-45 translate-y-0.5"></span>
              <span className="w-6 h-0.5 bg-gray-900 -rotate-45 -translate-y-0.5"></span>
            </button>
          </div>
          
          {/* Menu content positioned below header */}
          <div className="relative pt-20 h-full">
            <nav className="flex flex-col items-center py-lg space-y-lg">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  onClick={handleScroll}
                  className="font-inter text-xl text-gray-800 hover:text-accent-dark transition-colors py-md px-lg rounded-lg hover:bg-gray-50"
                >
                  {link.label}
                </a>
              ))}
              <button 
                onClick={handleBookCall}
                className="inline-flex items-center mt-lg px-xl py-lg bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Book a call
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header; 