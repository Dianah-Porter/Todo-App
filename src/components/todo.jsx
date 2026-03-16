function Todo() {
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

    
      <div className="w-125 bg-white text-gray-700 shadow-md rounded-lg p-4">

        {/* Todo Item 1 */}
        <div className="flex items-center justify-between py-2 border-b border-gray-300">

          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <p>IAmHere</p>
          </div>

          <button className="text-red-500 text-lg">
            <div className="bg-gray-300 w-12 h-12 rounded-full"><i class="fa-solid fa-trash p-3"></i></div>
          </button>

        </div>

        <div className="flex items-center justify-between py-2 border-b border-gray-300">

          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <p>reactjsexample.com</p>
          </div>

          <button className="text-red-500 text-lg" >
            <div className="bg-gray-300 w-12 h-12 rounded-full"><i class="fa-solid fa-trash p-3"></i></div>
            
          </button>

        </div>

      
        <div className="flex items-center justify-between py-2">

          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <p>A To do app developed using to consolidate your knowledge about React</p>
          </div>

          <button className="text-red-500 text-lg">
            <div className="bg-gray-300 w-12 h-12 rounded-full"><i class="fa-solid fa-trash p-3"></i></div>
          </button>

        </div>

      </div>

    </div>
  )
}

export default Todo