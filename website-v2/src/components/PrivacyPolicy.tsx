const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-4xl mx-auto px-lg py-2xl">
        <div className="mb-xl">
          <button 
            onClick={() => {
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="mb-lg px-lg py-md bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            ← Back to Website
          </button>
          <h1 className="font-inter text-4xl lg:text-5xl font-bold text-gray-900 mb-md">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 2025
          </p>
        </div>
        
        <div className="space-y-xl text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">1. Introduction</h2>
            <p>
              Imperium Growth ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI transformation services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-md">Personal Information</h3>
            <p className="mb-md">We may collect personal information that you voluntarily provide, including:</p>
            <ul className="list-disc pl-lg space-y-xs">
              <li>Name and contact information (email address, phone number)</li>
              <li>Company information and job title</li>
              <li>Business requirements and project details</li>
              <li>Communication preferences</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-md mt-lg">Technical Information</h3>
            <p className="mb-md">We automatically collect certain information when you visit our website:</p>
            <ul className="list-disc pl-lg space-y-xs">
              <li>IP address and browser information</li>
              <li>Device type and operating system</li>
              <li>Website usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">3. How We Use Your Information</h2>
            <p className="mb-md">We use collected information to:</p>
            <ul className="list-disc pl-lg space-y-xs">
              <li>Provide and improve our AI transformation services</li>
              <li>Communicate with you about projects and services</li>
              <li>Analyze website usage and optimize user experience</li>
              <li>Send relevant business communications and updates</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">4. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-lg space-y-xs mt-md">
              <li>With trusted service providers who assist in our operations</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">6. Your Rights</h2>
            <p className="mb-md">You have the right to:</p>
            <ul className="list-disc pl-lg space-y-xs">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Delete your personal information (subject to certain exceptions)</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">7. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences, though disabling cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of any material changes by posting the updated policy on our website with a new "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-md">
              <p><strong>Imperium Growth</strong></p>
              <p>Email: <a href="mailto:alex@imperiumgrowth.com" className="text-accent-dark hover:underline">alex@imperiumgrowth.com</a></p>
              <p>Website: <a href="https://imperiumgrowth.com" className="text-accent-dark hover:underline">https://imperiumgrowth.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 