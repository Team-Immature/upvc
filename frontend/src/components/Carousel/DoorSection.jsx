import React from "react";
import ProductCard from "./ProductCard";
import slidingDoor from "../../assets/slidingDoor.webp";
import frenchDoor from "../../assets/frenchDoor.webp";
import slidefoldD from "../../assets/slidefoldD.webp";
import casementD from "../../assets/casementD.jpg";
import arrow from "../../assets/arro.png";
import { useNavigate } from "react-router-dom";

const DoorSection = () => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate(`/products#Door-heading-top`);
  };
  return (
    <div className='productSection'>
      <h2 className='product_heading'>Doors</h2>
      <div className='product_images'>
        <ProductCard value='uPVC Sliding Door' img={slidingDoor} />
        <ProductCard value='uPVC French Door' img={frenchDoor} />
        <ProductCard value='uPVC Slide & Fold Door' img={slidefoldD} />
        <ProductCard value='uPVC Casement Door' img={casementD} />
      </div>

      <div className='arrow'>
        <h2 className='arrowHeading'>See More</h2>
        <button onClick={handleSeeMore} className='see_more bg-none'>
          <img className='aimg' src={arrow} alt='' />
        </button>
      </div>
    </div>
  );
};

export default DoorSection;
