// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-pink-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">JLuxe Nails</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="#services" className="text-white hover:text-gray-300">Services</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
