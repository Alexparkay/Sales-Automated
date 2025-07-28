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
          {/* Box 1 - AI Strategy Built for Your Business */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-black rounded-xl p-xl text-white relative overflow-hidden h-[32rem] bg-leaves-1 bg-cover bg-center shadow-2xl">
            {/* Semi-transparent overlay to maintain readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-black/95 rounded-xl"></div>
            <div className="relative z-10">
              <div className="flex flex-wrap gap-sm mb-lg">
                <span className="px-md py-xs bg-gradient-to-r from-accent to-accent-dark text-gray-900 text-sm rounded-full font-medium shadow-lg">Philosophy</span>
              </div>
              
              <h3 className="neuton-regular text-3xl mb-md leading-tight">
                <span className="text-accent">AI Strategy</span> Built for
                <br />
                Your Business
              </h3>
              
              <p className="text-gray-200 text-lg leading-relaxed">
                Not generic solutions. Not AI hype. Just intelligent systems that solve your actual problems.
              </p>
            </div>
          </div>

          {/* Box 2 - We Audit First, Recommend Second */}
          <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-slate-300 rounded-xl p-xl h-[32rem] shadow-2xl border border-slate-300" style={{background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 30%, #e2e8f0 60%, #cbd5e1 85%, #94a3b8 100%)'}}>
            <div className="flex flex-wrap gap-sm mb-lg">
              <span className="px-md py-xs bg-gradient-to-r from-accent to-accent-dark text-white text-sm rounded-full font-medium shadow-lg">Discovery</span>
            </div>
            
            <h3 className="neuton-regular text-3xl text-gray-900 mb-md leading-tight">
              We Audit First,
              <br />
              <span className="text-accent">Recommend Second</span>
            </h3>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Deep business analysis reveals where AI creates the most impact for YOUR specific challenges.
            </p>
          </div>

          {/* Box 3 - From Consultation to Creation */}
          <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-slate-300 rounded-xl p-xl h-[32rem] shadow-2xl border border-slate-300" style={{background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 30%, #e2e8f0 60%, #cbd5e1 85%, #94a3b8 100%)'}}>
            <div className="flex flex-wrap gap-sm mb-lg">
              <span className="px-md py-xs bg-gradient-to-r from-accent to-accent-dark text-white text-sm rounded-full font-medium shadow-lg">Execution</span>
            </div>
            
            <h3 className="neuton-regular text-3xl text-gray-900 mb-md leading-tight">
              From Consultation
              <br />
              <span className="text-accent">to Creation</span>
            </h3>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              42+ developers ready to build whatever your business needs - custom, scalable, and delivered fast.
            </p>
          </div>

          {/* Box 4 - ROI You Can Measure */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-black rounded-xl p-xl text-white relative overflow-hidden h-[32rem] bg-leaves-2 bg-cover bg-center shadow-2xl">
            {/* Semi-transparent overlay to maintain readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-black/95 rounded-xl"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex flex-wrap gap-sm mb-lg">
                <span className="px-md py-xs bg-gradient-to-r from-accent to-accent-dark text-gray-900 text-sm rounded-full font-medium shadow-lg">Outcomes</span>
              </div>
              
              <h3 className="neuton-regular text-3xl mb-md leading-tight">
                <span className="text-accent">ROI</span> You Can
                <br />
                Measure
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                Growth systems on autopilot. Costs slashed. Processes optimized. Real results, not just impressive demos.
              </p>
              
              {/* Profile representation */}
              <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full overflow-hidden opacity-80 border-2 border-accent shadow-lg">
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