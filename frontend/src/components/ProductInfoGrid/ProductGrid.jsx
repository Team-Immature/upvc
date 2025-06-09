import React from "react";
import WindowCard from "./WindowCard";
import DoorCard from "./DoorCard";
import GlazingArea from "./GlazingArea";


const ProductGrid = () =>{
    return(
        <div>
            <h1 className="mb-0 mt-7 text-[2.5rem] font-bold text-[#1b2a41] text-center">WINDOWS</h1>
            <div className="w-[100%] h-1 bg-gradient-to-r from-blue-400 to-purple-400 my-8 mt-0 mb-0.5" />
            <WindowCard />
            
            <h1 className="mb-0 text-[2.5rem] font-bold text-[#1b2a41] text-center">DOORS</h1>
            <div className="w-[100%] h-1 bg-gradient-to-r from-blue-400 to-purple-400 my-8  mt-0 mb-0.5" />
            <DoorCard />

            <h1 className="mb-0 text-[2.5rem] font-bold text-[#1b2a41] text-center">PROFILES</h1>
            <div className="w-[100%] h-1 bg-gradient-to-r from-blue-400 to-purple-400 my-8  mt-0 mb-0.5" />

            <h1 className="mb-0 text-[2.5rem] font-bold text-[#1b2a41] text-center">GLAZING OPTIONS</h1>
            <div className="w-[100%] h-1 bg-gradient-to-r from-blue-400 to-purple-400 my-8  mt-0 mb-0.5" />
            <GlazingArea />
        </div>  
    )
}

export default ProductGrid;