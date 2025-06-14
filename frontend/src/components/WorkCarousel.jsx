import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaAutoprefixer } from "react-icons/fa6";
import { useCallback } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Autoplay from "embla-carousel-autoplay";
import work1 from '../assets/work1.jpg';
import work2 from '../assets/work2.jpg';
import work3 from '../assets/work3.jpg';
import work4 from '../assets/work4.jpg';
import work5 from '../assets/work5.jpg';
import work6 from '../assets/work6.jpg';
import work7 from '../assets/work7.jpg';
import work8 from '../assets/work8.jpg';
import work9 from '../assets/work9.jpg';
import work10 from '../assets/work10.jpg';

export function WorkCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className='flex flex-col items-center'>
      <div
        className='embla w-[400px]  h-[400px] md:w-[450px] md:h-[450px]  lg:w-[550px] lg:h-[550px] overflow-hidden mt-10 mb-0 rounded-xl'
        ref={emblaRef}
      >
        <div className='embla__container flex flex-row h-full rounded-xl'>
          <div className='embla__slide flex justify-center items-center h-full min-w-full bg-gray-600 rounded-xl mx-2'>
            <img src={work1} alt="" />
          </div>
          <div className='embla__slide flex justify-center items-center h-full min-w-full bg-gray-600 rounded-xl mx-2'>
            <img src={work2} alt="" />
          </div>
          <div className='embla__slide flex justify-center items-center h-full min-w-full bg-gray-600 rounded-xl mx-2'>
            <img src={work3} alt="" />
          </div>
          <div className='embla__slide flex justify-center items-center h-full min-w-full bg-gray-600 rounded-xl mx-2'>
            <img src={work4} alt="" />
          </div>
          <div className='embla__slide flex justify-center items-center h-full min-w-full bg-gray-600 rounded-xl mx-2'>
            <img src={work5} alt="" />
          </div>
          <div className='embla__slide flex justify-center items-center h-full min-w-full bg-gray-600 rounded-xl mx-2'>
            <img src={work6} alt="" />
          </div>
          <div className='embla__slide flex justify-center items-center h-full min-w-full bg-gray-600 rounded-xl mx-2'>
            <img src={work7} alt="" />
          </div>
          <div className='embla__slide flex justify-center items-center h-full min-w-full bg-gray-600 rounded-xl mx-2'>
            <img src={work8} alt="" />
          </div>
          <div className='embla__slide flex justify-center items-center h-full min-w-full bg-gray-600 rounded-xl mx-2'>
            <img src={work9} alt="" />
          </div>
          <div className='embla__slide flex justify-center items-center h-full min-w-full bg-gray-600 rounded-xl mx-2'>
            <img src={work10} alt="" />
          </div>
        </div>
      </div>

      {/* Buttons outside the overflow-hidden box */}
      <div className='mt-2 flex gap-4'>
        <button
          className='px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400'
          onClick={scrollPrev}
        >
          <IoIosArrowBack />
        </button>
        <button
          className='px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400'
          onClick={scrollNext}
        >
          <MdOutlineNavigateNext />
        </button>
      </div>
    </div>
  );
}
