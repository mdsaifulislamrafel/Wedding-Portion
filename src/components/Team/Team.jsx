import { Parallax } from "react-parallax";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Team = () => {
  // Team members data in array format
  const teamMembers = [
    {
      id: 1,
      name: "Jony Siddiquie Jr.",
      position: "CEO & Chief Photographer",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: ""
    },
    {
      id: 2,
      name: "Samia Rahman Simi",
      position: "Marketing Head",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "NSU, Dhaka Bangladesh"
    },
    {
      id: 3,
      name: "Tusher Khan",
      position: "Core Photographer",
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: ""
    },
    {
      id: 4,
      name: "Yeasin Arafat Rajib",
      position: "Editor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: ""
    },
    {
      id: 5,
      name: "RS Masfiq",
      position: "Event Organizer",
      image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: ""
    }
  ];

  // Calculate the number of cards to display per row dynamically
  const getGridTemplateColumns = (arrayLength) => {
    if (arrayLength === 1) return "1fr";
    if (arrayLength === 2) return "1fr 1fr";
    return "1fr 1fr 1fr";
  };

  // Create groups of cards (rows)
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Create rows with maximum 3 items per row
  const rows = chunkArray(teamMembers, 3);

  return (
    <div>
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bgImageAlt="Wedding background"
        strength={400}
        bgImageStyle={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center"
        }}
      >
        <div className="relative h-96 md:h-[500px] flex items-center">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto px-4 z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">OUR TEAM</h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-400"></div>
        </div>
      </Parallax>

      {/* Team Members Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {rows.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className="mb-8 flex justify-center"
            >
              <div 
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: getGridTemplateColumns(row.length),
                  gap: "2rem",
                  width: row.length === 3 ? "100%" : row.length === 2 ? "66%" : "33%"
                }}
              >
                {row.map((member) => (
                  <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="h-80 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-gray-700 mb-1">{member.position}</p>
                      {member.location && <p className="text-gray-500 text-sm">{member.location}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;