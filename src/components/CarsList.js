import React, { useState } from 'react';
import CarCard from './CarCard';
import { cars } from '../data/cars';
import './CarsList.css';

function CarsList() {
  const [filter, setFilter] = useState('all');

  const filteredCars = filter === 'all' 
    ? cars 
    : cars.filter(car => car.technology.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="cars-list-container">
      <h2 className="cars-list-title">Carros Futuristas</h2>
      <div className="cars-filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Todos
        </button>
        <button 
          className={`filter-btn ${filter === 'elétrico' ? 'active' : ''}`}
          onClick={() => setFilter('elétrico')}
        >
          Elétricos
        </button>
        <button 
          className={`filter-btn ${filter === 'hidrogênio' ? 'active' : ''}`}
          onClick={() => setFilter('hidrogênio')}
        >
          Hidrogênio
        </button>
        <button 
          className={`filter-btn ${filter === 'híbrido' ? 'active' : ''}`}
          onClick={() => setFilter('híbrido')}
        >
          Híbridos
        </button>
      </div>
      <div className="cars-grid">
        {filteredCars.map(car => (
          <CarCard
            key={car.id}
            id={car.id}
            name={car.name}
            image={car.image}
            description={car.description}
            technology={car.technology}
            autonomy={car.autonomy}
            maxSpeed={car.maxSpeed}
          />
        ))}
      </div>
    </div>
  );
}

export default CarsList;