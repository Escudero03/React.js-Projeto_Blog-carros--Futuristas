import React from 'react';
import './App.css';
import { cars, newsArticles, topSellingCars } from './data/simpleCars';

function App() {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '20px', background: '#13131a', color: 'white' }}>
        <h1>Blog de Carros Futuristas</h1>
        <p>Explorando os veículos do futuro</p>
      </header>
      
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ color: '#333' }}>Notícias Recentes</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '20px',
          marginTop: '20px',
          marginBottom: '40px'
        }}>
          {newsArticles.map(article => (
            <div key={article.id} style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
              <div style={{ position: 'relative' }}>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <span style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  background: '#da190f',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}>
                  {article.category}
                </span>
              </div>
              <div style={{ padding: '15px' }}>
                <h3 style={{ margin: '0 0 10px 0' }}>{article.title}</h3>
                <p style={{ color: '#666' }}>{article.shortDescription}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '14px', color: '#888' }}>
                  <span>{article.date}</span>
                  <span>{article.comments} comentários</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <h2 style={{ color: '#333' }}>Carros mais vendidos em março</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
          gap: '15px',
          marginTop: '20px',
          marginBottom: '40px'
        }}>
          {topSellingCars.map((car, index) => (
            <div key={car.id} style={{ 
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #ddd', 
              borderRadius: '8px',
              overflow: 'hidden',
              padding: '10px'
            }}>
              <div style={{ 
                background: '#da190f', 
                color: 'white', 
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '10px',
                flexShrink: 0
              }}>
                {index + 1}
              </div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                overflow: 'hidden',
                borderRadius: '4px',
                marginRight: '10px',
                flexShrink: 0
              }}>
                <img 
                  src={car.image} 
                  alt={car.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>{car.name}</h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{car.sales.toLocaleString()} unidades</p>
              </div>
            </div>
          ))}
        </div>
        
        <h2 style={{ color: '#333' }}>Galeria de Carros Futuristas</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '20px',
          marginTop: '20px'
        }}>
          {cars.map(car => (
            <div key={car.id} style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
              <img 
                src={car.image} 
                alt={car.name} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '15px' }}>
                <h3 style={{ margin: '0 0 10px 0' }}>{car.name}</h3>
                <p style={{ color: '#666' }}>{car.description}</p>
                <button style={{ 
                  background: '#da190f', 
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}>
                  Ver detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <footer style={{ background: '#13131a', color: 'white', padding: '30px', textAlign: 'center', marginTop: '40px' }}>
        <p>© 2025 Blog de Carros Futuristas. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;