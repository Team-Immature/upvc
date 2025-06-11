
import Test from "./components/Test";
import NavBar from "./components/NavBar/NavBar";
import ProductSection from "./components/Carousel/ProductSection";
import Feature from "./components/Feature/Feature";
import Banner from "./components/Banner";
import Footer from "./components/Footer/Footer";
// import AddressDetailsLayout from "./components/AddressDetailsLayout";

// import CustomerOrderForm from "./components/CustomerOrderForm/CustomerOrderForm";


function Home() {

  return (
    <>
      <div className='app'>
        <NavBar />
        <Banner />
        <div className=' w-full md:h-[100px] h-[50px]'> </div>
        <ProductSection />
       
        <Footer />
      </div>
    </>
  );
}

export default Home;
