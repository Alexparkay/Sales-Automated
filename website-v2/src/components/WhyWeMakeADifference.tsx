const WhyWeMakeADifference = () => {
  return (
    <section className="w-full px-lg py-2xl pb-3xl bg-white">
      <div className="max-w-1200 mx-auto">
        <div className="text-left mb-xl">
          <h2 className="font-inter text-4xl lg:text-5xl font-bold text-gray-900 mb-md">
            Why we make a difference
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {/* Top Left - Dark card with industry tags */}
          <div className="bg-gray-900 rounded-xl p-xl text-white relative overflow-hidden h-[28rem]">
            <div className="flex flex-wrap gap-sm mb-lg">
              <span className="px-md py-xs bg-gray-700 text-white text-sm rounded-full">Healthcare</span>
              <span className="px-md py-xs bg-gray-700 text-white text-sm rounded-full">Media</span>
              <span className="px-md py-xs bg-gray-700 text-white text-sm rounded-full">E-commerce</span>
              <span className="px-md py-xs bg-gray-700 text-white text-sm rounded-full">Banking</span>
              <span className="px-md py-xs bg-gray-700 text-white text-sm rounded-full">Creator economy</span>
              <span className="px-md py-xs bg-gray-700 text-white text-sm rounded-full">Sports & Fitness</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-md">
              25 years of <span className="text-accent">cross-industry</span>
              <br />
              experience in AI transformation
            </h3>
            
            <p className="text-gray-300 text-base">
              We delivered over 400 AI projects for dozens of industries from banking, TV channels all the way to predictive analytics.
            </p>
          </div>

          {/* Top Right - Conversion statistics */}
          <div className="bg-gray-50 rounded-xl p-xl h-[28rem]">
            <div className="flex items-center mb-md">
              <div className="w-4 h-4 bg-gray-400 rounded mr-md"></div>
              <span className="text-3xl font-bold text-gray-900">1-2%</span>
            </div>
            <p className="text-gray-600 mb-lg">
              Most AI implementations fail poorly
              <br />
              <span className="text-sm">(bad strategy, lack of expertise, missed transformation potential)</span>
            </p>
            
            <div className="flex items-center mb-md">
              <div className="w-full bg-accent h-2 rounded mr-md"></div>
              <span className="text-3xl font-bold text-gray-900">7-16%</span>
            </div>
            <p className="text-gray-600 mb-lg">
              Imperium Growth AI transformations
              <br />
              <span className="text-sm">(strategic analysis based + proven optimization)</span>
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-sm">
              AI-centric transformation,
              <br />
              that turns businesses into industry leaders
            </h3>
            <p className="text-gray-600 text-sm">
              Close more deals & grow business with highly optimized AI systems, tailored to drive efficiency and competitive advantage.
            </p>
          </div>

          {/* Bottom Left - Growth chart */}
          <div className="bg-gray-50 rounded-xl p-xl h-[28rem]">
            <div className="relative mb-lg">
              <div className="flex items-end justify-between h-24 mb-md">
                <div className="w-2 h-6 bg-gray-300 rounded"></div>
                <div className="w-2 h-8 bg-gray-300 rounded"></div>
                <div className="w-2 h-10 bg-gray-300 rounded"></div>
                <div className="w-2 h-12 bg-gray-300 rounded"></div>
                <div className="w-2 h-16 bg-accent rounded"></div>
                <div className="w-2 h-20 bg-accent rounded"></div>
                <div className="w-2 h-24 bg-accent rounded"></div>
              </div>
              
              <div className="absolute top-2 right-4">
                <div className="bg-accent text-gray-900 px-md py-xs rounded-full text-xs font-medium">
                  Future growth
                </div>
              </div>
              
              <div className="flex justify-between text-xs text-gray-500">
                <span>You are here</span>
                <span>Your transformation rate</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-sm">
              Long term optimization
              <br />
              strategy & planning
            </h3>
            <p className="text-gray-600 text-sm">
              We don't just implement. We plan ahead on how to scale, refine and further optimize the AI systems so it continues growing.
            </p>
          </div>

          {/* Bottom Right - Person with AI decisions */}
          <div className="bg-gray-900 rounded-xl p-xl text-white relative overflow-hidden h-[28rem]">
            <div className="absolute right-4 top-4">
              <div className="bg-accent text-gray-900 px-md py-xs rounded-full text-xs font-medium mb-xs">
                Why is it better?
              </div>
              <div className="bg-accent text-gray-900 px-md py-xs rounded-full text-xs font-medium mb-xs">
                Clearer CTA
              </div>
              <div className="bg-accent text-gray-900 px-md py-xs rounded-full text-xs font-medium">
                Simplified messaging
              </div>
            </div>
            
            <div className="mt-xl">
              <h3 className="text-xl font-bold mb-md">
                AI decisions.
                <br />
                <span className="text-accent">Explained.</span>
              </h3>
              <p className="text-gray-300 text-sm">
                All the AI transformation decisions are explained in a comprehensive document when you receive the first strategy draft.
              </p>
            </div>
            
            {/* Simplified person silhouette representation */}
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-gray-700 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeMakeADifference; 