// src/components/Header.js
import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">JLuxe Nails</div>
        <nav>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-pink-500">Home</a>
            <a href="/services" className="text-gray-600 hover:text-pink-500">Services</a>
            <a href="/about" className="text-gray-600 hover:text-pink-500">About</a>
            <a href="/contact" className="text-gray-600 hover:text-pink-500">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="/" className="block py-2 px-4 text-gray-600 hover:bg-pink-500 hover:text-white">Home</a>
          <a href="/services" className="block py-2 px-4 text-gray-600 hover:bg-pink-500 hover:text-white">Services</a>
          <a href="/about" className="block py-2 px-4 text-gray-600 hover:bg-pink-500 hover:text-white">About</a>
          <a href="/contact" className="block py-2 px-4 text-gray-600 hover:bg-pink-500 hover:text-white">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;