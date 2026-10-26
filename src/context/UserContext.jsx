import { createContext, useState } from "react"
import { useContext } from "react"
import foodData from "../pages/FoodData"

export const dataContext= createContext()

function UserContext({ children }) {
    let [input, setInput] = useState('')
    const [cate, setCate] = useState(foodData)
    const [showCart, setShowCart] = useState(false)
    let data= {
      input,
      setInput,
      cate,
      setCate,
      showCart,
      setShowCart
    }
  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  )
}

export default UserContext