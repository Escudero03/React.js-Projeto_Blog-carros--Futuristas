import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          FuturCars <i className="fas fa-car"></i>
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-links">Início</a>
          </li>
          <li className="nav-item">
            <a href="/carros" className="nav-links">Carros</a>
          </li>
          <li className="nav-item">
            <a href="/tecnologia" className="nav-links">Tecnologia</a>
          </li>
          <li className="nav-item">
            <a href="/sobre" className="nav-links">Sobre</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;