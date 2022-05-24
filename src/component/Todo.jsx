import React, { useState } from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import style from "./todoinput.module.css"
import CompletedTask from './CompletedTask';

const Todo = () => {
    const [todo,setTodo] = useState([]);
    const [completedTask,setCompletedTask] = useState([]);
    const [pageNo,setPageNo] = useState(1)
   
React.useEffect(() => {
   
fetch(`http://localhost:3004/todos?_page=${pageNo}&_limit=4`)
  .then((res)=>(
    res.json()
  ))
  .then((res)=>(
   // console.log([...res])
    setTodo([...res])
  ))
}, [pageNo])

  let addcompletedTodo =(Value)=>{
   let prevValue= completedTask.filter((el)=>(el.value===Value.value
   ))
  
   if(prevValue.length>0) {
      return
    }else{
      
      setCompletedTask(
        [
         ...completedTask,Value
        ]
      )
    }
    
  }
    let addTodo=(newTodo)=>{
      fetch("http://localhost:3004/todos?_page=1&_limit=4",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({
          value:newTodo,
          isCompleted:false
        })
        
      }).then((res)=>(res.json()))
      .then((res)=>(
        setTodo([
          ...todo,res
         ])
      ))
    }
    let deleteTodo=(value)=>{
      fetch("http://localhost:3004/todos/"+value,{
        method:"DELETE",
      }).then((res)=>(res.json()))
      .then((res)=>(
        fetch(`http://localhost:3004/todos?_page=${pageNo}&_limit=4`)
        .then((res)=>(
          res.json()
        ))
        .then((res)=>(
         // console.log([...res])
          setTodo(res)
        ))
      ))
    }
    let deleteCompletedTodo=(id)=>{
      setCompletedTask(completedTask.filter((task)=>(task.id!==id)))
      
  }
  let total_task=todo.length
  return (
      
    <div className={style.outer_div}>
        <h1 >Todo</h1>
          <h3>Task in List: <span>{total_task}</span></h3>
        <TodoInput  addTodo={addTodo} />
        <TodoList todo={todo} deleteTodo={deleteTodo} addcompletedTodo={addcompletedTodo}/>
        <div className='button_div'>
          <button style={{pointerEvents:pageNo==1?"none":"auto"}} onClick={()=>{
            setPageNo(1)
        }}className="next">1</button>
        <button style={{pointerEvents:pageNo==2?"none":"auto"}} onClick={()=>{
           setPageNo(2)
        }}className="next">2</button>
        <button style={{pointerEvents:pageNo==3?"none":"auto"}} onClick={()=>{
         setPageNo(3)
        }}className="next">3</button>
        <button style={{pointerEvents:pageNo==4?"none":"auto"}} onClick={()=>{
         setPageNo(4)
        }}className="next">4</button>
        </div>
        <CompletedTask completedTask={completedTask} deleteCompletedTodo={deleteCompletedTodo}/>
        <br/>
         
        
    </div>
  )
}

export default Todo