const TermsOfService = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-4xl mx-auto px-lg py-2xl">
        <div className="mb-xl">
          <button 
            onClick={() => window.location.href = '/'}
            className="mb-lg px-lg py-md bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            ← Back to Website
          </button>
          <h1 className="font-inter text-4xl lg:text-5xl font-bold text-gray-900 mb-md">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 2025
          </p>
        </div>
        
        <div className="space-y-xl text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Imperium Growth's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">2. Description of Services</h2>
            <p>
              Imperium Growth provides AI transformation services, including but not limited to AI consulting, custom AI solution development, AI audits, business process automation, and enterprise AI implementation services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">3. Service Engagement</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-md">Consulting Services</h3>
            <p className="mb-md">
              Our consulting services are provided at £150 per hour. Payment is required within 30 days of invoice date. Consulting sessions may be recorded for quality assurance purposes with your consent.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-md">Custom Implementation Projects</h3>
            <p>
              Custom AI implementation projects are quoted individually based on scope and requirements. A detailed project agreement will be provided outlining deliverables, timelines, and payment terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">4. Client Responsibilities</h2>
            <p className="mb-md">As a client, you agree to:</p>
            <ul className="list-disc pl-lg space-y-xs">
              <li>Provide accurate and complete information about your business requirements</li>
              <li>Respond promptly to requests for information or feedback</li>
              <li>Make designated personnel available for project collaboration</li>
              <li>Pay all fees according to the agreed payment schedule</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">5. Intellectual Property</h2>
            <p>
              All intellectual property rights in our methodologies, frameworks, and proprietary tools remain with Imperium Growth. Custom solutions developed specifically for your business will be owned by you, while any underlying frameworks or methodologies remain our property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">6. Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding all client information and business data. We will not disclose your confidential information to third parties without your explicit consent, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Imperium Growth shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">8. Performance Guarantees</h2>
            <p>
              While we strive to deliver exceptional results and have a proven track record of success, specific performance outcomes cannot be guaranteed due to the various factors that influence business performance beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">9. Termination</h2>
            <p>
              Either party may terminate services with 30 days written notice. Upon termination, you remain responsible for payment of all services rendered up to the termination date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">10. Website Usage</h2>
            <p className="mb-md">When using our website, you agree not to:</p>
            <ul className="list-disc pl-lg space-y-xs">
              <li>Use the website for any unlawful purpose</li>
              <li>Interfere with website security or functionality</li>
              <li>Copy or redistribute content without permission</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">11. Privacy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">13. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration or in the appropriate courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-lg">14. Contact Information</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
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

export default TermsOfService; 