import React from "react";
import WindowSection from "./WindowSection";
import DoorSection from "./DoorSection";
import Feature from "../Feature/Feature";
import Accordian from "../Accordian";


const ProductSection = () => {
  return (
    <div className='productSec max-w-7xl mx-auto my-20 p-10 rounded-3xl '>
      <WindowSection />
      <DoorSection />
      <Feature />
      <Accordian />
      

    </div>
  );
};

export default ProductSection;
