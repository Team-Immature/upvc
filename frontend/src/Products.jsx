import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ProductGrid from "./components/ProductInfoGrid/ProductGrid";
import ScrollToTopOfThePage from "./components/ScrollToTopOfThePage";
import { LuTableOfContents } from "react-icons/lu";
import { MdCloseFullscreen } from "react-icons/md";
const Products = () => {
  const [showTOC, setShowTOC] = useState(false);

  const toggleTOC = () => {
    setShowTOC((prev) => !prev);
  };
  return (
    <div className=''>
      <div
        onClick={toggleTOC}
        className='fixed  z-40  my-auto  bottom-30 right-5 md:right-11 w-10 h-10 md:h-12 md:w-12 xl:h-14 xl:w-14 ring-black/5 hover:-translate-y-2 transition-all duration-300 hover:cursor-pointer   border  border-gray-900 bg-gray-100 rounded-full p-2 flex justify-center items-center'
      >
        {showTOC == false ? (
          <LuTableOfContents className='relative size-6  ' />
        ) : (
          <MdCloseFullscreen className='relative size-6' />
        )}
        {showTOC && (
          <div
            onClick={(e) => e.stopPropagation()}
            className='absolute bottom-2 right-10 sm:right-13 xl:right-15   xl:h-[450px] xl:w-[600px] sm:h-[450px] sm:w-[500px] w-[240px] h-[400px] z-30 bg-white/40 backdrop-blur-md ring-1 ring-black/10 rounded-2xl py-6 px-5 text-gray-800 overflow-y-auto hover:cursor-auto shadow-lg mt-20'
          >
            <h1 className='text-center text-xl font-extrabold'>
              TABLE OF CONTENTS
            </h1>
            <h1 className='font-bold mb-1.5 w-fit hover:translate-x-2 transition-all duration-300'>
              {`> `}Windows
            </h1>
            <p className='ml-5 mb-1.5 hover:cursor-pointer w-fit hover:translate-x-2 transition-all duration-300'>
              {""}
              Sliding Window
            </p>
            <p className='ml-5 mb-1.5 hover:cursor-pointer w-fit hover:translate-x-2 transition-all duration-300'>
              {" "}
              Casement Window
            </p>
            <p className='ml-5 mb-1.5 hover:cursor-pointer w-fit hover:translate-x-2 transition-all duration-300'>
              {" "}
              Fixed Window
            </p>
            <p className='ml-5 mb-1.5 hover:cursor-pointer w-fit hover:translate-x-2 transition-all duration-300'>
              {" "}
              Ventilator Window
            </p>
            <h1 className='font-bold mb-1.5 hover:cursor-pointer w-fit hover:translate-x-2 transition-all duration-300'>
              {`> `}Doors
            </h1>
            <p className='ml-5 mb-1.5 hover:cursor-pointer w-fit hover:translate-x-2 transition-all duration-300'>
              {" "}
              Sliding Door
            </p>
            <p className='ml-5 mb-1.5 hover:cursor-pointer w-fit hover:translate-x-2 transition-all duration-300'>
              {" "}
              Casement Door
            </p>
            <p className='ml-5 mb-1.5 hover:cursor-pointer w-fit hover:translate-x-2 transition-all duration-300'>
              {" "}
              French Door
            </p>
            <p className='ml-5 mb-1.5 hover:cursor-pointer w-fit hover:translate-x-2 transition-all duration-300'>
              {" "}
              Slide and Fold Door
            </p>
            <h1 className='font-bold mb-1.5 hover:cursor-pointer w-fit hover:translate-x-2 transition-all duration-300'>
              {`> `}UPVC Profiles
            </h1>
            <h1 className='font-bold mb-1.5 hover:cursor-pointer w-fit hover:translate-x-2 transition-all duration-300'>
              {`> `}Glazing Options
            </h1>
          </div>
        )}
      </div>
      {/* <ScrollToTopOfThePage /> */}
      <NavBar />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Products;
