import React from "react";
import './styling.css';
const ProductCard = (props) =>{
    return(
        <div className="productcard">
            <img className="image" src={props.img} alt="" />
            <h3>{props.value}</h3>
        </div>
    )
}

export default ProductCard;