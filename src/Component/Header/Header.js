import React from 'react'

export default function Header() {
  return (
    <>
      <div className="header relative h-[34vw] m-[30px] mx-auto bg-header-img bg-no-repeat bg-contain">
        <div className="header-contents absolute bottom-[10%] left-[6vw] flex flex-col items-start gap-[1.5vw] max-w-[50%] animate-fadeIn">
            <h2 className='font-semibold text-white text-5xl lg:text-3xl xl:text-5xl md:text-lg sm:text-sm' style={{'font-size': 'max(4.5vw, 10px);'}}>Order your <br /> favourite food here</h2>
            <p className='text-white text-base lg:text-sm xl:text-base md:text-xs sm:text-xs'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest inegredients and culinary experties.your mission is to satisfy your craving elevate your dinning experience,one delicion meal at a time.</p>
            <button className='border-none text-gray-700 font-semibold py-3 px-10 bg-white text-xs sm:text-base lg:text-lg rounded-full lg:py-2 lg:px-7 xl:py-3 xl:px-10  md:py-1 md:px-5 sm:py-0 sm:px-3'>View menu</button>
        </div>
      </div>
    </>
  )
}
