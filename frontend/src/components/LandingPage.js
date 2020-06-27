import React from 'react';
import quizzes from '../util/quizzes';
import QuizItem from './QuizItem';

const LandingPage = () => {
    const quizzesList = quizzes.map(quiz => {
        return (
            <QuizItem quiz={quiz} />
        )
    })
    
    return (
        <div className="landingContainer">
            {quizzesList}
        </div>
    )
}

export default LandingPage;