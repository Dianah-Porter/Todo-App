import React, { useContext } from "react"
import { ThemeContext } from "../App"; 

export default function Child(){   
    const Theme = useContext(ThemeContext)
    return <p className=''>{Theme}</p>;
}