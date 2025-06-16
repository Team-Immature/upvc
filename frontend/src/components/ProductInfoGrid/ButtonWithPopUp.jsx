import React, { useState, useRef } from "react";

const ButtonWithPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const colors = [
    { name: "Milk White", color: "#f8f8f8" },
    { name: "Grey Metal", color: "#4a4a4a" },
    { name: "Black", color: "#000000" },
    { name: "Oak", color: "#c19a6b" },
    { name: "Walnut", color: "#773f1a" },
  ];

  return (
    <div className='relative w-full flex justify-center'>
      <button
        onClick={() => setShowPopup(!showPopup)}
        className='mx-auto block bg-blue-600 hover:cursor-pointer text-white py-2 px-6 rounded-full font-semibold shadow transition hover:bg-blue-700 hover:-translate-y-1 duration-200'
      >
        {showPopup ? "see less" : "see more"}
      </button>

      {showPopup && (
        <div className='absolute top-full mt-2 left-1/2 -translate-x-1/2 w-[300px]  bg-white/20 backdrop-blur-md text-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 z-10'>
          <h4 className='font-semibold text-lg mb-2'>Available Colors</h4>
          <div className='grid grid-cols-2 gap-4'>
            {colors.map(({ name, color }) => (
              <div key={name} className='flex items-center gap-2'>
                <div
                  className='w-8 h-8 border rounded-sm'
                  style={{ backgroundColor: color }}
                ></div>
                <span className='text-sm'>{name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonWithPopup;
