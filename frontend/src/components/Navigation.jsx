import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Selected Work', path: '/work' },
    { name: 'How to Send Files', path: '/files' },
    { name: 'Rates', path: '/rates' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-cyan-300/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/20 to-cyan-500/20 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-gray-950 px-4 py-2 rounded-lg border border-cyan-300/20">
              <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 tracking-wide">
                Hesseldahl sound
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-cyan-300 relative group ${
                    location.pathname === item.path
                      ? 'text-cyan-300'
                      : 'text-gray-300'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-cyan-300 transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                  {location.pathname === item.path && (
                    <span className="absolute -inset-1 bg-cyan-300/10 rounded-lg blur-sm"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-300 hover:bg-cyan-300/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-950/98 backdrop-blur-md border-t border-cyan-300/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-cyan-300 hover:bg-cyan-300/5 rounded-md ${
                  location.pathname === item.path
                    ? 'text-cyan-300 bg-cyan-300/10'
                    : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;