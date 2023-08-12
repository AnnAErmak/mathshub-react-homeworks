import React from 'react';
import './Todo.css';


function Todo({todo, toggleTodo}) {
    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div
            className={` todo ${todo.isCompleted ? 'completedTodo' : ''}`}
            onClick={() => toggleTodo(todo.id)            }
        >
            <div className="todo-text">{todo.text}</div>
        </div>
    );
}

export default Todo;