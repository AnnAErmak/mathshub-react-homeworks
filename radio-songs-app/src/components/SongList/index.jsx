import React from "react";
import SongItem from "../SongItem";
import "./style.css"

function SongList({ songs }) {
    return (
        <div className='song-list'>
            {songs.map(song => (<SongItem key = {song.id} song={song} />))}
        </div>
    );
}
export default SongList