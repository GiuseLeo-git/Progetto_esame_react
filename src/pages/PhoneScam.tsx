import React from 'react';
import { useCounter } from '../hooks/useCounter';
import PhoneScamCard from '../components/PhoneScamCard';
import './PhoneScam.css';

const PhoneScam: React.FC = () => {
  const { count: callsCount } = useCounter(85, { duration: 2000, delay: 500 });
  const { count: awarenessCount } = useCounter(90, { duration: 1800, delay: 1000 });
  const { count: protectionCount } = useCounter(95, { duration: 1500, delay: 1500 });

  return (
    <div className="phone-scam-page scam-page">
      <div className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Truffe Telefoniche</h1>
            <p>Impara a riconoscere e difenderti dalle truffe telefoniche più comuni</p>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{callsCount}%</span>
                <span className="stat-label">Truffe Evitabili</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{awarenessCount}%</span>
                <span className="stat-label">Aumento Vigilanza</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{protectionCount}%</span>
                <span className="stat-label">Protezione Garantita</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="phone-scam-content">
        <div className="content-container">
          <h2>Come Riconoscere le Truffe Telefoniche</h2>
          <p>Le truffe telefoniche sono in aumento. Scopri i segnali di allarme e come proteggerti.</p>
        </div>

        <div className="guide-section">
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Verifica l'Identità del Chiamante</h3>
                <p>Non fidarti mai di chi ti chiama senza preavviso:</p>
                <ul>
                  <li><strong>Chiedi sempre il nome completo</strong> e l'ente per cui lavora</li>
                  <li><strong>Verifica il numero</strong> chiamando l'ente ufficiale</li>
                  <li><strong>Non fornire mai dati personali</strong> a chi ti chiama</li>
                  <li><strong>Diffida di chi chiede urgenza</strong> o minaccia conseguenze</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Segnali di Allarme Comuni</h3>
                <p>Riconosci questi campanelli d'allarme:</p>
                <ul>
                  <li><strong>Richiesta di denaro immediato</strong> per evitare problemi</li>
                  <li><strong>Minacce di azioni legali</strong> o conseguenze gravi</li>
                  <li><strong>Richiesta di codici</strong> di carte di credito o bancomat</li>
                  <li><strong>Pressioni psicologiche</strong> per decisioni affrettate</li>
                  <li><strong>Chiamate da numeri sconosciuti</strong> o internazionali</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Tipi di Truffe Telefoniche</h3>
                <p>Le truffe più comuni includono:</p>
                <ul>
                  <li><strong>Finti operatori bancari</strong> che chiedono codici di sicurezza</li>
                  <li><strong>Falsi tecnici informatici</strong> per "riparare" il computer</li>
                  <li><strong>Finti funzionari pubblici</strong> per multe o tasse</li>
                  <li><strong>Vincite fasulle</strong> che richiedono pagamenti anticipati</li>
                  <li><strong>Finti parenti in difficoltà</strong> che chiedono denaro</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Come Proteggersi</h3>
                <p>Segui queste regole d'oro:</p>
                <ul>
                  <li><strong>Non rispondere</strong> a numeri sconosciuti</li>
                  <li><strong>Non fornire mai</strong> codici PIN, password o dati bancari</li>
                  <li><strong>Verifica sempre</strong> chiamando l'ente ufficiale</li>
                  <li><strong>Non cedere alle pressioni</strong> per decisioni immediate</li>
                  <li><strong>Segnala le truffe</strong> alle autorità competenti</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Cosa Fare se Sei Stato Truffato</h3>
                <p>Se hai subito una truffa, agisci immediatamente:</p>
                <ul>
                  <li><strong>Chiama subito la banca</strong> per bloccare le carte</li>
                  <li><strong>Denuncia alle forze dell'ordine</strong> (Carabinieri o Polizia)</li>
                  <li><strong>Segnala al numero verde</strong> della tua banca</li>
                  <li><strong>Conserva tutte le prove</strong> (registrazioni, SMS, email)</li>
                  <li><strong>Contatta il servizio clienti</strong> degli enti coinvolti</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Risorse Utili</h3>
                <p>Contatti importanti per la sicurezza:</p>
                <ul>
                  <li><strong>Carabinieri:</strong> 112 (emergenze) o 117 (truffe)</li>
                  <li><strong>Polizia di Stato:</strong> 113</li>
                  <li><strong>Numero Verde Antitruffa:</strong> 800.123.456</li>
                  <li><strong>Banca d'Italia:</strong> per segnalazioni bancarie</li>
                  <li><strong>AGCOM:</strong> per truffe telefoniche</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="info-section">
          <div className="content-container">
            <h2>Informazioni Utili</h2>
            <div className="info-grid">
              <PhoneScamCard
                icon="🚨"
                title="Segnala Subito"
                description="Se sospetti una truffa, non esitare a segnalarla alle autorità competenti."
                linkText="Come Segnalare"
                linkHref="#segnala"
              />
              <PhoneScamCard
                icon="🛡️"
                title="Protezione Attiva"
                description="Attiva tutti i sistemi di protezione offerti dalla tua banca e dagli operatori."
                linkText="Proteggi i Tuoi Dati"
                linkHref="#protezione"
              />
              <PhoneScamCard
                icon="📞"
                title="Verifica Sempre"
                description="Non fidarti mai di chi ti chiama. Verifica sempre l'identità del chiamante."
                linkText="Impara a Verificare"
                linkHref="#verifica"
              />
              <PhoneScamCard
                icon="🔒"
                title="Dati Sicuri"
                description="I tuoi dati personali e bancari sono preziosi. Non condividerli mai al telefono."
                linkText="Proteggi i Dati"
                linkHref="#dati"
              />
            </div>
          </div>
        </div>

        <div className="resources-section">
          <div className="content-container">
            <h2>Risorse e Contatti</h2>
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">🚔</div>
                <h3>Forze dell'Ordine</h3>
                <p>Carabinieri: 112 | Polizia: 113</p>
                <a href="tel:112" className="resource-link">Chiama Ora</a>
              </div>
              <div className="resource-card">
                <div className="resource-icon">🏦</div>
                <h3>Numero Verde Bancario</h3>
                <p>Contatta la tua banca per blocchi urgenti</p>
                <a href="tel:800123456" className="resource-link">Chiama</a>
              </div>
              <div className="resource-card">
                <div className="resource-icon">📱</div>
                <h3>App Antitruffa</h3>
                <p>Scarica l'app ufficiale per segnalazioni</p>
                <a href="#app" className="resource-link">Scarica</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneScam;
