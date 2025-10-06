import React from 'react';
import './PhoneScamCard.css';

interface PhoneScamCardProps {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const PhoneScamCard: React.FC<PhoneScamCardProps> = ({ icon, title, description, linkText, linkHref }) => {
  return (
    <div className="phone-scam-card">
      <div className="card-header"></div>
      <div className="card-content">
        <div className="card-icon">{icon}</div>
        <div className="card-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-footer">
          <a href={linkHref} className="card-link">
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhoneScamCard;
