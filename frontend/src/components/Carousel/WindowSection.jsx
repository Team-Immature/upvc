import React from "react";
import "./styling.css";

//img
import sliding from "../../assets/sliding.jpg";
import casement from "../../assets/casement.webp";
import fixed from "../../assets/fixed.webp";
import ventilator from "../../assets/ventilator.webp";
//img end

import arrow from "../../assets/arro.png";

//product card
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const WindowSection = () => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate(`/products`);
  };
  return (
    <div className='productSection'>
      <h2 className='product_heading'>Windows</h2>
      <div className='sec'>
        <div className='product_images'>
          <ProductCard value='uPVC Sliding Windows' img={sliding} />
          <ProductCard value='uPVC Casement Windows' img={casement} />
          <ProductCard value='uPVC Fixed Windows' img={fixed} />
          <ProductCard value='uPVC Ventilator Windows' img={ventilator} />
        </div>
      </div>

      <div className='arrow'>
        <h2 className='arrowHeading'>See More</h2>
        <button onClick={handleSeeMore} className='see_more'>
          <img className='aimg' src={arrow} alt='' />
        </button>
      </div>
    </div>
  );
};

export default WindowSection;
