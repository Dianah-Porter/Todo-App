import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    return (
        
        <div className="mx-78 p-32 ">

            <h1 className="text-2xl pb-9">Simple Counter</h1>
            <div className="flex gap-6">
                <button className="text-2xl w-12 h-9 bg-blue-600 text-white rounded-sm"
                onClick={()=> setCount(count + 1)}>+</button>
                <p>{count}</p>
                <button className="text-2xl w-12 h-9 bg-blue-600 text-white rounded-sm"
                onClick={()=> setCount(count > 0 ?  count - 1 : count)}>-</button>
            </div>
        </div>
    )
}