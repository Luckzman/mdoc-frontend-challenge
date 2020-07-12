import React from 'react';

import './ResourcePage.scss';
import Header from '../../Components/Header';
import Card from '../../Components/Card';

const ResourcePage = () => {
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
          <div className="filter-section">
            <div className="checkbox-group">
              <h4>Market Verticals</h4>
              <label className="container">Health Systems
                <input type="checkbox" name="" id="" />
                <span className="checkmark"></span>
              </label>
              <label className="container">Health Plans
                <input type="checkbox" name="" id="" />
                <span className="checkmark"></span>
              </label>
              <label className="container">Employers
                <input type="checkbox" name="" id="" />
                <span className="checkmark"></span>
              </label>
              <label className="container">Government
                <input type="checkbox" name="" id="" />
                <span className="checkmark"></span>
              </label>
              <label className="container">Pharma
                <input type="checkbox" name="" id="" />
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="checkbox-group">
              <h4>Resource Types</h4>
              <label className="container">Webinar
                <input type="checkbox" name="" id="" />
                <span className="checkmark"></span>
              </label>
              <label className="container">eBook
                <input type="checkbox" name="" id="" />
                <span className="checkmark"></span>
              </label>
              <label className="container">Case Study
                <input type="checkbox" name="" id="" />
                <span className="checkmark"></span>
              </label>
              <label className="container">Brochure
                <input type="checkbox" name="" id="" />
                <span className="checkmark"></span>
              </label>
              <label className="container">Video
                <input type="checkbox" name="" id="" />
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="checkbox-group">
              <h4>Topics</h4>
              <label className="container">Best Practices
                <input type="checkbox" name="" id="" />
                <span className="checkmark"></span>
              </label>
              <label className="container">Getting Started
                <input type="checkbox" name="" id="" />
                <span className="checkmark"></span>
              </label>
              <label className="container">Patient Experience
                <input type="checkbox" name="" id="" />
                <span className="checkmark"></span>
              </label>
              <label className="container">Population Health
                <input type="checkbox" name="" id="" />
                <span className="checkmark"></span>
              </label>
              <label className="container">ROI
                <input type="checkbox" name="" id="" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="card-container">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcePage;
