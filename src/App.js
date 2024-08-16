import React, { useState } from 'react';
import GameSetup from './components/GameSetup';
import GuessSection from './components/GuessSection';
import ResultSection from './components/ResultSection';
import ResetButton from './components/ResetButton';
import './App.css';

const App = () => {
    const [maxRange, setMaxRange] = useState('');
    const [secretNumber, setSecretNumber] = useState(null);
    const [guesses, setGuesses] = useState([]);
    const [message, setMessage] = useState('');
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const startGame = () => {
        setSecretNumber(Math.floor(Math.random() * maxRange) + 1);
        setGuesses([]);
        setMessage('');
        setGameStarted(true);
        setGameOver(false);
    };

    const submitGuess = (guess) => {
        setGuesses([...guesses, guess]);

        if (guess < secretNumber) {
            setMessage('Higher');
        } else if (guess > secretNumber) {
            setMessage('Lower');
        } else {
            setMessage('You guessed the number!');
            setGuesses([guess]);
            setGameOver(true);
        }
    };

    const resetGame = () => {
        setMaxRange('');
        setSecretNumber(null);
        setGuesses([]);
        setMessage('');
        setGameStarted(false);
        setGameOver(false);
    };

    return (
        <div id="game-container">
        <h1>Guess the Secret Number</h1>
            {!gameStarted && (
                <GameSetup maxRange={maxRange} setMaxRange={setMaxRange} startGame={startGame} />
            )}
            {gameStarted && !gameOver && (
                <GuessSection submitGuess={submitGuess} />
            )}
            {gameStarted && (
                <ResultSection message={message} guesses={guesses} />
            )}
            {gameOver && (
                <ResetButton resetGame={resetGame} />
            )}
        </div>
    );
};

export default App;
