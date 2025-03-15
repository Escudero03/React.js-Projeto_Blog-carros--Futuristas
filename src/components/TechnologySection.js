import React from 'react';
import './TechnologySection.css';

function TechnologySection() {
  const technologies = [
    {
      id: 1,
      icon: 'fas fa-charging-station',
      title: 'Carregamento Ultra Rápido',
      description: 'Tecnologia que permite carregar a bateria em apenas 10 minutos para uma autonomia de até 400km.'
    },
    {
      id: 2,
      icon: 'fas fa-brain',
      title: 'Inteligência Artificial',
      description: 'Sistemas avançados de IA que aprendem com seu comportamento para otimizar a experiência de condução.'
    },
    {
      id: 3,
      icon: 'fas fa-car-crash',
      title: 'Segurança Autônoma',
      description: 'Sensores e câmeras que previnem acidentes com antecedência e protegem todos os ocupantes.'
    },
    {
      id: 4,
      icon: 'fas fa-sync-alt',
      title: 'Reciclagem Integral',
      description: 'Veículos fabricados com materiais 100% recicláveis para minimizar o impacto ambiental.'
    }
  ];

  return (
    <div className="tech-section">
      <div className="tech-section-container">
        <h2 className="tech-section-title">Tecnologias Revolucionárias</h2>
        <p className="tech-section-subtitle">Conheça as inovações que estão transformando a indústria automotiva</p>
        
        <div className="tech-grid">
          {technologies.map(tech => (
            <div key={tech.id} className="tech-card">
              <div className="tech-icon">
                <i className={tech.icon}></i>
              </div>
              <h3 className="tech-title">{tech.title}</h3>
              <p className="tech-description">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechnologySection;