import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6]">
      <div className="py-8">
        <div className="flex flex-col items-center">
          <h4 className="text-gray-900 text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a 
              href="#facebook" 
              className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="#twitter" 
              className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#instagram" 
              className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="#linkedin" 
              className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#github" 
              className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black text-white w-full">
        <p className="text-center py-4 text-xs">© {currentYear} DevSync. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
