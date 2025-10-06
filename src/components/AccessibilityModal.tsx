import React from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import './AccessibilityModal.css';

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccessibilityModal: React.FC<AccessibilityModalProps> = ({ isOpen, onClose }) => {
  const { settings, toggleDarkMode, setFontSize } = useAccessibility();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Impostazioni Accessibilità</h2>
          <button className="modal-close" onClick={onClose} aria-label="Chiudi">
            ×
          </button>
        </div>
        
        <div className="modal-body">
          <div className="setting-group">
            <h3>Tema</h3>
            <div className="setting-options">
              <button
                className={`theme-button ${!settings.isDarkMode ? 'active' : ''}`}
                onClick={() => settings.isDarkMode && toggleDarkMode()}
              >
                ☀️ Modalità Chiara
              </button>
              <button
                className={`theme-button ${settings.isDarkMode ? 'active' : ''}`}
                onClick={() => !settings.isDarkMode && toggleDarkMode()}
              >
                🌙 Modalità Scura
              </button>
            </div>
          </div>

          <div className="setting-group">
            <h3>Dimensione Testo</h3>
            <div className="setting-options">
              <button
                className={`font-button ${settings.fontSize === 'small' ? 'active' : ''}`}
                onClick={() => setFontSize('small')}
              >
                A A A
              </button>
              <button
                className={`font-button ${settings.fontSize === 'medium' ? 'active' : ''}`}
                onClick={() => setFontSize('medium')}
              >
                A A A
              </button>
              <button
                className={`font-button ${settings.fontSize === 'large' ? 'active' : ''}`}
                onClick={() => setFontSize('large')}
              >
                A A A
              </button>
            </div>
            <p className="setting-description">
              Piccolo • Normale • Grande
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityModal;
