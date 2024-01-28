import React from 'react'
import { useState } from 'react'
import {useTodo} from '../context/TodoContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

function TodoMain() {
       //const [Toggle,setToggle]=useState(false)
      //  const [todoMsg,setTodomsg]=useState(Todo)
       const {Todo,editTodo,deleteTodo,toggleTodo}=useTodo()

    
  return (
    <div className='w-full flex flex-col mt-3 items-center'>
        {Todo.map((ele)=>(<div key={ele.id} 
        className={`px-3 flex justify-between rounded-lg w-1/2 border mb-1 
        hover:scale-105 transition-transform ${ele.completed
        ?"bg-green-200":"bg-white"}`}>
         
        <input
          className=''
          type="checkbox"
          checked={ele.completed}
          onChange={()=>toggleTodo(ele.id)}
          />
          <input type="text"
          value={ele.Todomsg}
          className={`w-full focus:border-transparent focus:outline-none px-3 ${ele.completed
            ?"bg-green-200":"bg-white"}`}
            readOnly
          />
          <button className='ml-3'><FontAwesomeIcon icon={faPen} /></button>
          <button className='ml-3'><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      ))}
        
    </div>
  )
}

export default TodoMain