import React, { useEffect } from "react";
import EnquiryForm from "./EnquiryForm";
import { IoCloseSharp } from "react-icons/io5";

const PopUpForm = ({ setShowForm }) => {
  return (
    <div className='fixed inset-0  bg-black/30 backdrop-blur-2xl bg-opacity-50 z-50 flex justify-center items-center '>
      <div className='rounded-xl bg-gray-500 p-3'>
        <div className='w-[300px] sm:w-[360px] md:w-[420px] lg:w-[480px] h-auto flex  justify-end items-center py-2 pr-0.5 hover:cursor-pointer'>
          <IoCloseSharp
            onClick={() => setShowForm(false)}
            className='size-6 text-white  border border-black rounded-full'
          />
        </div>
        <EnquiryForm />
      </div>
    </div>
  );
};

export default PopUpForm;
