import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import categories from '../Category'
import Card from '../components/Card'
import foodData from './FoodData'
import { dataContext } from '../context/UserContext'
import Cart from '../components/Cart'

const Home = () => {
  let {cate,setCate,input} = useContext(dataContext)

  const handleCategoryClick = (category) => {
    if (category === 'All') {
      setCate(foodData)
    } else {
      const filteredData = foodData.filter((item) => item.food_category === category)
      setCate(filteredData)
    }
  }
  return (
    <div className='bg-slate-300 w-full min-h-screen'>
        <Nav />

        {!input ? (
          <div className='flex p-5 gap-5 lg:gap-10 lg:pl-5 overflow-x-auto md:justify-center'>
          {categories.map((item)=>(
            <div key={item.id} className='items-center flex flex-col  bg-amber-50 p-2 rounded w-25 md:w-28 h-20 shadow-lg hover:scale-105 hover:bg-green-200   transition-all duration-300 cursor-pointer' onClick={()=>handleCategoryClick(item.name)}>
              <div className='text-green-500'> {item.image}</div>
              <div className='font-bold text-gray-600 md:text-lg'> {item.name}</div>

            </div>
          ))}
        </div>
        ) : null}
        
        <Card foodData={cate} />
        <Cart />
    </div>
  )
}

export default Home