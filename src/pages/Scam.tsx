import React from 'react';
import ScamCard from '../components/ScamCard';
import { useCounter } from '../hooks/useCounter';
import './Scam.css';

const Scam: React.FC = () => {
  const { count: avoidableCount } = useCounter(95, { duration: 2000, delay: 500 });
  const { count: vigilanceCount } = useCounter(24, { duration: 1500, delay: 1000 });
  const { count: freeCount } = useCounter(100, { duration: 1800, delay: 1500 });

  return (
    <div className="scam-page">
      <div className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Truffe Online</h1>
            <p>Proteggi te stesso e i tuoi cari dalle truffe digitali. Impara a riconoscere i segnali d'allarme e scopri come navigare in sicurezza nel mondo digitale.</p>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{avoidableCount}%</span>
                <span className="stat-label">Truffe Evitabili</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{vigilanceCount}/7</span>
                <span className="stat-label">Vigilanza</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{freeCount}%</span>
                <span className="stat-label">Gratuito</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scam-content">
        <div className="content-container">
          <h2>Protezione dalle Truffe</h2>
          <p>Qui troverai guide e informazioni per proteggerti dalle truffe online e navigare in sicurezza nel mondo digitale.</p>
        </div>
        <div className="scam-grid">
          <ScamCard
            icon="🎣"
            title="Phishing: come riconoscerlo"
            description="Segnali d'allarme e consigli per evitare email e messaggi fraudolenti."
            linkText="Scopri di più"
            linkHref="/phishing"
          />
          
          <ScamCard
            icon="📞"
            title="Truffe telefoniche"
            description="Come difendersi da chiamate e SMS sospetti che chiedono dati personali."
            linkText="Scopri di più"
            linkHref="/phone-scam"
          />
          
          <ScamCard
            icon="💻"
            title="Fake news online"
            description="Impara a distinguere le notizie vere da quelle false sui social network."
            linkText="Scopri di più"
            linkHref="/fake-news"
          />
          
          <ScamCard
            icon="🔒"
            title="Sicurezza password"
            description="Come creare password sicure e gestire i tuoi account in modo protetto."
            linkText="Scopri di più"
            linkHref="/password-security"
          />
        </div>
      </div>
    </div>
  );
};

export default Scam;

