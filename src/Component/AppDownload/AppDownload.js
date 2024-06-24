import React from 'react'
import { assets } from '../../assest/assets'

export default function AppDownload() {
  return (
    <>
      <div className="app-download mx-auto mt-[100px] text-[20px] md:text-[3vw] text-center font-semibold" id="app-Download">
        <p>For better Experience Download <br /> Tomato App</p>
        <div className="app-Download-platform flex justify-center gap-[10px] mt-[40px] md:gap-[2vw]">
            <img className='w-[120px] md:w-[30vw] max-w-[180px] transition duration-500 cursor-pointer hover:scale-105' src={assets.play_store} alt="" />
            <img className='w-[120px] md:w-[30vw] max-w-[180px] transition duration-500 cursor-pointer hover:scale-105' src={assets.app_store} alt="" />
        </div>
      </div>
    </>
  )
}
