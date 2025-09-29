import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  fontSize: number;
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, fontSize, setFontSize }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function trapFocus(event: KeyboardEvent) {
      if (!modalOpen) return;

      const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.key === "Tab") {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    }

    if (modalOpen) {
      lastFocusedElement.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
      document.addEventListener("keydown", trapFocus);
    } else {
      document.removeEventListener("keydown", trapFocus);
      lastFocusedElement.current?.focus();
    }
    return () => {
      document.removeEventListener("keydown", trapFocus);
    };
  }, [modalOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalOpen && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setModalOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (modalOpen && event.key === "Escape") {
        setModalOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const increaseFont = () => setFontSize(Math.min(fontSize + 2, 24));
  const decreaseFont = () => setFontSize(Math.max(fontSize - 2, 12));

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-left">
        <span className="logo">
          <span className="logo-app">app</span>
          <span className="logo-ost">ost</span>
        </span>
      </div>
      <ul className="navbar-links" role="menubar" aria-label="Menu principale">
        <li role="none">
          <a href="#" role="menuitem" tabIndex={0}>
            Pubblica Amministrazione
          </a>
        </li>
        <li role="none">
          <a href="#" role="menuitem" tabIndex={0}>
            Slang
          </a>
        </li>
        <li role="none">
          <a href="#" role="menuitem" tabIndex={0}>
            Scam
          </a>
        </li>
      </ul>
      <div className="navbar-accessibility">
        <button
          aria-haspopup="dialog"
          aria-expanded={modalOpen}
          aria-controls="accessibility-modal"
          onClick={() => setModalOpen(!modalOpen)}
          className="accessibility-button"
          aria-label="Impostazioni accessibilità"
        >
          Accessibilità
        </button>
        {modalOpen && (
          <div
            ref={modalRef}
            id="accessibility-modal"
            className="accessibility-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabIndex={-1}
          >
            <h2 id="modal-title">Impostazioni Accessibilità</h2>
            <div className="modal-controls">
              <button
                onClick={toggleDarkMode}
                aria-pressed={darkMode}
                aria-label="Attiva o disattiva modalità scura"
              >
                {darkMode ? "Modalità Chiara" : "Modalità Scura"}
              </button>
              <div className="font-size-controls" aria-label="Controlli dimensione testo">
                <button onClick={increaseFont} aria-label="Aumenta dimensione testo">
                  A+
                </button>
                <button onClick={decreaseFont} aria-label="Riduci dimensione testo">
                  A-
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
