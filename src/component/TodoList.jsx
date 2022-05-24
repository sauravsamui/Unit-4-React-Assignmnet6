import React from "react";
import TodoItems from "./TodoItems";

const TodoList = ({ todo, deleteTodo,addcompletedTodo }) => {
   
  return (
    <>
     {todo.map((el) => (
       <TodoItems key={el.id} value={el} deleteTodo={deleteTodo} addcompletedTodo={addcompletedTodo}/>
      ))}
    </>
     
   
  );
};

export default TodoList;
