import { useState } from "react";

export default function Password(){
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <form className="flex flex-col gap-4 mx-43">
            <h1 className="text-2xl">Create Password</h1>
            <h2 className="text-gray-500">Enter a secure Password</h2>
            <div className="">
                <input type={showPassword ? "text":"password"}  
                placeholder="Enter your password"
                className="border-2 border-gray-400 w-67 rounded-xl focus:border focus:border-blue-400"
                />
                <button className="bg-blue-800 text-white w-12 rounded-2xl ">{showPassword ? "Hide": "Show"}</button>
            </div>
            <h2 className="font-bold">Password Requirements</h2>
            <div className="flex flex-col text-gray-500">
                
                <label htmlFor=""><input type="checkbox" /> At least 8 characters</label>
                
                <label><input type="checkbox" /> Contains uppercase characters</label>
                <label><input type="checkbox" /> Contains lowercase character</label>
                <label><input type="checkbox" /> Contains a digit</label>
                <label><input type="checkbox" /> Contains a special character</label>
            </div>
            <button className="bg-gray-600 text-white w-32 h-12">Submit</button>
        </form>
    )
}