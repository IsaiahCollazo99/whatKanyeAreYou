import React from 'react';

const QuizAlbumRadio = ({ album, key }) => {
    const redirect = () => {
        window.open(album.youtubeLink);
    }
    
    return (
        <label id={key} className="radioGroups">
            <p>{album.name}</p>
            <img src={album.cover} alt={album.name} onClick={redirect} className="albumCover" />
            <label>
                <input type="radio" required className="albumRadio" name={album.name} value={1}/>
                1
            </label>
            <label>
                <input type="radio" required className="albumRadio" name={album.name} value={2}/>
                2
            </label>
            <label>
                <input type="radio" required className="albumRadio" name={album.name} value={3}/>
                3
            </label>
            <label>
                <input type="radio" required className="albumRadio" name={album.name} value={4}/>
                4
            </label>
            <label>
                <input type="radio" required className="albumRadio" name={album.name} value={5}/>
                5
            </label>
        </label>
    )
}

export default QuizAlbumRadio;