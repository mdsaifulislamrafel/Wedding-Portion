import { Outlet } from "react-router-dom";
import Navebar from "./components/Navebar/Navebar";

const MainLayout = () => {
  return (
    <div>
      <Navebar />
      <div className="min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
