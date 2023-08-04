import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import SongRequestForm from "./components/SongRequestForm";
import SongList from "./components/SongList";

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
  const addSongDataHandler = (song) =>{

    const newSong = {
      ...song,
      id: Math.random()
    }
    setSongs(prevSongs =>[newSong, ...prevSongs])
  }

  return (
      <div className='App'>
        <Header />
        <div className='container'>
          <SongRequestForm onSaveSong={addSongDataHandler} />
          <SongList songs={songs} />
        </div>
      </div>
  );
}

export default App;
