import React from "react";
import ban from "../assets/banner.webp";

const Banner = () => {
  return (
    <div className=''>
      <div className='relative w-full aspect-[16/9] max-h-[700px] overflow-hidden bg-[#b2b8b2] mb-20'>
        <img
          src={ban}
          className='absolute inset-0 w-full h-full object-cover object-left'
        />
        {/* Form or any content */}
        <div className='absolute inset-0 z-1 hover:bg-black/20 transition-all duration-300 w-full h-auto'></div>
        <div className='absolute   hidden lg:block top-25 z-5 right-15 xl:mr-20   items-center justify-center xl:mt-10 opacity-0'>
          <form className='bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md'>
            <h2 className='text-xl font-semibold mb-4 text-center'>
              Get a call back
            </h2>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full p-2 mb-3 border rounded'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='w-full p-2 mb-3 border rounded'
            />
            <textarea
              placeholder='Message'
              className='w-full p-2 mb-3 border rounded row-span-5'
            />
            <button className='w-full bg-gray-700 text-white p-2 rounded hover:bg-gray-800 '>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
