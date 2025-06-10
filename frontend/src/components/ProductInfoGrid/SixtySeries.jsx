import React from "react";
import SeriesCard from "./SeriesCard";

import casementwindowframe from "../../assets/casementwindowframe.png";
import casementoutswingwindowsash from "../../assets/casementoutswingwindowsash.png";
import casementoutswingdoorsash from "../../assets/casementoutswingdoorsash.png";

import casementmullion from "../../assets/casementmullion.png";
import casementsingleglazing from "../../assets/casementsingleglazing.png";
import smallwindowframe from "../../assets/smallwindowframe.png";
import casementmeshsash from "../../assets/casementmeshsash.png";
import casementslidingouterframe from "../../assets/casementslidingouterframe.png";

const SixtySeries = () => {
  return (
    <div>
      <h1 className='text-left text-2xl md:text-3xl ml-2.5  font-medium text-green-950 underline mt-6 mb-2 tracking-tight b'>
        60 Series Casement System{" "}
      </h1>
      <p className='text-base text-gray-700 leading-relaxed p-1 mb-2'>
        The 60 Series Casement System offers sleek windows for any architectural
        style, enhanced security, and a dust-reducing design. Choose from
        single-opening, double-opening, or fixed options, with grills for extra
        sophistication. Perfect for clear views and custom ventilation in any
        space.
      </p>
      <div className='grid lg:grid-cols-4 sm:grid-cols-1 p-4 gap-4'>
        {/*Features */}
        <div className='bg-gray-50/30 hover:bg-white rounded-lg transition-all duration-250 shadow-sm p-4'>
          <h2 className='text-lg font-semibold mb-2 text-blue-900'>
            Unique Features
          </h2>
          <ul className='list-disc pl-5 text-gray-700'>
            <li className='text-base text-gray-700 leading-relaxed'>
              3 different sizes of outer frames to suit your requirements
            </li>
            <li className='text-base text-gray-700 leading-relaxed'>
              Capable of handling heights up to 8 Ft
            </li>
            <li className='text-base text-gray-700 leading-relaxed'>
              Double locking mechanism in beading for better security
            </li>
          </ul>
        </div>
        {/*Ideal */}
        <div className='bg-gray-50/30 hover:bg-white rounded-lg transition-all duration-250 shadow-sm p-4'>
          <h2 className='text-lg font-semibold mb-2 text-blue-900'>
            Ideal For
          </h2>
          <p className='text-base text-gray-700 leading-relaxed'>
            Bedrooms, living rooms, and kitchens, blending seamlessly with both
            traditional and contemporary architecture.{" "}
          </p>
        </div>

        {/*Max height */}
        <div className='bg-gray-50/30 hover:bg-white rounded-lg transition-all duration-250 shadow-sm p-4'>
          <h2 className='text-lg font-semibold mb-2 text-blue-900'>Height</h2>
          <p className='text-base text-gray-700 leading-relaxed'>
            Maximum Permissible Height: 8 Feet.
          </p>
        </div>

        {/*Wall thickness */}
        <div className='bg-gray-50/30 hover:bg-white rounded-lg transition-all duration-250 shadow-sm p-4'>
          <h2 className='text-lg font-semibold mb-2 text-blue-900'>
            Wall Thickness
          </h2>
          <p className='text-base text-gray-700 leading-relaxed'>
            Average wall thickness: 2.2mm, extendable up to 2.5mm{" "}
          </p>
        </div>
      </div>

      <h2 className='text-center text-2xl md:text-2xl ml-2.5  font-bold text-green-950 underline mt-6 mb-2 tracking-tight b'>
        Internal Structure{" "}
      </h2>

      <div className='grid lg:grid-cols-4 sm:grid-cols-2 p-4 gap-4'>
        <SeriesCard title='Casement Window Frame' image={casementwindowframe} />
        <SeriesCard
          title='Casement Outswing Window Sash'
          image={casementoutswingwindowsash}
        />
        <SeriesCard
          title='Casement Outswing Door Sash'
          image={casementoutswingdoorsash}
        />
        <SeriesCard title='Casement Mullion' image={casementmullion} />
        <SeriesCard
          title='Casement Single Glazing Bead'
          image={casementsingleglazing}
        />
        <SeriesCard title='60 Small Window Frame ' image={smallwindowframe} />
        <SeriesCard title='Casement Mesh Sash' image={casementmeshsash} />
        <SeriesCard
          title='Casement/Sliding Outer Frame'
          image={casementslidingouterframe}
        />
      </div>
    </div>
  );
};

export default SixtySeries;
