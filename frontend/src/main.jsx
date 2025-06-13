import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import Products from "./Products.jsx";
import OurWork from "./OurWork.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ScrollToTopOfThePage from "./components/ScrollToTopOfThePage.jsx";
import WhatsappIcon from "./components/WhatsappIcon/WhatsappIcon.jsx";
import PopUpForm from "./components/PopUpForm.jsx";

// import ScrollToTop from './components/scrollToTop.jsx';
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <ScrollToTop />
    <ScrollToTopOfThePage />

    <WhatsappIcon />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<Products />} />
      <Route path='/work' element={<OurWork />} />
      <Route path='/popup' element={<PopUpForm />}></Route>
    </Routes>
  </BrowserRouter>
  // {/* <App /> */}
  // </StrictMode>
);
