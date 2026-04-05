import { useRef } from "react";

export default function FocusRef(){
    const inputRef = useRef();
    const focusInput = ()=> {
        inputRef.current.focus();
    };
    return (
        <div className='flex gap-2'>
        <input ref={inputRef} type="text" className='border border-blue-600 rounded-2xl' />
        <button onClick={focusInput} className='bg-blue-500 text-white rounded-2xl p-2'>Focus</button>
      </div>
    )
}