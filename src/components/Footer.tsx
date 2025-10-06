import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>appost</h3>
          <p>Il tuo sito di supporto per la digitalizzazione</p>
          <p>Aiutiamo le persone a navigare nel mondo digitale con sicurezza e semplicità.</p>
        </div>
        
        <div className="footer-section">
          <h4>Servizi</h4>
          <ul>
            <li><Link to="/pubblica-amministrazione">Pubblica Amministrazione</Link></li>
            <li><Link to="/scam">Protezione Truffe</Link></li>
            <li><Link to="/slang">Glossario Digitale</Link></li>
            <li><Link to="/">Guide Rapide</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Supporto</h4>
          <ul>
            <li><a href="#aiuto">Centro Aiuto</a></li>
            <li><a href="#contatti">Contatti</a></li>
            <li><a href="#faq">Domande Frequenti</a></li>
            <li><a href="#tutorial">Tutorial Video</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contatti</h4>
          <div className="contact-info">
            <p>📞 800 123 456</p>
            <p>📧 aiuto@appost.it</p>
            <p>🕒 Lun-Ven: 9:00-18:00</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; 2024 appost. Tutti i diritti riservati.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#termini">Termini di Servizio</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
