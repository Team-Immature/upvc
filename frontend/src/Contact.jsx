import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AddressDetailsLayout from "./components/AddressDetailsLayout";
import Banner from "./components/Banner";
// import EnquiryForm from "./components/EnquiryForm";
import contactban from './assets/contactban.png';
const Contact = () => {
  return (
    <div>
      <NavBar />
      <Banner banner={contactban} />
      <AddressDetailsLayout />
      <Footer />
    </div>
  );
};

export default Contact;
