import React from 'react';
import SingleWord from './SingleWord';

const WordField = ({ words }) => {
  return (
    <div className="word-field">
      {words.map(word => {
        return <SingleWord word={word.word} key={word.id} done={word.done} />;
      })}
    </div>
  );
};

export default WordField;
