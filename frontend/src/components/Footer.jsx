import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 border-t border-cyan-300/10">
      {/* Futuristic glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-300/5 to-transparent pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="group relative mb-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/20 to-cyan-500/20 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-gray-950 px-4 py-2 rounded-lg border border-cyan-300/20">
                <span className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 tracking-wide">
                  Hesseldahl sound
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-center md:text-left text-sm max-w-xs leading-relaxed">
              Professional audio mixing and mastering services by Mikkel Hesseldahl Konyher.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-white font-semibold mb-4 tracking-wide">QUICK LINKS</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/work" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm">
                Selected Work
              </Link>
              <Link to="/rates" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm">
                Rates
              </Link>
              <Link to="/files" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm">
                How to Send Files
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm">
                About
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-white font-semibold mb-4 tracking-wide">FOLLOW ME</h3>
            <div className="flex space-x-4">
              <a 
                href="https://spotify.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-cyan-300/5"
              >
                <Music className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-cyan-300/5"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cyan-300/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Hesseldahl sound. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Professional mixing & mastering by Mikkel Hesseldahl Konyher
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;