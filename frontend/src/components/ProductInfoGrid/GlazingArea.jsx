import React from "react";
import GlazingCard from "./GlazingCard";
import InfoCard from "./InfoCard";


import clearGlass from '../../assets/clearGlass.jpg';
import frostedGlass from '../../assets/frostedGlass.webp';
import reflective_glass from '../../assets/reflective_glass.webp';
import texturedGlass from '../../assets/texturedGlass.jpg';
import tintedGlass from '../../assets/tintedGlass.webp';
import toughenedGlass from '../../assets/toughenedGlass.jpeg';

import singlePane from '../../assets/singlePane.jpg';
import doublePane from '../../assets/doublePane.jpg';
import triplePane from '../../assets/triplePane.webp';

const GlazingArea = () => {
  return (
    <div id="GlazingArea" className="max-w-7xl mx-auto my-20 p-10 rounded-3xl bg-[linear-gradient(135deg,_#f0f4f8,_#d9e2ec)]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
        <InfoCard
          img={singlePane}
          heading="Single Glass"
          desc=" One layer of glass."
        />
        <InfoCard
          img={doublePane}
          heading="Double Glass"
          desc="Two layers of glass with insulating space.."
        />
        <InfoCard
          img={triplePane}
          heading="Triple Glass"
          desc="Three panes of glass, often with a tinted or light-coloured middle layer, offering enhanced insulation."
        />
      </div>
      
      
      
      
      
      <div className="flex flex-col gap-6">
      <GlazingCard
        img={clearGlass}
        heading="Clear Glass"
        desc="Clear glass for windows is a standard glass type. This glass allows high light transmission, making it ideal for rooms where there is a need for ample light. Its clear view makes it a common choice among homeowners for its placement."
      />
      <GlazingCard
        img={frostedGlass}
        heading="Frosted Glass"
        desc="Frosted glass is the top choice for people who seek privacy. Due to its translucent appearance, it provides blurry images while also letting natural light enter the rooms. An additional advantage of this frosted glass is that it reduces the harsh glare by the time it reaches you, creating a comfortable environment."
      />
      <GlazingCard
        img={reflective_glass}
        heading="Reflective Glass"
        desc="These reflective glasses have a thin metallic coating that gives a view like that of a mirror from the outside. These glasses are apt for commercial buildings, and modern homes where they help reduce solar glare. The visibility from outside is limited due to its reflective nature."
      />
      <GlazingCard
        img={tintedGlass}
        heading="Tinted Glass"
        desc="Tinted glass is made by adding small amounts of metal oxides to provide it with a colourful appearance. This glass reduces the amount of heat passing through it. Also, it helps in reducing the solar damage for the items placed inside the room."
      />
      <GlazingCard
        img={texturedGlass}
        heading="Textured Glass"
        desc="It features patterns or designs on the surface of the glass. Textured glass gives a room its privacy but admits natural light. Most people use it in bathrooms, entryways, or anywhere where they have to keep some things private but still have light admission."
      />
      <GlazingCard
        img={toughenedGlass}
        heading="Toughened Glass"
        desc="Toughened glass, also known as tempered glass, is treated with high heat to make it much stronger than regular glass. For safety purposes, tempered glass windows are designed in such a way that if they break, they shatter into small, blunt pieces, so as not to cause injury."
      />
      </div>
    </div>
  );
};

export default GlazingArea;
