import React, { useContext, useState } from 'react';
import { assets } from '../assest/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/Storecontext';

export default function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("menu");
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <>
      <div className="navbar relative p-5 0 flex justify-between items-center">
        <Link to='/'> <img className='logo w-36 lg:w-24 xl:w-36 md:w-12 sm:w-24' src={assets.logo} alt="" /></Link>
        <ul className="navbar-menu flex list-none space-x-5 text-lg cursor-pointer lg:space-x-3 lg:text-base xl:space-x-5 xl:text-lg md:text-xs md:space-x-2 max-md:hidden">
          <Link to='/' onClick={() => { setMenu("home") }} className={menu === "home" ? "active pb-[2px] border-b-[2px] border-[#49557e]" : ""}>Home</Link>
          <a href='#explore-menu' onClick={() => { setMenu("menu") }} className={menu === "menu" ? "active pb-[2px] border-b-[2px] border-[#49557e]" : ""}>menu</a>
          <a href='#app-Download' onClick={() => { setMenu("mobile-app") }} className={menu === "mobile-app" ? "active pb-[2px] border-b-[2px] border-[#49557e]" : ""}>mobile-app</a>
          <a href='#footer' onClick={() => { setMenu("contact us") }} className={menu === "contact us" ? "active pb-[2px] border-b-[2px] border-[#49557e]" : ""}>contact us</a>
        </ul>
        <div className="navbar-right flex items-center space-x-10 lg:space-x-8 xl:space-x-10 md:space-x-6 sm:space-x-6">
          <img className='lg:w-5 xl:w-7 md:w-4 sm:w-5' src={assets.search_icon} alt="" />
          <div className="navbar-search-icon relative ">
            <Link to='/cart'><img className='lg:w-5 xl:w-7 md:w-4 sm:w-6' src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot absolute min-w-[10px] min-h-[10px] bg-orange-500 rounded-[5px] -top-[8px] -right-[8px]"}></div>
          </div>
          <button onClick={() => setShowLogin(true)} className='bg-transparent text-base text:#49557e border border-tomato py-2 px-8 rounded-3xl cursor-pointer hover:bg-red-300 transition duration-300 ease-in-out lg:px-6  md:px-5 md:py-1  sm:px-5 sm:py-1'>sign in</button>
        </div>
      </div>
    </>
  )
}

