import React from 'react';
import { useCounter } from '../hooks/useCounter';
import PasswordSecurityCard from '../components/PasswordSecurityCard';
import './PasswordSecurity.css';

const PasswordSecurity: React.FC = () => {
  const { count: strengthCount } = useCounter(95, { duration: 2000, delay: 500 });
  const { count: protectionCount } = useCounter(90, { duration: 1800, delay: 1000 });
  const { count: managementCount } = useCounter(88, { duration: 1500, delay: 1500 });

  return (
    <div className="password-security-page scam-page">
      <div className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Sicurezza Password</h1>
            <p>Impara a creare password sicure e gestire i tuoi account in modo protetto</p>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{strengthCount}%</span>
                <span className="stat-label">Sicurezza</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{protectionCount}%</span>
                <span className="stat-label">Protezione</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{managementCount}%</span>
                <span className="stat-label">Gestione</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="password-security-content">
        <div className="content-container">
          <h2>Come Creare Password Sicure</h2>
          <p>Le password sono la prima linea di difesa per i tuoi account. Scopri come crearle e gestirle in modo sicuro.</p>
        </div>

        <div className="guide-section">
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Caratteristiche di una Password Forte</h3>
                <p>Una password sicura deve avere queste caratteristiche:</p>
                <ul>
                  <li><strong>Almeno 12 caratteri</strong> di lunghezza</li>
                  <li><strong>Lettere maiuscole e minuscole</strong> (A-Z, a-z)</li>
                  <li><strong>Numeri</strong> (0-9)</li>
                  <li><strong>Simboli speciali</strong> (!@#$%^&*)</li>
                  <li><strong>Nessuna informazione personale</strong> (nome, data di nascita)</li>
                  <li><strong>Nessuna parola comune</strong> o facilmente indovinabile</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Metodi per Creare Password Sicure</h3>
                <p>Ecco alcuni metodi efficaci per creare password forti:</p>
                <ul>
                  <li><strong>Frase passphrase:</strong> "IlMioCaneSiChiamaRex2024!"</li>
                  <li><strong>Acronimo:</strong> "MpCvSf2024!" (Mia password è molto sicura e forte 2024!)</li>
                  <li><strong>Generatore automatico:</strong> Usa strumenti online sicuri</li>
                  <li><strong>Password manager:</strong> Genera e memorizza password complesse</li>
                  <li><strong>Metodo delle prime lettere:</strong> Da una frase memorabile</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Gestione delle Password</h3>
                <p>Come gestire le tue password in modo sicuro:</p>
                <ul>
                  <li><strong>Password uniche</strong> per ogni account</li>
                  <li><strong>Non condividere mai</strong> le tue password</li>
                  <li><strong>Non scrivere</strong> le password su carta</li>
                  <li><strong>Cambia regolarmente</strong> le password importanti</li>
                  <li><strong>Usa un password manager</strong> per memorizzarle</li>
                  <li><strong>Attiva l'autenticazione a due fattori</strong> quando possibile</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Password Manager</h3>
                <p>I password manager sono strumenti essenziali per la sicurezza:</p>
                <ul>
                  <li><strong>Generano password sicure</strong> automaticamente</li>
                  <li><strong>Memorizzano</strong> tutte le tue password</li>
                  <li><strong>Compilano automaticamente</strong> i form di login</li>
                  <li><strong>Sincronizzano</strong> tra i tuoi dispositivi</li>
                  <li><strong>Rilevano password deboli</strong> o duplicate</li>
                  <li><strong>Avvisano</strong> in caso di violazioni</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Autenticazione a Due Fattori (2FA)</h3>
                <p>Rafforza la sicurezza dei tuoi account con la 2FA:</p>
                <ul>
                  <li><strong>SMS:</strong> Codice inviato via messaggio</li>
                  <li><strong>App authenticator:</strong> Google Authenticator, Authy</li>
                  <li><strong>Email:</strong> Codice inviato via email</li>
                  <li><strong>Chiavi hardware:</strong> YubiKey, Titan Security Key</li>
                  <li><strong>Biometria:</strong> Impronte digitali, riconoscimento facciale</li>
                  <li><strong>Backup codes:</strong> Codici di emergenza</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Segnali di Allarme</h3>
                <p>Riconosci i segnali che indicano un problema di sicurezza:</p>
                <ul>
                  <li><strong>Email sospette</strong> di reset password non richieste</li>
                  <li><strong>Attività insolite</strong> nei tuoi account</li>
                  <li><strong>Notifiche di accesso</strong> da dispositivi sconosciuti</li>
                  <li><strong>Modifiche non autorizzate</strong> ai tuoi profili</li>
                  <li><strong>Messaggi di errore</strong> durante il login</li>
                  <li><strong>Account bloccati</strong> senza motivo apparente</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="info-section">
          <div className="content-container">
            <h2>Strumenti di Sicurezza</h2>
            <div className="info-grid">
              <PasswordSecurityCard
                icon="🔐"
                title="Password Manager"
                description="Gestisci tutte le tue password in modo sicuro con un password manager affidabile."
                linkText="Scopri i Migliori"
                linkHref="https://1password.com/"
              />
              <PasswordSecurityCard
                icon="🔑"
                title="Generatore Password"
                description="Crea password sicure e complesse con i migliori generatori online."
                linkText="Genera Password"
                linkHref="https://www.lastpass.com/features/password-generator"
              />
              <PasswordSecurityCard
                icon="🛡️"
                title="Autenticazione 2FA"
                description="Proteggi i tuoi account con l'autenticazione a due fattori."
                linkText="Attiva 2FA"
                linkHref="https://authy.com/"
              />
              <PasswordSecurityCard
                icon="🔍"
                title="Controllo Sicurezza"
                description="Verifica se le tue password sono state compromesse in violazioni di dati."
                linkText="Controlla Ora"
                linkHref="https://haveibeenpwned.com/"
              />
            </div>
          </div>
        </div>

        <div className="resources-section">
          <div className="content-container">
            <h2>Risorse Utili</h2>
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">🔒</div>
                <h3>1Password</h3>
                <p>Uno dei password manager più sicuri e facili da usare</p>
                <a href="https://1password.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Prova Gratis</a>
              </div>
              <div className="resource-card">
                <div className="resource-icon">🔑</div>
                <h3>LastPass</h3>
                <p>Password manager popolare con funzionalità avanzate</p>
                <a href="https://www.lastpass.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Scarica</a>
              </div>
              <div className="resource-card">
                <div className="resource-icon">🛡️</div>
                <h3>Google Authenticator</h3>
                <p>App per l'autenticazione a due fattori di Google</p>
                <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2" target="_blank" rel="noopener noreferrer" className="resource-link">Installa</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordSecurity;
