import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {year} APPost. Tutti i diritti riservati.</p>
        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            <li><a href="#pubblica-amministrazione">Pubblica Amministrazione</a></li>
            <li><a href="#slang">Slang</a></li>
            <li><a href="#scam">Scam</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
