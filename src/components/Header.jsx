import React, { useState } from 'react'

const Header = ({addtodo}) => {

  const [todoName,setTodoName] = useState("")
  const [todoDesc,setTodoDesc] = useState("")

  const handleSubmit = ()=>{
    addtodo( todoName,todoDesc);
    setTodoName("");
    setTodoDesc("");
    
  }

  

  return (
    <div className='header'>

         <h1>Todo</h1>
    
        <input type="text"
         value={todoName} 
         placeholder='task name' 
         onChange={(event)=>(setTodoName(event.target.value))}/>

        <input type="text"
        value={todoDesc}
        placeholder='task description' 
        onChange={(event)=>(setTodoDesc(event.target.value))} />

        <button onClick={ handleSubmit}>Add todo</button>

    </div>
  )
}

export default Header