import React from 'react';
import './CIEInfoCard.css';

interface CIEInfoCardProps {
  icon: string;
  title: string;
  description: string;
}

const CIEInfoCard: React.FC<CIEInfoCardProps> = ({ icon, title, description }) => {
  return (
    <div className="cie-info-card">
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CIEInfoCard;
