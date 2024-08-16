import React from 'react';

const ResultSection = ({ message, guesses }) => {
    return (
        <div id="result-section">
            <p id="result-message">{message}</p>
            <ul id="guess-list">
                {guesses.map((guess, index) => (
                    <li key={index}>{guess}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResultSection;
