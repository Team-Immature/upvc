import React from "react";

const FeatureCard = (props) => {
  return (
    <div className="p-3 text-center bg-white shadow-md transition-transform duration-200 ease-in-out flex flex-col justify-center items-center rounded-xl hover:scale-105">
      <img
        className="w-20 h-20 object-contain mb-2"
        src={props.img}
        alt="Requirement"
      />
      <h4>{props.value}</h4>
    </div>
  );
};

export default FeatureCard;
