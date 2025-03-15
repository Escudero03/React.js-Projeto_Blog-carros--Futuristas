import React from 'react';
import './CarCard.css';

function CarCard({ id, name, image, description, technology, autonomy, maxSpeed }) {
  return (
    <div className="car-card">
      <div className="car-card-img-container">
        <img src={image} alt={name} className="car-card-img" />
      </div>
      <div className="car-card-info">
        <h3 className="car-card-title">{name}</h3>
        <p className="car-card-description">{description}</p>
        <div className="car-card-details">
          <div className="car-card-detail">
            <i className="fas fa-bolt"></i>
            <span>{technology}</span>
          </div>
          <div className="car-card-detail">
            <i className="fas fa-road"></i>
            <span>{autonomy} km</span>
          </div>
          <div className="car-card-detail">
            <i className="fas fa-tachometer-alt"></i>
            <span>{maxSpeed} km/h</span>
          </div>
        </div>
        <button className="car-card-btn">Saiba mais</button>
      </div>
    </div>
  );
}

export default CarCard;