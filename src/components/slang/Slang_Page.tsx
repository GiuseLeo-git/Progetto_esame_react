import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Header from "./Header";
import Section from "./Section";
import Article from "./Article";
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

  const Latests = [
    {
      id: 1,
      title: "24/7"

    },

    {
      id: 2,
      title: "Friendzone"

    },

    {
      id: 3,
      title: "ghost"

    },

    {
      id: 4,
      title: "Fomo"
    },

    {
      id: 5,
      title: "salty"
    }
  ]

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

        <h2 className="Article-Title">Termini principali</h2>
        <div className="slang-container">
          <div className="article">
            <Article />
          </div>

          <div className="section">
            <Section />
          </div>


        </div>


       <div className="Article-Last-Updates">
            <h3 className="LU-Title">Ultimi Slang Aggiunti</h3>
            <div className="Line-Divisor"></div>

            <div className="Inner">
              {Latests.map((parola) => (
                <div key={parola.id} className="sezione-bottoni">
                  <button>{parola.title}</button>
                </div>
              ))}
            </div>
          </div>
          

      </main>
    </>
  );
};

export default Slang_Page;