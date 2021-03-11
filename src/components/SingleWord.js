import React from 'react';

const SingleWord = ({ word, done }) => {
  return <div className={done ? 'done' : ''}>{word}</div>;
};

export default SingleWord;
