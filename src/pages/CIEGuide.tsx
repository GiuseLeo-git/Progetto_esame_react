import React from 'react';
import './CIEGuide.css';
import CIEInfoCard from '../components/CIEInfoCard';
import { useCounter } from '../hooks/useCounter';

const CIEGuide: React.FC = () => {
  const { count: versionCount } = useCounter(3, { duration: 1500, delay: 500 });
  const { count: validityCount } = useCounter(10, { duration: 2000, delay: 1000 });
  const { count: securityCount } = useCounter(100, { duration: 1800, delay: 1500 });

  return (
    <div className="cie-guide-page">
      <div className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Carta d'Identità Elettronica (CIE)</h1>
            <p>Scopri tutto sulla Carta d'Identità Elettronica: come richiederla, attivarla e utilizzarla per accedere ai servizi digitali della Pubblica Amministrazione italiana. La CIE è il documento di identità del futuro.</p>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{versionCount}.0</span>
                <span className="stat-label">Versione Attuale</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{validityCount} anni</span>
                <span className="stat-label">Validità</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{securityCount}%</span>
                <span className="stat-label">Sicura</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cie-content">
        <div className="content-container">
          <h2>Guida Video</h2>
          <p>Guarda questo video tutorial per scoprire come richiedere, attivare e utilizzare la tua Carta d'Identità Elettronica.</p>
        </div>
        
        <div className="video-container">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/a1hKJP2b9PI"
              title="Carta d'Identità Elettronica - Guida Completa"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="guide-section">
          <div className="content-container">
            <h2>Guida Testuale Passo-Passo</h2>
            <p>Segui questa guida dettagliata per ottenere e utilizzare la tua Carta d'Identità Elettronica.</p>
          </div>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Cos'è la Carta d'Identità Elettronica</h3>
                <p>La Carta d'Identità Elettronica (CIE) è il documento di identità italiano che sostituisce gradualmente la carta d'identità cartacea. La CIE 3.0 offre:</p>
                <ul>
                  <li><strong>Identificazione digitale</strong> - Accesso ai servizi online della PA</li>
                  <li><strong>Firma digitale</strong> - Per documenti e contratti</li>
                  <li><strong>Autenticazione forte</strong> - Livello di sicurezza elevato</li>
                  <li><strong>Validità internazionale</strong> - Riconosciuta in tutta l'UE</li>
                  <li><strong>Durata decennale</strong> - Validità di 10 anni</li>
                </ul>
                <p>È emessa dal Ministero dell'Interno e contiene un microchip con i tuoi dati biometrici e certificati digitali.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Come Richiedere la CIE</h3>
                <p>Per richiedere la Carta d'Identità Elettronica:</p>
                <ul>
                  <li><strong>Prenota un appuntamento</strong> - Contatta il tuo Comune di residenza</li>
                  <li><strong>Prepara i documenti</strong> - Carta d'identità scaduta o in scadenza, 2 foto tessera</li>
                  <li><strong>Presentati all'appuntamento</strong> - Con i documenti richiesti</li>
                  <li><strong>Fai le foto</strong> - Scatto fotografico e impronte digitali</li>
                  <li><strong>Paga il contributo</strong> - Costo di circa 16,79€</li>
                </ul>
                <p><strong>Documenti necessari:</strong></p>
                <ul>
                  <li>Carta d'identità in corso di validità o scaduta da non più di 6 mesi</li>
                  <li>2 fotografie formato tessera identiche e recenti</li>
                  <li>Codice fiscale (tessera sanitaria)</li>
                  <li>Documento di pagamento del contributo</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Attivazione della CIE</h3>
                <p>Una volta ricevuta la CIE, devi attivarla per utilizzarla online:</p>
                <ul>
                  <li><strong>Vai su cie.gov.it</strong> - Sito ufficiale per l'attivazione</li>
                  <li><strong>Inserisci i dati</strong> - Numero della carta e codice di attivazione</li>
                  <li><strong>Imposta il PIN</strong> - Scegli un PIN di 8 cifre</li>
                  <li><strong>Conferma l'attivazione</strong> - Segui le istruzioni a schermo</li>
                  <li><strong>Testa l'accesso</strong> - Prova ad accedere a un servizio</li>
                </ul>
                <p><strong>Importante:</strong> Il codice di attivazione è fornito insieme alla CIE e ha validità limitata.</p>
                <p><strong>PIN:</strong> Scegli un PIN sicuro e memorizzalo, sarà necessario per ogni accesso.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Utilizzo della CIE Online</h3>
                <p>Con la CIE attivata puoi accedere a numerosi servizi:</p>
                <ul>
                  <li><strong>Servizi della PA</strong> - INPS, Agenzia delle Entrate, Comuni</li>
                  <li><strong>App IO</strong> - Accesso diretto senza SPID</li>
                  <li><strong>PagoPA</strong> - Pagamenti verso la Pubblica Amministrazione</li>
                  <li><strong>Servizi bancari</strong> - Accesso ai conti online</li>
                  <li><strong>Servizi privati</strong> - Enti convenzionati</li>
                </ul>
                <p><strong>Come accedere:</strong></p>
                <ul>
                  <li>Collega il lettore CIE al computer</li>
                  <li>Inserisci la CIE nel lettore</li>
                  <li>Digita il PIN quando richiesto</li>
                  <li>Conferma l'accesso</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Lettore CIE e Software</h3>
                <p>Per utilizzare la CIE online hai bisogno di:</p>
                <ul>
                  <li><strong>Lettore CIE</strong> - Dispositivo per leggere la carta</li>
                  <li><strong>Software CIE</strong> - Applicazione per l'autenticazione</li>
                  <li><strong>Browser compatibile</strong> - Chrome, Firefox, Edge, Safari</li>
                  <li><strong>Connessione internet</strong> - Per l'accesso ai servizi</li>
                </ul>
                <p><strong>Lettori CIE consigliati:</strong></p>
                <ul>
                  <li>Lettori USB con certificazione FIDO2</li>
                  <li>Lettori NFC per smartphone</li>
                  <li>Lettori Bluetooth wireless</li>
                </ul>
                <p><strong>Software:</strong> Scarica il software ufficiale da cie.gov.it</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Utilizzo su Smartphone</h3>
                <p>La CIE può essere utilizzata anche su smartphone:</p>
                <ul>
                  <li><strong>App CIE ID</strong> - Applicazione ufficiale</li>
                  <li><strong>Lettore NFC</strong> - Per smartphone compatibili</li>
                  <li><strong>Accesso rapido</strong> - Senza bisogno di lettore esterno</li>
                  <li><strong>Biometria</strong> - Utilizzo di impronte o riconoscimento facciale</li>
                </ul>
                <p><strong>Procedura su smartphone:</strong></p>
                <ul>
                  <li>Scarica l'App CIE ID</li>
                  <li>Attiva la CIE nell'app</li>
                  <li>Avvicina la carta al telefono</li>
                  <li>Inserisci il PIN</li>
                  <li>Accedi ai servizi</li>
                </ul>
                <p><strong>Vantaggi:</strong> Accesso più veloce e comodo rispetto al lettore USB.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">7</div>
              <div className="step-content">
                <h3>Manutenzione e Sicurezza</h3>
                <p>Per mantenere la CIE sicura e funzionante:</p>
                <ul>
                  <li><strong>Conservazione</strong> - Tienila in un luogo sicuro</li>
                  <li><strong>PIN sicuro</strong> - Non condividere mai il PIN</li>
                  <li><strong>Aggiornamenti</strong> - Mantieni aggiornato il software</li>
                  <li><strong>Backup</strong> - Salva i certificati se necessario</li>
                  <li><strong>Scadenza</strong> - Rinnova prima della scadenza</li>
                </ul>
                <p><strong>In caso di smarrimento:</strong></p>
                <ul>
                  <li>Denuncia immediatamente alle autorità</li>
                  <li>Richiedi il blocco della carta</li>
                  <li>Presenta denuncia di smarrimento</li>
                  <li>Richiedi una nuova CIE</li>
                </ul>
                <p><strong>Sicurezza:</strong> La CIE utilizza crittografia avanzata per proteggere i tuoi dati.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="info-section">
          <div className="content-container">
            <h2>Informazioni Utili</h2>
            <div className="info-grid">
              <CIEInfoCard
                icon="🔐"
                title="Sicurezza Avanzata"
                description="La CIE utilizza crittografia avanzata e certificati digitali per garantire la massima sicurezza dei tuoi dati."
              />
              <CIEInfoCard
                icon="⏰"
                title="Validità Decennale"
                description="La CIE ha una validità di 10 anni, molto più lunga rispetto alla carta d'identità cartacea."
              />
              <CIEInfoCard
                icon="🌐"
                title="Accesso Universale"
                description="Con la CIE puoi accedere a tutti i servizi digitali della PA e di enti convenzionati."
              />
              <CIEInfoCard
                icon="📱"
                title="Utilizzo Mobile"
                description="La CIE può essere utilizzata su smartphone tramite NFC e l'app CIE ID."
              />
            </div>
          </div>
        </div>

        <div className="articles-section">
          <div className="content-container">
            <h2>Articoli Correlati</h2>
            <p>Scopri altri contenuti utili per approfondire il tema della Carta d'Identità Elettronica.</p>
          </div>
          
          <div className="cie-articles-grid">
            <div className="cie-article-card">
              <div className="cie-article-image">
                <div className="cie-article-placeholder">🔧</div>
              </div>
              <div className="cie-article-content">
                <div className="cie-article-category">Troubleshooting</div>
                <h3>Problemi Comuni con la CIE e Soluzioni</h3>
                <p>Risolvi i problemi più frequenti che si possono incontrare durante l'uso della Carta d'Identità Elettronica.</p>
                <div className="cie-article-meta">
                  <span className="cie-article-date">22 Gennaio 2025</span>
                  <span className="cie-article-read-time">6 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="cie-article-card">
              <div className="cie-article-image">
                <div className="cie-article-placeholder">📱</div>
              </div>
              <div className="cie-article-content">
                <div className="cie-article-category">Mobile</div>
                <h3>Come Utilizzare la CIE su Smartphone</h3>
                <p>Guida completa per utilizzare la Carta d'Identità Elettronica direttamente dal tuo smartphone.</p>
                <div className="cie-article-meta">
                  <span className="cie-article-date">20 Gennaio 2025</span>
                  <span className="cie-article-read-time">5 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="cie-article-card">
              <div className="cie-article-image">
                <div className="cie-article-placeholder">🔐</div>
              </div>
              <div className="cie-article-content">
                <div className="cie-article-category">Sicurezza</div>
                <h3>CIE vs SPID: Quale Scegliere?</h3>
                <p>Confronto dettagliato tra Carta d'Identità Elettronica e SPID per capire quale fa al caso tuo.</p>
                <div className="cie-article-meta">
                  <span className="cie-article-date">18 Gennaio 2025</span>
                  <span className="cie-article-read-time">7 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="cie-article-card">
              <div className="cie-article-image">
                <div className="cie-article-placeholder">🏛️</div>
              </div>
              <div className="cie-article-content">
                <div className="cie-article-category">Servizi PA</div>
                <h3>Servizi Accessibili con la CIE</h3>
                <p>Una lista completa dei servizi della Pubblica Amministrazione accessibili con la Carta d'Identità Elettronica.</p>
                <div className="cie-article-meta">
                  <span className="cie-article-date">16 Gennaio 2025</span>
                  <span className="cie-article-read-time">8 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="cie-article-card">
              <div className="cie-article-image">
                <div className="cie-article-placeholder">💳</div>
              </div>
              <div className="cie-article-content">
                <div className="cie-article-category">Pagamenti</div>
                <h3>CIE e PagoPA: Pagamenti Integrati</h3>
                <p>Scopri come utilizzare la CIE per effettuare pagamenti tramite PagoPA in modo sicuro e veloce.</p>
                <div className="cie-article-meta">
                  <span className="cie-article-date">14 Gennaio 2025</span>
                  <span className="cie-article-read-time">4 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="cie-article-card">
              <div className="cie-article-image">
                <div className="cie-article-placeholder">🚀</div>
              </div>
              <div className="cie-article-content">
                <div className="cie-article-category">Innovazione</div>
                <h3>Il Futuro della CIE: CIE 4.0</h3>
                <p>Scopri le novità e le evoluzioni previste per la Carta d'Identità Elettronica del futuro.</p>
                <div className="cie-article-meta">
                  <span className="cie-article-date">12 Gennaio 2025</span>
                  <span className="cie-article-read-time">6 min di lettura</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CIEGuide;
