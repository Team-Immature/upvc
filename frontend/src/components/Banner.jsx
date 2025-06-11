import React from "react";
import EnquiryForm from "./EnquiryForm";

const Banner = (props) => {
  return (
    <div className=''>
      <div className='relative w-full aspect-[16/9] max-h-[750px]  bg-[#b2b8b2] mb-20'>
        <img
          src={props.banner}
          className='absolute inset-0 w-full h-full object-cover object-left'
        />
        <EnquiryForm tcss='absolute top-1  right-10 z-20' />
      </div>
    </div>
  );
};

export default Banner;
