import React from "react";
import ProductCard from "../Carousel/ProductCard";
import slidingDoor from "../../assets/slidingDoor.webp";
import frenchDoor from "../../assets/frenchDoor.webp";
import slidefoldD from "../../assets/slidefoldD.webp";
import casementD from "../../assets/casementD.jpg";
import ButtonWithPopup from "./ButtonWithPopUp";

import { Link } from "react-scroll";

const DoorCard = () => {
  return (
    <div className='max-w-7xl mx-auto mt-20 p-10 rounded-3xl bg-[linear-gradient(135deg,_#f0f4f8,_#d9e2ec)]'>
      {/* Sliding Door */}
      <div id='sliding-door' className="h-10 mb-6" ></div>
      <div className='mx-auto my-8'>
        <div className='flex flex-col mb-8 rounded-[20px] bg-gradient-to-br from-white to-[whitesmoke] shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-300 hover:-translate-y-2'>
          <h1 className='text-center text-2xl md:text-3xl font-bold text-gray-800 mt-6 mb-2 tracking-tight'>
            Sliding Door
          </h1>
          <div className='flex justify-center mb-4'>
            <ProductCard className="cursor-default" value='uPVC Sliding Doors' img={slidingDoor} clickable={false}/>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-8'>
            {/* About */}
            <div>
              <h2 className='text-xl font-semibold mb-3 text-blue-900'>
                About
              </h2>
              <p className='text-base text-gray-700 leading-relaxed mb-2'>
                Bring finesse into your living space with our high-quality uPVC
                sliding doors. These sliding uPVC doors are crafted to transform
                the aesthetic of your home. The innovative uPVC sliding door
                design ensures a seamless connection between your indoors and
                outdoors. Whether for the living room or uPVC sliding doors for
                balcony, it offers both beauty and durability. Additionally, our
                uPVC sliding doors support durability and better insulation
                compared to PVC sliding doors, and that makes them a superior
                choice for long-lasting performance.
              </p>
            </div>
            {/* Features */}
            <div className='flex flex-col gap-6'>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Feature 1
                </h2>
                <p className='text-base text-gray-700 leading-relaxed'>
                  uPVC sliding doors slide smoothly along with horizontal
                  tracks, whether it's for a balcony sliding door or any other
                  area, this smooth movement ensures a seamless transition
                  between indoors and outdoors.
                </p>
              </div>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Feature 2
                </h2>
                <p className='text-base text-gray-700 leading-relaxed'>
                  uPVC sliding doors are crafted with strong materials that are
                  built to last. The uPVC sliding door for balcony option offers
                  added sturdiness, making it a reliable choice for high-traffic
                  areas.
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
                <ButtonWithPopup />
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
                  <button className='mx-auto mt-4 block bg-green-600 text-white py-2 px-6 rounded-full font-semibold shadow transition hover:bg-green-700 hover:cursor-pointer  hover:-translate-y-1 duration-200'>
                    See more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Casement Door */}
      <div id='casement-door' className="h-10 mb-6" ></div>
      <div className='mx-auto my-8'>
        <div className='flex flex-col mb-8 rounded-[20px] bg-gradient-to-br from-white to-[whitesmoke] shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-300 hover:-translate-y-2'>
          <h1 className='text-center text-2xl md:text-3xl font-bold text-gray-800 mt-6 mb-2 tracking-tight'>
            Casement Door
          </h1>
          <div className='flex justify-center mb-4'>
            <ProductCard className="cursor-default" value='uPVC Casement Doors' img={casementD} clickable={false}/>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-8'>
            <div>
              <h2 className='text-xl font-semibold mb-3 text-blue-900'>
                About
              </h2>
              <p className='text-base text-gray-700 leading-relaxed mb-2'>
                Process the practical, stylish collection of our uPVC casement
                doors. Side-hinged to open like traditional doors, these
                products provide great ventilation options with a touch of
                refinement to your house.
              </p>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Feature 1
                </h2>
                <p className='text-base text-gray-700 leading-relaxed'>
                  The opening is outward at the sides, comparable to traditional
                  doors, for easy access and great ventilation
                </p>
              </div>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Feature 2
                </h2>
                <p className='text-base text-gray-700 leading-relaxed'>
                  Wipe clean with a slightly dampened cloth for minimal
                  maintenance and to preserve the appearance and functionality
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
                <ButtonWithPopup />
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
                  <button className='mx-auto mt-4 block bg-green-600 text-white py-2 px-6 rounded-full font-semibold shadow transition hover:bg-green-700 hover:cursor-pointer hover:-translate-y-1 duration-200'>
                    See more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* French Door */}
      <div id='french-door' className="h-10 mb-6" ></div>
      <div className='mx-auto my-8'>
        <div className='flex flex-col mb-8 rounded-[20px] bg-gradient-to-br from-white to-[whitesmoke] shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-300 hover:-translate-y-2'>
          <h1 className='text-center text-2xl md:text-3xl font-bold text-gray-800 mt-6 mb-2 tracking-tight'>
            French Door
          </h1>
          <div className='flex justify-center mb-4'>
            <ProductCard className="cursor-default" value='uPVC French Doors' img={frenchDoor} clickable={false}/>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-8'>
            <div>
              <h2 className='text-xl font-semibold mb-3 text-blue-900'>
                About
              </h2>
              <p className='text-base text-gray-700 leading-relaxed mb-2'>
                uPVC double door or French door presents one of the finest
                designs for doors at your home. With glass panes extending to
                most of their length, the uPVC double door offers a modern and
                minimalistic architectural appearance to your home.
              </p>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Feature 1
                </h2>
                <p className='text-base text-gray-700 leading-relaxed'>
                  The French doors have double door panels that cover a wide
                  area, thereby improving the natural light flow and
                  ventilation. They can be opened fully to create an open
                  atmosphere
                </p>
              </div>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Feature 2
                </h2>
                <p className='text-base text-gray-700 leading-relaxed'>
                  uPVC French doors retain their color and finish for a long
                  time with minimal maintenance. uPVC material is easy to clean
                  and highly resistant to stains
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
                <ButtonWithPopup />
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
                  <button className='mx-auto mt-4 block bg-green-600 text-white py-2 px-6 rounded-full font-semibold shadow transition hover:bg-green-700 hover:cursor-pointer hover:-translate-y-1 duration-200'>
                    See more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* slide & fold door */}
      <div id='slidefold-door' className="h-10 mb-6" ></div>
      <div className='mx-auto my-8'>
        <div className='flex flex-col mb-8 rounded-[20px] bg-gradient-to-br from-white to-[whitesmoke] shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-300 hover:-translate-y-2'>
          <h1 className='text-center text-2xl md:text-3xl font-bold text-gray-800 mt-6 mb-2 tracking-tight'>
            Slide and Fold Door
          </h1>
          <div className='flex justify-center mb-4'>
            <ProductCard className="cursor-default" value='uPVC Slide & Fold Doors' img={slidefoldD} clickable={false}/>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-8'>
            <div>
              <h2 className='text-xl font-semibold mb-3 text-blue-900'>
                About
              </h2>
              <p className='text-base text-gray-700 leading-relaxed mb-2'>
                uPVC slide and fold door adds versatility to any space because
                it is expertly designed to open and close effortlessly. This
                door creates a seamless connection between your indoor living
                area and the outdoors, perfect for a modern and open feel.
              </p>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Feature 1
                </h2>
                <p className='text-base text-gray-700 leading-relaxed'>
                  Slide and fold door effortlessly slide and fold that creates a
                  wide opening for merging your indoor and outdoor spaces into
                  one.
                </p>
              </div>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <h2 className='text-lg font-semibold mb-2 text-blue-900'>
                  Feature 2
                </h2>
                <p className='text-base text-gray-700 leading-relaxed'>
                  The fold and slide doors ensure efficient storage of the
                  folding panels and optimize your space usage. This
                  space-saving functionality maximises your floor area and is
                  perfect for homes where space efficiency is a priority.
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
                <ButtonWithPopup />
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
                  <button className='mx-auto mt-4 block bg-green-600 text-white py-2 px-6 rounded-full font-semibold shadow transition hover:bg-green-700 hover:cursor-pointer hover:-translate-y-1 duration-200'>
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

export default DoorCard;
