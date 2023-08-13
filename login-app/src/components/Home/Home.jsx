import React, {useEffect, useState, useContext} from 'react';
import Card from '../UI/Card/Card';
import './Home.css';
import TodoForm from "../Todo/TodoForm";
import TodoList from "../Todo/TodoList";
import ThemeContext from "../../context/theme-context";

function Home() {
    const [todos, setTodos] = useState([])
    const contextData = useContext(ThemeContext)

    useEffect(() => {
        let storageTodos
        if (localStorage.getItem('todos') !== null)
            storageTodos = JSON.parse(localStorage.getItem('todos'))
        setTodos(prevTodos => [...storageTodos, ...prevTodos]);

        if (localStorage.getItem('isThemeLight') === 'true') {
            contextData.onChangeTheme(true)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    useEffect(() => {
        localStorage.setItem('isThemeLight', contextData.isThemeLight.toString())
    }, [contextData.isThemeLight])

    const addTodoHandler = (text) => {
        const newTodo = {
            text,
            isCompleted: false,
            id: Math.random(),
        }
        setTodos(prevTodos => [newTodo, ...prevTodos])
    }
    const toggleTodoHandler = (id) => {
        setTodos(todos.map(todo => todo.id === id
            ? {...todo, isCompleted: !todo.isCompleted}
            : {...todo}))
    }
    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <Card className='home'>
            <TodoForm addTodo={addTodoHandler}/>
            <TodoList todos={todos} toggleTodo={toggleTodoHandler} deleteTodo={deleteTodoHandler}/>
        </Card>
    );
}

export default Home;
