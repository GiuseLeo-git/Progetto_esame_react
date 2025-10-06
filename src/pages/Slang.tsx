import React from 'react';
import AlphabetGlossary from '../components/AlphabetGlossary';
import { useCounter } from '../hooks/useCounter';
import './Slang.css';

const Slang: React.FC = () => {
  const { count: termsCount } = useCounter(100, { duration: 2000, delay: 500 });
  const { count: freeCount } = useCounter(100, { duration: 1800, delay: 1000 });
  const { count: availabilityCount } = useCounter(24, { duration: 1500, delay: 1500 });

  return (
    <div className="slang-page">
      <div className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Glossario Digitale</h1>
            <p>Decifra i termini del mondo digitale con spiegazioni semplici e chiare. Impara il linguaggio della tecnologia per navigare con sicurezza nel mondo online.</p>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{termsCount}+</span>
                <span className="stat-label">Termini Spiegati</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{freeCount}%</span>
                <span className="stat-label">Gratuito</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{availabilityCount}/7</span>
                <span className="stat-label">Disponibile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="slang-content">
        <div className="content-container">
          <h2>Glossario Alfabetico</h2>
          <p>Esplora i termini digitali organizzati per lettera. Clicca su una parola per vedere la sua spiegazione.</p>
        </div>
        <AlphabetGlossary />
      </div>
    </div>
  );
};

export default Slang;

