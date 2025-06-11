import React from "react";
import "./styling.css";

//img
import sliding from "../../assets/sliding.jpg";
import casement from "../../assets/casement.webp";
import fixed from "../../assets/fixed.webp";
import ventilator from "../../assets/ventilator.webp";
//img end

import arrow from "../../assets/arro.png";
import { Link } from "react-router-dom";

//product card
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const WindowSection = () => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate(`/products#Window-heading-top`);
  };

  return (
    <div className='productSection'>
      <h2 className='product_heading'>Windows</h2>
      <div className='sec'>
        <div className='product_images'>
          
            <ProductCard path="/products#sliding-window" value='uPVC Sliding Window' img={sliding} />
          
          
            <ProductCard path="/products#casement-window" value='uPVC Casement Windows' img={casement} />
          
          
            <ProductCard path="/products#fixed-window" value='uPVC Fixed Windows' img={fixed} />
         
          
            <ProductCard path="/products#ventilator-window" value='uPVC Ventilator Windows' img={ventilator} />
          
        </div>
      </div>

      <div className='arrow'>
        <button onClick={handleSeeMore} className='see_more flex items-center gap-2'>
          <h2 className='arrowHeading whitespace-nowrap'>See More</h2>
          <img className='aimg' src={arrow} alt='' />
        </button>
      </div>
    </div>
  );
};

export default WindowSection;
