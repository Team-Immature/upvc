import React from "react";

const SeriesCard = ({ title1, img }) => (
  <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
    <img src={img} alt={title1} className="w-full h-48 object-contain mb-2" />
    <h3 className="text-center text-gray-800 font-medium">{title1}</h3>
  </div>
);

export default SeriesCard;
