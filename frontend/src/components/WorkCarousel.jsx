import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaAutoprefixer } from "react-icons/fa6";
import { useCallback } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Autoplay from "embla-carousel-autoplay";
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
            Slide 1
          </div>
          <div className='embla__slide flex justify-center items-center h-full min-w-full bg-gray-600 rounded-xl mx-2'>
            Slide 2
          </div>
          <div className='embla__slide flex justify-center items-center h-full min-w-full bg-gray-600 rounded-xl mx-2'>
            Slide 3
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
