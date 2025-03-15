import React, { useState } from 'react';
import './App.css';
import { cars, newsArticles, topSellingCars } from './data/simpleCars';

// Definir características específicas para cada carro
const carFeatures = {
  1: [ // Tesla Cybertruck
    'Exoesqueleto de aço inoxidável ultra-resistente',
    'Autonomia de até 800 km com uma carga',
    'Aceleração de 0-100 km/h em 2.9 segundos',
    'Capacidade de reboque de até 6.350 kg'
  ],
  2: [ // McLaren Solus GT
    'Motor V10 5.2L naturalmente aspirado com 840 cv',
    'Peso inferior a 1.000 kg para desempenho máximo',
    'Aerodinâmica inspirada na Fórmula 1',
    'Produção limitada a apenas 25 unidades no mundo'
  ],
  3: [ // Lamborghini Revuelto
    'Motor V12 combinado com três motores elétricos (1.015 cv)',
    'Aceleração de 0-100 km/h em 2.5 segundos',
    'Velocidade máxima de 350 km/h',
    'Modo de condução totalmente elétrico'
  ],
  4: [ // BMW i Vision Circular
    'Construído com materiais 100% reciclados',
    'Design minimalista focado em sustentabilidade',
    'Interior com materiais renováveis',
    'Bateria de estado sólido de próxima geração'
  ],
  5: [ // Hyundai Prophecy
    'Design aerodinâmico tipo "pontoon"',
    'Interior controlado por joysticks em vez de volante',
    'Sistema de purificação de ar integrado',
    'Iluminação pixelada para comunicação com pedestres'
  ],
  6: [ // Lamborghini Revuelto (Lateral)
    'Portas tesoura icônicas da Lamborghini',
    'Difusor traseiro massivo para melhor aerodinâmica',
    'Sistema de escape hexagonal posicionado no alto',
    'Elementos aerodinâmicos ativos'
  ],
  7: [ // Mercedes Benz VISION EQS
    'Autonomia de 700 km com uma única carga',
    'Interior luxuoso com materiais sustentáveis',
    'Sistema de iluminação digital com 940 LEDs individuais',
    'Condução autônoma de nível 3'
  ],
  8: [ // Polestar Precept
    'Interior feito com garrafas PET recicladas',
    'Sistema de infoentretenimento baseado em Android',
    'Câmeras em vez de retrovisores tradicionais',
    'Design escandinavo minimalista'
  ],
  9: [ // McLaren Solus GT (Ângulo Frontal)
    'Cockpit fechado inspirado em carros de corrida',
    'Sistema de entrada de ar integrado ao teto',
    'Asa traseira fixa para downforce máximo',
    'Suspensão pushrod conectada diretamente à caixa de câmbio'
  ]
};

// Dicas para a coluna lateral
const carTips = [
  {
    title: 'Como escolher um carro elétrico',
    description: 'Fatores importantes a considerar antes de comprar seu primeiro veículo elétrico',
    image: '/images/Tesla Cybertruck.jpg'
  },
  {
    title: 'Manutenção de carros híbridos',
    description: 'Dicas para manter seu veículo híbrido em perfeito estado',
    image: '/images/2024-lamborghini-revuelto-review.jpg'
  },
  {
    title: 'Futuro da condução autônoma',
    description: 'O que esperar dos sistemas de condução autônoma nos próximos anos',
    image: '/images/Moderno Mercedes Benz VISION EQS.jpg'
  },
  {
    title: 'Materiais sustentáveis nos carros',
    description: 'Como a indústria automotiva está adotando materiais ecológicos',
    image: '/images/BMW_i_Vision_Circular_Concept_IAA_2021_1X7A0294.jpg'
  }
];

function App() {
  // Estados para controlar o modal
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  // Função para abrir o modal com o carro selecionado
  const openModal = (car) => {
    setSelectedCar(car);
    setShowModal(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '20px', background: '#13131a', color: 'white' }}>
        <h1>Blog de Carros Futuristas</h1>
        <p>Explorando os veículos do futuro</p>
      </header>
      
      <div style={{ 
        padding: '20px', 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 300px',
        gap: '30px'
      }}>
        {/* Conteúdo principal */}
        <div className="main-content">
          <h2 style={{ color: '#333' }}>Notícias Recentes</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
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
                  <button 
                    onClick={() => openModal(car)}
                    style={{ 
                      background: '#da190f', 
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginTop: '10px'
                    }}
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Barra lateral */}
        <aside className="sidebar">
          <div style={{ 
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '30px'
          }}>
            <h3 style={{ 
              background: '#13131a',
              color: 'white',
              margin: 0,
              padding: '15px',
              fontSize: '18px'
            }}>Dicas para Entusiastas</h3>
            
            <div>
              {carTips.map((tip, index) => (
                <div key={index} style={{
                  padding: '15px',
                  borderBottom: index < carTips.length - 1 ? '1px solid #eee' : 'none',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <img 
                    src={tip.image} 
                    alt={tip.title}
                    style={{
                      width: '70px',
                      height: '70px',
                      objectFit: 'cover',
                      borderRadius: '4px',
                      marginRight: '15px'
                    }}
                  />
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>{tip.title}</h4>
                    <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ 
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '30px'
          }}>
            <h3 style={{ 
              background: '#13131a',
              color: 'white',
              margin: 0,
              padding: '15px',
              fontSize: '18px'
            }}>Categorias</h3>
            
            <ul style={{ 
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {['Elétricos', 'Híbridos', 'Conceitos', 'Supercarros', 'SUVs Futuristas', 'Autônomos'].map((category, index) => (
                <li key={index} style={{
                  padding: '12px 15px',
                  borderBottom: index < 5 ? '1px solid #eee' : 'none',
                  color: '#333',
                  cursor: 'pointer'
                }}>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{ 
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '30px',
            padding: '20px'
          }}>
            <h3 style={{ 
              margin: '0 0 15px 0',
              fontSize: '18px',
              color: '#333'
            }}>Newsletter</h3>
            
            <p style={{ color: '#666', marginBottom: '15px' }}>
              Receba as últimas notícias sobre carros futuristas direto no seu e-mail.
            </p>
            
            <input 
              type="email"
              placeholder="Seu melhor e-mail"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                marginBottom: '10px',
                boxSizing: 'border-box'
              }}
            />
            
            <button style={{
              width: '100%',
              padding: '10px',
              background: '#da190f',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Inscrever
            </button>
          </div>
        </aside>
      </div>
      
      {/* Modal para exibir detalhes do carro */}
      {showModal && selectedCar && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }} onClick={closeModal}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '20px',
            maxWidth: '500px',
            width: '90%',
            maxHeight: '80vh',
            overflow: 'auto',
            position: 'relative'
          }} onClick={e => e.stopPropagation()}>
            <button 
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#333'
              }}
            >
              ×
            </button>
            
            <div style={{ display: 'flex', marginBottom: '20px' }}>
              <img 
                src={selectedCar.image} 
                alt={selectedCar.name} 
                style={{ 
                  width: '150px', 
                  height: '100px', 
                  objectFit: 'cover',
                  borderRadius: '4px',
                  marginRight: '15px'
                }}
              />
              <div>
                <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>{selectedCar.name}</h2>
                <span style={{ 
                  display: 'inline-block',
                  backgroundColor: '#f0f0f0',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  color: '#666'
                }}>
                  Carro Futurista
                </span>
              </div>
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '8px', color: '#333' }}>Sobre</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{selectedCar.description}</p>
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '8px', color: '#333' }}>Características</h3>
              <ul style={{ color: '#666', paddingLeft: '20px' }}>
                {carFeatures[selectedCar.id].map((feature, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      
      <footer style={{ background: '#13131a', color: 'white', padding: '30px', textAlign: 'center', marginTop: '40px' }}>
        <p>© 2025 Blog de Carros Futuristas. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;