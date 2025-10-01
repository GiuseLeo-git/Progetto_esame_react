import { useState, useEffect } from 'react';

interface Guida {
  id: number;
  img: string;
  alt: string;
  text: string;
}

const guide: Guida[] = [
  {
    id: 1,
    img: "https://spid",
    alt: "img_spid",
    text: "sei interessato alla guida sugli slag? Clicca qui"
  },
  {
    id: 2,
    img: "https://pagopa",
    alt: "img_pagopa",
    text: "sei interessato alla guida per pagare online? Clicca qui"
  },
  {
    id: 3,
    img: "https://scams",
    alt: "scam_img",
    text: "vuoi sapere come difenderti dalle truffe online? Clicca qui"
  },
  {
    id: 4,
    img: "https://posteItaliane",
    alt: "img_poste",
    text: "vuoi sapere come registrarti a poste italiane? Clicca qui"
  },
  {
    id: 5,
    img: "https://phishing",
    alt: "img_phishing",
    text: "vuoi sapere come difenderti dal phishing? Clicca qui"
  }
];

const Section: React.FC = () => {
  const [risultati, setRisultati] = useState<Guida[]>([]);

  useEffect(() => {
    const GuideDaVisualizzare = 3;
    const risultatiCasuali: Guida[] = [];

    while (risultatiCasuali.length < GuideDaVisualizzare) {
      const randomizza = Math.floor(Math.random() * guide.length);
      const guidaCasuale = guide[randomizza]; // seleziona una guida casuale
      if (!risultatiCasuali.includes(guidaCasuale)) { // evita duplicati
        risultatiCasuali.push(guidaCasuale);
      }
    }

    setRisultati(risultatiCasuali);
  }, []);

  return (
    <div className="section">
      {risultati.map((guida) => (
        <div key={guida.id} className="card">
          <img src={guida.img} alt={guida.alt} />
          <p>{guida.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Section;
