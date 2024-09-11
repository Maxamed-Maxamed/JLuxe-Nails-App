// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-pink-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">JLuxe Nails</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><NavLink exact to="/" activeClassName="underline" className="text-white hover:text-gray-300">Home</NavLink></li>
          <li><NavLink to="/services" activeClassName="underline" className="text-white hover:text-gray-300">Services</NavLink></li>
          <li><NavLink to="/contact" activeClassName="underline" className="text-white hover:text-gray-300">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
