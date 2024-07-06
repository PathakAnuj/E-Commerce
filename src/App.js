<<<<<<< HEAD

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
=======
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
>>>>>>> bd38917 (making responsive to homepage)
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
<<<<<<< HEAD
=======

import Shoo from './Pages/ShooesPages/Shoo';
import Tshirt from './Pages/TshirtPages/Tshirt';
import CustomSuit from './Components/CustomPage/CustomSuit';
>>>>>>> bd38917 (making responsive to homepage)
import Footer from './Components/Footer/Footer';

function App() {
  return (
<<<<<<< HEAD
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/women' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productid' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
=======
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kid" element={<ShopCategory category="kid" />} />
          <Route path="/custom" element={<CustomSuit />} />
          <Route path="/custom/card1" element={<Shoo />} />
          <Route path="/custom/card2" element={<Tshirt/>} />
          <Route path="/product" element={<Product />}>
            <Route path=":productid" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
>>>>>>> bd38917 (making responsive to homepage)
      </BrowserRouter>
    </div>
  );
}

export default App;
