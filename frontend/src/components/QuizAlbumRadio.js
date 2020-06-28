import React, { useState, useEffect } from 'react';
import albums from '../util/albums';

const QuizAlbumRadio = ({ albumName }) => {
    const [ album, setAlbum ] = useState({});

    useEffect(() => {
        setAlbum([albums[albumName]]);
    }, [])

    const redirect = () => {
        window.open(album.youtubeLink);
    }
    
    return (
        <>
            <label>
                <img src={album.cover} alt={album.name} onClick={redirect}/>
                <input type="radio" required className="albumRadio">{album.name}</input>
            </label>
        </>
    )
}

export default QuizAlbumRadio;