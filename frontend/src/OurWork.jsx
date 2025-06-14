import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { WorkCarousel } from "./components/WorkCarousel";
const OurWork = () => {
  return (
    <div className=''>
      <NavBar />
      <div className='max-w-7xl mx-auto  min-h-screen'>
        <div className='flex flex-col md:flex-row px-5'>
          <div className='text-gray-700 flex flex-col justify-center items-start p-5'>
            <h1 className='font-bold text-3xl mb-3'>Our Work</h1>
            <p>
              Our enterprise is dedicated to manufacturing high-quality uPVC products that combine durability, energy efficiency,
               and modern design. With a commitment to innovation and sustainability, we deliver customized solutions for residential
                and commercial projects, ensuring superior performance and customer satisfaction. Through advanced technology and skilled 
                craftsmanship, we strive to enhance living and working spaces while promoting eco-friendly building practices. Our extensive 
                product range includes windows, doors, and profiles that meet international standards, offering excellent insulation and low 
                maintenance. Backed by a strong research and development team, we continuously improve our processes to provide cost-effective 
                and reliable solutions. Partnering with us means choosing quality, reliability, and a greener future for your construction needs.
            </p>
          </div>
          <WorkCarousel />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurWork;
