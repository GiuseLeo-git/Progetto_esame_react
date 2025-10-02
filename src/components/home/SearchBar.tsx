import React, { useState } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    } else {
      alert(`Hai cercato: ${query}`);
    }
  };

  return (
    <form className="search-bar-form" onSubmit={handleSubmit} role="search" aria-label="Campo di ricerca principale">
      <textarea
        className="search-bar-input"
        placeholder="Cosa stai cercando?"
        aria-label="Cerca"
        value={query}
        onChange={handleInputChange}
        rows={4}
        style={{ resize: "none" }}
      />
      <button type="submit" className="search-bar-button" aria-label="Invia ricerca">
        {/* Lente d'ingrandimento semplice, monocolore, bianca */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2"/>
          <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
