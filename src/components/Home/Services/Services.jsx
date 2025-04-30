import { Camera, Video } from "lucide-react";
import ServiceCard from "../../../utils/ServicesCard";

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">OUR SERVICES</h2>
        <div className="flex flex-wrap  items-center justify-center p-8 md:p-16 gap-8 bg-slate-300 rounded-md">
          <ServiceCard 
            icon={<Camera size={64} color="gold" />} 
            title="PHOTOGRAPHY" 
          />
          <ServiceCard 
            icon={<Video size={64} color="gold" />} 
            title="CINEMATOGRAPHY" 
          />
        </div>
      </div>
    </section>
  );
};

export default Services;