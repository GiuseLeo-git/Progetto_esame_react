import React from 'react';
import './SlangCard.css';

interface SlangCardProps {
  icon: string;
  title: string;
  description: string;
}

const SlangCard: React.FC<SlangCardProps> = ({ icon, title, description }) => {
  return (
    <div className="slang-card">
      <div className="card-header"></div>
      <div className="card-content">
        <div className="card-icon">{icon}</div>
        <div className="card-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SlangCard;
