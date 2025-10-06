import React from 'react';
import PACard from '../components/PACard';
import { useCounter } from '../hooks/useCounter';
import './PubblicaAmministrazione.css';

const PubblicaAmministrazione: React.FC = () => {
  const { count: guidesCount } = useCounter(50, { duration: 2000, delay: 500 });
  const { count: freeCount } = useCounter(100, { duration: 1500, delay: 1000 });
  const { count: accessCount } = useCounter(24, { duration: 1800, delay: 1500 });

  return (
    <div className="pa-page">
      <div className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Pubblica Amministrazione</h1>
            <p>Accedi facilmente ai servizi digitali della Pubblica Amministrazione italiana. Guide semplici e step-by-step per SPID, PagoPA, CIE e tutti i servizi online dello Stato.</p>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{guidesCount}+</span>
                <span className="stat-label">Guide Disponibili</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{freeCount}%</span>
                <span className="stat-label">Gratuito</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{accessCount}/7</span>
                <span className="stat-label">Accessibile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pa-content">
        <div className="content-container">
          <h2>Servizi Principali</h2>
          <p>Qui troverai guide e informazioni sui servizi digitali della Pubblica Amministrazione.</p>
        </div>
        <div className="pa-grid">
          <PACard
            icon="🔐"
            title="Come creare lo SPID"
            description="Guida passo-passo per ottenere le tue credenziali SPID in modo sicuro e semplice."
            linkText="Leggi la guida"
            linkHref="/spid-guide"
          />
          
          <PACard
            icon="💳"
            title="PagoPA: come funziona"
            description="Impara a pagare bollette e servizi pubblici online con PagoPA."
            linkText="Leggi la guida"
            linkHref="/pagopa-guide"
          />
          
          <PACard
            icon="📱"
            title="App IO"
            description="L'app che ti permette di accedere a tutti i servizi pubblici dal tuo smartphone."
            linkText="Leggi la guida"
            linkHref="/appio-guide"
          />
          
          <PACard
            icon="📄"
            title="Carta d'Identità Elettronica"
            description="Tutto quello che devi sapere sulla CIE e come utilizzarla online."
            linkText="Leggi la guida"
            linkHref="/cie-guide"
          />
        </div>
      </div>
    </div>
  );
};

export default PubblicaAmministrazione;
