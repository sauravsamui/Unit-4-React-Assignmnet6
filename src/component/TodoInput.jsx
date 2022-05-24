import React, { useState } from 'react'
import style from "./todoinput.module.css"
const TodoInput = ({addTodo}) => {
    const[value,setValue] = useState("")
  return (
    <>
        <input className={style.input} value={value} placeholder='Write Something' onChange={(e)=>{
           setValue(e.target.value)
        }} type="text" />

        <button className={style.button} onClick={()=>{
            if(value.length>0){
                addTodo(value)
            }
           setValue("")
        }}>save</button>
    </>
  )
}

export default TodoInput