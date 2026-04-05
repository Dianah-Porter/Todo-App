import { useCallback } from "react";

export default function Callback(){
    const handleClick = useCallback(()=> {
        console.log('clicked!');
    }, []);
    return <button onClick={handleClick} className="w-12 h-9 bg-blue-600 text-white rounded-sm mx-43">Click</button>
}