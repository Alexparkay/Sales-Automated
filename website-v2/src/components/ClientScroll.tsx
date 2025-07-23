const ClientScroll = () => {
  // All 14 partner logos in your specified order
  const clients = [
    { name: "Aldi", logo: "/images/partners/Aldi_logo.png" },
    { name: "Apexion", logo: "/images/partners/Apexion_logo.png" },
    { name: "BondMedia", logo: "/images/partners/BondMedia_logo.png" },
    { name: "Eternal", logo: "/images/partners/Eternal.png" },
    { name: "HeTone", logo: "/images/partners/HeTone_logo.png" },
    { name: "ICTC", logo: "/images/partners/ICTC_logo.png" },
    { name: "Luxwall", logo: "/images/partners/Luxwall_Black_Horizontal_Tag.png" },
    { name: "Marx", logo: "/images/partners/marx.png" },
    { name: "Qsolar", logo: "/images/partners/Qsolar_logo.png" },
    { name: "Bondscale", logo: "/images/partners/bondscale.png" },
    { name: "SAP", logo: "/images/partners/SAP-Emblem.png" },
    { name: "SCG", logo: "/images/partners/SCG_logo.png" },
    { name: "Stefannini", logo: "/images/partners/Stefannini.png" },
    { name: "Vysiion", logo: "/images/partners/vysiion.png" }
  ];

  console.log(`🔧 DEBUG: Total clients: ${clients.length}`);
  console.log('🔧 DEBUG: All clients:', clients.map((c, i) => `${i+1}. ${c.name}`).join(', '));

  // Get custom size class for specific logos
  const getLogoSizeClass = (clientName: string) => {
    switch (clientName) {
      case "Apexion":
        return "logo-xl"; // A little bit larger than large
      case "Bondscale":
        return "logo-xl"; // A little bit larger than large
      case "ICTC":
        return "logo-small"; // Small but a little larger
      case "Luxwall":
        return "logo-small"; // Small but a little larger
      case "SAP":
        return "logo-small"; // Stays smaller
      default:
        return "logo-large"; // Regular large size
    }
  };

  return (
    <section className="w-screen overflow-hidden bg-white py-md relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="scroll-container">
        <div className="scroll-content">
          {/* First complete set */}
          {clients.map((client, index) => (
            <div key={`first-${index}`} className="logo-wrapper">
              <img 
                src={client.logo} 
                alt={client.name} 
                className={`logo-base ${getLogoSizeClass(client.name)}`}
                onLoad={() => console.log(`🟢 LOADED First ${index + 1}/14: ${client.name}`)}
                onError={() => console.error(`🔴 ERROR First ${client.name}`)}
              />
            </div>
          ))}
          {/* Second complete set for seamless loop */}
          {clients.map((client, index) => (
            <div key={`second-${index}`} className="logo-wrapper">
              <img 
                src={client.logo} 
                alt={client.name} 
                className={`logo-base ${getLogoSizeClass(client.name)}`}
                onLoad={() => console.log(`🟢 LOADED Second ${index + 1}/14: ${client.name}`)}
                onError={() => console.error(`🔴 ERROR Second ${client.name}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientScroll;