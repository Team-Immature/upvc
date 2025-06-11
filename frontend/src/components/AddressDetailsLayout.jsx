import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const AddressDetailsLayout = () => {
  return (
    <div className=' bg-[#d8e0e8] min-h-screen max-w-7xl mx-auto rounded-4xl shadow-2xl my-20 grid grid-cols-1 md:grid-cols-12 gap-10 p-5 '>
      <div className=' md:col-span-6 rounded-3xl flex flex-col p-5 h-[600px] md:h-auto '>
        <div className='bg-[#f5f5f5] shadow-lg w-full h-1/2 rounded-2xl my-5  px-10 py-10 flex flex-col text-gray-700 hover:scale-102 transition-all duration-300 '>
          <h2 className='bg-white text-lg md:text-xl border border-gray-800 xl:text-2xl w-auto text-center rounded-2xl '>
            Contact
          </h2>
          {/* phone number div */}
          <div className='flex flex-row  space-x-4 mt-10'>
            <FaPhone className='size-4 md:size-5 mr-2 my-auto' />
            <h1 className='text-sm md:text-lg :'>+91 8639685573</h1>
          </div>
          {/* email div */}
          <div className='flex flex-row space-x-4 mt-5'>
            <MdEmail className='size-4 md:size-5 my-auto mr-2' />
            <h1 className='text-sm md:text-lg :'>rsenterprise.upvc@gmail.com</h1>
          </div>
        </div>
        <div className='bg-[#f5f5f5] shadow-lg w-full h-1/2 rounded-2xl my-5  px-10 py-10 flex flex-col text-gray-700 hover:scale-102 transition-all duration-300 '>
          <h2 className='bg-white text-lg md:text-xl border border-gray-800 xl:text-2xl w-auto text-center rounded-2xl '>
            Visit Us
          </h2>
          {/* location div */}
          <div className='flex flex-row  space-x-4 mt-10'>
            <FaLocationDot className='size-8 md:size-5  my-auto' />
            <h1 className='text-sm md:text-lg :'>
             R S Enterprises,UPVC WINDOWS AND DOORS ,

            yellamma temple road, Narapally, no 6, Chowdhariguda, Hyderabad, Telangana 500088
            </h1>
          </div>
        </div>
        {/* <div className='bg-amber-300 w-full h-1/2 rounded-2xl my-5  px-2 py-5 md:px-10 '>
          <h2 className='text-lg md:text-xl border border-amber-700 xl:text-2xl w-auto text-center rounded-2xl'>
            Visit Us
          </h2>
        </div> */}
      </div>
      <div className=' shadow-xl md:col-span-6 rounded-3xl h-[400px] md:h-2/3 my-auto'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1227516866516!2d78.64843877498568!3d17.405895783484432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9fef087cab59%3A0x7f359106611eecc5!2sR%20S%20Enterprises%2CUPVC%20WINDOWS%20AND%20DOORS!5e0!3m2!1sen!2sin!4v1749669945166!5m2!1sen!2sin"
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='rounded-4xl  w-full h-full'
        ></iframe>
      </div>
    </div>
  );
};

export default AddressDetailsLayout;
