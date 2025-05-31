// NavBar.jsx
import React, { useState } from "react";
// import logo from './assets/Copilot_20250531_173257.png';
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800">
      <a className="text-2xl font-bold text-white uppercase" href="/">
        {/* <img class="w-[80px] h-[80px] rounded-full" src={logo} alt="" /> */}
        Logo
      </a>

      <button
        className="text-white text-3xl md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        ☰
      </button>

      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full flex-col items-center bg-gray-800 md:static md:flex md:flex-row md:w-auto md:space-x-6 md:bg-transparent`}
      >
        <a className="text-white py-2 px-4 hover:text-gray-300" href="/">
          Home
        </a>
        <a className="text-white py-2 px-4 hover:text-gray-300" href="/products">
          Products
        </a>
        <a className="text-white py-2 px-4 hover:text-gray-300" href="/services">
          Our Work
        </a>
        <a className="text-white py-2 px-4 hover:text-gray-300" href="/contact">
          Contact Us
        </a>
      </nav>

      <button className="hidden md:block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-all duration-200">
        Enquire Now
      </button>
    </header>
  );
};

export default NavBar;
