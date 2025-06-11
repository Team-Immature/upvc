// NavBar.jsx
import React, { useState } from "react";
import logo from "../../assets/r3.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openPopup, setPopup] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className='sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-gradient-to-r   from-gray-900 from-5% via-gray-800 via-60% to-gray-950 to-85%'>
      <Link to='/' className='text-2xl font-bold text-white uppercase'>
        <img
          className='w-[40px] h-[40px] hover:cursor-pointer rounded-lg'
          src={logo}
          alt='logo'
        />
      </Link>

      <button
        className='text-white text-3xl md:hidden focus:outline-none'
        onClick={toggleMenu}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full flex-col items-center bg-gray-800 md:static md:flex md:flex-row md:w-auto md:space-x-6 md:bg-transparent`}
      >
        <Link
          to='/'
          className='text-white py-2 px-4 hover:text-gray-300 transition-all duration-150 mx-5'
        >
          Home
        </Link>
        <Link
          to='/products'
          className='text-white py-2 px-4 hover:text-gray-300 transition-all duration-150 mx-5'
        >
          Products
        </Link>
        <Link
          to='/work'
          className='text-white py-2 px-4 hover:text-gray-300 transition-all duration-150 mx-5'
        >
          Our Work
        </Link>
        <Link
          to='/contact'
          className='text-white py-2 px-4 hover:text-gray-300 transition-all duration-150 mx-5'
        >
          Contact Us
        </Link>

        <button className='md:hidden mt-2 mb-3 px-5 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-black hover:text-white cursor:pointer transition-all hover:scale-105 duration-300'>
          Enquire Now
        </button>
      </nav>

      <button className='hidden md:block px-5 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-black hover:text-white transition-all hover:scale-105 cursor:pointer duration-300'>
        Enquire Now
      </button>
    </header>
  );
};

export default NavBar;
