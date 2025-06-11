import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ProductGrid from "./components/ProductInfoGrid/ProductGrid";
import ScrollToTopOfThePage from "./components/ScrollToTopOfThePage";

const Products = () => {
  return (
    <div>
      {/* <ScrollToTopOfThePage /> */}
      <NavBar />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Products;
