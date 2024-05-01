import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-400 text-white py-12 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute animate-blob bg-blue-500 rounded-full w-32 h-32 top-20 left-10"></div>
        <div className="absolute animate-blob bg-purple-500 rounded-full w-24 h-24 top-10 right-20"></div>
        <div className="absolute animate-blob bg-green-500 rounded-full w-20 h-20 bottom-10 left-20"></div>
        <div className="absolute animate-blob bg-yellow-500 rounded-full w-16 h-16 bottom-20 right-10"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">Email: example@example.com</p>
            <p className="mb-2">Phone: +1234567890</p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>
          {/* Quick Links */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-xl text-gray-400 hover:text-white transition duration-300"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-xl text-gray-400 hover:text-white transition duration-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-xl text-gray-400 hover:text-white transition duration-300"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-xl text-gray-400 hover:text-white transition duration-300"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
