import { RxCross2 } from "react-icons/rx";
import React, { useContext } from 'react'
import { dataContext } from "../context/UserContext";
import Card2 from "./Card2";


const Cart = () => {
    const {showCart,setShowCart} = useContext(dataContext)
  return (
    <div className={`w-2/4  md:w-1/4 h-full fixed top-0 right-0 bg-white shadow-xl transition-all duration-500 ${showCart ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <header className=" w-full flex justify-between items-center p-2 bg-amber-100 text-green-500 ">
            <span className="font-bold">Order Items</span>
            <span onClick={()=>{setShowCart(false)}} className="font-bold text-2xl hover:bg-red-500 cursor-pointer"><RxCross2 /></span>
        </header>
        <Card2/>
    </div>
  )
}

export default Cart