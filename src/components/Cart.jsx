import { RxCross2 } from "react-icons/rx";
import React, { useContext } from 'react'
import { dataContext } from "../context/UserContext";
import Card2 from "./Card2";
import { BsCurrencyRupee } from "react-icons/bs";



const Cart = () => {
    const {showCart,setShowCart, cate, setCate, basketData} = useContext(dataContext)

    let subTotal = basketData.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className={`w-2/4  md:w-1/4 h-full fixed top-0 right-0 bg-white shadow-xl transition-all duration-500 ${showCart ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 `}>
        <header className=" w-full flex justify-between items-center p-2 bg-amber-100 text-green-500 ">
            <span className="font-bold">Order Items</span>
            <span 
            onClick={()=>{setShowCart(false)}}
            className="font-bold text-2xl hover:bg-red-500 cursor-pointer"><RxCross2 /></span>
        </header>


        <div className="w-full h-full overflow-y-auto p-2">
          <Card2/>

        <div className="w-full p-2 ">

           <hr className="border-t-2 border-black mt-2"/>

     <div className="w-full flex items-center justify-between">
      <h2 className="font-bold text-black">Subtotal</h2>
      <h2 className="font-bold text-green-500 flex items-center"><BsCurrencyRupee /> <span>{subTotal.toFixed(2)}</span></h2>
     </div>

     <div className="w-full flex items-center justify-between">
      <h2 className="font-bold text-black">Delivery Fee</h2>
      <h2 className="font-bold text-green-500 flex items-center"><BsCurrencyRupee /> <span>40.00</span></h2>
     </div>

     <div className="w-full flex items-center justify-between">
      <h2 className="font-bold text-black">Taxes</h2>
      <h2 className="font-bold text-green-500 flex items-center"><BsCurrencyRupee /> <span>57.33</span></h2>
     </div>

     <hr className="border-t-2 border-black mt-2"/>
     
     <div className="w-full flex items-center justify-between mt-2 text-lg">
      <h2 className="font-bold text-black">Total</h2>
      <h2 className="font-bold text-green-500 flex items-center"><BsCurrencyRupee /> <span>{(subTotal + 40 + 57.33).toFixed(2)}</span></h2>
     </div>

      <button className="w-full bg-green-500 text-white font-bold py-2 mt-2 rounded hover:bg-green-600 hover:scale-95" >Place Order</button>

        </div>
        <h1 className="font-bold text-green-500 cursor-pointer hover:text-green-700" onClick={() => setShowCart(false)}>
          + Add More Items
        </h1>
      </div>
    </div>
  )
}

export default Cart