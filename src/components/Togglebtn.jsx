import { useState } from "react";

export default function ToggleButtons(){
    const buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4' ];
    const [activeIndex, setActiveIndex ] = useState(null);

    const changeColor = (index)=> {
        setActiveIndex(index);
    }

    return (
        <div className="flex gap-3 p-4 mx-43 pt-12">
            { buttons.map((button, index) => {
               return (
                 <button key={index} 
                 className={activeIndex === index ? "w-18 h-12 bg-gray-500 text-white rounded-2xl":"w-18 h-12 bg-pink-500 text-white rounded-2xl"}
                 onClick={() => changeColor(index)}
                 >{button}</button>
                )
            })
            }  
        </div>
    )
}