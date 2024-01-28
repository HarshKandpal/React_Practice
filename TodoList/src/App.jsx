import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todoform'
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
      setTodo((prev)=>(prev.map((item)=>(item.id===id? {...item,completed:!item.completed}:item))))
     }
  return (
    <>
    <TodoContext.Provider value={{Todo,addTodo,editTodo,deleteTodo,toggleTodo}}>

        <div className='w-full flex flex-col items-center py-5'>
         <h1 className='font-bold pt-4 mb-3'>Manage Your todo</h1>
          <TodoForm/>
          <TodoMain/>
          </div>
          {/* <div className='mt-3'>
          <TodoMain/>
          </div> */}
         
    </TodoContext.Provider>
    </>
  )
}

export default App
