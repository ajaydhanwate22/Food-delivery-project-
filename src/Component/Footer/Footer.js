import React from 'react'
import { assets } from '../../assest/assets'

export default function Footer() {
  return (
    <>
     <div className="footer mt-[100px] text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] p-[20px] px-[8vw] pt-[80px]" id='footer'>
        <div className="footer-content w-full grid grid-cols-[2fr_1fr_1fr] gap-[80px]">
            <div className="footer-content-left flex flex-col items-start gap-[20px] cursor-pointer">
            <img src={assets.logo} alt="" />
            <p className='max-md:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestias fugiat voluptate ipsa asperiores maxime eius, fugit velit autem, sint magnam cum sit. Ea neque debitis reiciendis tempora mollitia unde repellendus nihil natus maiores! Corporis!</p>
            <div className="footer-social-icon flex w-10 gap-5">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center flex flex-col items-start gap-[20px] cursor-pointer">
            <h1 className='text-white font-semibold'>COMPANY</h1>
            <ul className='list-none space-y-[10px] sm:space-y-1 '>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privancy policy</li>
            </ul>
            </div>
            <div className="footer-content-right flex flex-col items-start gap-[20px] cursor-pointer">
              <h1 className='text-white font-semibold'>GET IN TOUCH </h1>
              <ul className='list-none space-y-[10px]'>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
              </ul>
            </div>
           </div>
          <hr className='w-full h-1 m-5 bg-gray-500 border-none' />
          <p className="footer-copyright">Copyright 2024 @Tomato.com- All Right Reserved.</p>
        </div> 
    </>
  )
}
