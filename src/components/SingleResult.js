import React from 'react';

const SingleResult = result => {
  const { userCpm, userWpm, time } = result;
  return (
    <div>
      <span className="wpm">{userWpm}</span>
      <span className="cpm">{userCpm}</span>
      <span className="date">{time}</span>
    </div>
  );
};

export default SingleResult;
