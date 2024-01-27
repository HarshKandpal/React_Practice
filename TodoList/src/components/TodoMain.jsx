import React from 'react'
import {useTodo} from '../context/TodoContext'
function TodoMain() {
       const {Todo,editTodo,deleteTodo,toggleTodo}=useTodo()
       
  return (
    <div className='flex justify-center bg-orange-400'>
        {Todo.map((ele)=>(<div key={ele.id}>
            {ele.Todomsg}
        </div>))}
        
    </div>
  )
}

export default TodoMain