import React from "react";
// import logo from './assets/RS_enterprises.jpeg';
import logo from "../../assets/r3.jpg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-gray-900 from-5% via-gray-800 via-60% to-gray-950 to-85% w-full text-gray-200 '>
      <div className='max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between md:items-start gap-6 md:gap-0 items-center text-center'>
        {/* Left Section - Logo or Image */}
        <div className='text-base '>
          <h3 className='font-semibold text-[28px] mb-2'>About</h3>
          <div className='flex justify-center items-center'>
            <img src={logo} alt='title image' className='size-18 rounded-xl' />
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className='flex flex-col  text-sm text-center'>
          <h3 className='font-semibold text-[28px] mb-1'>Quick Links</h3>
          <div className='flex flex-col space-y-[5px] '>
            <Link to='/'>
              <a className='group relative inline-block text-sm transition-transform duration-300 hover:scale-105'>
                <span className='relative z-10'>Home</span>
                <span className='absolute left-1/2 bottom-0 h-0.5 w-full max-w-[80%] -translate-x-1/2 scale-x-0 bg-blue-500 transition-transform duration-300 group-hover:scale-x-150'></span>
              </a>
            </Link>
            <Link to='/products'>
              <a className='group relative inline-block text-sm transition-transform duration-300 hover:scale-105'>
                <span className='relative z-10'>Products</span>
                <span className='absolute left-1/2 bottom-0 h-0.5 w-full max-w-[80%] -translate-x-1/2 scale-x-0 bg-blue-500 transition-transform duration-300 group-hover:scale-x-150'></span>
              </a>
            </Link>
            <Link to='/work'>
              <a className='group relative inline-block text-sm transition-transform duration-300 hover:scale-105'>
                <span className='relative z-10'>Our Work</span>
                <span className='absolute left-1/2 bottom-0 h-0.5 w-full max-w-[80%] -translate-x-1/2 scale-x-0 bg-blue-500 transition-transform duration-300 group-hover:scale-x-150'></span>
              </a>
            </Link>
          </div>
        </div>
        {/* Right Section - Legal Links */}
        <div className='flex flex-col  text-sm text-center'>
          <h3 className='font-semibold text-[28px] mb-1'>Legal</h3>
          <div className='flex flex-col space-y-[5px] '>
            <a
              href='#'
              className='group relative inline-block text-sm transition-transform duration-300 hover:scale-105'
            >
              <span className='relative z-10'>Privacy Policy</span>
              <span className='absolute left-1/2 bottom-0 h-0.5 w-full max-w-[80%] -translate-x-1/2 scale-x-0 bg-blue-500 transition-transform duration-300 group-hover:scale-x-150'></span>
            </a>

            <a
              href='#'
              className='group relative inline-block text-sm transition-transform duration-300 hover:scale-105'
            >
              <span className='relative z-10'>Terms and Conditions</span>
              <span className='absolute left-1/2 bottom-0 h-0.5 w-full max-w-[80%] -translate-x-1/2 scale-x-0 bg-blue-500 transition-transform duration-300 group-hover:scale-x-150'></span>
            </a>
            <Link to='/contact'>
              <a className='group relative inline-block text-sm transition-transform duration-300 hover:scale-105'>
                <span className='relative z-10'>Contact Us</span>
                <span className='absolute left-1/2 bottom-0 h-0.5 w-full max-w-[80%] -translate-x-1/2 scale-x-0 bg-blue-500 transition-transform duration-300 group-hover:scale-x-150'></span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
