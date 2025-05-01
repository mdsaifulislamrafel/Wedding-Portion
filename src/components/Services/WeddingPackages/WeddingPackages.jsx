

const WeddingPackages = () => {
  // JSON data for different packages
  const packagesData = [
    {
      id: 1,
      title: "REGULAR",
      price: "-BDT- 16,500/=",
      features: [
        "1 Event",
        "1 Photographer",
        "1 Cinematographer",
        "Event Duration: 4 Hours",
        "Unlimited Clicks",
        "Soft Copies",
        "All Photos Edited",
        "Delivery Time: (10-14)Days",
        "All files Provided by the google drive"
      ],
      image: "https://images.unsplash.com/photo-1595326947594-d0074652a181?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Using placeholder image
    },
    {
      id: 2,
      title: "STANDARD",
      price: "-BDT- 25,000/=",
      features: [
        "1 Event",
        "2 Photographers",
        "1 Cinematographer",
        "Event Duration: 6 Hours",
        "Unlimited Clicks",
        "Soft Copies",
        "All Photos Edited",
        "Delivery Time: (7-10)Days",
        "All files Provided by the google drive"
      ],
      image: "https://images.unsplash.com/photo-1548637724-cbc39e0c8d3b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Using placeholder image
    },
    {
      id: 3,
      title: "PREMIUM",
      price: "-BDT- 35,000/=",
      features: [
        "2 Events",
        "2 Photographers",
        "2 Cinematographers",
        "Event Duration: 8 Hours",
        "Unlimited Clicks",
        "Soft Copies & Photo Album",
        "All Photos Edited",
        "Delivery Time: (5-7)Days",
        "All files Provided by the google drive"
      ],
      image: "https://images.unsplash.com/photo-1529230815964-592d9b61876f?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Using placeholder image
    },
    {
      id: 4,
      title: "CLASSIC",
      price: "-BDT- 35,000/=",
      features: [
        "2 Events",
        "2 Photographers",
        "2 Cinematographers",
        "Event Duration: 8 Hours",
        "Unlimited Clicks",
        "Soft Copies & Photo Album",
        "All Photos Edited",
        "Delivery Time: (5-7)Days",
        "All files Provided by the google drive"
      ],
      image: "https://images.unsplash.com/photo-1566942974683-0a1aa5d212f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Using placeholder image
    }
    ,
    {
      id: 5,
      title: "AFFORDABLE",
      price: "-BDT- 35,000/=",
      features: [
        "2 Events",
        "2 Photographers",
        "2 Cinematographers",
        "Event Duration: 8 Hours",
        "Unlimited Clicks",
        "Soft Copies & Photo Album",
        "All Photos Edited",
        "Delivery Time: (5-7)Days",
        "All files Provided by the google drive"
      ],
      image: "https://plus.unsplash.com/premium_photo-1683147879285-096c3bd31262?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Using placeholder image
    }
    ,
    {
      id: 5,
      title: "AFFORDABLE",
      price: "-BDT- 35,000/=",
      features: [
        "2 Events",
        "2 Photographers",
        "2 Cinematographers",
        "Event Duration: 8 Hours",
        "Unlimited Clicks",
        "Soft Copies & Photo Album",
        "All Photos Edited",
        "Delivery Time: (5-7)Days",
        "All files Provided by the google drive"
      ],
      image: "https://images.unsplash.com/photo-1594409855476-29909f35c73c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Using placeholder image
    }
  ];

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Our Wedding Packages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.id} packageData={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PackageCard = ({ packageData }) => {
  return (
    <div className="w-full border border-amber-300 bg-white">
      <div className="flex flex-col md:flex-row lg:flex-col">
        <div className="w-full lg:h-80 overflow-hidden">
          <img 
            src={packageData.image} 
            alt={`${packageData.title} Package`} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-3xl font-bold text-green-800 mb-4 text-center">
            {packageData.title}
          </h3>
          
          <div className="text-2xl font-bold text-center mb-4">
            {packageData.price}
          </div>
          
          <ul className="mb-6 flex-grow">
            {packageData.features.map((feature, index) => (
              <li key={index} className="flex items-start mb-2">
                <span className="mr-2 mt-1 text-black">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto">
            <button className="w-full py-3 border border-amber-500 text-black hover:bg-amber-500 hover:text-white transition-colors font-medium">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingPackages;