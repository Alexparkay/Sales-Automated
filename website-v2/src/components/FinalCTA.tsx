const FinalCTA = () => {
  return (
    <section className="w-full px-lg py-2xl bg-dark-bg">
      <div className="max-w-1200 mx-auto text-center">
        <h2 className="font-inter text-4xl lg:text-5xl font-bold text-dark-text mb-md">
          Ready to Start Your
          <br />
          <span className="text-accent">AI Transformation Journey?</span>
        </h2>
        <p className="font-inter text-xl text-dark-text-secondary max-w-3xl mx-auto mb-lg">
          Join the companies already experiencing dramatic growth through AI. Let's discuss how we can deliver similar results for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-md justify-center items-center">
          <button className="px-xl py-lg bg-accent text-gray-900 font-semibold text-lg rounded-lg hover:bg-accent-dark transition-colors shadow-button">
            Book Your Strategy Call
          </button>
          <button className="px-xl py-lg border-2 border-accent text-accent font-semibold text-lg rounded-lg hover:bg-accent hover:text-gray-900 transition-colors">
            Download Our AI Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA; 