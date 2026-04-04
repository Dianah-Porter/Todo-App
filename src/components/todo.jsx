//import TodoItem from "./TodoItem"
import { useState } from "react"
function Todo() {
  const [input,setInput] = useState("")
  const [items,setItems] = useState([])
  const [isChecked,setIsChecked] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()
    setItems([...items,
    {text:input,checked:isChecked}
      ])
    setInput("")
     console.log(items)
  }
  const handleChange = (index)=>{
    const newItems = [...items]
    newItems[index].checked = !newItems[index].checked
    setItems(newItems)
  }
  const deleteItem = (index)=>{
    setItems(items.filter((n, i) => index !== i ))
  }



  return (
    <form onSubmit={handleSubmit}  className="flex justify-center flex-col items-center gap-6 mt-20">

      <h1 className="text-8xl text-gray-300 font-semibold">
        todos
      </h1>
      <div className="relative w-125">

        <input
          type="text"
          placeholder="Add todo..."
          className="w-full border border-gray-300 rounded-full p-3 text-gray-700 pr-12 shadow-sm outline-none"
          value={input}
          onChange={e=>setInput(e.target.value)}
        />

        <button className="absolute hover:bg-green-900 right-3 top-1/2 -translate-y-1/2 bg-green-600 text-white w-7 h-7 rounded-full flex items-center justify-center">
          +
        </button>

      </div>
    <div className="w-125 bg-white shadow-md rounded-lg p-4">
        {items.map((par, index) => (
          <div key={index} className={`${par.checked?"line-through": ""} flex items-center justify-between py-2`} >

          <div className="flex items-center gap-3">
            <input type="checkbox" checked ={par.checked} onChange={e=>handleChange(index)} />
            <p>{par.text}</p>
          </div>

          <button className="text-red-500 text-lg" onClick={() => deleteItem(index)}>
            <div className="bg-gray-300 w-12 h-12 rounded-full"><i class="fa-solid fa-trash p-3"></i></div>
          </button>

        </div>
        ))}
       
    </div>

    

    </form>
  )
}

export default Todo