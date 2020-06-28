import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import quizzes from '../util/quizzes';
import QuizAlbumRadio from './QuizAlbumRadio';
const albums = require("../util/albums");

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
            quizRadioList.push(<QuizAlbumRadio album={album} key={key} id={key} />)
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