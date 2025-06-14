import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AddressDetailsLayout from "./components/AddressDetailsLayout";
import Banner from "./components/Banner";
import bannerContact from './assets/bancont.png';
const Contact = () => {
  return (
    <div>
      <NavBar />
      <Banner banner={bannerContact} />
      <AddressDetailsLayout />
      <Footer />
    </div>
  );
};

export default Contact;
