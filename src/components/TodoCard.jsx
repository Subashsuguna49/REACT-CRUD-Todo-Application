import React, { useState } from 'react'

const TodoCard = ({todo,todoStatus,deleteTodo,editTodo}) => {

  const [isEdit,setIsEdit] = useState(false) ;

  const [todoName,setTodoName] = useState(todo.todoname);
  const [todoDesc,setTodoDesc] = useState(todo.tododesc);


  const handleSubmit =()=>{

    
    editTodo(todoName,todoDesc,todo.id)
    setIsEdit(false);


  }



  return (
    <div className="Todo-card">

    
      {
        isEdit ? (
        <>
        
          <h4>Name:</h4>

          <input type="text" 
          value={todoName}
          onChange={(event)=>(setTodoName(event.target.value))} />

          <p>description:</p>

          <input type="text" 
          value={todoDesc}
          onChange={(event)=>(setTodoDesc(event.target.value))}/>
     

        </>
        ):(
        <>
          
            <h4>Name: {todo.todoname}</h4>
            <p>description: {todo.tododesc}</p>
       
        </>
        )
      }

      <div className='status-filter'>
        <label htmlFor="">status: </label>

        <select  value={todo.status} onChange={(event)=>(todoStatus(event.target.value,todo.id))}>

          <option className='ok' value="Completed">Completed</option>
          <option  className='not-ok' value="Not Completed">Not-Completed</option>
          

        </select>
        {
          isEdit && <button className='upd-btn' onClick={handleSubmit}>update</button>
        }

      </div>
     


      <div className='buttons'>
        <button  className="edit" onClick={()=>(setIsEdit(true))}>Edit</button>
        <button  className="dlt" onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
      </div>


    </div>
  )
}

export default TodoCard