import React from 'react';
import './SPID.css'; // Importa il CSS per lo stile

const SPID: React.FC = () => {
  return (
    <div className="spid-page">
      <header className="spid-header">
        <h1>Cos'è lo SPID?</h1>
      </header>

      <section className="spid-content">
        <p>
          Lo SPID (Sistema Pubblico di Identità Digitale) è il sistema che permette a cittadini e imprese di accedere ai servizi online della Pubblica Amministrazione con un'unica identità digitale sicura.
        </p>
        {/* Puoi continuare con altri contenuti come paragrafi, immagini, domande frequenti, ecc. */}
      </section>
    </div>
  );
};

export default SPID;
