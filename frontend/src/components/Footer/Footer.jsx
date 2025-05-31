import React from "react";
// import logo from './assets/RS_enterprises.jpeg';
const Footer = () => {
  return (
    <footer className="sticky bottom-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 text-white w-full">

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        
        {/* Left Section - Logo */}
        <div>
          <h3>Some Image</h3>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex flex-col space-y-2 text-sm">
          <h3 className="font-semibold text-base">Quick Links</h3>
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Our Work</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

        {/* Right Section - Footer Links */}
        <div className="flex flex-col space-y-2 text-sm">
          <h3 className="font-semibold text-base">Legal</h3>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
