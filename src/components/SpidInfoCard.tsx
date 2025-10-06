import React from 'react';
import './SpidInfoCard.css';

interface SpidInfoCardProps {
  icon: string;
  title: string;
  description: string;
}

const SpidInfoCard: React.FC<SpidInfoCardProps> = ({ icon, title, description }) => {
  return (
    <div className="spid-info-card">
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SpidInfoCard;
