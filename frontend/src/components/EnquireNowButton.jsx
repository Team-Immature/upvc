import React from "react";
import { useNavigate } from "react-router-dom";

const EnquireNowButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate("/popup")}
        className='md:block px-10 py-2 text-xl bg-gray-900 text-white rounded-md hover:bg-gray-200 hover:text-gray-800  transition-all hover:-translate-y-1 hover:cursor-pointer duration-300 animate-pulse'
      >
        Enquire Now
      </button>
    </div>
  );
};

export default EnquireNowButton;
