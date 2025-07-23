import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { href: "#work", label: "Projects" },
    { href: "#people-love", label: "Testimonials" },
    { href: "#clients", label: "Clients" },
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
    setIsOpen(false);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
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
  }, [lastScrollY]);

  return (
    <header className={`w-full px-lg py-md bg-white sticky top-0 z-50 border-b border-gray-200 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <div className="max-w-1200 mx-auto flex items-center justify-between">
        {/* Logo - Left side */}
        <div className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="Imperium Growth Logo" 
            className="h-8 cursor-pointer"
            onClick={() => window.location.href = '/'}
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
          <a href="#contact" onClick={handleScroll}>
            <button className="inline-flex items-center px-md py-xs bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">
              <img 
                src="/images/alex.jpeg" 
                alt="Alex Kaymakanov" 
                className="w-6 h-6 rounded-full mr-xs object-cover"
              />
              <div className="w-2 h-2 bg-green-500 rounded-full mr-xs animate-pulse"></div>
              Book a quick call
            </button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden flex flex-col space-y-1.5" onClick={() => setIsOpen(!isOpen)}>
          <span className={`w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-900 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isVisible && isOpen && (
        <div className="md:hidden mt-md bg-white">
          <nav className="flex flex-col items-center space-y-md py-md">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={handleScroll}
                className="font-inter text-body-lg text-gray-800 hover:text-accent-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={handleScroll}>
              <button className="inline-flex items-center mt-md px-md py-xs bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">
                <img 
                  src="/images/alex.jpeg" 
                  alt="Alex Kaymakanov" 
                  className="w-6 h-6 rounded-full mr-xs object-cover"
                />
                <div className="w-2 h-2 bg-green-500 rounded-full mr-xs animate-pulse"></div>
                Book a quick call
              </button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 