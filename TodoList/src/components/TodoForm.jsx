import React from 'react'
import { useState } from 'react'
import {useTodo} from '../context/TodoContext'


function Todoform() {
    const [Todo, setTodo]=useState()
    const {addTodo}=useTodo()
    const handleSubmit=()=>{
        addTodo(Date.now(),Todo)
    }
  return (
    <div className='flex h-auto w-full'>
            <input type="text"
            value={Todo}
            placeholder="Enter msg"
            onChange={(e)=>setTodo(e.target.value)}
            className=" border border-black/10 outline-none"/>
            <button onClick={handleSubmit} 
            className="rounded px-2 py-1 bg-green-600 text-white">ClickMe</button>
    </div>
  )
}

export default Todoform