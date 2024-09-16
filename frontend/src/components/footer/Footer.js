import React from 'react';
import { Mail, Phone, Facebook, Instagram, Twitter, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">JLuxe Nails</h3>
            <p className="mb-2">Bringing luxury to your fingertips.</p>
            <p>&copy; 2024 JLuxe Nails. All rights reserved.</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="flex items-center justify-center md:justify-start mb-2">
              <Mail className="mr-2" size={18} />
              jluxenails@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start mb-2">
              <Phone className="mr-2" size={18} />
              555-555-5555
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <MapPin className="mr-2" size={18} />
              123 Nail Ave, Beauty City, ST 12345
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
