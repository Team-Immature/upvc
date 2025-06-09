import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import {Route ,Router ,BrowserRouter,Routes} from 'react-router-dom';
import Products from './Products.jsx';
import OurWork from './OurWork.jsx';
// import ScrollToTop from './components/scrollToTop.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<Products />} />
      <Route path='/work' element={<OurWork />} />
    </Routes>
   
    
    </BrowserRouter>
    {/* <App /> */}
  </StrictMode>
)
