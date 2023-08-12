import React, {useState} from "react";
import Button from "../UI/Button/Button";
import './TodoForm.css'

function TodoForm({addTodo}) {

    const [textTask, setTextTask] = useState('')

    const onSubmitHandler = (event) => {
        event.preventDefault()
        addTodo(textTask)
        setTextTask('')
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler} className='todoFormContainer'>
                <input
                    onChange={(event) => setTextTask(event.target.value)}
                    value={textTask}
                    placeholder="Напишите новую задачу"
                />
                <Button type="submit" title="Submit">Добавить</Button>
            </form>
        </div>
    )
}

export default TodoForm