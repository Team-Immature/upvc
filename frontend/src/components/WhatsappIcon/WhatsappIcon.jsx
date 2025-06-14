import React, { useEffect, useState } from "react";
import Whatsapp from "../../assets/whatsapp.png";

const WhatsappIcon = () => {
  const [bottomOffset, setBottomOffset] = useState(16);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (!footer) {
        // If footer isn't yet rendered, fallback to default
        setBottomOffset(16);
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (footerRect.top < windowHeight) {
        const overlap = windowHeight - footerRect.top;
        setBottomOffset(overlap + 16);
      } else {
        setBottomOffset(16);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    const interval = setInterval(handleScroll, 300); // ⏱ Check periodically

    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="fixed left-5 z-50 transition-all duration-300"
      style={{ bottom: `${bottomOffset}px` }}
    >
      <a href="http://wa.me/+9594189833" target="_blank">
        <button className="p-1 rounded-full shadow-lg hover:bg-blue-700 bg-none">
        <img
          src={Whatsapp}
          alt="WhatsApp"
          className="w-13 h-13 sm:w-15 sm:h-15"
        />
      </button>
      </a>
    </div>
  );
};

export default WhatsappIcon;
