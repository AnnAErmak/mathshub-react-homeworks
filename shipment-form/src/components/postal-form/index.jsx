import React from 'react';

function PostalForm() {

    const onSubmitHandler = (e) => {
        e.preventDefault()

    }

    return (<form onSubmit={onSubmitHandler}>
        <div className='sender-wrapper'>
            <label>Отправитель</label>
            <input type='text' placeholder='Имя'/>
            <input type='tel' placeholder='Телефон'/>
            <input type='text' placeholder='Адрес'/>
        </div>
        <div className='addressee-wrapper'>
            <label>Получатель</label>
            <input type='text' placeholder='Имя'/>
            <input type='tel' placeholder='Телефон'/>
            <input type='text' placeholder='Адрес'/>
        </div>
        <div className='departure-type-wrapper'>
            <label htmlFor="departure">Тип отправления</label>
            <select id="departure">
                <option value='Поп'>Поп</option>
                <option value='Рок'>Рок</option>
                <option value='Джаз'>Джаз</option>
            </select>
        </div>
        <input type="number" placeholder="Вес отправления"/>
        <div className="dimensions-wrapper">
            <input type="number" placeholder="Длина"/>
            <input type="number" placeholder="Ширина"/>
            <input type="number" placeholder="Высота"/>
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