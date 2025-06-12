import React from "react";
import EnquiryForm from "./EnquiryForm";
import { MdExpandCircleDown } from "react-icons/md";
const Banner = (props) => {
  return (
    <div className=''>
      <div className='relative w-full aspect-[16/9] max-h-[750px]  bg-[#b2b8b2] mb-20'>
        <img
          src={props.banner}
          className='absolute inset-0 w-full h-full object-cover object-left'
        />
        <EnquiryForm tcss='absolute top-1  right-10 z-20' />
        <MdExpandCircleDown className='hidden sm:block absolute top-11/12 left-1/2 size-10 text-white animate-bounce rounded-full border-none' />
      </div>
    </div>
  );
};

export default Banner;
