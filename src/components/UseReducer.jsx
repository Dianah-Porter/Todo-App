import { useReducer } from "react";

const reducer = (state, action)=> {
    if(action === "increment") return state + 1;
    else if(action === "decrement") return state - 1;
    return state;
}

export default function StateReduce(){
    const [count, dispatch ] = useReducer(reducer, 0);
    return (
        <div className="mx-43">
            <h1 className="text-2xl p-4">UseReducer</h1>
            <div className="flex  gap-4">
               <button onClick={()=> dispatch("decrement") } className="text-2xl w-12 h-9 bg-blue-600 text-white rounded-sm">-</button>
            <p>{count}</p>
            <button onClick={()=> dispatch("increment") } className="text-2xl w-12 h-9 bg-blue-600 text-white rounded-sm">+</button>
            </div>
            
        </div>
    )
}