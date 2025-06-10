import React from "react";
import './styling.css';

import { Link } from 'react-router-dom';
const ProductCard = ({ value, img, path }) =>{
    return(
        <Link to={path} className="productcard">
            <img className="image" src={img} alt="" />
            <h3>{value}</h3>
        </Link>
    )
}

export default ProductCard;