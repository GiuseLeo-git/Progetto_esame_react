import React from "react";
import "./Card.css";

interface CardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick} tabIndex={0} role="button" aria-pressed="false" onKeyDown={e => { if(e.key === "Enter") onClick(); }}>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-button" onClick={onClick} aria-label={`Vai a ${title}`}>
        Vai
      </button>
    </div>
  );
};

export default Card;
