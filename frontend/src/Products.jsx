import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ProductGrid from "./components/ProductInfoGrid/ProductGrid";

const Products = () =>{
    return(
        <div>
            <NavBar />
            <ProductGrid />
            <Footer />
        </div>
    )
}

export default Products;