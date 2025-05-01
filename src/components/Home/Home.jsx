
import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import SocialMedia from "./SocialMedia/SocialMedia";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <SocialMedia />
    </div>
  );
};

export default Home;
