import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AccessibilityModal from './AccessibilityModal';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isAccessibilityModalOpen, setIsAccessibilityModalOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
              <h1>
                <Link to="/" className="logo-link">
                  <span className="logo-app">app</span>
                  <span className="logo-ost">ost</span>
                </Link>
              </h1>
          </div>
                  <ul className="navbar-menu">
                    <li className="navbar-item">
                      <Link 
                        to="/" 
                        className={`navbar-link home-link ${location.pathname === '/' ? 'active' : ''}`}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="navbar-item">
                      <Link 
                        to="/pubblica-amministrazione" 
                        className={`navbar-link pa-link ${location.pathname === '/pubblica-amministrazione' ? 'active' : ''}`}
                      >
                        Pubblica Amministrazione
                      </Link>
                    </li>
                    <li className="navbar-item">
                      <Link 
                        to="/scam" 
                        className={`navbar-link scam-link ${location.pathname === '/scam' ? 'active' : ''}`}
                      >
                        Truffe Online
                      </Link>
                    </li>
                    <li className="navbar-item">
                      <Link 
                        to="/slang" 
                        className={`navbar-link slang-link ${location.pathname === '/slang' ? 'active' : ''}`}
                      >
                        Glossario Digitale
                      </Link>
                    </li>
                  </ul>
          <div className="navbar-actions">
            <button
              className="accessibility-button"
              onClick={() => setIsAccessibilityModalOpen(true)}
              aria-label="Impostazioni accessibilità"
              title="Impostazioni accessibilità"
            >
              ⚙️
            </button>
          </div>
        </div>
      </nav>
      
      <AccessibilityModal
        isOpen={isAccessibilityModalOpen}
        onClose={() => setIsAccessibilityModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
