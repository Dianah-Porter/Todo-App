import React, { useContext } from "react"
import { ThemeContext } from "../App"; 

export default function Child(){   
    const Theme = useContext(ThemeContext)
    return (
         <div>
         <h1 className="text-4xl text-pink-950 flex justify-center">Welcome to my React Projects 🎉🎉🎉🎉 </h1>
         <p className="text-4xl flex justify-center">🗓️🧮🪷</p>
        {/* <p className='text-4xl'>{Theme}</p>; */}
    </div>
    )
   
    
}