import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Card from './Card';

const Scam: React.FC = () => {
  const navigate = useNavigate();

  return (
  <div>
      <Header/>
      <div className="container my-5">
        <div className="card-container">
          <Card
            title="Phishing"
            description="Impara a riconoscere e difenderti dagli attacchi di phishing"
            onClick={() => navigate("/phishing")}
          />
          <Card
            title="Virus"
            description="Scopri i rischi e come proteggerti da attacchi informatici"
            onClick={() => {}}
          />
          <Card
            title="Truffe Online"
            description="conosci le truffe più comuni"
            onClick={() => {}}
          />
        </div>
      </div>
  </div>
  );
};

export default Scam;