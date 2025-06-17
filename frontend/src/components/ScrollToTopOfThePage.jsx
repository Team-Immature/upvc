import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
const ScrollToTopOfThePage = () => {
  const [show, setShow] = useState(false);
  const sendTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollBackToTop = () => {
    const scroll = window.scrollY;
    // console.log("Scrolled:", scroll);
    if (scroll > 1500) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollBackToTop);

    return () => window.removeEventListener("scroll", scrollBackToTop);
  }, []);

  return (
    <div>
      {show && (
        <div
          onClick={sendTop}
          className='flex fixed bottom-15 right-11 h-10 w-10 md:h-13 md:w-13 rounded-full bg-gray-800 text-white border active:scale-85 border-blue-300 z-20  justify-center items-center shadow-2xl hover:cursor-pointer hover:-translate-y-2 transition-all duration-200'
        >
          <MdKeyboardDoubleArrowUp className='size-6' />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopOfThePage;
