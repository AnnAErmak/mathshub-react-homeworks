import React from "react";
import './style.css';

function SongItem({ song }) {
    return (
        <div className='song-item'>
            <span>{song.name}</span>
            <span>{song.artist}</span>
            <span>{song.genre}</span>
        </div>
    );
}
export default SongItem