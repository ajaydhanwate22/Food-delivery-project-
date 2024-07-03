import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/Storecontext'

export default function PLaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <>
      <form className='place-order'>
        <div className="place-order-left">
          <p className='title'>Delevery Inforamtion</p>
          <div className="multi-fields">
            <input type="text" placeholder='First name' />
            <input type="text" placeholder='Last name' />
          </div>
          <input type="email" placeholder='Email address' />
          <input type="text" placeholder='street' />
          <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='phone' />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
              </div>

            </div>
            <button> PROCCED TO PAYMENT</button>
          </div>

        </div>
      </form>

    </>
  )
}



