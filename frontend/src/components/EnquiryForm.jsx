// Make sure to run: npm install @formspree/react
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const EnquiryForm = () => {
  const [state, handleSubmit] = useForm("mldnbgeb");

  if (state.succeeded) {
    return (
      <div className="bg-green-100 text-green-800 p-6 rounded-lg max-w-md mx-auto mt-10 text-center">
        <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
        <p>Your enquiry was submitted successfully. We will contact you soon.</p>
      </div>
    );
  }

  return (
    <div className="block relative md:absolute md:top-0 md:right-6 z-10 bg-[whitesmoke] p-6 rounded-lg shadow-md w-[420px] mx-auto mt-5">
      <h1 className="text-center text-3xl font-bold text-[#1b2a41] mb-2">RS Enterprises</h1>
      <h3 className="text-center text-lg font-medium text-gray-700 mb-4">Price starts at 320/- per Sq.ft</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
            className="bg-transparent outline-none border-0 border-b-2 border-blue-500 rounded-sm px-2 py-2 placeholder-gray-500 w-full shadow-sm"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <input
            id="phone"
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            required
            className="bg-transparent outline-none border-0 border-b-2 border-blue-500 rounded-sm px-2 py-2 placeholder-gray-500 w-full shadow-sm"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="bg-transparent outline-none border-0 border-b-2 border-blue-500 rounded-sm px-2 py-2 placeholder-gray-500 w-full shadow-sm"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <input
            id="area"
            type="text"
            name="area"
            placeholder="Enter your local area or street"
            required
            className="bg-transparent outline-none border-0 border-b-2 border-blue-500 rounded-sm px-2 py-2 placeholder-gray-500 w-full shadow-sm"
          />
          <ValidationError prefix="Area" field="area" errors={state.errors} />
        </div>
        <div>
          <input
            id="city"
            type="text"
            name="city"
            placeholder="Enter your city name"
            required
            className="bg-transparent outline-none border-0 border-b-2 border-blue-500 rounded-sm px-2 py-2 placeholder-gray-500 w-full shadow-sm"
          />
          <ValidationError prefix="City" field="city" errors={state.errors} />
        </div>
        <div>
          <input
            id="pincode"
            type="text"
            name="pincode"
            placeholder="Enter your area pincode"
            required
            className="bg-transparent outline-none border-0 border-b-2 border-blue-500 rounded-sm px-2 py-2 placeholder-gray-500 w-full shadow-sm"
          />
          <ValidationError prefix="Pincode" field="pincode" errors={state.errors} />
        </div>
        <div>
          <textarea
            id="requirements"
            name="requirements"
            placeholder="e.g. 4 windows and 2 doors"
            required
            className="bg-transparent outline-none border-0 border-b-2 border-blue-500 rounded-sm px-2 py-2 placeholder-gray-500 w-full h-23 resize-none shadow-sm"
          ></textarea>
          <ValidationError prefix="Requirements" field="requirements" errors={state.errors} />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="mt-4 bg-gradient-to-r from-gray-900 from-5% via-gray-800 via-60% to-gray-950 to-85% text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {state.submitting ? "Submitting..." : "Book a Visit"}
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
