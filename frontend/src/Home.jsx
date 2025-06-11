
import Test from "./components/Test";
import NavBar from "./components/NavBar/NavBar";
import ProductSection from "./components/Carousel/ProductSection";
import Feature from "./components/Feature/Feature";
import Banner from "./components/Banner";
import Footer from "./components/Footer/Footer";
import EnquiryForm from "./components/EnquiryForm";
import ban from '../src/assets/banner.webp';



function Home() {

  return (
    <>
      <div className='app'>
        <NavBar />
        <div className="relative">
          <Banner banner={ban} />
          <EnquiryForm />    
        </div>
        <div className=' w-full md:h-[100px] h-[50px]'> </div>
        <ProductSection />
        <Footer />
      </div>
    </>
  );
}

export default Home;
