import React from "react";
import "./Header.css";

const ScamHeader: React.FC = () => {
  return (
    <header className="scam-header">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
        alt="Scam"
        className="scam-header-img"
      />
      <div className="scam-header-text">
        <h1>Scam</h1>
        <p>Scopri come difenderti dagli attacchi online</p>
      </div>
    </header>
  );
};

export default ScamHeader;
