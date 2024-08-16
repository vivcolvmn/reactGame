import React from 'react';

const ResetButton = ({ resetGame }) => {
    return (
        <button id="reset-game" onClick={resetGame}>Reset Game</button>
    );
};

export default ResetButton;
