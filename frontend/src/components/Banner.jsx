import React from "react";


const Banner = (props) => {
  return (
    <div className=''>
      <div className='relative w-full aspect-[16/9] max-h-[700px] overflow-hidden bg-[#b2b8b2] mb-20'>
        <img
          src={props.banner}
          className='absolute inset-0 w-full h-full object-cover object-left'
        />
        
      </div>
    </div>
  );
};

export default Banner;
