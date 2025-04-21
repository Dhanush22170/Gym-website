import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-button">Explore More</button>
    </div>
  );
};

export default Card;