import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ url, type, topic, content }) => {
  return (
    <div className="Card">
      <img src={url} alt="" />
      <div className="card-content">
        <p>{type}</p>
        <h5>{topic}</h5>
        <p>{content}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Card;
