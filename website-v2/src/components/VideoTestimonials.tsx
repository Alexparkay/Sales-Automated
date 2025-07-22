const VideoTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      person: "Alex Kaymakanov",
      title: "Founder/CEO",
      testimonial: "Imperium Growth was founded to eliminate the inefficiencies in traditional business growth. Our AI-native solutions deliver exceptional results, and we're passionate about helping our clients succeed.",
      avatar: "https://i.ibb.co/8DqQcTj/image.png"
    },
    {
      id: 2,
      person: "Archie Nash",
      title: "VP of Operations",
      testimonial: "Having made 150+ cold calls a day with minimal results, I knew there had to be a better way. Alex's approach is transformative for the MSP industry, and I'm proud to be a part of it.",
      avatar: "https://i.ibb.co/3zdWc7M/image.png"
    },
    {
        id: 3,
        person: "Giacomo Heddle",
        title: "Creative Director",
        testimonial: "Storytelling is at the heart of what we do. We build brand authority through education-based marketing that resonates with our clients' audiences and drives growth.",
        avatar: "https://i.ibb.co/nMSwZMb/image.png"
      }
  ];

  return (
    <section className="w-full px-lg py-2xl bg-white">
      <div className="max-w-1200 mx-auto">
        <div className="text-left mb-xl">
          <h2 className="font-inter text-h2 text-gray-900 mb-md">
            Meet the Team
          </h2>
           <p className="text-body-lg text-gray-600">
            The minds behind our AI-powered solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group">
              <div className="aspect-w-16 aspect-h-9 mb-md rounded-lg overflow-hidden">
                <img src={testimonial.avatar} alt={testimonial.person} className="w-full h-full object-cover"/>
              </div>
              <blockquote className="text-body-lg text-gray-800 mb-md">
                "{testimonial.testimonial}"
              </blockquote>
              <div className="flex items-center">
                <div className="ml-sm">
                  <div className="font-inter font-bold text-body-lg text-gray-900">{testimonial.person}</div>
                  <div className="font-inter text-body-md text-gray-600">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;