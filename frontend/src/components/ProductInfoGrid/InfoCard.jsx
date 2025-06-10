// InfoCard.jsx
import React from "react";

const InfoCard = ({ img, heading, desc }) => (
  <div className='flex flex-col items-center bg-white rounded-xl shadow-md p-6  hover:-translate-y-2 hover:shadow-xl w-full transition-all duration-300'>
    <h3 className='text-lg font-bold mb-3 text-center'>{heading}</h3>
    <img
      src={img}
      alt={heading}
      className='w-38 h-38 object-cover rounded-lg mb-3'
    />
    <p className='text-gray-700 text-center text-sm'>{desc}</p>
  </div>
);

export default InfoCard;
