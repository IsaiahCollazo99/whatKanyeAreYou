import React, { useState } from 'react';
import '../css/QuizAlbumRadio.css';
import QuizRadioInput from './QuizRadioInput';
import { FaSpotify, FaYoutube } from 'react-icons/fa'

const QuizAlbumRadio = ({ album, id }) => {
    const [ value, setValue ] = useState(1);
    
    const redirect = (e) => {
        if(e.target.nodeName === "IMG") {
            window.open(album.youtubeLink);
        } else {
            window.open(album.spotifyLink);
        }
    }

    const onRadioSelect = (e) => {
        setValue(e.target.value);
    }
    
    return (
        <label id={id} className="radioGroups" title={value}>
            <header>
                <p>{id === "mbdtf" ? "MBDTF" : album.name}</p>
                <div>
                    <FaYoutube size="75px" color="#c4302b" className="icon" onClick={window.open(album.youtubeLink)} />
                    <FaSpotify size="75px" color="#1DB954" className="icon" onClick={window.open(album.spotifyLink)} />
                </div>
                <img src={album.cover} alt={album.name} onClick={redirect} className="albumCover" />
            </header>
            <QuizRadioInput name={album.name} value={1} onChange={onRadioSelect} />
            <QuizRadioInput name={album.name} value={2} onChange={onRadioSelect} />
            <QuizRadioInput name={album.name} value={3} onChange={onRadioSelect} />
            <QuizRadioInput name={album.name} value={4} onChange={onRadioSelect} />
            <QuizRadioInput name={album.name} value={5} onChange={onRadioSelect} />
        </label>
    )
}

export default QuizAlbumRadio;