import React from 'react'

import style from "./todolist.module.css"

const TodoItems = ({value,deleteTodo,addcompletedTodo}) => {
  const [isCompleted,setIsCompleted] = React.useState(value.isCompleted)
    function CompletedTask(e){
      setIsCompleted(e.target.checked);
      value.isCompleted=true;
      addcompletedTodo(value)
     // deleteTodo(value.id)
    }
  return (
    <>
    <div  key={value.id} className={style.big_div}>
    <div className={style.small_div}>
    <label className={style.container}>
    <input checked={isCompleted}
      type="checkbox"
      onChange={(e) => {
       CompletedTask(e)
      }}
    />
    <span className={style.checkmark}></span>
  </label>
    <h2 className={isCompleted?style.striked:""}>{value.value}</h2>
    </div>
    <button className={style.button}
    onClick={()=>{
     deleteTodo(value.id)
    }} 
    > X</button>
</div>


   </>
  )
 
}

export default TodoItems