import React,{useContext} from "react";


const TodoContext=React.createContext({
    Todo:[{
        id:"1",
        Todomsg:"Hello",
        completed:false
    }]
    ,
    addTodo:(id,Todomsg)=>{

    },
    editTodo:(id,Todomsg)=>{

    },
    deleteTodo:(id)=>{

    },
    toggleTodo:(id)=>{

    }
    
})
export const useTodo=()=>{
    return useContext(TodoContext) 
}
export default TodoContext

