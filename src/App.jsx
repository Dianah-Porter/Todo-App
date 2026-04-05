import {useEffect, createContext, useRef } from 'react'
import './App.css'
import Todo from './components/todo'
import Counter from './components/counter'
import Child from './components/Child'
import FocusRef from './components/Useref'
import StateReduce from './components/UseReducer'
import MemoHook from './components/UseMemo'
import Callback from './components/UseCallback'

export const ThemeContext = createContext("light");

function App() {
  useEffect(()=> {
    console.log("Components loaded!")
  },[]);

  

  return (
    <ThemeContext.Provider value='dark' >
      {/* <Child/> */}
      <Todo/>
      <Counter />
      <FocusRef/>
      <StateReduce/>
      <MemoHook number={5}/>
      <Callback/>
    </ThemeContext.Provider>

  )
}

export default App;


