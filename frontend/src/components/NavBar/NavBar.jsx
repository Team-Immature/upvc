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
      <Link to='/' className='text-2xl font-bold text-white uppercase'>
        <img
          className='w-[40px] h-[40px] hover:cursor-pointer rounded-lg'
          src={logo}
          alt=''
        />
      </Link>

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
        <Link
          to='/'
          className='text-white py-2 px-4 hover:text-gray-300 hover:-translate-y-0.5   cursor-pointer transition-all duration-150 mx-5'
        >
          Home{" "}
        </Link>
        <Link
          to='/products'
          className='text-white py-2 px-4 hover:text-gray-300 hover:-translate-y-0.5   cursor-pointer transition-all duration-150 mx-5'
        >
          Products{" "}
        </Link>

        <Link
          to='/work'
          className='text-white py-2 px-4 hover:text-gray-300 hover:-translate-y-0.5   cursor-pointer transition-all duration-150 mx-5'
        >
          Our Work
        </Link>

        <Link
          to='/contact'
          className='text-white py-2 px-4 hover:text-gray-300 hover:-translate-y-0.5   cursor-pointer transition-all duration-150 mx-5'
        >
          Contact Us
        </Link>
      </nav>

      <button className='hidden md:block px-5 py-2 bg-gray-200 text-gray-900  rounded-md hover:bg-black hover:text-white  transition-all hover:scale-108 duration-400'>
        Enquire Now
      </button>
    </header>
  );
};

export default NavBar;
