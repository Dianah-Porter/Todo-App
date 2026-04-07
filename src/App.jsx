import {useEffect, createContext, useRef } from 'react'
import './App.css'
import Todo from './components/Todo'
import Counter from './components/counter'
import Child from './components/Child'
import FocusRef from './components/Useref'
import StateReduce from './components/UseReducer'
import MemoHook from './components/UseMemo'
import Callback from './components/UseCallback'
import Counters from './components/counter'
import Employees from './components/Customhook'
import ToggleButtons from './components/Togglebtn'

export const ThemeContext = createContext("light");

function App() {
  useEffect(()=> {
    console.log("Components loaded!")
  },[]);

  

  return (
    <ThemeContext.Provider value='dark' >
      {/* <Child/> */}
      <Todo/>
      <Counters />
      <FocusRef/>
      <StateReduce/>
      <MemoHook number={5}/>
      <Callback/>
      <Counter/>
      {/* <Employees/> */}
      <ToggleButtons/>
    </ThemeContext.Provider>

  )
}

export default App;


