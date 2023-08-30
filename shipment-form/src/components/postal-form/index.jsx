import React from 'react';
import './style.css'

function PostalForm() {

    const onSubmitHandler = (e) => {
        e.preventDefault()

    }

    return (<form className="postal-form" onSubmit={onSubmitHandler}>
        <h2>Форма почтового отправления</h2>
        <div className='wrapper'>
            <label>Отправитель</label>
            <div className="input-wrapper">
                <input type='text' placeholder='Имя'/>
                <input type='tel' placeholder='Телефон'/>
                <input type='text' placeholder='Адрес'/>
            </div>
        </div>
        <div className='wrapper'>
            <label>Получатель</label>
            <div className="input-wrapper">
                <input type='text' placeholder='Имя'/>
                <input type='tel' placeholder='Телефон'/>
                <input type='text' placeholder='Адрес'/>
            </div>
        </div>
        <div className='wrapper'>
            <label htmlFor="departure">Тип отправления</label>
            <select id="departure">
                <option value='Поп'>Обычное</option>
                <option value='Рок'>Заказное</option>
                <option value='Джаз'>Срочное</option>
            </select>
        </div>
        <div className="wrapper">
            <label>Вес отправления (кг)</label>
            <input className="package-weight" type="number" placeholder="Вес отправления"/>
        </div>
        <div className="wrapper">
            <label>Габариты (см)</label>
            <div className="input-wrapper">
                <input type="number" placeholder="Длина"/>
                <input type="number" placeholder="Ширина"/>
                <input type="number" placeholder="Высота"/>
            </div>
        </div>
        <label> Страхование
            <input type="checkbox"/>
        </label>
        <div className="btn-wrapper">
            <button type="submit">Отправить</button>
        </div>
    </form>);
}

export default PostalForm