import React from 'react'
import { useState } from 'react'
import {useTodo} from '../context/TodoContext'


function TodoForm() {
    const [Todo, setTodo]=useState("")
    const {addTodo}=useTodo()
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(!Todo)
        return false
        addTodo(Date.now(),Todo)
        setTodo("")
    }
  return (
    <>
    <div className='w-full flex justify-center mt-10'>
            <input type="text"
            value={Todo}
            placeholder="Write todo..."
            onChange={(e)=>setTodo(e.target.value)}
            className="w-6/12 ml-28 px-3 rounded-lg border mr-2  focus:border-gray-400 focus:outline-none"/>
            <button onClick={handleSubmit} 
            className=" w-1/12 bg-green-500 rounded-lg px-2 py-1 text-white hover:bg-green-600">Click</button>
    </div>
    </>
  )
}

export default TodoForm