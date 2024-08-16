import React from 'react';

const GameSetup = ({ maxRange, setMaxRange, startGame }) => {
    return (
        <div id="setup">
            <label htmlFor="max-range">Enter the maximum range:</label>
            <input
                type="number"
                id="max-range"
                value={maxRange}
                onChange={(e) => setMaxRange(e.target.value)}
                placeholder="Max Range"
            />
            <button onClick={startGame}>Start Game</button>
        </div>
    );
};

export default GameSetup;
