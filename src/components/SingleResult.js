import React from 'react';

const SingleResult = result => {
  const { userCpm, userWpm, time } = result;
  return (
    <div className="single-result">
      <span className="wpm">WPM: {userWpm}</span>
      <span className="cpm">CPM: {userCpm}</span>
      <span className="date">{time}</span>
    </div>
  );
};

export default SingleResult;
