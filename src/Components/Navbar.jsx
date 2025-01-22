import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
];

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [textColor, setTextColor] = useState("text-black");
  const navRef = useRef(null);

  const updateTextColor = () => {
    if (!navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();
    const centerX = navRect.left + navRect.width / 2;
    const centerY = navRect.top + navRect.height / 2;

    const element = document.elementFromPoint(centerX, centerY);
    if (!element) return;

    let currentElement = element;
    while (currentElement && currentElement !== document.body) {
      const bgColor = window.getComputedStyle(currentElement).backgroundColor;
      if (bgColor && bgColor !== "rgba(0, 0, 0, 0)" && bgColor !== "transparent") {
        const rgb = bgColor.match(/\d+/g);
        if (rgb) {
          const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
          setTextColor(brightness < 128 ? "text-white" : "text-black");
        }
        break;
      }
      currentElement = currentElement.parentElement;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      updateTextColor();
    };
    const resizeObserver = new ResizeObserver(updateTextColor);
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (navRef.current) {
      resizeObserver.observe(navRef.current);
    }

    updateTextColor();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navLinkClasses = `font-medium ${textColor} text-gray-600 hover:text-white hover:bg-gray-700 px-3 py-2 transition-all duration-300 inline-block relative group`;
  const underlineClasses = `absolute -bottom-1 left-0 w-full h-0.5 ${textColor === "text-white" ? "bg-white" : "bg-black"} transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100`;

  return (
    <nav ref={navRef} className="fixed left-0 right-0 z-50 backdrop-blur-md">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-20 2xl:px-72 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="Home">
            <div className="relative h-8 w-32">
              <img
                src="/src/assets/images/DevSync_Logo.png"
                alt="Company Logo"
                className={`object-contain transition-all duration-200 ${
                  textColor === "text-white" ? "filter invert" : ""
                }`}
                width={128}
                height={32}
              />
            </div>
          </Link>

          <div className="hidden md:flex space-x-4 items-center">
            {NAV_LINKS.map((link) => (
              <div key={link.to} className="relative group">
                <Link to={link.to} className={navLinkClasses}>
                  <span className="relative">
                    {link.label}
                    <span className={underlineClasses}></span>
                  </span>
                </Link>
              </div>
            ))}
            {/* Modify the Contact Us button to link to mailto */}
            <a
              href="mailto:ikarn.dev@gmail.com"
              className={`px-4 py-2 inline-flex items-center justify-center ${
                textColor === "text-white"
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              } font-semibold text-center rounded-xl transition-colors`}
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <a
              href="mailto:ikarn.dev@gmail.com"
              className={`px-4 py-2 inline-flex items-center justify-center ${
                textColor === "text-white"
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              } text-center rounded-xl transition-colors`}
            >
              Contact
            </a>
            <button
              onClick={toggleMenu}
              className={`relative w-10 h-10 ${
                textColor === "text-white" ? "bg-white" : "bg-black"
              } rounded-full flex items-center justify-center cursor-pointer`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className={textColor === "text-white" ? "text-black" : "text-white"} size={24} />
              ) : (
                <Menu className={textColor === "text-white" ? "text-black" : "text-white"} size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden ${
          isMenuOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        } backdrop-blur-md transition-all duration-200`}
      >
        <div className="flex flex-col items-start pt-4 pb-4 px-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-lg ${textColor} hover:opacity-80 transition-colors inline-block relative group`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative">
                {link.label}
                <span className={underlineClasses}></span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
