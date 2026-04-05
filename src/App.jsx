import React, {useEffect, useContext } from 'react'

import './App.css'
import Todo from './components/todo'
import Counter from './components/counter'

const ThemeContext = React.createContext("light");

function App() {
  useEffect(()=> {
    console.log("Components loaded!")
  },[]);

  return (
    <>
      <Todo/>
      <Counter/>
      <h1>Hello </h1>
    </>
  )
}

export default App;
