import React, { useState } from 'react';
import AmountSelector from '../../Components/AmountSelector';

import './ResourceListPage.scss';
import ListItem from '../../Components/ListItem';


const ResourceListPage = () => {
  const arr = ['Market Verticals', 'Topics', 'More Filter'];
  const [index, setIndex] = useState(0);
  const handleAmount = (amount, i) => {
    setIndex(i);
  }
  return (
    <div className="ResourceListPage">
      <div className="container">
        <div className="search-group">
          <input type="text" placeholder="Search" className="search-input" />
          <div className="radio-group">
            {arr.map((amt, i) => <AmountSelector className="selector" key={`a${i}`} amount={amt} isFilter={true} index={i} isActive={index === i} handleAmount={handleAmount} />)}
          </div>
          <select name="resource" id="">
            <option value="">Sort by:  Relevance</option>
            <option value="">Sort by:  Types</option>
          </select>
        </div>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  )
}

export default ResourceListPage;
