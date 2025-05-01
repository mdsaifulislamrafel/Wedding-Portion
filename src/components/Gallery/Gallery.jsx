import { Parallax } from "react-parallax";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import GalleryImage from "./GalleryImage/GalleryImage";

const Gallery = () => {
  const galleryRef = useRef(null);

  const scrollToGallery = () => {
    galleryRef.current.scrollIntoView({ 
      behavior: "smooth" 
    });
  };

  return (
    <div>
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1658314756268-3552b9ba2784?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bgImageAlt="Wedding background"
        strength={400}
        bgImageStyle={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        <div className="relative h-[90vh] flex items-center justify-center">
          {/* Down Arrow Icon */}
          <div 
            className="absolute bottom-10 animate-bounce cursor-pointer"
            onClick={scrollToGallery}
          >
            <div className="flex flex-col items-center">
              <span className="text-white text-sm mb-2 font-medium">View Gallery</span>
              <ChevronDown size={36} className="text-yellow-400" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-400"></div>
        </div>
      </Parallax>

      {/* gallery - with ref for scrolling */}
      <div ref={galleryRef}>
        <GalleryImage />
      </div>
    </div>
  );
};

export default Gallery;