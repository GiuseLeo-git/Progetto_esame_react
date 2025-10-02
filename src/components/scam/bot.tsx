import React, { useState } from "react";
import "./bot.css";

const paroleScam = [
  "vincita", "gratis", "bitcoin", "password", "clicca qui", "offerta", "urgente", "conto", "banca", "regalo"
];

function simulaScam(messaggio: string): boolean {
  const testo = messaggio.toLowerCase();
  return paroleScam.some(parola => testo.includes(parola));
}

const BotScam: React.FC = () => {
  const [messaggio, setMessaggio] = useState("");
  const [risultato, setRisultato] = useState<null | boolean>(null);

  const controllaMessaggio = () => {
    setRisultato(simulaScam(messaggio));
  };

  const reset = () => {
    setMessaggio("");
    setRisultato(null);
  };

  return (
    <div className="bot-container">
      <h2>Simulatore Scam</h2>
      <input
        type="text"
        value={messaggio}
        onChange={e => setMessaggio(e.target.value)}
        placeholder="Scrivi un messaggio..."
        className="bot-input"
      />
      <div className="bot-buttons">
        <button onClick={controllaMessaggio}>Verifica</button>
        <button onClick={reset}>Reset</button>
      </div>
      {risultato !== null && (
        <div className={`bot-risultato ${risultato ? "scam" : "ok"}`}>
          {risultato ? "⚠️ Questo messaggio sembra uno scam!" : "✅ Messaggio sicuro."}
        </div>
      )}
    </div>
  );
};

export default BotScam;