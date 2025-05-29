import React from "react";
//component
import Feature_card from "./Feature_card.jsx";
//css
import "./Feature.css";
//img
import sun_icon from "../../assets/sun-icon-1.png";
import all_weather from "../../assets/all_weather.webp";
import accoustic from "../../assets/accoustic.jpg";
import maintainence_free from "../../assets/maintainence_free.png";
import aesthetic from "../../assets/aesthetic.png";
import durability from "../../assets/durability.png";
import structural_stability from "../../assets/structural_stability.jpg";
import safety from "../../assets/safety.jpg";
import drainage_system from "../../assets/drainage_system.png";
import eco_friendly from "../../assets/eco_friendly.png";
//img-end

const Feature = () => {
  return (
    <div className='feature '>
      <h3 className='heading'>Features</h3>
      <div className='images'>
        <Feature_card img={sun_icon} value='THERMAL INSULATION' />
        <Feature_card img={all_weather} value='ALL-WEATHER INSULATED FRAME' />
        <Feature_card img={accoustic} value='ACCOUSTIC INSULATION' />
        <Feature_card img={maintainence_free} value='MAINTAINANCE FREE' />
        <Feature_card img={aesthetic} value='AESTHETICS' />
        <Feature_card img={durability} value='DURABLITY' />
        <Feature_card img={structural_stability} value='STRUCTURAL STABILTY' />
        <Feature_card img={safety} value='SAFETY SECURITY MECHANISM' />
        <Feature_card img={drainage_system} value='DRAINAGE SYSTEM' />
        <Feature_card img={eco_friendly} value='ECO FRIENDLY' />
      </div>
    </div>
  );
};

export default Feature;
