import React from 'react';

const WordInput = ({ evaluateInput, wordInput, handleInput }) => {
  return (
    <div>
      <input
        type="text"
        value={wordInput}
        onChange={handleInput}
        onKeyDown={evaluateInput}
      />
    </div>
  );
};

export default WordInput;
