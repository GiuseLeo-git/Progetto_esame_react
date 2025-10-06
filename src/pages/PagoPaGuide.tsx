import React from 'react';
import './PagoPaGuide.css';
import PagoPaInfoCard from '../components/PagoPaInfoCard';
import { useCounter } from '../hooks/useCounter';

const PagoPaGuide: React.FC = () => {
  const { count: securityCount } = useCounter(100, { duration: 1800, delay: 500 });
  const { count: availabilityCount } = useCounter(24, { duration: 1500, delay: 1000 });
  const { count: commissionCount } = useCounter(0, { duration: 1000, delay: 1500 });

  return (
    <div className="pagopa-guide-page">
      <div className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>PagoPA: Come Funziona</h1>
            <p>La tua guida completa per pagare bollette e servizi pubblici online con PagoPA. Un sistema sicuro, veloce e conveniente per tutti i pagamenti verso la Pubblica Amministrazione.</p>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{securityCount}%</span>
                <span className="stat-label">Sicuro</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{availabilityCount}/7</span>
                <span className="stat-label">Disponibile</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{commissionCount}€</span>
                <span className="stat-label">Commissioni</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pagopa-content">
        <div className="content-container">
          <h2>Guida Video</h2>
          <p>Guarda questo video tutorial per capire come funziona PagoPA e come effettuare i tuoi pagamenti online.</p>
        </div>
        
        <div className="video-container">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/RHOAu5GwKnE"
              title="Come Funziona PagoPA - Guida Completa"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="guide-section">
          <div className="content-container">
            <h2>Guida Testuale Passo-Passo</h2>
            <p>Segui questa guida dettagliata per utilizzare PagoPA in modo sicuro ed efficace.</p>
          </div>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Cos'è PagoPA</h3>
                <p>PagoPA è la piattaforma nazionale per i pagamenti elettronici verso la Pubblica Amministrazione italiana. Permette di pagare:</p>
                <ul>
                  <li><strong>Bollette</strong> - Luce, gas, acqua, rifiuti</li>
                  <li><strong>Tasse</strong> - IMU, TARI, bollo auto</li>
                  <li><strong>Servizi</strong> - Sanità, scuola, trasporti</li>
                  <li><strong>Multe</strong> - Violazioni stradali e amministrative</li>
                  <li><strong>Permessi</strong> - Licenze, autorizzazioni</li>
                </ul>
                <p>È gestito da PagoPA S.p.A., una società pubblica controllata dal Ministero dell'Economia.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Come Accedere a PagoPA</h3>
                <p>Puoi accedere a PagoPA in diversi modi:</p>
                <ul>
                  <li><strong>App IO</strong> - L'app ufficiale della PA italiana</li>
                  <li><strong>Siti web</strong> - Portali degli enti pubblici</li>
                  <li><strong>Sportelli ATM</strong> - Bancomat e Poste</li>
                  <li><strong>Uffici postali</strong> - Poste Italiane</li>
                  <li><strong>Tabaccherie</strong> - Convenzionate</li>
                </ul>
                <p>Il metodo più comodo è tramite l'<strong>App IO</strong>, che ti permette di gestire tutto dal tuo smartphone.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Registrazione e Accesso</h3>
                <p>Per utilizzare PagoPA online, devi avere:</p>
                <ul>
                  <li><strong>SPID</strong> - Sistema Pubblico di Identità Digitale</li>
                  <li><strong>CIE</strong> - Carta d'Identità Elettronica</li>
                  <li><strong>Credenziali bancarie</strong> - Per i pagamenti</li>
                </ul>
                <p><strong>Passaggi per la registrazione:</strong></p>
                <ul>
                  <li>Scarica l'App IO dal tuo store</li>
                  <li>Accedi con SPID o CIE</li>
                  <li>Verifica la tua identità</li>
                  <li>Collega i tuoi metodi di pagamento</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Metodi di Pagamento</h3>
                <p>PagoPA supporta diversi metodi di pagamento:</p>
                <ul>
                  <li><strong>Carta di credito/debito</strong> - Visa, Mastercard, American Express</li>
                  <li><strong>Bonifico bancario</strong> - SEPA e istantaneo</li>
                  <li><strong>PayPal</strong> - Per pagamenti online</li>
                  <li><strong>Satispay</strong> - App di pagamento</li>
                  <li><strong>Conto corrente</strong> - Addebito diretto</li>
                </ul>
                <p><strong>Importante:</strong> Non ci sono commissioni per i pagamenti PagoPA, ma la tua banca potrebbe applicare costi per il servizio.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Come Effettuare un Pagamento</h3>
                <p>Procedura per pagare con PagoPA:</p>
                <ul>
                  <li><strong>Trova il bollettino</strong> - Cerca il codice QR o il codice avviso</li>
                  <li><strong>Scansiona o inserisci</strong> - Usa la fotocamera o digita il codice</li>
                  <li><strong>Verifica i dati</strong> - Controlla beneficiario, importo e scadenza</li>
                  <li><strong>Scegli il pagamento</strong> - Seleziona il metodo preferito</li>
                  <li><strong>Conferma</strong> - Autorizza il pagamento</li>
                  <li><strong>Ricevi conferma</strong> - Salva la ricevuta</li>
                </ul>
                <p>Il pagamento viene elaborato in tempo reale e ricevi immediatamente la conferma.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Gestione dei Pagamenti</h3>
                <p>Con PagoPA puoi:</p>
                <ul>
                  <li><strong>Visualizzare la cronologia</strong> - Tutti i pagamenti effettuati</li>
                  <li><strong>Programmare pagamenti</strong> - Per le scadenze future</li>
                  <li><strong>Ricevere notifiche</strong> - Per nuove bollette</li>
                  <li><strong>Gestire i metodi</strong> - Aggiungere/rimuovere carte</li>
                  <li><strong>Controllare i saldi</strong> - Importi pagati e in sospeso</li>
                </ul>
                <p>Tutto è tracciabile e hai sempre la cronologia completa dei tuoi pagamenti.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">7</div>
              <div className="step-content">
                <h3>Sicurezza e Protezione</h3>
                <p>PagoPA garantisce massima sicurezza:</p>
                <ul>
                  <li><strong>Crittografia SSL</strong> - Dati protetti durante la trasmissione</li>
                  <li><strong>Autenticazione forte</strong> - SPID e CIE per l'accesso</li>
                  <li><strong>Monitoraggio 24/7</strong> - Controllo continuo delle transazioni</li>
                  <li><strong>Conformità PCI DSS</strong> - Standard internazionali di sicurezza</li>
                </ul>
                <p><strong>Consigli per la sicurezza:</strong></p>
                <ul>
                  <li>Usa sempre connessioni sicure (HTTPS)</li>
                  <li>Non condividere mai le tue credenziali</li>
                  <li>Controlla regolarmente i movimenti</li>
                  <li>Segnala immediatamente transazioni sospette</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="info-section">
          <div className="content-container">
            <h2>Informazioni Utili</h2>
            <div className="info-grid">
              <PagoPaInfoCard
                icon="🔒"
                title="Sicurezza Garantita"
                description="PagoPA utilizza i più alti standard di sicurezza per proteggere i tuoi pagamenti e dati personali."
              />
              <PagoPaInfoCard
                icon="⚡"
                title="Pagamenti Istantanei"
                description="I pagamenti vengono elaborati in tempo reale, ricevi subito la conferma e la ricevuta."
              />
              <PagoPaInfoCard
                icon="💰"
                title="Zero Commissioni"
                description="PagoPA non applica commissioni sui pagamenti. Eventuali costi dipendono dalla tua banca."
              />
              <PagoPaInfoCard
                icon="📱"
                title="App Mobile"
                description="Gestisci tutti i tuoi pagamenti comodamente dal tuo smartphone con l'App IO."
              />
            </div>
          </div>
        </div>

        <div className="articles-section">
          <div className="content-container">
            <h2>Articoli Correlati</h2>
            <p>Scopri altri contenuti utili per approfondire il tema dei pagamenti digitali e dei servizi online.</p>
          </div>
          
          <div className="pagopa-articles-grid">
            <div className="pagopa-article-card">
              <div className="pagopa-article-image">
                <div className="pagopa-article-placeholder">💳</div>
              </div>
              <div className="pagopa-article-content">
                <div className="pagopa-article-category">Pagamenti</div>
                <h3>Come Configurare i Metodi di Pagamento in PagoPA</h3>
                <p>Guida completa per aggiungere e gestire carte, bonifici e altri metodi di pagamento nel tuo account PagoPA.</p>
                <div className="pagopa-article-meta">
                  <span className="pagopa-article-date">18 Gennaio 2025</span>
                  <span className="pagopa-article-read-time">6 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="pagopa-article-card">
              <div className="pagopa-article-image">
                <div className="pagopa-article-placeholder">📱</div>
              </div>
              <div className="pagopa-article-content">
                <div className="pagopa-article-category">App IO</div>
                <h3>App IO: La Tua Finestra sui Servizi Pubblici</h3>
                <p>Tutto quello che devi sapere sull'App IO per gestire pagamenti, documenti e servizi della PA dal tuo smartphone.</p>
                <div className="pagopa-article-meta">
                  <span className="pagopa-article-date">16 Gennaio 2025</span>
                  <span className="pagopa-article-read-time">8 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="pagopa-article-card">
              <div className="pagopa-article-image">
                <div className="pagopa-article-placeholder">🏦</div>
              </div>
              <div className="pagopa-article-content">
                <div className="pagopa-article-category">Banche</div>
                <h3>PagoPA e le Banche: Costi e Convenzioni</h3>
                <p>Analisi dettagliata dei costi applicati dalle diverse banche per i pagamenti PagoPA e come risparmiare.</p>
                <div className="pagopa-article-meta">
                  <span className="pagopa-article-date">14 Gennaio 2025</span>
                  <span className="pagopa-article-read-time">7 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="pagopa-article-card">
              <div className="pagopa-article-image">
                <div className="pagopa-article-placeholder">🔧</div>
              </div>
              <div className="pagopa-article-content">
                <div className="pagopa-article-category">Troubleshooting</div>
                <h3>Problemi Comuni con PagoPA e Soluzioni</h3>
                <p>Risolvi i problemi più frequenti che si possono incontrare durante l'uso di PagoPA e dei pagamenti online.</p>
                <div className="pagopa-article-meta">
                  <span className="pagopa-article-date">12 Gennaio 2025</span>
                  <span className="pagopa-article-read-time">5 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="pagopa-article-card">
              <div className="pagopa-article-image">
                <div className="pagopa-article-placeholder">📊</div>
              </div>
              <div className="pagopa-article-content">
                <div className="pagopa-article-category">Statistiche</div>
                <h3>PagoPA in Numeri: I Dati del 2024</h3>
                <p>Analisi dei dati di utilizzo di PagoPA in Italia e trend di crescita dei pagamenti digitali verso la PA.</p>
                <div className="pagopa-article-meta">
                  <span className="pagopa-article-date">10 Gennaio 2025</span>
                  <span className="pagopa-article-read-time">4 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="pagopa-article-card">
              <div className="pagopa-article-image">
                <div className="pagopa-article-placeholder">🚀</div>
              </div>
              <div className="pagopa-article-content">
                <div className="pagopa-article-category">Innovazione</div>
                <h3>Il Futuro dei Pagamenti Digitali in Italia</h3>
                <p>Scopri le novità e le evoluzioni previste per PagoPA e il sistema dei pagamenti digitali italiani.</p>
                <div className="pagopa-article-meta">
                  <span className="pagopa-article-date">8 Gennaio 2025</span>
                  <span className="pagopa-article-read-time">9 min di lettura</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagoPaGuide;
