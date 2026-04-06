import { useReducer } from "react";

// const reducer = (state, action)=> {
//     if(action === "increment") return state + 1;
//     else if(action === "decrement") return state - 1;
//     return state;
// }

// export default function StateReduce(){
//     const [count, dispatch ] = useReducer(reducer, 0);
//     return (
//         <div className="mx-43">
//             <h1 className="text-2xl p-4">UseReducer</h1>
//             <div className="flex  gap-4">
//                <button onClick={()=> dispatch("decrement") } className="text-2xl w-12 h-9 bg-blue-600 text-white rounded-sm">-</button>
//             <p>{count}</p>
//             <button onClick={()=> dispatch("increment") } className="text-2xl w-12 h-9 bg-blue-600 text-white rounded-sm">+</button>
//             </div>
            
//         </div>
//     )
// }

const reduced = (state, action) => {
    if(action === 'increment') return state + 1;
    else if(action === 'decrement') return  state > 0 ? state - 1 : 0;
    return state;
}
export default function Counters(){
    const [count, dispatch] = useReducer(reduced, 0);
    return (
        <div>
            <button className="bg-yellow-500 text-pink-700" onClick={() => dispatch('increment')}>increment</button>
            <p>{count}</p>
            <button className="bg-orange-500 text-pink-700" onClick={() => dispatch('decrement')}>Decrement</button>
        </div>
    )
}