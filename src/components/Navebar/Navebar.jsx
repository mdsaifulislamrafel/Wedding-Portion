import { useState } from "react";
import {
  Camera,
  Video,
  Facebook,
  Instagram,
  Youtube,
  Search,
  Menu,
  X,
} from "lucide-react";
const Navebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-3 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <span className="text-xl font-bold italic">Wedding Portion</span>
        </div>

        <nav
          className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent 
                          ${
                            isMenuOpen ? "flex" : "hidden"
                          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 
                          p-4 md:p-0 transition-all duration-300 ease-in-out z-40`}
        >
          <a
            href="#"
            className="hover:text-yellow-400 border-b border-transparent hover:border-yellow-400 font-medium"
          >
            HOME
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 border-b border-transparent hover:border-yellow-400 font-medium"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 border-b border-transparent hover:border-yellow-400 font-medium"
          >
            PACKAGES
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 border-b border-transparent hover:border-yellow-400 font-medium"
          >
            OUR TEAM
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 border-b border-transparent hover:border-yellow-400 font-medium"
          >
            GALLERY
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 border-b border-transparent hover:border-yellow-400 font-medium"
          >
            CONTACT
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <button className="hover:text-yellow-400">
            <Search size={20} />
          </button>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navebar;