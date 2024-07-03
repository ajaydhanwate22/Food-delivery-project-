import React from 'react'
import { menu_list } from '../../assest/assets'

export default function Exploremenu({ category, setCategory }) {
  return (
    <>
      <div className="explore-menu flex flex-col gap-4" id='explore-menu'>
        <h1 className='text-[#262626]  text-xl font-semibold'>Explore our menu</h1>
        <p className='explore-menu-text max-w-[60%] sm:text-sm'>Choose from a diverse menu featuring a delectable array of dishes.our mission Satisfy your craving and elevent ypur dinning experience,one delicious meal at a time.</p>
        <div className="explore-menu-list no-scrollbar flex justify-between items-center gap-8 text-center mx-4 overflow-x-auto">
          {menu_list.map((item, index) => {
            return (
              <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                <img className={category === item.menu_name ? "active border-4 active:border-tomato active:p-2 w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition duration-200" :""}
                  src={item.menu_image} alt="" />
                <p className='mt-4 text-[#747474] text-base sm:text-lg cursor-pointer'>{item.menu_name}</p>
              </div>
            )
          })}
        </div>
        <hr className='m-3 h-1 bg-white' />
      </div>
      <img className='text-black' src="" alt="" />
    </>
  )
}
