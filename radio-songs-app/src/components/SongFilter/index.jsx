import React from 'react';
import "./style.css"


function SongFilter({onChangeFilter}) {

    const onChangeSelectHandler = (value) =>{
        onChangeFilter(value)
    }

    return (
        <div className="song-filter-wrapper">
            <span>Фильтр</span>
            <select onChange={(e) =>onChangeSelectHandler(e.target.value)}>
                <option value=''>Выберите жанр</option>
                <option value='Поп'>Поп</option>
                <option value='Рок'>Рок</option>
                <option value='Джаз'>Джаз</option>
                <option value='Блюз'>Блюз</option>
                <option value='Рэп'>Рэп</option>
                <option value='Шансон'>Шансон</option>
                <option value='Электроника'>Электроника</option>
                <option value='Кантри'>Кантри</option>
                <option value='Регги'>Регги</option>
                <option value='Фолк'>Фолк</option>
                <option value='Классика'>Классика</option>
            </select>
        </div>
    );
}

export default SongFilter