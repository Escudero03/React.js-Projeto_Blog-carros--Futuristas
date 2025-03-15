import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="header-top">
        <div className="container">
          <div className="logo-container">
            <a href="/" className="logo">
              <span className="logo-car">CAR</span>
              <span className="logo-blog">.BLOG</span>
              <span className="logo-br">.BR</span>
            </a>
          </div>
          
          <div className="search-container">
            <form className="search-form">
              <input type="text" placeholder="PESQUISAR" className="search-input" />
              <button type="submit" className="search-button">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <nav className="main-nav">
        <div className="container">
          <button className="menu-toggle" onClick={toggleMobileMenu}>
            <i className="fas fa-bars"></i> MENU
          </button>
          
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/mais-vendidos">Mais Vendidos</a></li>
            <li><a href="/precos">Preços</a></li>
            <li><a href="/carros-eletricos">Carros Elétricos</a></li>
            <li><a href="/testes">Testes</a></li>
            <li><a href="/lancamentos">Lançamentos</a></li>
            <li><a href="/contato">Contato</a></li>
            <li><a href="/privacidade">Política de Privacidade</a></li>
          </ul>
          
          <div className="social-links">
            <a href="https://facebook.com" className="social-link"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" className="social-link"><i className="fab fa-instagram"></i></a>
            <a href="https://rss.com" className="social-link"><i className="fas fa-rss"></i></a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;