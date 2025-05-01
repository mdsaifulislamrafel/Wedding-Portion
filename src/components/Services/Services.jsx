import { Parallax } from "react-parallax";
import WeddingPackages from "./WeddingPackages/WeddingPackages";

const Services = () => {
  return (
    <div>
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1743360543515-d3b506e6d3c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-400"></div>
        </div>
      </Parallax>
      <WeddingPackages/>
    </div>
  );
};

export default Services;
