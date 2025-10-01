import React, { useState } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <input
        type="search"
        className="search-bar-input"
        placeholder="Cerca..."
        aria-label="Cerca"
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit" className="search-bar-button" aria-label="Invia ricerca">
        🔍
      </button>
    </form>
  );
};

export default SearchBar;
