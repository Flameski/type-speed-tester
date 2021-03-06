import React, { useState, useEffect } from 'react';
import Counter from './counter/Counter';
import WordField from './WordField';
import WordInput from './WordInput';
import WPM from './WPM';
import CPM from './CPM';

const Game = () => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [wordInput, setWordInput] = useState('');
  const [words, setWords] = useState([
    { id: 0, word: 'apple', done: false },
    { id: 1, word: 'banana', done: false },
    { id: 2, word: 'cherry', done: false },
    { id: 3, word: 'date', done: false },
    { id: 4, word: 'figma', done: false },
  ]);
  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);
  const [completedWords, setCompletedWords] = useState(0);
  const [charactersTyped, setCharactersTyped] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const startTimer = () => {
    setTimerStarted(!timerStarted);
  };

  const evaluateInput = e => {
    if (e.key === ' ') {
      e.preventDefault();
      words.forEach(element => {
        if (element.word === wordInput && element.done !== true) {
          let _words = words;
          _words[element.id].done = true;
          setWords(_words);
          setCompletedWords(completedWords + 1);
          setCharactersTyped(charactersTyped + element.word.length);
        }
      });
      setWordInput('');
    }
  };

  const handleInput = e => {
    setWordInput(e.target.value);
  };

  const calculateWpm = () => {
    let _wpm = Math.round(completedWords / (elapsedTime / 60));
    setWpm(_wpm);
  };

  const calculateCpm = () => {
    let _cpm = Math.round(charactersTyped / (elapsedTime / 60));
    setCpm(_cpm);
  };

  const endGame = () => {
    setTimerStarted(!timerStarted);
    setGameOver(!gameOver);
    console.log('game over');
  };

  useEffect(() => {
    if (timerStarted) {
      let timer = setInterval(() => {
        if (completedWords === 5) {
          endGame();
        }
        setElapsedTime(elapsedTime + 1);
        calculateWpm();
        calculateCpm();
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  });

  return (
    <div>
      <Counter timerStarted={timerStarted} />
      <WordField words={words} />
      <button onClick={startTimer}>Start</button>
      <WordInput
        evaluateInput={evaluateInput}
        wordInput={wordInput}
        handleInput={handleInput}
      />
      <WPM wpm={wpm} />
      <CPM cpm={cpm} />
    </div>
  );
};

export default Game;
