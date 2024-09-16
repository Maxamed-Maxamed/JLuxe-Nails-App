import React, { useState } from 'react';
import { Link } from 'react-scroll';

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
            <Link to="home" smooth={true} duration={500} className="cursor-pointer text-gray-600 hover:text-pink-500">Home</Link>
            <Link to="featured-services" smooth={true} duration={500} className="cursor-pointer text-gray-600 hover:text-pink-500">Services</Link>
            <Link to="about-us" smooth={true} duration={500} className="cursor-pointer text-gray-600 hover:text-pink-500">About</Link>
            <Link to="testimonials" smooth={true} duration={500} className="cursor-pointer text-gray-600 hover:text-pink-500">Testimonials</Link>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer text-gray-600 hover:text-pink-500">Contact</Link>
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
          <Link to="home" smooth={true} duration={500} className="block cursor-pointer py-2 px-4 text-gray-600 hover:bg-pink-500 hover:text-white">Home</Link>
          <Link to="featured-services" smooth={true} duration={500} className="block cursor-pointer py-2 px-4 text-gray-600 hover:bg-pink-500 hover:text-white">Services</Link>
          <Link to="about-us" smooth={true} duration={500} className="block cursor-pointer py-2 px-4 text-gray-600 hover:bg-pink-500 hover:text-white">About</Link>
          <Link to="testimonials" smooth={true} duration={500} className="block cursor-pointer py-2 px-4 text-gray-600 hover:bg-pink-500 hover:text-white">Testimonials</Link>
          <Link to="contact" smooth={true} duration={500} className="block cursor-pointer py-2 px-4 text-gray-600 hover:bg-pink-500 hover:text-white">Contact</Link>
        </div>
      )}
    </header>
  );
}

export default Header;