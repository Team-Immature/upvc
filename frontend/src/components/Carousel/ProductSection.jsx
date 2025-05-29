import React from "react";
import WindowSection from "./WindowSection";
import DoorSection from "./DoorSection";

const ProductSection = () =>{
    return(
        <div className="productSec">
            <WindowSection />
            <DoorSection />
        </div>  
    )
}

export default ProductSection;