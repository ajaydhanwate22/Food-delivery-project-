import React, { useContext } from 'react';
import { StoreContext } from '../../context/Storecontext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { CartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="cart mt-24 flex flex-col-reverse md:flex-row">
        <div className="cart-items">
          <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr className='h-[1px] bg-gray-300 border-none' />
          {food_list.map((item) => {
            if (CartItems[item._id] > 0) {
              return (
                <div key={item._id}>
                  <div className="cart-item-title cart-items-item my-2 text-black">
                    <img className='w-12' src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{CartItems[item._id]}</p>
                    <p>${item.price * CartItems[item._id]}</p>
                    <p onClick={() => removeFromCart(item._id)} className='cros cursor-pointer'>x</p>
                  </div>
                  <hr />
                </div>
              );
            } else {
              return null; // Ensure a non-null value is returned to avoid errors
            }
          })}
        </div>
        <div className="cart-bottom md:flex-col flex justify-between gap-[max(12vw,20px)]">
          <div className="cart-total flex-1 flex flex-col gap-5">
            <h2>Cart total</h2>
            <div>
              <div className="cart-total-details flex justify-between text-gray-700">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className='my-2' />
              <div className="cart-total-details flex justify-between text-gray-700">
                <p>Delivery fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr className='my-2' />
              <div className="cart-total-details flex justify-between text-gray-700">
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>
            </div>
            <button className='bg-tomato text-white rounded-md px-4 py-2 w-[max(15vw,200px)] focus:outline-none cursor-pointer' onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode flex-1 md:justify-start">
            <div>
              <p className='text-gray-700'>If you have a promo code, enter it here</p>
              <div className="cart-prmocode-input mt-4 flex justify-between items-center bg-gray-200 rounded-md p-2">
                <input className='bg-transparent border-none outline-none pl-4' type="text" placeholder='Promo code' />
                <button className='w-[max(10vw,150px)] px-2 py-3 bg-black text-white border-none rounded-md'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
