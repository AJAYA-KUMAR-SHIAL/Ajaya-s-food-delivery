import React, { useContext, useEffect } from 'react'
import { GiFoodTruck } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { dataContext } from '../context/UserContext';
import foodData from '../pages/FoodData';


const Nav = () => {
  let {input,setInput,cate,setCate,setShowCart} = useContext(dataContext)
  useEffect(()=>{
   const newList= foodData.filter((item)=>item.food_name.toLocaleLowerCase().includes(input) || item.food_name.includes(input) || item.food_name.toLocaleUpperCase().includes(input) )
   setCate(newList)
  }, [input])
  return (
    <div className='w-full h-20  flex justify-between items-center px-2 lg:px-10 py-5'>
       <div className='p-2 bg-amber-50 flex flex-col rounded-md text-green-500 shadow-xl' >
        <GiFoodTruck size={30}  className='' />
        <div className='text-sm font-bold'>Ajaya's food</div>
       
       </div>
       <form className='w-[60%]' action=""
       onSubmit={(e)=>e.preventDefault()}
       >

        <div className='p-2  bg-amber-50 flex gap-1 items-center rounded-md  shadow-xl'>
        <IoMdSearch size={20} color="green" />
        <inp  ut type="text" placeholder='Search for food' className='px-2 py-1 rounded-md w-[100%] outline-none placeholder:text-green-500' 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        
        />
       </div>
       </form>
       <div className='p-2 bg-amber-50 rounded-md text-green-500 shadow-xl relative cursor-pointer'
       onClick={()=>setShowCart(true)}
       >
        <span className='absolute -top-2 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold'>4</span>
        <FaCartArrowDown size={30}  />
       </div>
    </div>
  )
}

export default Nav