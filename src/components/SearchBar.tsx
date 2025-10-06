import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  // Mappa delle query di ricerca alle pagine
  const searchMap: { [key: string]: string } = {
    // SPID
    'spid': '/spid-guide',
    'identità digitale': '/spid-guide',
    'identita digitale': '/spid-guide',
    'accesso spid': '/spid-guide',
    'login spid': '/spid-guide',
    'creare spid': '/spid-guide',
    'attivare spid': '/spid-guide',
    
    // PagoPA
    'pagopa': '/pagopa-guide',
    'pago pa': '/pagopa-guide',
    'bollettini': '/pagopa-guide',
    'pagamenti online': '/pagopa-guide',
    'f24': '/pagopa-guide',
    'avvisi di pagamento': '/pagopa-guide',
    
    // App IO
    'app io': '/appio-guide',
    'io app': '/appio-guide',
    'appio': '/appio-guide',
    'app dello stato': '/appio-guide',
    'servizi digitali': '/appio-guide',
    
    // CIE
    'cie': '/cie-guide',
    'carta identità': '/cie-guide',
    'carta d\'identità': '/cie-guide',
    'carta di identità': '/cie-guide',
    'carta identita': '/cie-guide',
    'documento elettronico': '/cie-guide',
    
    // Phishing
    'phishing': '/phishing',
    'email sospette': '/phishing',
    'truffe email': '/phishing',
    'email fraudolente': '/phishing',
    'analizzatore email': '/phishing',
    
    // Scam
    'scam': '/scam',
    'truffe online': '/scam',
    'truffe telefoniche': '/phone-scam',
    'fake news': '/fake-news',
    'notizie false': '/fake-news',
    'sicurezza password': '/password-security',
    'password sicure': '/password-security',
    
    // Pubblica Amministrazione
    'pubblica amministrazione': '/pubblica-amministrazione',
    'pa digitale': '/pubblica-amministrazione',
    'servizi pubblici': '/pubblica-amministrazione',
    'ente pubblico': '/pubblica-amministrazione',
    
    // Slang
    'slang': '/slang',
    'slang digitale': '/slang',
    'termini digitali': '/slang',
    'glossario': '/slang',
    'parole digitali': '/slang'
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      
      // Cerca una corrispondenza esatta
      if (searchMap[query]) {
        navigate(searchMap[query]);
        return;
      }
      
      // Cerca corrispondenze parziali
      for (const [key, path] of Object.entries(searchMap)) {
        if (key.includes(query) || query.includes(key)) {
          navigate(path);
          return;
        }
      }
      
      // Se non trova nulla, mostra un messaggio
      alert('Nessun risultato trovato. Prova con: "SPID", "PagoPA", "phishing", "scam", "slang digitale"');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSuggestions(value.length > 0 && isFocused);
  };

  const getSuggestions = () => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase().trim();
    const suggestions: string[] = [];
    
    for (const key of Object.keys(searchMap)) {
      if (key.includes(query) || query.includes(key)) {
        suggestions.push(key);
      }
    }
    
    return suggestions.slice(0, 5); // Massimo 5 suggerimenti
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    navigate(searchMap[suggestion]);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-bar-container">
          <div className={`search-bar ${isFocused ? 'focused' : ''}`}>
            <div className="search-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              onFocus={() => {
                setIsFocused(true);
                setShowSuggestions(searchQuery.length > 0);
              }}
              onBlur={() => {
                setIsFocused(false);
                // Delay per permettere il click sui suggerimenti
                setTimeout(() => setShowSuggestions(false), 200);
              }}
              placeholder="Cerca guide, informazioni e aiuti..."
              className="search-input"
              aria-label="Cerca nel sito"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="clear-button"
                aria-label="Cancella ricerca"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
          
          {/* Suggerimenti dinamici */}
          {showSuggestions && getSuggestions().length > 0 && (
            <div className="search-suggestions-dropdown">
              {getSuggestions().map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <span className="suggestion-text">{suggestion}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <button type="submit" className="search-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
      </form>
      
      <div className="search-suggestions">
        <p className="search-hint">
          Prova a cercare: "SPID", "PagoPA", "phishing", "scam", "slang digitale"
        </p>
      </div>
    </div>
  );
};

export default SearchBar;



