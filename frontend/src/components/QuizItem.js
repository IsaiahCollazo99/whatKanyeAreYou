import React from 'react';

const QuizItem = ( quiz ) => {
    return (
        <div className="quizItem">
            {quiz.metadata.name}
        </div>
    )
}

export default QuizItem;