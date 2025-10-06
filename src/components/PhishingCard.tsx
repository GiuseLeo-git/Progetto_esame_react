import React from 'react';
import './PhishingCard.css';

interface PhishingCardProps {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  type?: 'example' | 'resource';
  isPhishing?: boolean;
}

const PhishingCard: React.FC<PhishingCardProps> = ({ 
  icon, 
  title, 
  description, 
  linkText, 
  linkHref, 
  type = 'resource',
  isPhishing = false 
}) => {
  const cardClass = type === 'example' 
    ? `phishing-card example-card ${isPhishing ? 'phishing-example' : 'legitimate-example'}`
    : 'phishing-card resource-card';

  return (
    <div className={cardClass}>
      <div className="phishing-card-icon">{icon}</div>
      <div className="phishing-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {type === 'example' && (
          <div className={`phishing-flag ${isPhishing ? 'red-flag' : 'green-flag'}`}>
            {isPhishing ? '🚩 SEGNALI D\'ALLARME: Urgenza, dominio sospetto, richiesta di dati' : '✅ SEGNALI POSITIVI: Dominio ufficiale, nessuna richiesta di dati'}
          </div>
        )}
        {type === 'resource' && (
          <a href={linkHref} target="_blank" rel="noopener noreferrer" className="phishing-link">
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default PhishingCard;
