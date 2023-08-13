import React from 'react';
import './TodoFilter.css';

function TodoFilter({changeFilter}) {

    return (
        <div className="todo-filter-wrapper">
            <span>Фильтр</span>
            <select onChange={(e) => changeFilter(e.target.value)}>
                <option value='all'>Все</option>
                <option value="completed">Завершенные</option>
                <option value="notCompleted">Незавершенные</option>
            </select>
        </div>
    );

}

export default TodoFilter