import React, {useContext} from 'react';
import './TodoFilter.css';
import ThemeContext from "../../context/theme-context";

function TodoFilter({changeFilter}) {
    const {isThemeLight} = useContext(ThemeContext)
    return (
        <div className="todo-filter-wrapper dark">
            <span className={!isThemeLight && 'dark'}>Фильтр</span>
            <select  onChange={(e) => changeFilter(e.target.value)}>
                <option value='all'>Все</option>
                <option value="completed">Завершенные</option>
                <option value="notCompleted">Незавершенные</option>
            </select>
        </div>
    );

}

export default TodoFilter