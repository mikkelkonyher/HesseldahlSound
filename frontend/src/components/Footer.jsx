import React from 'react';
import { Link } from 'react-router-dom';
import { Volume2, Music, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-2 group mb-4">
              <Volume2 className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              <span className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                Hesseldahl Sound
              </span>
            </Link>
            <p className="text-gray-400 text-center md:text-left text-sm max-w-xs">
              Professional audio mixing and mastering services for artists worldwide.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/work" className="text-gray-400 hover:text-blue-300 transition-colors duration-300 text-sm">
                Selected Work
              </Link>
              <Link to="/rates" className="text-gray-400 hover:text-blue-300 transition-colors duration-300 text-sm">
                Rates
              </Link>
              <Link to="/files" className="text-gray-400 hover:text-blue-300 transition-colors duration-300 text-sm">
                How to Send Files
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-blue-300 transition-colors duration-300 text-sm">
                About
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-blue-300 transition-colors duration-300 text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://spotify.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-300 transition-all duration-300 hover:scale-110"
              >
                <Music className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-300 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-900/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Hesseldahl Sound. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Professional mixing & mastering services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;