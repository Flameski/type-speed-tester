import React, { useState, useEffect } from 'react';
import Milliseconds from './Milliseconds';

const Seconds = ({ timerStarted }) => {
  const [seconds, setSeconds] = useState('00');
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (timerStarted) {
      let timer = setInterval(() => {
        let _seconds = parseInt(seconds) + 1;
        if (_seconds < 10) {
          setSeconds('0' + _seconds);
        } else {
          setSeconds(_seconds);
        }
        if (_seconds > 59) {
          setSeconds('00');
          setMinutes(minutes + 1);
        }
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  });

  return (
    <div>
      <div>
        {minutes}:{seconds}:{<Milliseconds timerStarted={timerStarted} />}
      </div>
    </div>
  );
};

export default Seconds;
