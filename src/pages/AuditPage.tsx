import React, { useEffect } from 'react';

declare global {
  interface Window {
    Calendly?: any;
  }
}

const AuditPage: React.FC = () => {
  useEffect(() => {
    // Add Calendly script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    // Add Calendly CSS
    const link = document.createElement('link');
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/alex-salesautomated?hide_landing_page_details=1&hide_gdpr_banner=1'
      });
    }
  };

        return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Book A Discovery Call</h1>
        <p className="text-lg mb-8">Please fill out the form and we will get back to you as soon as possible.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Background Image */}
          <div className="rounded-2xl overflow-hidden h-[700px]">
            <img 
              src="/images/night-sky.jpg" 
              alt="Night sky with mountains" 
              className="w-full h-full object-cover"
                    />
                  </div>
          
          {/* Calendly Button */}
          <div className="bg-white rounded-2xl overflow-hidden flex items-center justify-center">
            <button
              onClick={openCalendly}
              className="px-8 py-4 bg-[#0069ff] text-white rounded-full hover:opacity-90 transition-opacity text-lg font-medium"
            >
              Schedule time with me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditPage;