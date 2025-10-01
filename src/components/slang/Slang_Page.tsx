import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Header from "./Header";
import Section from "./Section";
import Article from "./Article";
import Footer from "../Footer";
import "./Slang_Page.css";

const Slang_Page: React.FC = () => {
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

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />
      <main className="slang-main" tabIndex={-1}>
        <div className="slang-header">
          <Header />
        </div>
        <div className="slang-card-container">
          <div className="slang-section">
            <Section />
          </div>
          <div className="slang-article">
            <Article />
          </div>
        </div>
      </main>
    </>
  );
};

export default Slang_Page;