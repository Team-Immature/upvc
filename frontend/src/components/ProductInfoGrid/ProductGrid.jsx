import React from "react";
import WindowCard from "./WindowCard";
import DoorCard from "./DoorCard";
import GlazingArea from "./GlazingArea";
import ProfileArea from "./ProfileArea";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ProductGrid = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", ""); // remove # from #window
      const element = document.getElementById(id);
      if (element) {
        // 💡 This makes it scroll to the very top of the section
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);
  return (
    <div>
      <div id='Window-heading-top' className='h-10 mb-6'></div>
      <h1 className='mb-0 mt-7 text-[2.5rem] font-bold text-[#1b2a41] text-center'>
        WINDOWS
      </h1>
      <div className='w-[100%] h-1 bg-gradient-to-r from-blue-400 to-purple-400 my-8 mt-0 mb-0.5' />
      <WindowCard />

      <div id='Door-heading-top' className='h-10 mb-6'></div>
      <h1 className='mb-0 text-[2.5rem] font-bold text-[#1b2a41] text-center'>
        DOORS
      </h1>
      <div className='w-[100%] h-1 bg-gradient-to-r from-blue-400 to-purple-400 my-8  mt-0 mb-0.5' />
      <DoorCard />

      <div id='Profile-heading' className='h-10 mb-6'></div>
      <h1 className='mb-0 text-[2.5rem] font-bold text-[#1b2a41] text-center'>
        PROFILES
      </h1>
      <div className='w-[100%] h-1 bg-gradient-to-r from-blue-400 to-purple-400 my-8  mt-0 mb-0.5' />
      <ProfileArea />
      <div id='Glazing-heading' className='h-10 mb-6'></div>
      <h1 className='mb-0 text-[2.5rem] font-bold text-[#1b2a41] text-center'>
        GLAZING OPTIONS
      </h1>
      <div className='w-[100%] h-1 bg-gradient-to-r from-blue-400 to-purple-400 my-8  mt-0 mb-0.5' />
      <GlazingArea />
    </div>
  );
};

export default ProductGrid;
