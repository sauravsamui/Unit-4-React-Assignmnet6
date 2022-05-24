import React, { useState } from 'react'
import ShowCompletedList from './ShowCompletedList'
import style from "./completedButton.module.css"
const CompletedTask = ({completedTask,deleteCompletedTodo}) => {
    const [showCOmpletedTodo,setShowCompletedTodo] = useState(false)
   
  return (
      <> 
  
      <h3>Completed Todo: <span>{completedTask.length}</span></h3>
     <button className={style.completed}
     onClick={()=>{
    
        setShowCompletedTodo(!showCOmpletedTodo)
       
    
     }}
      >{!showCOmpletedTodo?"Show Completed Todos":"Don't Show"}</button>

      {
          showCOmpletedTodo?completedTask.map((completed)=>{
            return <ShowCompletedList key={completed.id} value={completed} deleteCompletedTodo={deleteCompletedTodo}/>
          }):""
      }
      
      
      
      </>
   
  )
}

export default CompletedTask