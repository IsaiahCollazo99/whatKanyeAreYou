import React from 'react';
import quizzes from '../util/quizzes';
import QuizItem from './QuizItem';

const LandingPage = () => {
    const quizzesList = quizzes.map(( quiz, i ) => {
        return (
            <QuizItem quiz={quiz} key={i} id={i}/>
        )
    })
    
    return (
        <div className="landingContainer">
            {quizzesList}
        </div>
    )
}

export default LandingPage;