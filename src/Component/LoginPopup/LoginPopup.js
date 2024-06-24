import React, { useState } from 'react'
import { assets } from '../../assest/assets'

export default function LoginPopup({setShowLogin}) {

    const [currState,setcurrState] = useState('Login')
  return (
    <>
      <div className="login-popup absolute z-1 w-full h-full bg-black bg-opacity-50 grid">
        <form  className="login-popup-container place-self-center max-w-max w-[23vw] min-w-[330px] text-gray-500 bg-white flex flex-col gap-6 p-6 rounded-lg text-sm animate-fadeIn"> 
            <div className="login-popup-title flex justify-between items-center text-black">
                <h2>{currState}</h2>
                <img className='w-4 cursor-pointer' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs flex flex-col gap-5">
                {currState ==="Login"?<></>:<input type="text" className='outline-none border border-gray-300 p-2 rounded' placeholder='Your name' required/>}
                <input type="email" className='outline-none border border-gray-300 p-2 rounded' placeholder='Your email' required />
                <input type="password" className='outline-none border border-gray-300 p-2 rounded' placeholder='Password' required />
            </div>
            <button className='border-none p-2 rounded text-white bg-tomato text-base cursor-pointer'>{currState==="Sign Up"? "Create account":"Login"}</button>
            <div className="login-popup-condition flex items-start gap-2 -m-3.5">
                <input type="checkbox" className='mt-1.25' required/>
                <p>By continuing,i agree to the terms and & privancy policy.</p>
            </div>
            {currState==='Login'
            ?<p>Create a new account? <span className='text-tomato font-medium cursor-pointer' onClick={()=>setcurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span className='text-tomato font-medium cursor-pointer' onClick={()=>setcurrState("Login")}>Login here</span></p>
            }
        </form>
      </div>
    </>
  )
}
