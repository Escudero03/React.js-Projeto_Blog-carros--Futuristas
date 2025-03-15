import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <i className="fas fa-car-side"></i>
      </div>
      <p>Carregando...</p>
    </div>
  );
}

export default Loading;