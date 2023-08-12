import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import './Todo.css';


function Todo({todo, toggleTodo, deleteTodo}) {
    return (
        <div
            className={` todo ${todo.isCompleted ? 'completedTodo' : ''}`}
        >
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div className="todo-text" onClick={() => toggleTodo(todo.id)}>{todo.text}</div>
            <AiOutlineClose className='deleteIcon' onClick={() => {
                deleteTodo(todo.id)
            }}/>
        </div>
    );
}

export default Todo;