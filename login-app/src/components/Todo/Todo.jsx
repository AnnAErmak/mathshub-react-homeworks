import React, {useContext} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import './Todo.css';
import ThemeContext from "../../context/theme-context";


function Todo({todo, toggleTodo, deleteTodo}) {
    const {isThemeLight} = useContext(ThemeContext)

    return (
        <div
            className={` todo ${!isThemeLight ? 'dark' : ''} ${todo.isCompleted ? 'completedTodo' : ''}`}
        >
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div className="todo-text" onClick={() => toggleTodo(todo.id)}>{todo.text}</div>
            <AiOutlineClose className='deleteIcon' onClick={() => { deleteTodo(todo.id)}}/>
        </div>
    );
}

export default Todo;