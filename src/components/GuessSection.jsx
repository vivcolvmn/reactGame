import React, { useState } from 'react';

const GuessSection = ({ submitGuess }) => {
    const [guess, setGuess] = useState('');

    return (
        <div id="guess-section">
            <label htmlFor="guess">Guess the secret number:</label>
            <input
                type="number"
                id="guess"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Your Guess"
            />
            <button onClick={() => submitGuess(parseInt(guess))}>Submit Guess</button>
        </div>
    );
};

export default GuessSection;
