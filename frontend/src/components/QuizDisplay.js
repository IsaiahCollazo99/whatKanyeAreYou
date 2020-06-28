import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import quizzes from '../util/quizzes';
import albums from '../util/albums';
import QuizAlbumRadio from './QuizAlbumRadio';

const QuizDisplay = () => {
    const [ quiz, setQuiz ] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        let chosenQuiz = quizzes[id - 1];
        setQuiz(chosenQuiz);
    }, [])

    const getQuizRadios = () => {
        let quizRadioList = [];
        for(let key in albums) {
            const album = albums[key];
            quizRadioList.push(<QuizAlbumRadio albumName={album.name} />)
        }
        return quizRadioList;
    }
    
    const quizRadioList = getQuizRadios();
    
    return (
        <form className="quizDisplayForm">
            {quizRadioList}
        </form>
    )
}

export default QuizDisplay;