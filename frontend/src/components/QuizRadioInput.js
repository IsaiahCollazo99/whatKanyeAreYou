import React from 'react';

const QuizRadioInput = ({ name, value, onChange }) => {
    return (
        <label>
            <input 
                type="radio" 
                required 
                className="quizRadio" 
                name={name} 
                value={value} 
                onChange={onChange} 
            />
            {value}
        </label>
    )
}

export default QuizRadioInput;