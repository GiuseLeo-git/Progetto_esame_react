import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Card from './Card';
import './Card.css';

const PA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="card-container">
        <Card
          title="SPID"
          description="Il Sistema Pubblico di Identità Digitale (SPID) permette di accedere a tutti i servizi online della Pubblica Amministrazione con un'unica identità digitale sicura."
          onClick={() => navigate('/spid')}
        />
        <Card
          title="PagoPA"
          description="PagoPA è la piattaforma ufficiale per effettuare pagamenti verso la Pubblica Amministrazione in modo semplice, trasparente e sicuro."
          onClick={() => navigate('/pagopa')}
        />
        <Card
          title="Carta Nazionale dei Servizi (CNS)"
          description="La Carta Nazionale dei Servizi è una tessera plastificata che permette di identificarsi e autenticarsi per accedere ai servizi digitali della PA."
          onClick={() => navigate('/cns')}
        />
      </div>
    </div>
  );
};

export default PA;
