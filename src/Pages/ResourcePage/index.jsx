import React, { useState } from 'react';
import Pagination from '../../Components/Pagination';
import Header from '../../Components/Header';
import Card from '../../Components/Card';
import data from './fixtures';

import './ResourcePage.scss';



const ResourcePage = () => {
  const [pageOfItems, setPageOfItems] = useState([]);

  const onChangePage = (pageOfItems) => {
    console.log(pageOfItems)
    setPageOfItems(pageOfItems);
  }
  const Label = ({ name }) => <label className="label-container">{name}
    <input type="checkbox" name="" id="" />
    <span className="checkmark"></span>
  </label>;

  return (
    <div className="ResourcePage">
      <div className="container">
        <Header name="Resource" />
        <div className="search-group">
          <input type="text" placeholder="Search" className="search-input" />
          <select name="resource" id="">
            <option value="">Sort by:  Relevance</option>
            <option value="">Sort by:  Types</option>
          </select>
        </div>
        <div className="content">
          <div className="filter-container">
            <div className="filter-section">
              <div className="checkbox-group">
                <h4>Market Verticals</h4>
                <Label name='Health Systems' />
                <Label name='Health Plans' />
                <Label name='Employers' />
                <Label name='Government' />
                <Label name='Pharma' />
              </div>

              <div className="checkbox-group">
                <h4>Resource Types</h4>
                <Label name='Webinar' />
                <Label name='eBook' />
                <Label name='Case Study' />
                <Label name='Brochure' />
                <Label name='Video' />
              </div>

              <div className="checkbox-group">
                <h4>Topics</h4>
                <Label name='Best Practices' />
                <Label name='Getting Started' />
                <Label name='Patient Experience' />
                <Label name='Population Health' />
                <Label name='ROI' />
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card-grid">
              {pageOfItems.map((item, i) => <Card
                key={`item${i}`}
                url={item.url}
                type={item.type}
                topic={item.topic}
                content={item.content}
              />)
              }
            </div>
            <div className="pagination-container">
              <Pagination
                items={data}
                onChangePage={onChangePage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcePage;
