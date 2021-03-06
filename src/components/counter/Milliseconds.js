import React, { useState, useEffect } from 'react';

const Milliseconds = ({ timerStarted }) => {
  const [milliseconds, setMilliseconds] = useState('000');

  useEffect(() => {
    if (timerStarted) {
      let timer = setInterval(() => {
        let now = new Date();
        let _milliseconds = now.getMilliseconds();
        if (_milliseconds < 10) {
          setMilliseconds('00' + _milliseconds);
        } else if (_milliseconds < 100) {
          setMilliseconds('0' + _milliseconds);
        } else {
          setMilliseconds(_milliseconds);
        }
      }, 1);
      return () => {
        clearInterval(timer);
      };
    }
  });
  return <>{milliseconds}</>;
};

export default Milliseconds;
