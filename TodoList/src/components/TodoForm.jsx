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
    <div>
        <div>
            <input type="text"
            value={Todo}
            placeholder="Enter msg"
            onChange={(e)=>setTodo(e.target.value)}/>
        </div>
        <div>
            <button onClick={handleSubmit}>ClickMe</button>
        </div>
    </div>
  )
}

export default Todoform