import React from "react";
import Todo from './Todo'
import "./TodoList.css";

function TodoList ({todos, toggleTodo}){
    return (
        <div className="todoListContainer">
              {!todos.length
                ? <h2>Нет ни одной задачи</h2>
                : todos.map((todo) => <Todo key = {todo.id} todo ={todo} toggleTodo={toggleTodo}/>)
              }
        </div>
    )
}

export default TodoList