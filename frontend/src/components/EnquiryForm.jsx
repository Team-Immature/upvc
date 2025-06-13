// Make sure to run: npm install @formspree/react
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { TiTick } from "react-icons/ti";

const EnquiryForm = (props) => {
  const [state, handleSubmit] = useForm("mldnbgeb");

  if (state.succeeded) {
    return (
      <div
        className={`bg-white text-black p-6 rounded-lg w-full max-w-md mx-auto mt-10 text-center ${props.tcss}`}
      >
        <h2 className='text-2xl font-bold mb-2'>Thank you!</h2>
        <TiTick className='border border-green-300 text-green-300 items-center mx-auto m-5 size-10 rounded-full opacity-75' />
        <p>
          Your enquiry was submitted successfully. We will contact you soon.
        </p>
      </div>
    );
  }

  return (
    <div
      className={` ${props.tcss} bg-[whitesmoke] p-4 sm:p-6 rounded-lg shadow-md w-full max-w-md mx-auto `}
    >
      <h1 className='text-center text-3xl font-bold text-[#1b2a41] mb-2'>
        RS Enterprises
      </h1>
      <h3 className='text-center text-lg font-medium text-gray-700 mb-4'>
        Price starts at 320/- per Sq.ft
      </h3>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        {[
          {
            id: "name",
            type: "text",
            label: "Name",
            placeholder: "Enter your full name",
          },
          {
            id: "phone",
            type: "text",
            label: "Phone",
            placeholder: "Enter your phone number",
          },
          {
            id: "email",
            type: "email",
            label: "Email",
            placeholder: "Enter your email address",
          },
          {
            id: "area",
            type: "text",
            label: "Area",
            placeholder: "Enter your local area or street",
          },
          {
            id: "city",
            type: "text",
            label: "City",
            placeholder: "Enter your city name",
          },
          {
            id: "pincode",
            type: "text",
            label: "Pincode",
            placeholder: "Enter your area pincode",
          },
        ].map(({ id, type, label, placeholder }) => (
          <div key={id}>
            <input
              id={id}
              type={type}
              name={id}
              placeholder={placeholder}
              required
              className='bg-transparent outline-none border-0 border-b-2 border-gray-500 rounded-sm px-2 py-2 placeholder-gray-500 w-full shadow-sm'
            />
            <ValidationError prefix={label} field={id} errors={state.errors} />
          </div>
        ))}

        <div>
          <textarea
            id='requirements'
            name='requirements'
            placeholder='e.g. 4 windows and 2 doors'
            required
            className='bg-transparent outline-none border-0 border-b-2 border-gray-500 rounded-sm px-2 py-2 placeholder-gray-500 w-full h-24 resize-none shadow-sm'
          ></textarea>
          <ValidationError
            prefix='Requirements'
            field='requirements'
            errors={state.errors}
          />
        </div>

        <button
          type='submit'
          disabled={state.submitting}
          className='mt-2 bg-black hover:bg-black/80 active:scale-90 text-white py-2 rounded hover:cursor-pointer hover:-translate-y-1 transition-all duration-300'
        >
          {state.submitting ? "Submitting..." : "Book a Visit"}
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
