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

// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-gradient-to-r from-pink-500 to-purple-600 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-white text-3xl font-bold font-cursive">JLuxe Nails</h1>
//         <nav className="hidden md:block">
//           <ul className="flex space-x-6">
//             <li><NavLink exact to="/" className="text-white text-lg font-bold font-cursive  hover:text-gray-300 transition duration-300">Home</NavLink></li>
//             <li><NavLink to="/services" className="text-white text-lg font-bold font-cursive hover:text-gray-300 transition duration-300">Services</NavLink></li>
//             {/* <li><NavLink to="/gallery" className="text-white text-lg hover:text-gray-300 transition duration-300">Gallery</NavLink></li> */}
//             <li><NavLink to="/contact" className="text-white text-lg font-bold font-cursive hover:text-gray-300 transition duration-300">Contact</NavLink></li>
//           </ul>
//         </nav>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white">
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>
//       {isMenuOpen && (
//         <nav className="md:hidden mt-4">
//           <ul className="flex flex-col space-y-2">
//             <li><NavLink exact to="/" className="text-white text-lg hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Home</NavLink></li>
//             <li><NavLink to="/services" className="text-white text-lg hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Services</NavLink></li>
//             {/* <li><NavLink to="/gallery" className="text-white text-lg hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Gallery</NavLink></li> */}
//             <li><NavLink to="/contact" className="text-white text-lg hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Contact</NavLink></li>
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// }

// export default Header;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4">
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold">JLuxe Nails</Link>
        
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-purple-600 md:bg-none`}>
//           <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
//             <li><Link to="/" className="hover:text-pink-200">Home</Link></li>
//             <li><Link to="/services" className="hover:text-pink-200">Services</Link></li>
//             <li><Link to="/about" className="hover:text-pink-200">About</Link></li>
//             <li><Link to="/contact" className="hover:text-pink-200">Contact</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;


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