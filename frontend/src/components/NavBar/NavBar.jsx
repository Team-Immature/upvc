import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className='header sticky top-0 z-50 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800'>
      <a className='logo ' href='/'>
        Logo
      </a>
      <nav className='navbar'>
        <a href='/'>Home</a>
        <a href='/products'>Products</a>
        <a href='/services'>Our Work</a>
        <a href='/contact'>Contact Us</a>
      </nav>
      <button className='hover:scale-105 active:scale-95 transition-all duration-200'>
        Enquire Now
      </button>
    </header>
  );
};

export default NavBar;
