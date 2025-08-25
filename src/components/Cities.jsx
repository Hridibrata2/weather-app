import React, { useEffect, useState } from 'react';
import { getQueries } from '../database/indexeddb'; 
import './Cities.css';

const Cities = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    getQueries(setQueries);
  }, []);

  let listItems = [];
  for (let i = 0; i < queries.length; i++) {
    listItems.push(<li key={i}>{queries[i]}</li>);
  }

  return (
    <div>
      <h4>Recent Searches:</h4>
      <ul>{listItems}</ul>
    </div>
  );
};

export default Cities;
