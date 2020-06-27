import React from 'react';
import { useHistory } from 'react-router-dom';

const QuizItem = ({ quiz, id }) => {
    // debugger;
    const history = useHistory();

    const redirect = () => {
        history.push("/quiz/" + (id + 1));
    }
    
    return (
        <div className="quizItem" onClick={redirect}>
            {quiz.metadata.name}
        </div>
    )
}

export default QuizItem;