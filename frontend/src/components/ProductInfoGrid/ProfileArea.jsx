import React from "react";
// import ProfileSeries from "./SixtySeries";
import SixtySeries from "./SeriesTemplate";
import CompleteSeriesCard from "./CompleteSeriesCard";

const ProfileArea = () => {
  return (
    <div className='max-w-7xl mx-auto mt-20 p-10 rounded-3xl bg-[linear-gradient(135deg,_#f0f4f8,_#d9e2ec)]'>
      <div
        className='flex flex-col mb-8 rounded-[20px] bg-gradient-to-br from-white to-[whitesmoke] shadow-[0_10px_30px_rgba(0,0,0,0.1)]
             overflow-hidden transition-transform duration-300 hover:-translate-y-2 px-3 py-6'
      >
        <h1 className='text-center text-2xl md:text-3xl font-bold text-gray-800 mt-6 mb-2 tracking-tight'>
          uPVC Profiles
        </h1>
        <p className='text-base text-gray-700 leading-relaxed p-1 mb-2'>
          uPVC profiles, also known as unplasticized polyvinyl chloride
          profiles, are a fundamental component in the construction of
          high-quality uPVC windows and doors. These high-quality uPVC profiles
          are crafted from a specialized raw material blend that includes PVC
          resin, stabilizers, impact modifiers, and additives. <br />
          <br />
          uPVC profiles are known for their durability, weather resistance, and
          low maintenance properties, making them an excellent choice for homes
          and offices. Whether you’re looking for thin profile uPVC windows,
          flat profile uPVC windows, narrow profile uPVC windows, or uPVC frame
          profiles, we ensure you find the right solution. Being one of the
          reputed uPVC profiles wholesalers, we are recognized as one of the
          best uPVC profile companies, delivering exceptional products at a
          competitive uPVC profile cost.
          <br />
          <br />
          We offer different types of profiles, including the 60 Series Casement
          systems, 80/99 Series Sliding systems, 60/90/112 Series Sliding
          systems.
        </p>

        <CompleteSeriesCard />
      </div>
    </div>
  );
};

export default ProfileArea;
