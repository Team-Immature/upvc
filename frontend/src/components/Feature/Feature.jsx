import React from "react";
//component
import Feature_card from "./Feature_card.jsx";
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

const Feature = () => {
  return (
    <div className="group bg-[whitesmoke] rounded-2xl shadow-xl p-8 flex flex-wrap justify-between items-center transition-transform duration-300 hover:-translate-y-2">
      <h3 className="text-[2.8rem] font-bold text-[#1b2a41] mx-auto mb-3 py-2 text-center relative w-fit cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:scale-x-50 group-hover:after:scale-x-[2.5] after:origin-center after:w-[60px] after:h-1 after:bg-[#dddddd] group-hover:after:bg-[#4a90e2] after:rounded after:transition-transform after:duration-300 after:ease-in-out group-hover:after:transition-colors">
        Features
      </h3>
      <div className="w-full grid grid-cols-2 gap-3 p-3 box-border sm:grid-cols-2 md:grid-cols-[repeat(5,_0.8fr)]">
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
