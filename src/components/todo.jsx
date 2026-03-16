import TodoItem from "./TodoItem"

function Todo() {
    let paragraphs = ['IAmHere', 'reactjsexample.com', 'A To do app developed using to consolidate your knowledge about React']
  return (
    <div className="flex justify-center flex-col items-center gap-6 mt-20">

      <h1 className="text-8xl text-gray-300 font-semibold">
        todos
      </h1>
      <div className="relative w-125">

        <input
          type="text"
          placeholder="Add todo..."
          className="w-full border border-gray-300 rounded-full p-3 text-gray-700 pr-12 shadow-sm outline-none"
        />

        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-600 text-white w-7 h-7 rounded-full flex items-center justify-center">
          +
        </button>

      </div>
    <div className="w-125 bg-white shadow-md rounded-lg p-4">
        {paragraphs.map((par, index) => (
          <TodoItem key={index} text={par}/>
        ))}

    
    </div>

    

    </div>
  )
}

export default Todo