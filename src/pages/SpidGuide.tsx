import React from 'react';
import './SpidGuide.css';
import SpidInfoCard from '../components/SpidInfoCard';
import { useCounter } from '../hooks/useCounter';

const SpidGuide: React.FC = () => {
  const { count: levelsCount } = useCounter(3, { duration: 1500, delay: 500 });
  const { count: freeCount } = useCounter(100, { duration: 1800, delay: 1000 });
  const { count: timeCount } = useCounter(15, { duration: 2000, delay: 1500 });

  return (
    <div className="spid-guide-page">
      <div className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Come Creare lo SPID</h1>
            <p>La tua guida completa per ottenere le credenziali SPID in modo sicuro e semplice. Accedi a tutti i servizi digitali della Pubblica Amministrazione con un'unica identità digitale.</p>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{levelsCount}</span>
                <span className="stat-label">Livelli di Sicurezza</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{freeCount}%</span>
                <span className="stat-label">Gratuito</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{timeCount} min</span>
                <span className="stat-label">Tempo Richiesto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="spid-content">
        <div className="content-container">
          <h2>Guida Video</h2>
          <p>Guarda questo video tutorial per vedere la procedura completa di creazione dello SPID.</p>
        </div>
        
        <div className="video-container">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/3wGtFeTnMks"
              title="Come Creare lo SPID - Guida Completa"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="guide-section">
          <div className="content-container">
            <h2>Guida Testuale Passo-Passo</h2>
            <p>Segui questa guida dettagliata per creare il tuo SPID in modo autonomo e sicuro.</p>
          </div>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Scegli il tuo Fornitore di Identità</h3>
                <p>I fornitori di identità (Identity Provider) sono enti autorizzati che rilasciano le credenziali SPID. I principali sono:</p>
                <ul>
                  <li><strong>Poste Italiane</strong> - PosteID</li>
                  <li><strong>Aruba</strong> - Aruba ID</li>
                  <li><strong>Infocert</strong> - Infocert ID</li>
                  <li><strong>Sielte</strong> - Sielte ID</li>
                  <li><strong>Namirial</strong> - Namirial ID</li>
                  <li><strong>Lepida</strong> - Lepida ID</li>
                </ul>
                <p>Ti consigliamo di scegliere quello che ti sembra più comodo o che già utilizzi per altri servizi.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Accedi al Sito del Fornitore</h3>
                <p>Vai sul sito web del fornitore di identità scelto e cerca la sezione "Richiedi SPID" o "Registrati".</p>
                <p>Esempi di link diretti:</p>
                <ul>
                  <li><a href="https://posteid.poste.it" target="_blank" rel="noopener noreferrer">PosteID - Poste Italiane</a></li>
                  <li><a href="https://www.aruba.it/autenticazione/aruba-id" target="_blank" rel="noopener noreferrer">Aruba ID</a></li>
                  <li><a href="https://www.infocert.it/spid" target="_blank" rel="noopener noreferrer">Infocert ID</a></li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Inserisci i Tuoi Dati Personali</h3>
                <p>Compila il modulo di registrazione con i tuoi dati:</p>
                <ul>
                  <li><strong>Nome e Cognome</strong> - Come riportati sulla carta d'identità</li>
                  <li><strong>Codice Fiscale</strong> - Il tuo codice fiscale</li>
                  <li><strong>Data di Nascita</strong> - Nel formato GG/MM/AAAA</li>
                  <li><strong>Luogo di Nascita</strong> - Comune e provincia</li>
                  <li><strong>Email</strong> - Un indirizzo email valido</li>
                  <li><strong>Numero di Telefono</strong> - Cellulare o fisso</li>
                </ul>
                <p><strong>Importante:</strong> Assicurati che tutti i dati siano corretti e corrispondano ai documenti ufficiali.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Verifica la Tua Identità</h3>
                <p>Il fornitore di identità deve verificare che tu sia effettivamente chi dichiari di essere. Ci sono diversi metodi:</p>
                <ul>
                  <li><strong>Videochiamata</strong> - Con un operatore che verificherà i tuoi documenti</li>
                  <li><strong>Presenza fisica</strong> - Recandoti in un ufficio del fornitore</li>
                  <li><strong>Carta d'Identità Elettronica (CIE)</strong> - Se hai la CIE 3.0</li>
                  <li><strong>Poste Italiane</strong> - Se hai un conto corrente Poste</li>
                </ul>
                <p>Il metodo più comune è la videochiamata, che richiede:</p>
                <ul>
                  <li>Un documento d'identità valido (carta d'identità o passaporto)</li>
                  <li>Codice fiscale (tessera sanitaria o attestazione)</li>
                  <li>Una buona connessione internet</li>
                  <li>Un dispositivo con webcam e microfono</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Imposta le Credenziali</h3>
                <p>Dopo la verifica dell'identità, dovrai impostare le tue credenziali SPID:</p>
                <ul>
                  <li><strong>Username</strong> - Un nome utente univoco</li>
                  <li><strong>Password</strong> - Una password sicura (almeno 8 caratteri, con lettere, numeri e simboli)</li>
                  <li><strong>PIN</strong> - Un codice numerico di 6 cifre</li>
                </ul>
                <p><strong>Consigli per la sicurezza:</strong></p>
                <ul>
                  <li>Scegli una password complessa e unica</li>
                  <li>Non condividere mai le tue credenziali</li>
                  <li>Usa un PIN facile da ricordare ma non ovvio</li>
                  <li>Attiva l'autenticazione a due fattori se disponibile</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Attiva il Tuo SPID</h3>
                <p>Completa l'attivazione seguendo le istruzioni del fornitore:</p>
                <ul>
                  <li>Conferma l'email ricevuta</li>
                  <li>Verifica il numero di telefono con l'SMS</li>
                  <li>Accetta i termini e condizioni</li>
                  <li>Completa eventuali verifiche aggiuntive</li>
                </ul>
                <p>Una volta completata l'attivazione, riceverai una conferma e potrai iniziare a utilizzare il tuo SPID.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">7</div>
              <div className="step-content">
                <h3>Testa il Tuo SPID</h3>
                <p>Verifica che tutto funzioni correttamente:</p>
                <ul>
                  <li>Accedi al sito <a href="https://www.spid.gov.it" target="_blank" rel="noopener noreferrer">spid.gov.it</a></li>
                  <li>Prova a fare login con le tue credenziali</li>
                  <li>Testa l'accesso a un servizio pubblico (es. INPS, Agenzia delle Entrate)</li>
                </ul>
                <p>Se tutto funziona, il tuo SPID è attivo e pronto all'uso!</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="info-section">
          <div className="content-container">
            <h2>Informazioni Utili</h2>
            <div className="info-grid">
              <SpidInfoCard
                icon="🔒"
                title="Livelli di Sicurezza"
                description="SPID offre tre livelli di sicurezza (L1, L2, L3) per proteggere i tuoi dati in base al tipo di servizio."
              />
              <SpidInfoCard
                icon="⏰"
                title="Tempi di Attivazione"
                description="L'attivazione dello SPID richiede generalmente 15-30 minuti, a seconda del metodo di verifica scelto."
              />
              <SpidInfoCard
                icon="🆓"
                title="Completamente Gratuito"
                description="La richiesta e l'uso dello SPID sono completamente gratuiti per tutti i cittadini italiani."
              />
              <SpidInfoCard
                icon="🌐"
                title="Accesso Universale"
                description="Con SPID puoi accedere a oltre 6.000 servizi digitali della Pubblica Amministrazione."
              />
            </div>
          </div>
        </div>

        <div className="articles-section">
          <div className="content-container">
            <h2>Articoli Correlati</h2>
            <p>Scopri altri contenuti utili per approfondire il tema dell'identità digitale e dei servizi online.</p>
          </div>
          
          <div className="spid-articles-grid">
            <div className="spid-article-card">
              <div className="spid-article-image">
                <div className="spid-article-placeholder">🔐</div>
              </div>
              <div className="spid-article-content">
                <div className="spid-article-category">Sicurezza</div>
                <h3>Come Proteggere le Tue Credenziali SPID</h3>
                <p>Consigli pratici per mantenere al sicuro le tue credenziali SPID e evitare truffe online.</p>
                <div className="spid-article-meta">
                  <span className="spid-article-date">15 Gennaio 2025</span>
                  <span className="spid-article-read-time">5 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="spid-article-card">
              <div className="spid-article-image">
                <div className="spid-article-placeholder">📱</div>
              </div>
              <div className="spid-article-content">
                <div className="spid-article-category">Tecnologia</div>
                <h3>SPID vs CIE: Quale Scegliere?</h3>
                <p>Confronto dettagliato tra SPID e Carta d'Identità Elettronica per capire quale fa al caso tuo.</p>
                <div className="spid-article-meta">
                  <span className="spid-article-date">12 Gennaio 2025</span>
                  <span className="spid-article-read-time">7 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="spid-article-card">
              <div className="spid-article-image">
                <div className="spid-article-placeholder">🏛️</div>
              </div>
              <div className="spid-article-content">
                <div className="spid-article-category">Servizi PA</div>
                <h3>I Migliori Servizi Online della PA</h3>
                <p>Una guida ai servizi digitali più utili della Pubblica Amministrazione accessibili con SPID.</p>
                <div className="spid-article-meta">
                  <span className="spid-article-date">10 Gennaio 2025</span>
                  <span className="spid-article-read-time">8 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="spid-article-card">
              <div className="spid-article-image">
                <div className="spid-article-placeholder">🔧</div>
              </div>
              <div className="spid-article-content">
                <div className="spid-article-category">Troubleshooting</div>
                <h3>Problemi Comuni con SPID e Come Risolverli</h3>
                <p>Soluzioni ai problemi più frequenti che si possono incontrare durante l'uso di SPID.</p>
                <div className="spid-article-meta">
                  <span className="spid-article-date">8 Gennaio 2025</span>
                  <span className="spid-article-read-time">6 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="spid-article-card">
              <div className="spid-article-image">
                <div className="spid-article-placeholder">📊</div>
              </div>
              <div className="spid-article-content">
                <div className="spid-article-category">Statistiche</div>
                <h3>SPID in Numeri: I Dati del 2024</h3>
                <p>Analisi dei dati di utilizzo di SPID in Italia e trend di crescita dell'identità digitale.</p>
                <div className="spid-article-meta">
                  <span className="spid-article-date">5 Gennaio 2025</span>
                  <span className="spid-article-read-time">4 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="spid-article-card">
              <div className="spid-article-image">
                <div className="spid-article-placeholder">🚀</div>
              </div>
              <div className="spid-article-content">
                <div className="spid-article-category">Innovazione</div>
                <h3>Il Futuro dell'Identità Digitale in Italia</h3>
                <p>Scopri le novità e le evoluzioni previste per SPID e l'identità digitale italiana.</p>
                <div className="spid-article-meta">
                  <span className="spid-article-date">3 Gennaio 2025</span>
                  <span className="spid-article-read-time">9 min di lettura</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpidGuide;
