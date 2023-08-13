import React, {useEffect, useState} from "react";
import Todo from './Todo'
import "./TodoList.css";
import TodoFilter from "./TodoFilter";


function TodoList({todos, toggleTodo, deleteTodo}) {
    const [filtered, setFiltered] = useState(todos)

    useEffect(() => {
        setFiltered(todos)
    }, [todos])

    const changeFilterHandler = (value) => {
        switch (value) {
            case 'completed':
                setFiltered([...todos].filter(todo => todo.isCompleted))
                break
            case 'notCompleted':
                setFiltered([...todos].filter(todo => !todo.isCompleted))
                break
            default:
                setFiltered(todos)
        }
    }

    return (
        <>
            <TodoFilter changeFilter={changeFilterHandler}/>
            <div className="todoListContainer">
                {!filtered.length
                    ? <h2>Нет ни одной задачи</h2>
                    : filtered.map((todo) => <Todo key={todo.id} todo={todo}
                                                   toggleTodo={toggleTodo}
                                                   deleteTodo={deleteTodo}
                    />)
                }
            </div>
        </>
    )
}

export default TodoList