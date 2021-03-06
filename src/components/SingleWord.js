import React from 'react';

const SingleWord = ({ word, done }) => {
  return <div style={done ? { color: 'red' } : { color: 'black' }}>{word}</div>;
};

export default SingleWord;
