import React, { useState } from 'react';
import Selector from '../../Components/Selector';
import ListItem from '../../Components/ListItem';
import Pagination from '../../Components/Pagination';
import data from '../ResourcePage/fixtures';
import './ResourceListPage.scss';


const ResourceListPage = () => {
  const arr = ['Market Verticals', 'Topics', 'More Filter'];
  const [index, setIndex] = useState(0);
  const handleItem = (item, i) => {
    setIndex(i);
  }
  const [pageOfItems, setPageOfItems] = useState([]);

  const onChangePage = (pageOfItems) => {
    console.log(pageOfItems)
    setPageOfItems(pageOfItems);
  }

  return (
    <div className="ResourceListPage">
      <div className="container">
        <div className="search-group">
          <input type="text" placeholder="Search" className="search-input" />
          <div className="radio-group">
            {arr.map((amt, i) => <Selector className="selector" key={`a${i}`} item={amt} isFilter={true} index={i} isActive={index === i} handleItem={handleItem} />)}
          </div>
          <select name="resource" id="">
            <option value="">Sort by:  Relevance</option>
            <option value="">Sort by:  Types</option>
          </select>
        </div>
        {pageOfItems.map((item, i) => <ListItem
          key={`item${i}`}
          url={item.url}
          type={item.type}
          topic={item.topic}
        />)}
        {/* <ListItem /> */}
        <div className="pagination-container">
          <Pagination
            items={data}
            onChangePage={onChangePage}
          />
        </div>
      </div>
    </div>
  )
}

export default ResourceListPage;
