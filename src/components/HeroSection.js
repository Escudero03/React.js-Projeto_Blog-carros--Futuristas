import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>O FUTURO JÁ CHEGOU</h1>
      <p>Descubra os carros mais inovadores de amanhã</p>
      <div className="hero-btns">
        <button className="btn primary-btn">
          EXPLORAR
        </button>
        <button className="btn secondary-btn">
          ASSISTA O TRAILER <i className="far fa-play-circle" />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;