import React from 'react';
import Seconds from './Seconds';

const Counter = ({ timerStarted }) => {
  return (
    <div className="counter">
      <Seconds timerStarted={timerStarted} />
    </div>
  );
};

export default Counter;
