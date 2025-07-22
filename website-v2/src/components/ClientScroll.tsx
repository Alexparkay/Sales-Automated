const ClientScroll = () => {
  const clients = [
    { name: "Microsoft", logo: "https://i.ibb.co/bF0DF2S/1.png" },
    { name: "Google", logo: "https://i.ibb.co/5KhC3Ff/2.png" },
    { name: "Amazon", logo: "https://i.ibb.co/3s4y4K5/3.png" },
    { name: "Meta", logo: "https://i.ibb.co/mHq3d2m/4.png" },
    { name: "Tesla", logo: "https://i.ibb.co/Jm2S60W/5.png" },
    { name: "Apple", logo: "https://i.ibb.co/gDFRzJ6/6.png" },
    { name: "Netflix", logo: "https://i.ibb.co/tZ2M9zL/7.png" },
    { name: "Spotify", logo: "https://i.ibb.co/XyP4V2v/8.png" }
  ];

  return (
    <section className="w-full py-lg bg-white overflow-hidden">
      <div className="flex animate-scroll-fast space-x-2xl items-center">
        {/* First set */}
        {clients.map((client, index) => (
          <div key={`first-${index}`} className="flex-shrink-0">
            <img src={client.logo} alt={client.name} className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {clients.map((client, index) => (
          <div key={`second-${index}`} className="flex-shrink-0">
            <img src={client.logo} alt={client.name} className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
          </div>
        ))}
        {/* Third set for extra smoothness */}
        {clients.map((client, index) => (
          <div key={`third-${index}`} className="flex-shrink-0">
            <img src={client.logo} alt={client.name} className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientScroll;