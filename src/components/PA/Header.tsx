import React from "react";
import "./Header.css";

const PAHeader: React.FC = () => {
  return (
    <header className="pa-header">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
        alt="Pubblica Amministrazione"
        className="pa-header-img"
      />
      <div className="pa-header-text">
        <h1>Pubblica Amministrazione</h1>
        <p>Scopri servizi, informazioni e guide utili per cittadini e imprese</p>
      </div>
    </header>
  );
};

export default PAHeader;
