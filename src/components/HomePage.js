import React from 'react';
import './HomePage.css';
import CarSpecifications from './CarSpecifications';
import { cars, newsArticles, topSellingCars } from '../data/cars';

function HomePage() {
  // Verificar se os arrays existem e têm itens
  const safeNewsArticles = Array.isArray(newsArticles) ? newsArticles : [];
  const safeCars = Array.isArray(cars) ? cars : [];
  const safeTopSellingCars = Array.isArray(topSellingCars) ? topSellingCars : [];
  
  // Usar os três primeiros artigos de notícias (com verificação de segurança)
  const featuredArticles = safeNewsArticles.slice(0, 3).map(article => ({
    id: article.id || 0,
    title: article.title || 'Título não disponível',
    shortDescription: article.shortDescription || 'Descrição não disponível',
    image: article.image || '/images/2023_McLaren_Solus_GT.jpg', // Fallback para uma imagem que sabemos que existe
    category: article.category || 'Geral',
    date: article.date || 'Data não disponível',
    comments: article.comments || 0
  }));

  // Usar os destaques do último artigo (com verificação de segurança)
  const highlights = safeNewsArticles.length > 3 
    ? [safeNewsArticles[3]].map(article => ({
        id: article.id || 0,
        title: article.title || 'Título não disponível',
        shortDescription: article.shortDescription || 'Descrição não disponível',
        image: article.image || '/images/Tesla Cybertruck.jpg', // Fallback para uma imagem que sabemos que existe
        category: article.category || 'Geral',
        date: article.date || 'Data não disponível'
      }))
    : [{
        id: 1,
        title: 'Tesla Cybertruck: o futuro das picapes',
        shortDescription: 'Com design futurista e desempenho impressionante, o Cybertruck redefine o mercado.',
        image: '/images/Tesla Cybertruck.jpg',
        category: 'Inovação',
        date: '01 de março de 2025'
      }];

  return (
    <div className="homepage">
      <div className="container">
        <div className="main-content">
          {/* Artigos Principais */}
          <div className="featured-articles">
            {featuredArticles.map((article, index) => (
              <article
                key={article.id} 
                className={`article ${index === 0 ? 'article-main' : 'article-secondary'}`}
              >
                <div className="article-image-container">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="article-image"
                  />
                  <span className="article-category">{article.category}</span>
                </div>
                <div className="article-content">
                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-description">{article.shortDescription}</p>
                  <div className="article-meta">
                    <span className="article-date">
                      <i className="far fa-calendar-alt"></i> {article.date}
                    </span>
                    <span className="article-comments">
                      <i className="far fa-comment"></i> {article.comments}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Seção Destaques */}
          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Destaques <span className="section-more">›</span></h2>
            </div>

            <div className="highlights-container">
              {highlights.map(highlight => (
                <div key={highlight.id} className="highlight-card">
                  <div className="highlight-img-container">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="highlight-img"
                    />
                    <span className="highlight-category">{highlight.category}</span>
                  </div>
                  <div className="highlight-content">
                    <h3 className="highlight-title">{highlight.title}</h3>
                    <p className="highlight-description">{highlight.shortDescription}</p>
                    <div className="highlight-meta">
                      <span className="highlight-date">
                        <i className="far fa-calendar-alt"></i> {highlight.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Carros mais vendidos */}
          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Carros mais vendidos no Brasil em março <span className="section-more">›</span></h2>
            </div>

            <div className="top-selling-cars">
              {safeTopSellingCars.map((car, index) => (
                <div key={car.id || index} className="top-car-item">
                  <div className="top-car-rank">{index + 1}</div>
                  <div className="top-car-img-container">
                    <img
                      src={car.image || '/images/2023_McLaren_Solus_GT.jpg'}
                      alt={car.name || 'Carro'}
                      className="top-car-img"
                    />
                  </div>
                  <div className="top-car-info">
                    <h3 className="top-car-name">{car.name || 'Nome não disponível'}</h3>
                    <p className="top-car-sales">{(car.sales || 0).toLocaleString()} unidades em {car.month || 'março'}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Barra lateral */}
        <aside className="sidebar">
          <div className="sidebar-widget">
            <h3 className="sidebar-title">Recomendamos</h3>
            <div className="recommended-posts">
              <div className="recommended-post">
                <img 
                  src={safeCars.length > 0 ? safeCars[0].image : '/images/2023_McLaren_Solus_GT.jpg'} 
                  alt="McLaren Solus GT" 
                  className="recommended-post-img" 
                />
                <div className="recommended-post-content">
                  <h4 className="recommended-post-title">McLaren Solus GT: tecnologia de F1 para as ruas</h4>
                  <span className="recommended-post-date">março 10, 2025</span>
                </div>
              </div>

              <div className="recommended-post">
                <img 
                  src={safeCars.length > 1 ? safeCars[1].image : '/images/2024-lamborghini-revuelto-review.jpg'} 
                  alt="Lamborghini Revuelto" 
                  className="recommended-post-img" 
                />
                <div className="recommended-post-content">
                  <h4 className="recommended-post-title">Lamborghini Revuelto: o híbrido que mudou as regras</h4>
                  <span className="recommended-post-date">fevereiro 15, 2025</span>
                </div>
              </div>

              <div className="recommended-post">
                <img 
                  src={safeCars.length > 8 ? safeCars[8].image : '/images/Tesla Cybertruck.jpg'} 
                  alt="Tesla Cybertruck" 
                  className="recommended-post-img" 
                />
                <div className="recommended-post-content">
                  <h4 className="recommended-post-title">Tesla Cybertruck: como o design angular revolucionou o mercado</h4>
                  <span className="recommended-post-date">fevereiro 10, 2025</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-widget">
            <h3 className="sidebar-title">Publicidade</h3>
            <div className="ad-container">
              <span className="ad-label">PUBLICIDADE</span>
              <div className="ad-banner"></div>
            </div>
          </div>

          <div className="sidebar-widget">
            <h3 className="sidebar-title">Newsletter</h3>
            <form className="newsletter-form">
              <p className="newsletter-text">Receba nossas últimas notícias no seu email</p>
              <input type="email" placeholder="Seu email" className="newsletter-input" required />
              <button type="submit" className="newsletter-button">Inscrever</button>
            </form>
          </div>
        </aside>
      </div>

      {/* Seção de Especificações de Carros (fora do container de 2 colunas) */}
      <CarSpecifications />
    </div>
  );
}

export default HomePage;