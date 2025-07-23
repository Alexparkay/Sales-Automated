const Hero = () => {
  return (
    <section className="w-full px-lg py-2xl bg-white">
      <div className="max-w-1200 mx-auto text-center">
        {/* Main heading */}
        <h1 className="font-inter text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-lg">
          Transform Your Business with
          <br />
          <span className="text-accent-dark">AI-Powered Solutions</span>
        </h1>
        <p className="font-inter text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-xl leading-relaxed">
          We're your dedicated AI transformation partner, delivering custom AI solutions, consulting, and complete system builds that revolutionize how your business operates and grows.
        </p>
        
        {/* CTA Button with Alex's profile */}
        <button className="inline-flex items-center px-xl py-md bg-gray-900 text-white font-medium text-base rounded-lg hover:bg-gray-800 transition-colors shadow-button">
          <img 
            src="/images/alex.jpeg" 
            alt="Alex Kaymakanov" 
            className="w-8 h-8 rounded-full mr-md object-cover"
          />
          <div className="w-3 h-3 bg-green-500 rounded-full mr-md animate-pulse"></div>
          Book a call with Alex
        </button>
      </div>
    </section>
  );
};

export default Hero; 