import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AddressDetailsLayout from "./components/AddressDetailsLayout";
import Banner from "./components/Banner";
import EnquiryForm from "./components/EnquiryForm";
import ban from "../src/assets/banner.webp";
const Contact = () => {
  return (
    <div>
      <NavBar />
      <Banner banner={ban} />
      <AddressDetailsLayout />
      <Footer />
    </div>
  );
};

export default Contact;
