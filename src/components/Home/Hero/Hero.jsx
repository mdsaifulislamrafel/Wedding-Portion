import { Parallax } from 'react-parallax';

const Hero = () => {
  return (
    <Parallax
      blur={0}
      bgImage="https://images.unsplash.com/photo-1745770998338-eb50b0c89b16?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      bgImageAlt="Wedding background"
      strength={400}
    >
      <div className="relative h-96 md:h-[500px] flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">WEDDING PORTION</h1>
          <p className="text-xl italic">
            "A tribute to art and unending poetry of real"
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-400"></div>
      </div>
    </Parallax>
  );
};

export default Hero;