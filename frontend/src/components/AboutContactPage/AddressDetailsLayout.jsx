import React from "react";

const AddressDetailsLayout = () => {
  return (
    <div className='min-h-screen max-w-7xl mx-auto rounded-4xl shadow-2xl my-20 grid grid-cols-1 md:grid-cols-12 gap-10 p-5'>
      <div className='bg-red-700 md:col-span-5 rounded-3xl flex flex-col p-5 h-[600px] md:h-auto '>
        <div className='bg-amber-300 w-full h-1/2 rounded-2xl my-5  '>
          Contact
        </div>
        <div className='bg-amber-300 w-full h-1/2 rounded-2xl my-5  '></div>
      </div>
      <div className='bg-red-700/10 shadow-lg md:col-span-7 rounded-3xl h-[400px] md:h-2/3 my-auto'></div>
    </div>
  );
};

export default AddressDetailsLayout;
