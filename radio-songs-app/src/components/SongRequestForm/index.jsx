import React, {useState} from "react";
import "./style.css";

function SongRequestForm({onSaveSong}) {
    const [dataSong, setDataSong] = useState({
        name: '',
        artist: '',
        genre: 'Поп',
    })

    const submitHandler = (e) => {
        e.preventDefault()
        onSaveSong(dataSong)
        setDataSong({
            name: '',
            artist: '',
            genre: 'Поп',
        })
    }

    const onChangeInputHandler = (value, fieldName) => {
        setDataSong(prevState => ({...prevState, [fieldName]: value}))
    }

    return (
        <form className='song-request-form' onSubmit={submitHandler}>
            <input type='text' placeholder='Название песни' value={dataSong.name} onChange={(e) =>onChangeInputHandler(e.target.value, 'name')} />
            <input type='text' placeholder='Исполнитель' value={dataSong.artist} onChange={(e) =>onChangeInputHandler(e.target.value, 'artist')}/>
            <select value={dataSong.genre} onChange={(e) =>onChangeInputHandler(e.target.value, 'genre')}>
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
            <button type='submit'>Отправить</button>
        </form>
    );
}

export default SongRequestForm