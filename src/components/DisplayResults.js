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
    <div className="resultsSection">
      {resultArr.map((result, i) => {
        return <SingleResult key={i} {...result} />;
      })}
    </div>
  );
};

export default DisplayResults;
