import React from 'react';
import './PagoPaInfoCard.css';

interface PagoPaInfoCardProps {
  icon: string;
  title: string;
  description: string;
}

const PagoPaInfoCard: React.FC<PagoPaInfoCardProps> = ({ icon, title, description }) => {
  return (
    <div className="pagopa-info-card">
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PagoPaInfoCard;
