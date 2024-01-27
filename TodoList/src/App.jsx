import { useState } from 'react'
import './App.css'
import Todoform from './components/Todoform'
import TodoMain from './components/TodoMain'
import TodoContext from './context/TodoContext'


function App() {
     const [Todo,setTodo]=useState([])

     const addTodo=(id,Todomsg,completed=false)=>{
          setTodo((prev)=>([...prev,{id,Todomsg,completed}]
          ))
     }
     const editTodo=(id,Todomsg)=>{
          setTodo((prev)=>(prev.map((item)=>(item.id===id? Todomsg:item))))
     }
     const deleteTodo=(id)=>{
        setTodo((prev)=>(prev.filter((item)=>(item.id!=id))))
     }
     const toggleTodo=(id)=>{
      setTodo((prev)=>(prev.map((item)=>(item.id===id? !item.completed:item))))
     }
  return (
    <>
    <TodoContext.Provider value={{Todo,addTodo,editTodo,deleteTodo,toggleTodo}}>
      <div className='bg-color-orange'>
          <h1 className='font-bold text-orange-500'>Manage Your todo</h1>
         <div className='py-4'>
          <Todoform/>
          <TodoMain/>
         </div>
      </div>
    </TodoContext.Provider>
    </>
  )
}

export default App
