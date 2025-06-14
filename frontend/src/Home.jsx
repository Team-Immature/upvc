import Test from "./components/Test";
import NavBar from "./components/NavBar/NavBar";
import ProductSection from "./components/Carousel/ProductSection";
import Feature from "./components/Feature/Feature";
import Banner from "./components/Banner";
import Footer from "./components/Footer/Footer";
import EnquiryForm from "./components/EnquiryForm";
import ban from "../src/assets/banner.webp";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/#hero-section-top");
  };
  return (
    <>
      <div className='app'>
        <NavBar />
        <Banner banner={ban} />
        <div id='hero-section-top' className='h-10 mb-6'></div>
        <div className=' block lg:hidden -mt-30 mb-5 px-5'>
          <EnquiryForm />
        </div>
        <ProductSection />
        <Footer />
      </div>
    </>
  );
}

export default Home;
