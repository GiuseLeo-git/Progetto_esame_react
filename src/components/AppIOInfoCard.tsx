import React from 'react';
import './AppIOInfoCard.css';

interface AppIOInfoCardProps {
  icon: string;
  title: string;
  description: string;
}

const AppIOInfoCard: React.FC<AppIOInfoCardProps> = ({ icon, title, description }) => {
  return (
    <div className="appio-info-card">
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default AppIOInfoCard;
