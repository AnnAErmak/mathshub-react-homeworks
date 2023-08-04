import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import SongRequestForm from "./components/SongRequestForm";
import SongList from "./components/SongList";
import SongFilter from "./components/SongFilter";

function App() {
    const DUMMY_SONGS = [
        {
            id: 1,
            name: 'Bohemian Rhapsody',
            artist: 'Queen',
            genre: 'Рок',
        },
        {
            id: 2,
            name: 'Shape of You',
            artist: 'Ed Sheeran',
            genre: 'Поп',
        },
        {
            id: 3,
            name: 'Uptown Funk',
            artist: 'Mark Ronson ft. Bruno Mars',
            genre: 'Поп',
        },
        {
            id: 4,
            name: 'Rolling in the Deep',
            artist: 'Adele',
            genre: 'Блюз',
        },
        {
            id: 5,
            name: 'Blinding Lights',
            artist: 'The Weeknd',
            genre: 'Поп',
        },
    ];

    const [songs, setSongs] = useState(DUMMY_SONGS)
    const [filterSong, setFilterSong] = useState([])
    const [isFilter, setIsFilter] = useState(false)

    const addSongDataHandler = (song) => {

        const newSong = {
            ...song,
            id: Math.random()
        }

        setSongs(prevSongs => [newSong, ...prevSongs])
    }

    const deleteLastEntry = () => {
        setSongs(prevSongs => prevSongs.slice(0, prevSongs.length - 1))
    }

    const filterSongHandler = (filterValue) => {
      if(filterValue === ''){
        setIsFilter(false)
        setFilterSong([])
      }else{
        const filterData = songs.filter(song => song.genre === filterValue)
        setFilterSong(filterData)
        setIsFilter(true)
      }

    }

    return (
        <div className='App'>
            <Header/>
            <div className='container'>
                <SongRequestForm onSaveSong={addSongDataHandler}/>
                <SongFilter onChangeFilter={filterSongHandler}/>

                {isFilter && filterSong.length > 0 && <SongList songs={filterSong}/>}

                {isFilter && filterSong.length === 0 && `Песен с таким жанром не найдено!`}

                {!isFilter &&
                    (
                        <>
                            <SongList songs={songs}/>
                            <button type="button" onClick={deleteLastEntry}> Удалить последню запись</button>
                        </>
                    )
                }

            </div>
        </div>
    );
}

export default App;
