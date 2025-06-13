import React, { useEffect } from "react";
import EnquiryForm from "./EnquiryForm";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PopUpForm = ({ setShowForm }) => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <div className='fixed  inset-0  bg-black/30 backdrop-blur-xl bg-opacity-50 z-50 flex justify-center items-center overflow-y-auto '>
      <div className='relative rounded-xl bg-gray-500 p-2 mt-10'>
        <div className='w-[320px] md:w-[420px] lg:w-[480px] h-auto flex  justify-end items-center py-2 pr-0.5 hover:cursor-pointer'>
          <IoCloseSharp
            onClick={navigateBack}
            className='absolute size-6 top-8 right-4 text-black  border border-black rounded-full'
          />
        </div>
        <EnquiryForm />
      </div>
    </div>
  );
};

export default PopUpForm;
