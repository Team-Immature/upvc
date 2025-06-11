import React from "react";
import ProductCard from "../Carousel/ProductCard";
import sliding from "../../assets/sliding.jpg";
import casement from "../../assets/casement.webp";
import fixed from "../../assets/fixed.webp";
import ventilator from "../../assets/ventilator.webp";

import { Link } from "react-scroll";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const WindowCard = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", ""); // remove # from #window
      const element = document.getElementById(id);
      if (element) {
        // 💡 This makes it scroll to the very top of the section
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);
  return (
    <div className='max-w-7xl mx-auto mt-20 p-10 rounded-3xl bg-[linear-gradient(135deg,_#f0f4f8,_#d9e2ec)]'>
      {/* Sliding Window */}
      <div id='sliding-window' className="h-10 mb-6" ></div>
      <div className=' mx-auto my-8'>
        <div className='flex flex-col mb-8 rounded-[20px] bg-gradient-to-br from-white to-[whitesmoke] shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-300 hover:-translate-y-2'>
          <h1 className='text-center text-2xl md:text-3xl font-bold text-gray-800 mt-6 mb-2 tracking-tight'>
            Sliding Window
          </h1>
          <div className='flex justify-center mb-4'>
            <ProductCard className="cursor-default" value='uPVC Sliding Windows' img={sliding} />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-8'>
            {/* About */}
            <div>
              <h2 className='text-xl font-semibold mb-3 text-blue-900'>
                About
              </h2>
              <p className='text-base text-gray-700 leading-relaxed mb-2'>
                These sliding window types are crafted to offer excellent
                insulation, enhanced security, and smooth operation, creating a
                comfortable and enriched living environment. Built with durable
                uPVC, these sliding windows for houses ensure lasting
                performance with minimal upkeep, making them a reliable choice
                for any home. Efficiency is assured through specialized glass
                options to ensure optimum thermal performance. uPVC sliding
                windows slide smoothly along horizontal tracks, making them easy
                to operate and secure. Available in two-track sliding window and
                three-track sliding window options, these windows are also
                perfect for a balcony sliding window where space-saving and
                functionality are essential.
              </p>
            </div>
            {/* Features */}
            <div className='flex flex-col gap-6'>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Feature 1
                </h2>
                <p className='text-base text-gray-700 leading-relaxed'>
                  Sliding windows allow fresh air to flow in while removing
                  stale air, improving ventilation for a healthier home
                  environment. A balcony sliding window works especially well in
                  ensuring effective airflow and comfort.
                </p>
              </div>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Feature 2
                </h2>
                <p className='text-base text-gray-700 leading-relaxed'>
                  Available in single, double, or triple glazing, these windows
                  enhance security in your home.
                </p>
              </div>
            </div>
            {/* Options */}
            <div className='flex flex-col gap-6'>
              <div className='bg-white rounded-lg shadow-sm p-4 flex flex-col items-center'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Colour Options
                </h2>
                <p className='text-base text-gray-700 leading-relaxed text-center'>
                  You can customize the colour of your windows to match your
                  home’s style. We offer a wide range of colours, including Milk
                  White, Dark Grey Metal, Black, Oak, Walnut, and more.
                </p>
                <button className='mx-auto mt-4 block hover:cursor-pointer bg-blue-600 text-white py-2 px-6 rounded-full font-semibold shadow transition hover:bg-blue-700 hover:-translate-y-1 duration-200'>
                  See more
                </button>
              </div>
              <div className='bg-white rounded-lg shadow-sm p-4 flex flex-col items-center'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Glazing Options
                </h2>
                <p className='text-base text-gray-700 leading-relaxed text-center'>
                  <span className='text-orange-900 font-semibold'>
                    Single Glass
                  </span>
                  : One layer of glass.
                  <br />
                  <span className='text-orange-900 font-semibold'>
                    Double Glass
                  </span>
                  : Two layers of glass with insulating space.
                  <br />
                  <span className='text-orange-900 font-semibold'>
                    Triple Glass
                  </span>
                  : Three panes of glass, often with a tinted or light-coloured
                  middle layer, offering enhanced insulation.
                </p>
                <Link
                  to='Glazing-heading'
                  smooth={true}
                  duration={1000}
                  className='cursor-pointer'
                >
                  <button className='mx-auto mt-4 block hover:cursor-pointer bg-green-600 text-white py-2 px-6 rounded-full font-semibold shadow transition hover:bg-green-700 hover:-translate-y-1 duration-200'>
                    See more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Casement Window */}
      <div id='casement-window' className="h-10 mb-6" ></div>
      <div className=' mx-auto my-8'>
        <div className='flex flex-col mb-8 rounded-[20px] bg-gradient-to-br from-white to-[whitesmoke] shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-300 hover:-translate-y-2'>
          <h1 className='text-center text-2xl md:text-3xl font-bold text-gray-800 mt-6 mb-2 tracking-tight'>
            Casement Window
          </h1>
          <div className='flex justify-center mb-4'>
            <ProductCard className="cursor-default" value='uPVC Casement Windows' img={casement} />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-8'>
            <div>
              <h2 className='text-xl font-semibold mb-3 text-blue-900'>
                About
              </h2>
              <p className='text-base text-gray-700 leading-relaxed mb-2'>
                Are you battling outside noise or getting maintenance headaches
                with outdated windows that fail to provide style? Switch to uPVC
                casement windows, which are designed for noise insulation, low
                maintenance, durability, and stylishness. Casement windows offer
                you all the advantages that go with fresh air and flexibility
                while allowing excellent security. A uPVC casement window helps
                in maintaining indoor temperatures by reducing energy loss.
                Modern casement window construction provides superior insulation
                and ensures utility on bills year-round.
              </p>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Feature 1
                </h2>
                <p className='text-base text-gray-700 leading-relaxed'>
                  uPVC casement windows are built with advanced materials that
                  can resist corrosion. Whether you’re going for casement
                  windows for the kitchen or bathroom, these windows require
                  minimal maintenance for a long life.
                </p>
              </div>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Feature 2
                </h2>
                <p className='text-base text-gray-700 leading-relaxed'>
                  uPVC casement windows are engineered with precise locking
                  systems that provide high protection against any interference.
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='bg-white rounded-lg shadow-sm p-4 flex flex-col items-center'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Colour Options
                </h2>
                <p className='text-base text-gray-700 leading-relaxed text-center'>
                  Customize your windows to match your home’s style. Options:
                  Milk White, Dark Grey Metal, Black, Oak, Walnut, and more.
                </p>
                <button className='mx-auto mt-4 block hover:cursor-pointer bg-blue-600 text-white py-2 px-6 rounded-full font-semibold shadow transition hover:bg-blue-700 hover:-translate-y-1 duration-200'>
                  See more
                </button>
              </div>
              <div className='bg-white rounded-lg shadow-sm p-4 flex flex-col items-center'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Glazing Options
                </h2>
                <p className='text-base text-gray-700 leading-relaxed text-center'>
                  <span className='text-orange-900 font-semibold'>
                    Single Glass
                  </span>
                  : One layer of glass.
                  <br />
                  <span className='text-orange-900 font-semibold'>
                    Double Glass
                  </span>
                  : Two layers with insulating space.
                  <br />
                  <span className='text-orange-900 font-semibold'>
                    Triple Glass
                  </span>
                  : Three panes, often with a tinted or light-coloured middle
                  layer, for enhanced insulation.
                </p>
                <Link
                  to='Glazing-heading'
                  smooth={true}
                  duration={1000}
                  className='cursor-pointer'
                >
                  <button className='mx-auto mt-4 block hover:cursor-pointer bg-green-600 text-white py-2 px-6 rounded-full font-semibold shadow transition hover:bg-green-700 hover:-translate-y-1 duration-200'>
                    See more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Window */}
      <div id='fixed-window' className="h-10 mb-6" ></div>
      <div className=' mx-auto my-8'>
        <div className='flex flex-col mb-8 rounded-[20px] bg-gradient-to-br from-white to-[whitesmoke] shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-300 hover:-translate-y-2'>
          <h1 className='text-center text-2xl md:text-3xl font-bold text-gray-800 mt-6 mb-2 tracking-tight'>
            Fixed Window
          </h1>
          <div className='flex justify-center mb-4'>
            <ProductCard className="cursor-default" value='uPVC Fixed Windows' img={fixed} />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-8'>
            <div>
              <h2 className='text-xl font-semibold mb-3 text-blue-900'>
                About
              </h2>
              <p className='text-base text-gray-700 leading-relaxed mb-2'>
                Add a touch of modern sophistication to your life with our fixed
                windows, ingeniously designed to frame your view perfectly and
                offer breathtaking, uninterrupted views that enhance your home’s
                energy efficiency. Fixed windows are as good as it gets in terms
                of viewing, allowing a clear and unobstructed view of the
                outdoors like you're just looking at a living picture frame.
                Their expansive glass surfaces make it easy for fixed windows to
                flood natural light into your interiors and illuminate the space
                so much brighter and classier.
              </p>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Feature 1
                </h2>
                <p className='text-base text-gray-700 leading-relaxed'>
                  This inert, inoperative design, along with the high-quality
                  uPVC material, makes it outstanding for thermal and sound
                  insulation, thus helping to keep your home comfortable and
                  energy-efficient.
                </p>
              </div>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Feature 2
                </h2>
                <p className='text-base text-gray-700 leading-relaxed'>
                  This can be further assured with toughened, laminated glass on
                  single, double, and triple glazing for a peace of mind.
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='bg-white rounded-lg shadow-sm p-4 flex flex-col items-center'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Colour Options
                </h2>
                <p className='text-base text-gray-700 leading-relaxed text-center'>
                  You can customize the colour of your windows to match your
                  home’s style. We offer a wide range of colours, including Milk
                  White, Dark Grey Metal, Black, Oak, Walnut, and more.
                </p>
                <button className='mx-auto mt-4 block hover:cursor-pointer bg-blue-600 text-white py-2 px-6 rounded-full font-semibold shadow transition hover:bg-blue-700 hover:-translate-y-1 duration-200'>
                  See more
                </button>
              </div>
              <div className='bg-white rounded-lg shadow-sm p-4 flex flex-col items-center'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Glazing Options
                </h2>
                <p className='text-base text-gray-700 leading-relaxed text-center'>
                  <span className='text-orange-900 font-semibold'>
                    Single Glass
                  </span>
                  : One layer of glass.
                  <br />
                  <span className='text-orange-900 font-semibold'>
                    Double Glass
                  </span>
                  : Two layers of glass with insulating space.
                  <br />
                  <span className='text-orange-900 font-semibold'>
                    Triple Glass
                  </span>
                  : Three panes of glass, often with a tinted or light-coloured
                  middle layer, offering enhanced insulation.
                </p>
                <Link
                  to='Glazing-heading'
                  smooth={true}
                  duration={1000}
                  className='cursor-pointer'
                >
                  <button className='mx-auto mt-4 block hover:cursor-pointer bg-green-600 text-white py-2 px-6 rounded-full font-semibold shadow transition hover:bg-green-700 hover:-translate-y-1 duration-200'>
                    See more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ventilator Window */}
      <div id='ventilator-window' className="h-10 mb-6" ></div>
      <div className=' mx-auto my-8'>
        <div className='flex flex-col mb-8 rounded-[20px] bg-gradient-to-br from-white to-[whitesmoke] shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-300 hover:-translate-y-2'>
          <h1 className='text-center text-2xl md:text-3xl font-bold text-gray-800 mt-6 mb-2 tracking-tight'>
            Ventilator Window
          </h1>
          <div className='flex justify-center mb-4'>
            <ProductCard className="cursor-default" value='uPVC Ventilator Windows' img={ventilator} />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-8'>
            <div>
              <h2 className='text-xl font-semibold mb-3 text-blue-900'>
                About
              </h2>
              <p className='text-base text-gray-700 leading-relaxed mb-2'>
                Improve the air quality of your home while ensuring protection
                from weather elements with ventilation windows. Avoid moisture
                deposits in different moisture-prone areas with various styles.
                The ventilation windows utilise the inherent noise-reducing
                capabilities of uPVC, along with tight seals and fewer gaps to
                provide sound protection. Since uPVC frames are designed with
                multiple compartments, which are generally reinforced with
                galvanized steel, they do not allow the flow of heat or cold
                through them. This helps in reducing cooling and heating needs.
              </p>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Feature 1
                </h2>
                <p className='text-base text-gray-700 leading-relaxed'>
                  Uniquely designed ventilation windows such as fixed
                  ventilation windows, bathroom ventilation windows, kitchen
                  ventilation windows, and ventilation windows with fans,
                  provide ideal ventilation for different areas.
                </p>
              </div>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Feature 2
                </h2>
                <p className='text-base text-gray-700 leading-relaxed'>
                  uPVC ventilation windows are a more cost-effective choice
                  compared to traditional options, offering numerous benefits
                  without compromising on quality.
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='bg-white rounded-lg shadow-sm p-4 flex flex-col items-center'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Colour Options
                </h2>
                <p className='text-base text-gray-700 leading-relaxed text-center'>
                  You can customize the colour of your windows to match your
                  home’s style. We offer a wide range of colours, including Milk
                  White, Dark Grey Metal, Black, Oak, Walnut, and more.
                </p>
                <button className='mx-auto mt-4 block hover:cursor-pointer bg-blue-600 text-white py-2 px-6 rounded-full font-semibold shadow transition hover:bg-blue-700 hover:-translate-y-1 duration-200'>
                  See more
                </button>
              </div>
              <div className='bg-white rounded-lg shadow-sm p-4 flex flex-col items-center'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Glazing Options
                </h2>
                <p className='text-base text-gray-700 leading-relaxed text-center'>
                  <span className='text-orange-900 font-semibold'>
                    Single Glass
                  </span>
                  : One layer of glass.
                  <br />
                  <span className='text-orange-900 font-semibold'>
                    Double Glass
                  </span>
                  : Two layers of glass with insulating space.
                  <br />
                  <span className='text-orange-900 font-semibold'>
                    Triple Glass
                  </span>
                  : Three panes of glass, often with a tinted or light-coloured
                  middle layer, offering enhanced insulation.
                </p>
                <Link
                  to='Glazing-heading'
                  smooth={true}
                  duration={1000}
                  className='cursor-pointer'
                >
                  <button className='mx-auto mt-4 block hover:cursor-pointer bg-green-600 text-white py-2 px-6 rounded-full font-semibold shadow transition hover:bg-green-700 hover:-translate-y-1 duration-200'>
                    See more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowCard;
