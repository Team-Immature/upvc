import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className='header'>
      <a className='logo ' href='/'>
        Logo
      </a>
      <nav className='navbar'>
        <a href='/'>Home</a>
        <a href='/products'>Products</a>
        <a href='/services'>Our Work</a>
        <a href='/contact'>Contact Us</a>
      </nav>
      <button>Enquire Now</button>
    </header>
  );
};

export default NavBar;
