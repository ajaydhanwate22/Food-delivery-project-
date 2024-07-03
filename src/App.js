import './App.css';
import Navbar from './Component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PLaceOrder from './Pages/PlaceOrder/PLaceOrder';
import Footer from './Component/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './Component/LoginPopup/LoginPopup';
function App() {

  const[showLogin,setShowLogin]= useState(false)

  return (
  <>
  {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
  <div className="app w-3/4 m-auto">
<Navbar setShowLogin={setShowLogin}/>
  <Routes>
    <Route path='/' element= {<Home/>} />
    <Route path='/cart' element= {<Cart/>} />
    <Route path='/order' element= {<PLaceOrder/>} />
    </Routes>
  </div>
  <Footer/>
  </>
  );
}

export default App;
