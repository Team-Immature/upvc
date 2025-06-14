import React, { useEffect } from "react";
import EnquiryForm from "./EnquiryForm";
import { MdExpandCircleDown } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const Banner = (props) => {
  const loc = useLocation();
  const getLocation = () => {
    console.log(loc.pathname);
  };

  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/#hero-section-top");
  };

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);
  return (
    <div className=''>
      <div className='relative w-full aspect-[16/9] max-h-screen  bg-[#b2b8b2] mb-20'>
        <img
          src={props.banner}
          className='absolute inset-0 w-full h-full object-cover object-left'
        />
        <EnquiryForm tcss='absolute top-3  right-10 z-20 hidden lg:flex flex-col  relative md:absolute' />
        {loc.pathname == "/" && (
          <MdExpandCircleDown
            onClick={navigateTo}
            className='absolute hidden md:block  top-3/4 2xl:top-10/12 left-1/2 size-10 text-white animate-bounce rounded-full border-none hover:cursor-pointer z-10'
          />
        )}
        <div className='absolute left-0 right-0 top-0 bottom-0 w-full h-full  bg-black/10 backdrop-blur-xs flex flex-col justify-center items-center'>
          <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl text-black mx-auto lg:ml-10 lg:mb-10 font-semibold text-shadow-2xs text-center'>
            Designed for Comfort.
          </h1>
          <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl text-black mx-auto lg:ml-10 lg:mb-10 font-semibold text-shadow-2xs text-center'>
            Built to Last.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
