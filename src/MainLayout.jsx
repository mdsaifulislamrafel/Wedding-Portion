import { Outlet } from "react-router-dom";
import Navebar from "./components/Navebar/Navebar";
import Footer from "./components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navebar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
