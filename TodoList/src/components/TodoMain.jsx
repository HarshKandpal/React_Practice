import React from 'react'
import {useTodo} from '../context/TodoContext'
function TodoMain() {
       const {Todo,editTodo,deleteTodo,toggleTodo}=useTodo()
       
  return (
    <div className='bg-orange-400'>
        {Todo.map((ele)=>(<div>
            {ele.Todomsg}
        </div>))}
        
    </div>
  )
}

export default TodoMain