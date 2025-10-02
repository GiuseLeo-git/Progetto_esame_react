import  "./Section.css";
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
    img: "Spid.png",
    alt: "img_spid",
    text: "sei interessato alla guida sullo spid?"
  },
  {
    id: 2,
    img: "PagoPA.jpg",
    alt: "img_PagoPA",
    text: "vuoi sapere come pagare online?"
  },
  {
    id: 3,
    img: "Scam.png",
    alt: "scam_img",
    text: "vuoi sapere come difenderti dalle truffe online?"
  },
  {
    id: 4,
    img: "PosteIta.png",
    alt: "Img-posteItaliane",
    text: "vuoi sapere come registrarti a poste italiane?"
  },
  {
    id: 5,
    img: "Phishing.png",
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
          <div className="cont-img">
          <img src={guida.img} alt={guida.alt} />
          </div>
          <p>{guida.text}</p>
          <button>Clicca Qui</button>
        </div>
      ))}
    </div>
  );
}

export default Section;
