import React, {useContext} from 'react'
import { assets } from '../../assest/assets'
import { StoreContext } from '../../context/Storecontext'

export default function FoodItem({ id,name,price,description,image}) {

  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);

  return (
    <>
      <div className="food-item w-full mx-auto rounded-lg shadow-lg transition duration-500 animate-fadeIn">
        <div className="food-item-img-container relative">
            <img className='food-item-image w-full rounded-tl-lg rounded-tr-lg' src={image} alt="" />
            {!cartItems[id]
            ?<img className='add w-9 absolute bottom-4 right-4 cursor-pointer rounded-full ...' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
            :<div className='food-item-counter absolute bottom-4 right-4 flex items-center gap-2 p-1 rounded-full ... bg-white'>
                <img className='w-7' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img className='w-7' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
            }
        </div>
        <div className="food-item-info p-4">
            <div className="food-item-name-rating flex justify-between items-center mb-4">
                <p className='text-xl font-medium '>{name}</p>
                <img className='w-20' src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc text-slate-400 text-sm">{description}</p>
            <p className="food-item-price text-orange-600 text-xl font-medium m-2">${price}</p>
        </div>
      </div>
    </>
  )
}
