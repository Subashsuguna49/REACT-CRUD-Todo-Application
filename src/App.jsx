import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import  './App.css'

const App = () => {

  const [todos,setTodos]= useState([])
  const [filters,setFilter] =useState("All")


  const addtodo=(todoName,todoDesc)=>{
  
   const arr =[...todos,{id:Date.now(),todoname:todoName,tododesc:todoDesc,status:"Not Completed"}]
    setTodos(arr)
  }

 
  const updateStatus = (todoStatus,todoId)=>

    {
      const arr =todos.map((todo)=>(todo.id === todoId ?  {...todo, status: todoStatus}: todo))
      setTodos(arr)
    }


  const deleteTodo = (TodoId)=>{

    const arr = todos.filter((todo)=>(todo.id !== TodoId))
    setTodos(arr)


  }

  const editTodo = (updateTodoName,updateTodoDesc,todoId) =>{

    const arr  = todos.map((todo)=>(todo.id === todoId ? {...todo,todoname:updateTodoName,tododesc:updateTodoDesc } : todo))
    setTodos(arr)


  }


    
  const filterTodo = todos.filter((todo)=>{
    
    if (filters === "All")  return true;
    return todo.status === filters;

  })

  console.log("filter:",filterTodo)




    return (
      <div className="container">

       

        <Header addtodo={addtodo}/>

        <Main todos={filterTodo}
        todoStatus={updateStatus}
        deleteTodo = {deleteTodo}
        editTodo={editTodo}

        filter={filters}
        setFilter={setFilter}


        />

      </div>
    )
}

export default App