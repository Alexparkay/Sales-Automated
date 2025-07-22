import { useState } from 'react';

const PeopleLoveWorkingWithUs = () => {
  const [showMore, setShowMore] = useState(false);

  const initialTestimonials = [
    {
      id: 1,
      type: "video",
      name: "Cory Miller",
      company: "fit.com",
      videoThumbnail: "https://i.ibb.co/8DqQcTj/image.png",
      videoUrl: "" // Can be populated with actual video URL
    },
    {
      id: 2,
      type: "text",
      title: "Outstanding work.",
      content: "We're impressed of the quality of their AI solutions and quick response times. The team always responded within hours whenever we need changes to be made on the AI models itself.",
      name: "Chris Current",
      jobTitle: "CEO of Agent First",
      avatar: "https://i.ibb.co/3zdWc7M/image.png"
    },
    {
      id: 3,
      type: "video",
      name: "Chris Lawrence",
      company: "Swap.fm",
      videoThumbnail: "https://i.ibb.co/jGMmCns/image.png",
      videoUrl: "" // Can be populated with actual video URL
    },
    {
      id: 4,
      type: "text",
      title: "The Imperium Growth team was open minded and resolved every issue quickly.",
      content: "Our AI implementation received great feedback & the performance metrics have increased. Everything was delivered on time!",
      name: "Monika Staroga",
      jobTitle: "Head of Marketing at VIACOM",
      avatar: "https://i.ibb.co/nMSwZMb/image.png"
    },
    {
      id: 5,
      type: "text",
      title: "The team was very creative and provided us with a very high quality outcome of their work.",
      content: "They responded quickly to our remarks and proved to be focused on details.\n\nWe consider them as professionals.",
      name: "Tomasz Siciński",
      jobTitle: "CEO of Proven, Digital Twins",
      avatar: "https://i.ibb.co/F8z0zQR/image.png"
    },
    {
      id: 6,
      type: "video",
      name: "Dorota Pietrzak",
      company: "Anstoy Online",
      videoThumbnail: "https://i.ibb.co/P9Nrvj4/image.png",
      videoUrl: "" // Can be populated with actual video URL
    },
    {
      id: 7,
      type: "text",
      title: "The Imperium Growth team was insightful and I had an excellent experience working with them.",
      content: "The team were able to deliver something fast that also looked good. They're responsive and they performed very well.",
      name: "Isabella Sobieski",
      jobTitle: "Head of Marketing at Nickelodeon",
      avatar: "https://i.ibb.co/yQzC6cZ/image.png"
    },
    {
      id: 8,
      type: "video",
      name: "Charlie Sumner",
      company: "Wholesale Central",
      videoThumbnail: "https://i.ibb.co/FbfV3r3/image.png",
      videoUrl: "" // Can be populated with actual video URL
    }
  ];

  const additionalTestimonials = [
    {
      id: 9,
      type: "video",
      name: "Sarah Chen",
      company: "TechFlow Solutions",
      videoThumbnail: "https://i.ibb.co/8DqQcTj/image.png",
      videoUrl: ""
    },
    {
      id: 10,
      type: "text",
      title: "Incredible results in record time.",
      content: "The AI transformation exceeded our expectations. We saw immediate improvements in productivity and our ROI was evident within the first month of implementation.",
      name: "Michael Rodriguez",
      jobTitle: "CTO at DataStream Inc",
      avatar: "https://i.ibb.co/3zdWc7M/image.png"
    },
    {
      id: 11,
      type: "video",
      name: "Emma Thompson",
      company: "InnovateCorp",
      videoThumbnail: "https://i.ibb.co/jGMmCns/image.png",
      videoUrl: ""
    },
    {
      id: 12,
      type: "text",
      title: "Professional, efficient, and results-driven.",
      content: "Working with Imperium Growth transformed our approach to customer service. The AI chatbot implementation reduced response times by 80% and improved customer satisfaction significantly.",
      name: "David Park",
      jobTitle: "Operations Manager at ServicePro",
      avatar: "https://i.ibb.co/nMSwZMb/image.png"
    }
  ];

  const handleVideoClick = (testimonial: any) => {
    if (testimonial.videoUrl) {
      // Open video in modal or redirect to video URL
      window.open(testimonial.videoUrl, '_blank');
    } else {
      console.log(`Video for ${testimonial.name} - URL not provided yet`);
    }
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <section className="w-full px-lg pt-3xl py-2xl pb-3xl bg-white">
      <div className="max-w-1200 mx-auto">
        <div className="text-left mb-xl">
          <h2 className="font-inter text-4xl lg:text-5xl font-bold text-gray-900 mb-md">
            People love working with us
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
          {initialTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="group">
              {testimonial.type === "video" ? (
                // Video Testimonial
                <div 
                  className="relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group-hover:shadow-lg transition-all duration-300"
                  onClick={() => handleVideoClick(testimonial)}
                >
                  <img 
                    src={testimonial.videoThumbnail} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  {/* Name overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-inter font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm opacity-90">{testimonial.company}</p>
                  </div>
                </div>
              ) : (
                // Text Testimonial
                <div className="bg-gray-50 rounded-xl p-lg h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-inter font-semibold text-lg text-gray-900 mb-md leading-tight">
                      {testimonial.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-lg whitespace-pre-line">
                      {testimonial.content}
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-md"
                    />
                    <div>
                      <h4 className="font-inter font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.jobTitle}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* See More Button - only show if not expanded */}
        {!showMore && (
          <div className="text-center mt-xl">
            <button 
              onClick={handleShowMore}
              className="inline-flex items-center px-lg py-md text-accent-dark font-medium hover:text-accent transition-colors"
            >
              See More
              <svg 
                className="w-4 h-4 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Additional Testimonials */}
        {showMore && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mt-xl">
            {additionalTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="group">
                {testimonial.type === "video" ? (
                  // Video Testimonial
                  <div 
                    className="relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group-hover:shadow-lg transition-all duration-300"
                    onClick={() => handleVideoClick(testimonial)}
                  >
                    <img 
                      src={testimonial.videoThumbnail} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    {/* Name overlay */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-inter font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm opacity-90">{testimonial.company}</p>
                    </div>
                  </div>
                ) : (
                  // Text Testimonial
                  <div className="bg-gray-50 rounded-xl p-lg h-full flex flex-col justify-between">
                    <div>
                      <h3 className="font-inter font-semibold text-lg text-gray-900 mb-md leading-tight">
                        {testimonial.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed mb-lg whitespace-pre-line">
                        {testimonial.content}
                      </p>
                    </div>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-md"
                      />
                      <div>
                        <h4 className="font-inter font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.jobTitle}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PeopleLoveWorkingWithUs; 