import React from 'react';
import { Link } from 'react-router-dom';
import './HomepageCard.css';

interface HomepageCardProps {
  to: string;
  icon: string;
  title: string;
  description: string;
  color: 'blue' | 'red' | 'green';
}

const HomepageCard: React.FC<HomepageCardProps> = ({ to, icon, title, description, color }) => {
  return (
    <Link to={to} className={`homepage-card homepage-card--${color}`}>
      <div className={`card-header card-header--${color}`}></div>
      
      <div className="card-content">
        <div className="card-icon">
          <span className="icon-emoji">{icon}</span>
        </div>
        
        <div className="card-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        
        <div className="card-footer">
          <div className="card-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomepageCard;
