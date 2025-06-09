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
            <h1 className='font-bold text-2xl'>Our Work</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              vero ratione beatae quo et voluptate, reprehenderit repudiandae
              quaerat excepturi assumenda animi perferendis, architecto impedit
              sunt unde sapiente ut. Facilis, a? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ipsam vero ratione beatae quo et
              voluptate, reprehenderit repudiandae quaerat excepturi assumenda
              animi perferendis, architecto impedit sunt unde sapiente ut.
              consectetur adipisicing elit. Ipsam vero ratione beatae quo et
              voluptate, reprehenderit repudiandae quaerat excepturi assumenda
              animi perferendis, architecto impedit sunt unde sapiente ut.
              Facilis, a?
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
