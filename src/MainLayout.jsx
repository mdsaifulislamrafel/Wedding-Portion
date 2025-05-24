import { Outlet } from "react-router-dom";
import Navebar from "./components/Navebar/Navebar";
import Footer from "./components/Footer/Footer";
import ChatSystemIcon from "./components/social-media-icon/social-media-icon";
import BackToTop from "./components/social-media-icon/BackToTop";

const MainLayout = () => {
  return (
    <div>
      <Navebar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer/>
      <div className="fixed bottom-6 right-6 z-50">
        <ChatSystemIcon />
      </div>
      
      <div className="fixed bottom-6 right-20 z-50">
        <BackToTop />
      </div>
    </div>
  );
};

export default MainLayout;
