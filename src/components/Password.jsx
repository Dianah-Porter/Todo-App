import { useState } from "react";

export default function Password(){
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    function hasUppercase(str){
        for(let char of str) {
            if(char >= 'A' && char <= 'Z') return true;
        }
        return false;
    }

    function handleSubmit(e){
        e.preventdefault();
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mx-43">
            <h1 className="text-2xl">Create Password</h1>
            <h2 className="text-gray-500">Enter a secure Password</h2>
            <div className="">
                <input type={showPassword ? "text":"password"} 
                value={password} 
                placeholder="Enter your password"
                className="border-2 border-gray-400 w-67 rounded-xl focus:border focus:border-blue-400"
                />
                <button className="bg-blue-800 text-white w-12 rounded-2xl"
                onClick={() => setShowPassword(!showPassword)}
                >{showPassword ? "Hide": "Show"}</button>
            </div>
            <h2 className="font-bold">Password Requirements</h2>
            <div className="flex flex-col text-gray-500">
                
                <label><input type="checkbox" checked={password.length > 8} readOnly/> At least 8 characters</label>
                <label><input type="checkbox" checked={hasUppercase(password)} readOnly/> Contains uppercase characters</label>
                <label><input type="checkbox" checked={hasLowercase(password)} readOnly/> Contains lowercase character</label>
                <label><input type="checkbox" checked={hasDigit(password)} readOnly/> Contains a digit</label>
                <label><input type="checkbox" checked={hasSpecial(password)} readOnly/> Contains a special character</label>
            </div>
            <button className="bg-gray-600 text-white w-32 h-12">Submit</button>
        </form>
    )
}