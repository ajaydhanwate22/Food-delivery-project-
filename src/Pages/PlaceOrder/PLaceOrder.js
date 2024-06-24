import React, { useContext } from 'react'
import { StoreContext } from '../../context/Storecontext'

export default function PLaceOrder() {
  const {getTotalCartAmount} =useContext (StoreContext)
  return (
    <>
    <form className='place-order flex flex-col md:flex-row items-start justify-between gap-12 md:gap-20 mt-16'>
      <div className="place-order-left w-full max-w-[30vw] md:max-w-[500px]">
      <p className='title text-2xl font-semibold mb-8'>Delevery Inforamtion</p>
      <div className="multi-fields flex gap-4">
        <input className="mb-4 w-full p-4 border border-gray-300 rounded-md outline-red" type="text" placeholder='First name' />
        <input className="mb-4 w-full p-4 border border-gray-300 rounded-md outline-red" type="text"  placeholder='Last name'/>
      </div>
      <input className="mb-4 w-full p-4 border border-gray-300 rounded-md outline-red" type="email" placeholder='Email address'/>
      <input className="mb-4 w-full p-4 border border-gray-300 rounded-md outline-red" type="text"  placeholder='street'/>
      <div className="multi-fields">
        <input className="mb-4 w-full p-4 border border-gray-300 rounded-md outline-red" type="text" placeholder='City' />
        <input className="mb-4 w-full p-4 border border-gray-300 rounded-md outline-red" type="text"  placeholder='State'/>
      </div>
      <div className="multi-fields">
        <input className="mb-4 w-full p-4 border border-gray-300 rounded-md outline-red" type="text" placeholder='Zip code' />
        <input className="mb-4 w-full p-4 border border-gray-300 rounded-md outline-red" type="text"  placeholder='Country'/>
      </div>
      <input className="mb-4 w-full p-4 border border-gray-300 rounded-md outline-red" type="text"  placeholder='phone'/>
      </div>
      <div className="place-order-right w-full md:max-w-[40%] xl:max-w-[500px]">
      <div className="cart-total">
            <h2>Cart total</h2>
            <div>
            <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount ()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b> ${getTotalCartAmount()===0?0:getTotalCartAmount ()+2}</b>
              </div>
            </div>
            <button className='mt-8'> PROCCED TO PAYMENT</button>
          </div>

      </div>
    </form>
      
    </>
  )
}
