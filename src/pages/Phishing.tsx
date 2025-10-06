import React from 'react';
import { useCounter } from '../hooks/useCounter';
import PhishingCard from '../components/PhishingCard';
import './Phishing.css';

const Phishing: React.FC = () => {
  const { count: attacksCount } = useCounter(90, { duration: 2000, delay: 500 });
  const { count: awarenessCount } = useCounter(95, { duration: 1800, delay: 1000 });
  const { count: protectionCount } = useCounter(100, { duration: 1500, delay: 1500 });

  return (
    <div className="phishing-page scam-page">
      <div className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Phishing: Come Riconoscerlo</h1>
            <p>Impara a identificare e difenderti dagli attacchi di phishing. Proteggi i tuoi dati personali e finanziari riconoscendo i segnali d'allarme delle email e messaggi fraudolenti.</p>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{attacksCount}%</span>
                <span className="stat-label">Attacchi Evitabili</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{awarenessCount}%</span>
                <span className="stat-label">Consapevolezza</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{protectionCount}%</span>
                <span className="stat-label">Protezione</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="phishing-content">
        <div className="content-container">
          <h2>Cos'è il Phishing</h2>
          <p>Il phishing è una tecnica fraudolenta utilizzata dai cybercriminali per rubare informazioni personali, credenziali di accesso e dati finanziari. Gli attaccanti si fingono enti legittimi per ingannare le vittime.</p>
        </div>

        <div className="guide-section">
          <div className="content-container">
            <h2>Come Riconoscere il Phishing</h2>
            <p>Impara a identificare i segnali d'allarme per proteggerti dagli attacchi di phishing.</p>
          </div>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Controlla l'Indirizzo Email</h3>
                <p>Il primo segnale d'allarme è spesso l'indirizzo email del mittente:</p>
                <ul>
                  <li><strong>Dominio sospetto</strong> - Controlla se il dominio è corretto (es. @gmail.com vs @gmai1.com)</li>
                  <li><strong>Errori di battitura</strong> - Spesso contengono piccoli errori per confondere</li>
                  <li><strong>Numeri e caratteri strani</strong> - Domini con molti numeri sono spesso fraudolenti</li>
                  <li><strong>Nomi generici</strong> - Mittenti con nomi vaghi o impersonali</li>
                </ul>
                <p><strong>Esempio di email sospetta:</strong> "supporto@banc0-italia.com" invece di "supporto@bancaditalia.it"</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Analizza il Contenuto del Messaggio</h3>
                <p>I messaggi di phishing hanno caratteristiche specifiche:</p>
                <ul>
                  <li><strong>Urgenza eccessiva</strong> - "AGISCI SUBITO" o "SCADENZA IMMEDIATA"</li>
                  <li><strong>Minacce</strong> - "Il tuo account sarà chiuso" o "Conseguenze legali"</li>
                  <li><strong>Offerte troppo belle</strong> - Vincite improbabili o sconti esagerati</li>
                  <li><strong>Errori grammaticali</strong> - Testi mal scritti o tradotti male</li>
                  <li><strong>Richiesta di dati</strong> - Password, PIN, codici di sicurezza</li>
                </ul>
                <p><strong>Regola d'oro:</strong> Le banche e gli enti ufficiali non chiedono mai dati sensibili via email.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Verifica i Link e gli Allegati</h3>
                <p>Prima di cliccare su qualsiasi link o aprire allegati:</p>
                <ul>
                  <li><strong>Passa il mouse sui link</strong> - Verifica l'URL di destinazione</li>
                  <li><strong>Controlla il protocollo</strong> - Assicurati che inizi con "https://"</li>
                  <li><strong>Evita allegati sospetti</strong> - File .exe, .zip da mittenti sconosciuti</li>
                  <li><strong>Usa la navigazione diretta</strong> - Vai sul sito ufficiale digitando l'URL</li>
                </ul>
                <p><strong>Esempio di link sospetto:</strong> "www.bancaditalia-secure.com" invece del sito ufficiale.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Tipi Comuni di Phishing</h3>
                <p>Conosci le varianti più diffuse per essere più preparato:</p>
                <ul>
                  <li><strong>Email Phishing</strong> - Messaggi email fraudolenti</li>
                  <li><strong>SMS Phishing (Smishing)</strong> - Messaggi di testo con link malevoli</li>
                  <li><strong>Voice Phishing (Vishing)</strong> - Chiamate telefoniche fraudolente</li>
                  <li><strong>Social Media Phishing</strong> - Messaggi su Facebook, Instagram, WhatsApp</li>
                  <li><strong>Spear Phishing</strong> - Attacchi mirati a persone specifiche</li>
                  <li><strong>Whaling</strong> - Phishing rivolto a dirigenti e VIP</li>
                </ul>
                <p>Ogni tipo richiede attenzioni specifiche ma i principi di base rimangono gli stessi.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Come Proteggersi</h3>
                <p>Segui queste regole per ridurre il rischio di cadere vittima del phishing:</p>
                <ul>
                  <li><strong>Mai fornire dati sensibili</strong> - Password, PIN, codici via email/SMS</li>
                  <li><strong>Verifica sempre la fonte</strong> - Contatta l'ente direttamente</li>
                  <li><strong>Usa l'autenticazione a due fattori</strong> - Protezione aggiuntiva per i tuoi account</li>
                  <li><strong>Aggiorna regolarmente</strong> - Sistema operativo e software antivirus</li>
                  <li><strong>Backup dei dati</strong> - Copie di sicurezza dei file importanti</li>
                  <li><strong>Educazione continua</strong> - Tieniti informato sulle nuove tecniche</li>
                </ul>
                <p><strong>Ricorda:</strong> La prevenzione è sempre meglio della cura.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Cosa Fare se Sei Stato Colpito</h3>
                <p>Se sospetti di essere caduto vittima di phishing:</p>
                <ul>
                  <li><strong>Cambia immediatamente le password</strong> - Di tutti gli account coinvolti</li>
                  <li><strong>Contatta la tua banca</strong> - Se sono coinvolti dati finanziari</li>
                  <li><strong>Segnala l'incidente</strong> - Alla Polizia Postale o all'ente coinvolto</li>
                  <li><strong>Scansiona il dispositivo</strong> - Con un antivirus aggiornato</li>
                  <li><strong>Monitora i tuoi account</strong> - Controlla movimenti sospetti</li>
                  <li><strong>Avvisa i contatti</strong> - Se il tuo account è stato compromesso</li>
                </ul>
                <p><strong>Importante:</strong> Agisci rapidamente per limitare i danni.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="info-section">
          <div className="content-container">
            <h2>Esempi Pratici</h2>
            <div className="examples-grid">
              <PhishingCard
                icon="📧"
                title="Email Sospetta"
                description="Oggetto: 'URGENTE: Verifica il tuo account bancario' - Mittente: support@banc0-italia.com - Contenuto: 'Clicca qui per verificare i tuoi dati o il tuo account sarà bloccato'"
                linkText=""
                linkHref=""
                type="example"
                isPhishing={true}
              />

              <PhishingCard
                icon="✅"
                title="Email Legittima"
                description="Oggetto: 'Estratto conto mensile disponibile' - Mittente: noreply@bancaditalia.it - Contenuto: 'Il tuo estratto conto è disponibile nell'area riservata'"
                linkText=""
                linkHref=""
                type="example"
                isPhishing={false}
              />
            </div>
          </div>
        </div>

        <div className="resources-section">
          <div className="content-container">
            <h2>Risorse Utili</h2>
            <div className="resources-grid">
              <PhishingCard
                icon="🚨"
                title="Segnala Phishing"
                description="Se ricevi email sospette, segnalale alle autorità competenti per aiutare a proteggere altri utenti."
                linkText="Polizia Postale"
                linkHref="https://www.commissariatodips.it/"
                type="resource"
              />

              <PhishingCard
                icon="🛡️"
                title="Antivirus Gratuiti"
                description="Proteggi il tuo dispositivo con software antivirus aggiornato e scansioni regolari."
                linkText="Avast Free"
                linkHref="https://www.avast.com/it-it/free-antivirus-download"
                type="resource"
              />

              <PhishingCard
                icon="🔐"
                title="Gestori Password"
                description="Usa un gestore password per creare e memorizzare password sicure e uniche."
                linkText="Bitwarden"
                linkHref="https://bitwarden.com/"
                type="resource"
              />

              <PhishingCard
                icon="📚"
                title="Formazione Online"
                description="Approfondisci le tue conoscenze sulla sicurezza informatica con corsi gratuiti."
                linkText="Cybersecurity Awareness"
                linkHref="https://www.cybersecurityawareness.it/"
                type="resource"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Phishing;
