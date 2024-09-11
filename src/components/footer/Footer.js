import React from 'react';
import { Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-pink-500 p-4 text-center">
      <p className="text-white mb-2">© 2024 JLuxe Nails. All rights reserved.</p>
      <div className="flex flex-col items-center space-y-2 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
        <p className="text-white flex items-center">
          <Mail className="mr-2" size={18} />
          jluxenails@gmail.com
        </p>
        <p className="text-white flex items-center">
          <Phone className="mr-2" size={18} />
          555-555-5555
        </p>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
          <Facebook size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
          <Instagram size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
          <Twitter size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;