import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
];

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  // Handle scroll to change Navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle mobile menu animations
  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        duration: 0.5,
        height: "auto",
        opacity: 1,
        ease: "power3.out",
      });

      gsap.fromTo(
        linksRef.current.filter(Boolean),
        { 
          y: 20, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        duration: 0.5,
        height: 0,
        opacity: 0,
        ease: "power3.inOut",
      });
    }
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav 
      className="fixed left-0 right-0 z-50 backdrop-blur-md"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-20 2xl:px-72 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            aria-label="Home"
          >
            <div className="relative h-8 w-32">
              <img
                src="/src/assets/images/DevSync_Logo.png"
                alt="Company Logo"
                className={`object-contain transition-all duration-300 ${
                  scrolled ? "filter brightness-0" : ""
                }`}
                width={128}
                height={32}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            {NAV_LINKS.map((link) => (
              <div key={link.to} className="relative group">
                <Link
                  to={link.to}
                  className="font-medium text-black hover:text-gray-600 px-3 py-2 transition-colors inline-block relative group"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </span>
                </Link>
              </div>
            ))}
            
            {/* Contact Button */}
            <Link
              to="/contact"
              className="px-4 py-2 inline-flex items-center justify-center bg-black font-semibold text-white 
                text-center rounded-xl hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="md:hidden flex items-center backdrop-blur-md space-x-4">
            <Link
              to="/contact"
              className="px-4 py-2 inline-flex items-center justify-center bg-black text-white text-center rounded-xl hover:bg-gray-800 transition-colors"
            >
              Contact
            </Link>
            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="text-white" size={24} />
              ) : (
                <Menu className="text-white" size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        ref={menuRef} 
        className="md:hidden overflow-hidden opacity-0 h-0 backdrop-blur-md"
      >
        <div className="flex flex-col items-start pt-4 pb-4 px-6 space-y-4">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              ref={(el) => (linksRef.current[index] = el)}
              className="text-lg text-black hover:text-gray-600 transition-colors inline-block relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;