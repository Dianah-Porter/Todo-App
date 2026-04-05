import {useEffect, createContext, useRef } from 'react'
import './App.css'
import Todo from './components/todo'
import Counter from './components/counter'
import Child from './components/Child'
import FocusRef from './components/Useref'

export const ThemeContext = createContext("light");

function App() {
  useEffect(()=> {
    console.log("Components loaded!")
  },[]);

  const inputRef = useRef(); //creates ref object 
  
  const focusInput = ()=> {
    inputRef.current.focus();
  };

  return (

    <ThemeContext.Provider value='dark'>
      <Child/>
      <Todo/>
      <Counter />
      <FocusRef/>
    </ThemeContext.Provider>
  )
}

export default App;


