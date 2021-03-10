import React, { useState, useEffect } from 'react';
import SingleResult from './SingleResult';

const DisplayResults = ({ userResults }) => {
  const [resultArr, setResultArr] = useState([]);
  useEffect(() => {
    if (Array.isArray(userResults)) {
      setResultArr(userResults);
    }
  }, [userResults]);
  return (
    <div>
      {resultArr.map(result => {
        return <SingleResult {...result} />;
      })}
    </div>
  );
};

export default DisplayResults;
