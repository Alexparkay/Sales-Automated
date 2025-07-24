const WhyWeMakeADifference = () => {
  return (
    <section className="w-full px-lg py-2xl pb-3xl bg-white">
      <div className="max-w-1200 mx-auto">
        <div className="text-left mb-xl">
          <h2 className="neuton-regular text-5xl lg:text-6xl text-gray-900 mb-md">
            How We Build Your AI Solution
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {/* Top Left - Audit & Analysis Process */}
          <div className="bg-gray-900 rounded-xl p-xl text-white relative overflow-hidden h-[28rem] bg-leaves-1 bg-cover bg-center">
            {/* Semi-transparent overlay to maintain readability */}
            <div className="absolute inset-0 bg-gray-900/85 rounded-xl"></div>
            <div className="relative z-10">
              <div className="flex flex-wrap gap-sm mb-lg">
                <span className="px-md py-xs bg-accent text-gray-900 text-sm rounded-full font-medium">1. Audit</span>
                <span className="px-md py-xs bg-accent text-gray-900 text-sm rounded-full font-medium">2. Plan</span>
                <span className="px-md py-xs bg-accent text-gray-900 text-sm rounded-full font-medium">3. Build</span>
              </div>
              
              <h3 className="neuton-regular text-2xl mb-md">
                <span className="text-accent">Smart Analysis</span> &
                <br />
                Quick Implementation
              </h3>
              
              <p className="text-gray-300 text-base leading-relaxed">
                We start with a simple audit of your current setup. Then we find the best AI opportunities and build solutions that work right away.
              </p>
            </div>
          </div>

          {/* Top Right - Results & ROI */}
          <div className="bg-gray-50 rounded-xl p-xl h-[28rem]">
            <div className="flex items-center mb-md">
              <div className="w-4 h-4 bg-gray-400 rounded mr-md"></div>
              <span className="text-3xl font-bold text-gray-900">Week 1</span>
            </div>
            <p className="text-gray-600 mb-lg">
              See real results from day one
              <br />
              <span className="text-sm">(No waiting months to see progress)</span>
            </p>
            
            <div className="flex items-center mb-md">
              <div className="w-full bg-accent h-2 rounded mr-md"></div>
              <span className="text-3xl font-bold text-gray-900">2-4x</span>
            </div>
            <p className="text-gray-600 mb-lg">
              Typical improvement in efficiency
              <br />
              <span className="text-sm">(Based on our recent client projects)</span>
            </p>
            
            <h3 className="neuton-regular text-xl text-gray-900 mb-sm">
              AI That Helps Your
              <br />
              Bottom Line
            </h3>
            <p className="text-gray-600 text-sm">
              Every solution we build is designed to save you time, reduce costs, or increase revenue. Simple as that.
            </p>
          </div>

          {/* Bottom Left - Implementation Timeline */}
          <div className="bg-gray-50 rounded-xl p-xl h-[28rem]">
            <div className="mb-lg">
              {/* Timeline Header */}
              <div className="text-center mb-md">
                <div className="bg-accent text-gray-900 px-md py-xs rounded-full text-xs font-medium inline-block">
                  4-Week Process
                </div>
              </div>
              
              {/* Simple Timeline Chart */}
              <div className="bg-white rounded-lg p-md mb-md">
                <div className="flex items-end justify-between h-20 mb-sm">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-8 bg-accent rounded mb-xs"></div>
                    <span className="text-xs text-gray-600 text-center">Week 1<br/>Audit</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-12 bg-accent rounded mb-xs"></div>
                    <span className="text-xs text-gray-600 text-center">Week 2<br/>Design</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-16 bg-accent rounded mb-xs"></div>
                    <span className="text-xs text-gray-600 text-center">Week 3<br/>Build</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-20 bg-accent rounded mb-xs"></div>
                    <span className="text-xs text-gray-600 text-center">Week 4<br/>Launch</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between text-xs text-gray-500 px-sm">
                <span>Start: Quick Assessment</span>
                <span>End: Working Solution</span>
              </div>
            </div>
            
            {/* Title and Description - Moved Lower */}
            <div className="mt-lg">
              <h3 className="neuton-regular text-xl text-gray-900 mb-sm">
                Clear Timeline &
                <br />
                Regular Updates
              </h3>
              <p className="text-gray-600 text-sm">
                Know exactly what's happening each week. No surprises, no delays, no confusion.
              </p>
            </div>
          </div>

          {/* Bottom Right - Alex's Expertise */}
          <div className="bg-gray-900 rounded-xl p-xl text-white relative overflow-hidden h-[28rem] bg-leaves-2 bg-cover bg-center">
            {/* Semi-transparent overlay to maintain readability */}
            <div className="absolute inset-0 bg-gray-900/85 rounded-xl"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex flex-wrap gap-xs mb-lg">
                <div className="bg-accent text-gray-900 px-md py-xs rounded-full text-xs font-medium">
                  Proven Results
                </div>
                <div className="bg-accent text-gray-900 px-md py-xs rounded-full text-xs font-medium">
                  All Business Sizes
                </div>
                <div className="bg-accent text-gray-900 px-md py-xs rounded-full text-xs font-medium">
                  Real Support
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="neuton-regular text-xl mb-md">
                  Experience That
                  <br />
                  <span className="text-accent">Actually Matters.</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We've helped startups save thousands and big companies save millions. Every project gets the same attention to detail.
                </p>
              </div>
              
              {/* Profile representation */}
              <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full overflow-hidden opacity-80 border-2 border-accent">
                <img 
                  src="/images/Alex.jpeg" 
                  alt="Alex Kaymakanov - AI Solutions Expert" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeMakeADifference; 