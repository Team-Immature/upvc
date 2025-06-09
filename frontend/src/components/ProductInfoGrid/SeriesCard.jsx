import React from "react";

const SeriesCard = (props) =>{
    return(
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-xl w-full">
            <img src={props.image} alt={props.title} className="w-48 h-38 object-cover mb-3" />
            <h3 className="text-lg font-bold mb-3 text-center">{props.title}</h3>
        </div>
    )

}

export default SeriesCard;