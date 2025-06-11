import React from "react";
import './styling.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ value, img, path, className = '',clickable = true }) => {
    const content =(
        <>
            <img className="image" src={img} alt="" />
            <h3>{value}</h3>
        </>
    )
    return clickable ? (
        <Link to={path} className={`productcard ${className}`}>
            {content}
        </Link>
    ):(
        <div className={`productcard ${className}`}>
            {content}
        </div>
    );
};

export default ProductCard;
