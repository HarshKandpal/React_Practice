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
      <div>
      <h1>hello</h1>
         <div>
          <Todoform/>
          <TodoMain/>
         </div>
      </div>
    </TodoContext.Provider>
    </>
  )
}

export default App
