import React from "react";

const GlazingCard = (props) => {
  return (
    <div
      className="
        flex flex-col md:flex-row justify-center items-center
        bg-white rounded-[16px] shadow-[0_8px_16px_rgba(0,0,0,0.12)]
        p-5 w-full h-full
        transition-transform duration-300 ease-in-out
        hover:-translate-y-2 hover:shadow-2xl cursor-default
      "
    >
      <img
        src={props.img}
        alt={props.heading}
        className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] object-cover rounded-xl mb-4 md:mb-0 md:mr-8"
      />
      <div className="flex-1 flex flex-col justify-center items-start">
        <h2 className="text-xl font-semibold mb-2 text-blue-900 text-center md:text-left">{props.heading}</h2>
        <p className="text-base text-gray-700 leading-relaxed text-left md:text-left">{props.desc}</p>
      </div>
    </div>
  );
};

export default GlazingCard;
