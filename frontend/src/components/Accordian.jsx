import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
const Accordian = () => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const toggleOne = () => {
    setOne(!one);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(false);
  };
  const toggleTwo = () => {
    setTwo(!two);
    setOne(false);
    setThree(false);
    setFour(false);
    setFive(false);
  };
  const toggleThree = () => {
    setThree(!three);
    setOne(false);
    setTwo(false);
    setFive(false);
    setFour(false);
  };
  const toggleFour = () => {
    setFour(!four);
    setOne(false);
    setTwo(false);
    setThree(false);
    setFive(false);
  };
  const toggleFive = () => {
    setFour(false);
    setOne(false);
    setTwo(false);
    setThree(false);
    setFive(!five);
  };
  return (
    <div className='max-w-7xl flex flex-col h-full w-full text-center justify-center group bg-[whitesmoke] rounded-2xl shadow-xl p-8 hover:-translate-y-2 transition-all duration-300'>
      <h3
        className="text-[2.8rem] font-bold text-[#1b2a41] mx-auto mb-5 py-2 text-center relative w-fit cursor-pointer transition-transform duration-1000 
    ease-in-out group-hover:scale-105 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:scale-x-50 group-hover:after:scale-x-[5] 
    after:origin-center after:w-[60px] after:h-1 after:bg-[#dddddd] group-hover:after:bg-[#4a90e2] after:rounded after:transition-transform after:duration-300 after:ease-in-out group-hover:after:transition-colors"
      >
        Frequently Asked Questions
      </h3>
      <div className='shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg bg-white mb-2 '>
        <div className='grid grid-cols-12 '>
          <h2
            onClick={() => {
              toggleOne();
            }}
            className='col-span-10 p-5 text-left text-lg sm:text-xl font-semibold hover:cursor-pointer'
          >
            Why should I choose uPVC windows and doors instead of aluminium or
            wooden ones?
          </h2>
          <div
            onClick={() => {
              toggleOne();
            }}
            className=' col-span-2 w-full h-full flex flex-row justify-center sm:justify-end sm:pr-10 items-center hover:cursor-pointer '
          >
            {one === true ? (
              <FaAngleUp className='size-6 text-blue-400  hover:text-blue-500 transition-all duration-200' />
            ) : (
              <FaAngleDown className='size-6 text-blue-400  hover:text-blue-500 transition-all duration-200' />
            )}
          </div>
          {one && (
            <div className='col-span-12 words-break py-5 px-8'>
              <ul className='list-disc list-inside text-gray-700 text-left'>
                <li>
                  uPVC products do not warp, rot, or get damaged by termites.
                </li>
                <li>
                  They require only basic wiping to maintain good condition,
                  compared to the painting and varnishing required for wooden
                  windows and doors.
                </li>
                <li>
                  uPVC does not get heated or cooled easily, making it a
                  superior choice for energy efficiency.
                </li>
                <li>
                  uPVC windows and doors offer a leakproof design that prevents
                  rainwater from entering your home.
                </li>
                <li>
                  When closed, uPVC windows and doors significantly reduce
                  noise, providing a peaceful home environment.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className='shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg bg-white mb-2 '>
        <div className='grid grid-cols-12 '>
          <h2
            onClick={toggleTwo}
            className='col-span-10 p-5 text-left text-lg sm:text-xl font-semibold hover:cursor-pointer'
          >
            Can I replace my old windows with uPVC windows?
          </h2>
          <div
            onClick={toggleTwo}
            className='col-span-2  w-full h-full flex justify-center sm:justify-end sm:pr-10 items-center hover:cursor-pointer'
          >
            {two === true ? (
              <FaAngleUp className='size-6 text-blue-400  hover:text-blue-500 transition-all duration-200' />
            ) : (
              <FaAngleDown className='size-6 text-blue-400  hover:text-blue-500 transition-all duration-200' />
            )}
          </div>
          {two && (
            <div className='col-span-12 words-break py-5 px-8'>
              <ul className='list-disc list-inside text-gray-700 text-left'>
                <li>
                  Yes. uPVC windows can easily replace your old wooden or other
                  windows since they offer extensive customization options to
                  match the size, style, color, and other features such as mesh
                  and grill for your windows.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className='shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg bg-white mb-2 '>
        <div className='grid grid-cols-12 '>
          <h2
            onClick={() => {
              toggleThree();
            }}
            className='col-span-10 p-5 text-left text-lg sm:text-xl font-semibold hover:cursor-pointer'
          >
            What are the customization options available for uPVC ventilation
            windows?
          </h2>
          <div
            onClick={() => {
              toggleThree();
            }}
            className='col-span-2 w-full h-full flex justify-center sm:justify-end sm:pr-10 items-center hover:cursor-pointer'
          >
            {three === true ? (
              <FaAngleUp className='size-6 text-blue-400  hover:text-blue-500 transition-all duration-200' />
            ) : (
              <FaAngleDown className='size-6 text-blue-400  hover:text-blue-500 transition-all duration-200' />
            )}
          </div>
          {three && (
            <div className='col-span-12 words-break py-5 px-8'>
              <ul className='list-disc list-inside text-gray-700 text-left'>
                <li>
                  You can customize the size, color, and style of uPVC
                  ventilation windows. You can also incorporate louvre, exhaust
                  fan, and different types of glass in ventilation windows.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* 4th*/}

      <div className='shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg bg-white mb-2 '>
        <div className='grid grid-cols-12 '>
          <h2
            onClick={() => {
              toggleFour();
            }}
            className='col-span-10 p-5 text-left text-lg sm:text-xl font-semibold hover:cursor-pointer'
          >
            Why uPVC doors for bathrooms are better than wooden or metal doors?
          </h2>
          <div
            onClick={() => {
              toggleFour();
            }}
            className='col-span-2 w-full h-full flex justify-center sm:justify-end sm:pr-10 items-center hover:cursor-pointer'
          >
            {four === true ? (
              <FaAngleUp className='size-6 text-blue-400  hover:text-blue-500 transition-all duration-200' />
            ) : (
              <FaAngleDown className='size-6 text-blue-400  hover:text-blue-500 transition-all duration-200' />
            )}
          </div>
          {four && (
            <div className='col-span-12 words-break py-5 px-8'>
              <ul className='list-disc list-inside text-gray-700 text-left'>
                <li>
                  uPVC doors have several advantages over wooden or metal doors
                  for bathrooms since uPVC does not rot and rust and requires
                  minimal maintenance.
                </li>
                <li>
                  uPVC doors also look aesthetically pleasing and match the
                  modern and minimalist look of your home.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/*5th */}

      <div className='shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg bg-white mb-2 '>
        <div className='grid grid-cols-12 '>
          <h2
            onClick={() => {
              toggleFive();
            }}
            className='col-span-10 p-5 text-left text-lg sm:text-xl font-semibold hover:cursor-pointer'
          >
            How long will it take for my uPVC windows installation after placing
            an order?
          </h2>
          <div
            onClick={() => {
              toggleFive();
            }}
            className='col-span-2 w-full h-full flex justify-center sm:justify-end sm:pr-10 items-center hover:cursor-pointer'
          >
            {five === true ? (
              <FaAngleUp className='size-6 text-blue-400  hover:text-blue-500 transition-all duration-200' />
            ) : (
              <FaAngleDown className='size-6 text-blue-400  hover:text-blue-500 transition-all duration-200' />
            )}
          </div>
          {five && (
            <div className='col-span-12 words-break py-5 px-8'>
              <ul className='list-disc list-inside text-gray-700 text-left'>
                <li>
                  The delivery and installation of uPVC windows and doors start
                  within 15 days of placing the order.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
