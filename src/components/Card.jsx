import { LuVegan } from "react-icons/lu";

import { GiChickenOven } from "react-icons/gi";



const Card = ({ foodData }) => {
  return (
    <div className="px-1 flex flex-wrap justify-center items-center w-full gap-2 md:gap-5 md:px-5">
   { foodData.map((item)=>(
     
        <div key={item.id} className="flex flex-col flex-wrap gap-1 justify-center px-2 py-2 mt-5 bg-gray-300 w-38  md:w-42 rounded-2xl shadow-lg hover:scale-105 hover:border-2 hover:border-green-500 transition-all duration-300">
            <div className=" rounded-lg overflow-hidden">
            <img className="object-cover h-30 w-full" src={item.food_image} alt={item.food_name} />
            </div>
          
     <div className="w-full overflow-hidden">
      <h3 className="font-bold text-[18px] truncate">{item.food_name}</h3>
     </div>
            <div className=" flex justify-between font-bold  text-black">
                <div>Rs. {item.price}/-</div>
                <div className="flex items-center gap-0.5 text-green-500">
                  {item.food_type === "veg" ? <LuVegan /> : <GiChickenOven color="red" size={20} />}
                  <span>{item.food_type}</span>
                </div>
            </div>
            <button className="bg-green-400 text-gray-500 font-bold text-sm md:text-[16px] py-2 px-4 rounded-lg hover:bg-green-500 hover:text-black hover:scale-105 duration-200 mt-1 transition-all cursor-pointer">Add to basket</button>
        </div>
        
        
    
    )) }
    </div>
  )

}

export default Card