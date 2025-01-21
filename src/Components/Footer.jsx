// src/Components/Footer.jsx

import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FAF9F6]">
      <div className="px-4 sm:px-6 md:px-8 lg:px-24 2xl:px-72 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Column: Startup Info */}
          <div className="col-span-1">
            <h3 className="text-gray-900 text-xl font-bold mb-2">Startup</h3>
            <p className="text-gray-600 text-sm">
              Transforming digital landscapes with innovative solutions and 
              cutting-edge technologies.
            </p>
          </div>

          {/* Second Column: Quick Links */}
          <div className="col-span-1">
            <h4 className="text-gray-900 text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#about-us" 
                  className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column: Contact Links and Follow Us */}
          <div className="col-span-1">
            <div className="flex justify-between">
              <div>
                <h4 className="text-gray-900 text-lg font-semibold mb-3">Contact</h4>
                <ul className="space-y-1">
                  <li>
                    <a 
                      href="#quote" 
                      className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                    >
                      Get a Quote
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#support" 
                      className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#contact-us" 
                      className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#career" 
                      className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                    >
                      Career
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-900 text-lg font-semibold mb-3">Follow Us</h4>
                <div className="space-y-1">
                  <a 
                    href="#facebook" 
                    className="flex items-center text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    <Facebook size={16} className="mr-2" /> Facebook
                  </a>
                  <a 
                    href="#twitter" 
                    className="flex items-center text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    <Twitter size={16} className="mr-2" /> Twitter
                  </a>
                  <a 
                    href="#instagram" 
                    className="flex items-center text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    <Instagram size={16} className="mr-2" /> Instagram
                  </a>
                  <a 
                    href="#linkedin" 
                    className="flex items-center text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    <Linkedin size={16} className="mr-2" /> LinkedIn
                  </a>
                  <a 
                    href="#github" 
                    className="flex items-center text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    <Github size={16} className="mr-2" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Copyright and Legal Links - Full Width */}
      <div className="bg-black text-white w-full">
        <div className="px-4 sm:px-6 md:px-8 lg:px-24 2xl:px-72 flex flex-col sm:flex-row justify-between items-center py-4">
          <p className="text-xs mb-2 sm:mb-0">
            © 2024 Startup. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#privacy-policy" 
              className="hover:text-gray-300 text-xs transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms-of-service" 
              className="hover:text-gray-300 text-xs transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
