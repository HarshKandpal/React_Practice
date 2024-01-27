import React from 'react'
import { useState } from 'react'
import {useTodo} from '../context/TodoContext'


function TodoForm() {
    const [Todo, setTodo]=useState("")
    const {addTodo}=useTodo()
    const handleSubmit=()=>{
      e.preventDefault()

      if (!todo) return
        addTodo(Date.now(),Todo)
        setTodo("")
    }
  return (
    <>
    <div className='flex justify-center'>
            <input type="text"
            value={Todo}
            placeholder="Enter msg"
            onChange={(e)=>setTodo(e.target.value)}
            className=" border border-black/10 outline-none"/>
            <button onClick={handleSubmit} 
            className="rounded px-2 py-1 bg-orange-600 text-white">Click</button>
    </div>
    </>
  )
}

export default TodoForm