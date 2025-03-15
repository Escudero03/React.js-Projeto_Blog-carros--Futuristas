import React from 'react';
import './CarSpecifications.css';
import { cars } from '../data/cars';

function CarSpecifications() {
  return (
    <section className="car-specifications-section">
      <div className="container">
        <h2 className="section-title">Especificações de Carros Futuristas <span className="section-more">›</span></h2>

        <div className="car-specs-grid">
          {cars.map(car => (
            <div key={car.id} className="car-spec-card">
              <div className="car-spec-image-container">
                <img src={car.image} alt={car.name} className="car-spec-image" />
                <span className="car-spec-category">{car.category}</span>
              </div>

              <div className="car-spec-content">
                <h3 className="car-spec-name">{car.name}</h3>
                <p className="car-spec-description">{car.description}</p>

                <div className="car-spec-details">
                  <div className="car-spec-detail">
                    <span className="spec-label">Motor:</span>
                    <span className="spec-value">{car.specs.motor}</span>
                  </div>

                  <div className="car-spec-detail">
                    <span className="spec-label">Potência:</span>
                    <span className="spec-value">{car.specs.potencia}</span>
                  </div>

                  <div className="car-spec-detail">
                    <span className="spec-label">Torque:</span>
                    <span className="spec-value">{car.specs.torque}</span>
                  </div>

                  <div className="car-spec-detail">
                    <span className="spec-label">0-100 km/h:</span>
                    <span className="spec-value">{car.specs.aceleracao}</span>
                  </div>

                  {car.specs.velocidadeMax && (
                    <div className="car-spec-detail">
                      <span className="spec-label">Vel. Máxima:</span>
                      <span className="spec-value">{car.specs.velocidadeMax}</span>
                    </div>
                  )}

                  {car.specs.autonomia && (
                    <div className="car-spec-detail">
                      <span className="spec-label">Autonomia:</span>
                      <span className="spec-value">{car.specs.autonomia}</span>
                    </div>
                  )}

                  {car.specs.recarga && (
                    <div className="car-spec-detail">
                      <span className="spec-label">Recarga:</span>
                      <span className="spec-value">{car.specs.recarga}</span>
                    </div>
                  )}

                  {car.specs.materialSustentavel && (
                    <div className="car-spec-detail">
                      <span className="spec-label">Material:</span>
                      <span className="spec-value">{car.specs.materialSustentavel}</span>
                    </div>
                  )}

                  {car.specs.aerodinamica && (
                    <div className="car-spec-detail">
                      <span className="spec-label">Aerodinâmica:</span>
                      <span className="spec-value">{car.specs.aerodinamica}</span>
                    </div>
                  )}

                  {car.specs.capacidadeCarga && (
                    <div className="car-spec-detail">
                      <span className="spec-label">Capacidade de Carga:</span>
                      <span className="spec-value">{car.specs.capacidadeCarga}</span>
                    </div>
                  )}
                </div>

                <div className="car-spec-price-container">
                  <span className="car-spec-price">{car.price}</span>
                  <a href={`/carros/${car.id}`} className="car-spec-button">Saiba mais</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarSpecifications;