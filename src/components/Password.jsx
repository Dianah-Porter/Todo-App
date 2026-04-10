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
    function hasLowercase(str){
        for(let char of str) {
            if(char >= 'a' && char <= 'z') return true;
        }
        return false;
    }
    function hasDigit(str){
        for(let char of str) {
            if(char >= '0' && char <= '9') return true;
        }
        return false;
    }
    function hasSpecial(str){
        for(let char of str) {
            if(!
                ((char >= 'A' && char <= 'Z') ||
                (char >= 'a' && char <= 'z') ||
                (char >= '0' && char <= '9') )) return true;
        }
        return false;
    }
    const isValid = password.length >= 8 && 
                    hasUppercase(password) &&
                    hasLowercase(password) &&
                    hasDigit(password) &&
                    hasSpecial(password);

    function handleSubmit(e){
        e.preventDefault();
        if(!isValid){
            alert("Your password doesn't meet all the requirements!!");
            return;
        }
        alert("Password created Successfully!!")
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
                onChange={e=> setPassword(e.target.value)}
                />
                <button type="button" className="bg-blue-800 text-white w-12 rounded-2xl"
                onClick={() => setShowPassword(!showPassword)}
                >{showPassword ? "Hide": "Show"}</button>
            </div>
            <h2 className="font-bold">Password Requirements</h2>
            <div className="flex flex-col text-gray-500">
                
                <label><input type="checkbox" checked={password.length >= 8} readOnly/> At least 8 characters</label>
                <label><input type="checkbox" checked={hasUppercase(password)} readOnly/> Contains uppercase characters</label>
                <label><input type="checkbox" checked={hasLowercase(password)} readOnly/> Contains lowercase character</label>
                <label><input type="checkbox" checked={hasDigit(password)} readOnly/> Contains a digit</label>
                <label><input type="checkbox" checked={hasSpecial(password)} readOnly/> Contains a special character</label>
            </div>
            <button disabled={!isValid}
            className={` text-white w-32 h-12 ${isValid ? "bg-blue-600" : "bg-gray-600"}` }
             type="submit">Submit</button>
        </form>
    )
}