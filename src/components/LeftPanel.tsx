import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LeftPanel.css';

interface LeftPanelProps {
  isVisible: boolean;
  onClose: () => void;
  buttonNumber: number;
  showCloseButton: boolean;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ isVisible, onClose, buttonNumber, showCloseButton }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Naviga alla pagina corrispondente
    switch (buttonNumber) {
      case 1:
        navigate('/pubblica-amministrazione');
        break;
      case 2:
        navigate('/scam');
        break;
      case 3:
        navigate('/slang');
        break;
      default:
        break;
    }
    // Chiude il panel
    onClose();
  };

  const getPanelContent = () => {
    switch (buttonNumber) {
      case 1:
        return {
          title: "Pubblica Amministrazione",
          description: "Scopri come la tecnologia può semplificare la tua vita quotidiana e aiutarti a navigare con sicurezza nel mondo online.",
          buttonText: "Scopri di più"
        };
      case 2:
        return {
          title: "Truffe Online",
          description: "Impara a riconoscere e difenderti dalle truffe digitali. Proteggi te stesso e i tuoi cari navigando in sicurezza.",
          buttonText: "Scopri di più"
        };
      case 3:
        return {
          title: "Glossario Digitale",
          description: "Decifra i termini del mondo digitale con spiegazioni semplici. Impara il linguaggio della tecnologia.",
          buttonText: "Scopri di più"
        };
      default:
        return {
          title: "Benvenuto",
          description: "Scopri il mondo digitale con noi.",
          buttonText: "Scopri di più"
        };
    }
  };

  const content = getPanelContent();

  return (
    <div className={`left-panel panel-${buttonNumber} ${isVisible ? 'visible' : ''}`}>
      {showCloseButton && (
        <div className="close-button" onClick={onClose}>
          <span>✕</span>
        </div>
      )}
      <div className="left-panel-content">
        <h2>{content.title}</h2>
        <p>{content.description}</p>
        <button className={`explore-button button-${buttonNumber}`} onClick={handleButtonClick}>
          {content.buttonText}
        </button>
      </div>
    </div>
  );
};

export default LeftPanel;
