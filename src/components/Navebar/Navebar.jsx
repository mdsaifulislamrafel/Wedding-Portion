import { useState, useEffect } from "react";
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
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen) {
        const nav = document.getElementById('mobile-nav');
        if (nav && !nav.contains(event.target) && !event.target.classList.contains('menu-toggle')) {
          setIsMenuOpen(false);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  // Check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  // Custom Link component that handles active styling
  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`relative group px-2 py-3 md:py-1 transition-all duration-300 ease-in-out flex items-center justify-center md:justify-start ${
        isActive(to) 
          ? "text-yellow-400" 
          : "text-white hover:text-yellow-400"
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span 
        className={`absolute left-0 bottom-0 w-full h-0.5 transform origin-bottom 
                   transition-all duration-300 ease-in-out
                   ${isActive(to) 
                     ? "bg-yellow-400" 
                     : "bg-transparent group-hover:bg-yellow-400"}`}
      ></span>
    </Link>
  );

  const socialIcons = [
    { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Youtube size={18} />, href: "#", label: "Youtube" },
  ];

  return (
    <header className="bg-black text-white py-3 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold italic text-white">
            Wedding <span className="text-yellow-400">Portion</span>
          </span>
        </div>

        {/* Mobile Navigation */}
        <nav
          id="mobile-nav"
          className={`fixed md:relative top-0 md:top-0 right-0 h-full md:h-auto w-3/4 md:w-auto 
                     bg-black md:bg-transparent z-40 md:z-auto
                     transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0
                     transition-transform duration-300 ease-in-out
                     flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6
                     py-20 md:py-0 px-6 md:px-0 shadow-lg md:shadow-none`}
        >
          {/* Close button inside nav for mobile */}
          <button
            className="absolute top-4 right-4 md:hidden text-white hover:text-yellow-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/services">PACKAGES</NavLink>
          <NavLink to="/our-team">OUR TEAM</NavLink>
          <NavLink to="/gallery">GALLERY</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          
          {/* Social icons - visible only on mobile */}
          <div className="flex justify-center space-x-6 mt-8 md:hidden">
            {socialIcons.map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                aria-label={item.label}
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </nav>
        
        {/* Overlay for mobile menu */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Right section: Search and Menu toggle */}
        <div className="flex items-center space-x-4">
          {/* Social icons - visible only on desktop */}
          <div className="hidden md:flex space-x-3">
            {socialIcons.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                aria-label={item.label}
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
          
          
          <button
            className="menu-toggle md:hidden hover:text-yellow-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;