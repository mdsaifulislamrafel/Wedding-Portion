import Footer from "../Footer/Footer";
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
      <Footer/>
    </div>
  );
};

export default Home;
