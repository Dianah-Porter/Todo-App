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
import NameTransfer from './components/NameTransfer'
import {Routes, Route, Link } from 'react-router-dom'
import CardList from './components/ToggleCards'
import Password from './components/Password'
import Search from './components/Search'

export const ThemeContext = createContext("light");

function Navbar(){
  return (
     <nav className='flex gap-3 text-white bg-blue-800 mb-12 justify-center p-4' >
    <Link to='/' end>Home</Link>
    <Link to='/todo'>Todo</Link>
    <Link to='/togglebutton'>Toggle</Link>
    {/* <Link to='/counters'>Counters</Link> */}
    <Link to='/counter'>Counter</Link>
    <Link to='/list'>List</Link>
    <Link to='/cards'> Cards</Link>
    <Link to='/password'> Password</Link>
    <Link to="/search">Search</Link>
  </nav>
  )
}

function App() {
  useEffect(()=> {
    console.log("Components loaded!")
  },[]);

  return (
    <ThemeContext.Provider value='dark' >
      <Navbar/>
     <Routes>
          <Route path='/' element={<Child/>}/>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/togglebutton' element={<ToggleButtons/>}/>
          <Route path='/counters' element={<Counters />}/>
          <Route path='/counter' element={<Counter />}/>
          <Route path='/List' element={<NameTransfer/>}/>
          <Route path='/cards' element={<CardList/>}/>
          <Route path='/password' element={<Password/>}/>
          <Route path='/search' element={<Search/>}/>
     </Routes>
      
      {/* <FocusRef/>
      <StateReduce/>
      <MemoHook number={5}/>
      <Callback/> */}
    
      {/* <Employees/> */}  
      
      
    </ThemeContext.Provider>

  )
}

export default App;


