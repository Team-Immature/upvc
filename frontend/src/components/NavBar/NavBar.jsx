// NavBar.jsx
import React, { useState } from "react";
// import logo from './assets/Copilot_20250531_173257.png';
import logo from "../../assets/r3.jpg";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className='sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800'>
      <div className='text-2xl font-bold text-white uppercase'>
        <img
          class='w-[40px] h-[40px] hover:cursor-pointer rounded-lg'
          src={logo}
          alt=''
        />
      </div>

      <button
        className='text-white text-3xl md:hidden focus:outline-none'
        onClick={toggleMenu}
      >
        ☰
      </button>

      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full flex-col items-center bg-gray-800 md:static md:flex md:flex-row md:w-auto md:space-x-6 md:bg-transparent`}
      >
        <Link to="/">
        <a
          className='text-white py-2 px-4 hover:text-gray-300 hover:scale-105 cursor-pointer transition-all duration-150 mx-5'
          
          >
          Home
        </a>
        </Link>
         <Link to="/products">
        <a
          className='text-white py-2 px-4 hover:text-gray-300 hover:scale-105 transition-all duration-150 mx-5'
          
          >
          Products
        </a>
          </Link>

          <Link to="/work">
        <a
          className='text-white py-2 px-4 hover:text-gray-300 hover:scale-105 transition-all duration-150 mx-5'
          >
          Our Work
        </a>
          </Link>

          <Link to="/contact">
        <a
          className='text-white py-2 px-4 hover:text-gray-300 hover:scale-105 transition-all duration-150 mx-5'
          
          >
          Contact Us
        </a>
          </Link>
      </nav>

      <button className='hidden md:block px-5 py-2 bg-gray-200 text-gray-900  rounded-md hover:bg-black hover:text-white  transition-all hover:scale-108 duration-400'>
        Enquire Now
      </button>
    </header>
  );
};

export default NavBar;
