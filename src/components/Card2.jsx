import React, { useContext } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { dataContext } from '../context/UserContext';
import { BsCurrencyRupee } from "react-icons/bs";



const Card2 = () => {
  const {basketData, setBasketData} =useContext(dataContext)
  const removeFromBasket = (id) =>{
    setBasketData(basketData.filter((item)=> item.id !== id))
  }

  const IncreaseItemCount = (id) => {
  setBasketData((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const DecreaseItemCount = (id) => {
  const dish = basketData.find((item) => item.id === id);

  if (!dish) return;

  if (dish.quantity === 1) {
    alert("Item is going to be removed from basket");
    removeFromBasket(id);
  } else {
    setBasketData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }
};
   console.log(basketData)
  return (
   <div>
     {basketData.map((item)=>(
 
       <div key={item.id} className='w-full h-15 md:h-20 flex justify-between p-1 md:p-2 bg-gray-300 mt-2 shadow-lg rounded-md'>
    
    <div className='flex w-2/3'>
        <img className='h-13 w-15 md:h-15 md:w-20 rounded object-cover' src={item.food_image} alt="" />

       
<div className="flex flex-col items-start overflow-hidden ml-1">
  <span className="truncate text-[14px] w-full min-w-0 md:font-semibold">
    {item.food_name}
  </span>

  <div className="flex flex-row justify-between items-center text-green-500 border rounded px-1 md:mt-1 ml-2">
    <span onClick={()=> DecreaseItemCount(item.id)} className="font-bold px-2 cursor-pointer">-</span>
    <span className="bg-gray-100 px-1">{item.quantity}</span>
    <span onClick={()=> IncreaseItemCount(item.id)} className="font-bold px-1 cursor-pointer">+</span>
  </div>
</div>
    </div>
        <div className='flex flex-col items-center font-semibold gap-1'>
            <h3 className='text-green-500 text-[15px] flex items-center'> <BsCurrencyRupee /> <span>{item.price}</span></h3>
            <span 
            onClick={()=> removeFromBasket(item.id)}
            className='text-red-500 cursor-pointer'><RiDeleteBin6Line size={16}/></span>
        </div>
    </div>
    ))}
   </div>

  
  )
}

export default Card2