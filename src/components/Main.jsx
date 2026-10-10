import React from 'react'
import TodoCard from './TodoCard'

const Main = ({todos ,todoStatus,filter,setFilter,deleteTodo,editTodo}) => {
  return (
    <>
    <div className='main-container'>
       
            <div className='navbar'>

                 <div className='my-todos'>
                    <p>my todos</p>
                </div>

                <div className='status-filter'>
                    <label htmlFor="">status filter:</label>

                    <select  value={filter} onChange={(event)=>(setFilter(event.target.value))}>
                        <option value="All">All</option>
                        <option  className="completed-tag" value="Completed">Completed</option>
                        <option  className="not-completed-tag" value="Not Completed">not Completed</option>
                    </select>

                </div>
                
            </div>
               

               {
                todos.length === 0 ? (<h1>welcome  todo application</h1>) :

                <div className="main">

                                {
                                    todos.map(todo =>(<TodoCard  key={todo.id} todo={todo}

                                    todoStatus={todoStatus}

                                    deleteTodo={deleteTodo}

                                    editTodo={editTodo}
                            
                            />))
                        }

                </div>
                }

     
    </div>
    </>

  )
}

export default Main