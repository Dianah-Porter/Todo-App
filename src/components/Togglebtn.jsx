import { useState } from "react";

export default function ToggleButtons(){
    const buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4' ];
    const [activeButtons, setActiveButtons ] = useState([]);

    const ToggleButtons = (index)=> {
        if(activeButtons.includes(index)) {
            setActiveButtons(activeButtons.filter(i => i !== index));
        }
        else {
            setActiveButtons([...activeButtons, index])
        }
    }

    return (
        <div className="flex gap-3 p-4 mx-43 pt-12">
            { buttons.map((button, index) => {
               return (
                 <button key={index} 
                 className={`w-18 h-12 text-white ${
            activeButtons.includes(index) ? "bg-gray-500" : "bg-blue-700"
          }`}
                 onClick={() => ToggleButtons(index)}
                 >{button}</button>
                )
            })
            }  
        </div>
    )
}