import React from "react";
import './Feature_card.css';
const FeatureCard = (props) => {
 

  return (
    <div className="card">
      <img className="icon" src={props.img} alt="Requirement" />
      <h4>{props.value}</h4>
    </div>
  );
};

export default FeatureCard;
