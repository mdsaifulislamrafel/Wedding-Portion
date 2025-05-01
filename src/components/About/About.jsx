import { Parallax } from "react-parallax";

const About = () => {
  return (
    <div>
      <Parallax
            blur={0}
            bgImage="https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            bgImageAlt="Wedding background"
            strength={400}
          >
            <div className="relative h-96 md:h-[500px] flex items-center">
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="container mx-auto px-4 z-10 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">ABOUT US</h1>
                <p className="text-xl italic">
                  "A tribute to art and unending poetry of real"
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-400"></div>
            </div>
          </Parallax>
      <p className="text-3xl text-center italic font-bold  w-[65%] mx-auto mt-12 ">
        Wedding Portion always provides the best outstanding quality product &
        services. First of all, We care about our valuable clients, which is our
        company’s main focus.
      </p>
    </div>
  );
};

export default About;
