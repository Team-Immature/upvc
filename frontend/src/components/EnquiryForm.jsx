import React from 'react';

const EnquiryForm = () => {
  return (
    <div className="bg-[whitesmoke] p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h1 className="text-center text-2xl font-bold text-blue-700 mb-2">RS Enterprises</h1>
      <h3 className="text-center text-lg font-medium text-gray-700 mb-4">Price starts at 320/- per Sq.ft</h3>
      <form action="https://formspree.io/f/mldnbgeb" method='POST' className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            placeholder="Enter your full name"
            className="bg-transparent outline-none border-0 border-b-2 border-blue-500 rounded-sm px-2 py-2 placeholder-gray-500 w-full shadow-sm"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="bg-transparent outline-none border-0 border-b-2 border-blue-500 rounded-sm px-2 py-2 placeholder-gray-500 w-full shadow-sm"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-transparent outline-none border-0 border-b-2 border-blue-500 rounded-sm px-2 py-2 placeholder-gray-500 w-full shadow-sm"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your local area or street"
            className="bg-transparent outline-none border-0 border-b-2 border-blue-500 rounded-sm px-2 py-2 placeholder-gray-500 w-full shadow-sm"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your city name"
            className="bg-transparent outline-none border-0 border-b-2 border-blue-500 rounded-sm px-2 py-2 placeholder-gray-500 w-full shadow-sm"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your area pincode"
            className="bg-transparent outline-none border-0 border-b-2 border-blue-500 rounded-sm px-2 py-2 placeholder-gray-500 w-full shadow-sm"
          />
        </div>
        <div>
          <textarea
            placeholder="e.g. 4 windows and 2 doors"
            className="bg-transparent outline-none border-0 border-b-2 border-blue-500 rounded-sm px-2 py-2 placeholder-gray-500 w-full h-28 resize-none shadow-sm"
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
