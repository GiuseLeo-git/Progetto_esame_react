import React, { useState } from "react";
import BotScam from "./bot";
import "./FloatingScamBot.css";

const FloatingScamBot: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="floating-bot-btn"
        onClick={() => setOpen(true)}
        aria-label="Apri chat bot prevenzione scam"
      >
        💬
      </button>
      {open && (
        <div className="floating-bot-modal">
          <div className="floating-bot-modal-content">
            <button className="floating-bot-close" onClick={() => setOpen(false)}>✖</button>
            <BotScam />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingScamBot;