import React from 'react'
import style from "./todolist.module.css"

const ShowCompletedList = ({value,deleteCompletedTodo}) => {
    // console.log(value)
  return (
    <div  key={value.id} className={style.big_div}>
    <div className={style.small_div}>
    <label className={style.container}>
    <input checked={value.isCompleted}
      type="checkbox"
      onChange={(e) => {
      }}
    />
    <span className={style.checkmark}></span>
  </label>
    <h2 className={value.isCompleted?style.striked:""}>{value.value}</h2>
    </div>
    <button className={style.button}
    onClick={()=>{
     deleteCompletedTodo(value.id)
    }} 
    > X</button>
</div>

  )
}

export default ShowCompletedList