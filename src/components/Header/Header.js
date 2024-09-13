// // src/components/Header.js
// import React from 'react';
// import { NavLink } from 'react-router-dom';

// function Header() {
//   return (
//     <header className="bg-gradient-to-r from-pink-500 to-purple-600  p-4 flex justify-between items-center">
//       <h1 className="text-white text-2xl font-bold">JLuxe Nails</h1>
//       <nav>
//         <ul className="flex space-x-4">
//           <li><NavLink exact to="/" activeClassName="underline" className="text-white text-lg hover:text-gray-300">Home</NavLink></li>
//           <li><NavLink to="/services" activeClassName="underline" className="text-white text-lg hover:text-gray-300">Services</NavLink></li>
//           <li><NavLink to="/contact" activeClassName="underline" className="text-white text-lg hover:text-gray-300">Contact</NavLink></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-pink-500 to-purple-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold font-cursive">JLuxe Nails</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><NavLink exact to="/" className="text-white text-lg font-bold font-cursive  hover:text-gray-300 transition duration-300">Home</NavLink></li>
            <li><NavLink to="/services" className="text-white text-lg font-bold font-cursive hover:text-gray-300 transition duration-300">Services</NavLink></li>
            {/* <li><NavLink to="/gallery" className="text-white text-lg hover:text-gray-300 transition duration-300">Gallery</NavLink></li> */}
            <li><NavLink to="/contact" className="text-white text-lg font-bold font-cursive hover:text-gray-300 transition duration-300">Contact</NavLink></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li><NavLink exact to="/" className="text-white text-lg hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Home</NavLink></li>
            <li><NavLink to="/services" className="text-white text-lg hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Services</NavLink></li>
            {/* <li><NavLink to="/gallery" className="text-white text-lg hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Gallery</NavLink></li> */}
            <li><NavLink to="/contact" className="text-white text-lg hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Contact</NavLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;