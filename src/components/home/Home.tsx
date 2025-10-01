import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import SearchBar from "./SearchBar";
import Carousel from "./Carousel";
import Card from "./Card";
import ArticlesSection from "./ArticlesSection";
import Footer from "../Footer";

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);


  // Applica dark mode e dimensione font a livello globale
  useEffect(() => {
    document.documentElement.style.fontSize = fontSize + "px";
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode, fontSize]);

  const handleCardClick = (page: string) => {
    alert(`Vai a ${page}`); // Placeholder, sostituisci con logica o routing
  };

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />
      <main className="app-content" tabIndex={-1}>
        <SearchBar />
        <Carousel />
        <div className="card-container">
          <Card
            title="Pubblica Amministrazione"
            description="Informazioni e servizi della Pubblica Amministrazione"
            onClick={() => handleCardClick("Pubblica Amministrazione")}
          />
          <Card
            title="Slang"
            description="Dizionario di slang e termini colloquiali"
            onClick={() => handleCardClick("Slang")}
          />
          <Card
            title="Scam"
            description="Segnala e conosci le truffe più comuni"
            onClick={() => handleCardClick("Scam")}
          />
        </div>
        
        <ArticlesSection />
      </main>
    </>
  );
};



export default Home;
