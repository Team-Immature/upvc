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
    <div className='fixed  inset-0  bg-black/30 backdrop-blur-xl   z-50 flex justify-center items-center overflow-y-auto '>
      <div className='relative rounded-xl bg-gray-500 p-4 mt-10 w-[320px] md:w-[420px] lg:w-[480px]'>
        <IoCloseSharp
          onClick={navigateBack}
          className='absolute size-6 top-5 right-5 text-black  border border-black rounded-md hover:cursor-pointer'
        />
        <EnquiryForm />
      </div>
    </div>
  );
};

export default PopUpForm;
