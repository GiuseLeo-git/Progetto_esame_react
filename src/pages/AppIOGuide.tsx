import React from 'react';
import './AppIOGuide.css';
import AppIOInfoCard from '../components/AppIOInfoCard';
import { useCounter } from '../hooks/useCounter';

const AppIOGuide: React.FC = () => {
  const { count: usersCount } = useCounter(6, { duration: 2000, delay: 500 });
  const { count: servicesCount } = useCounter(100, { duration: 1800, delay: 1000 });
  const { count: accessCount } = useCounter(24, { duration: 1500, delay: 1500 });

  return (
    <div className="appio-guide-page">
      <div className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>App IO: La Tua Finestra sui Servizi Pubblici</h1>
            <p>Scopri come utilizzare l'App IO per accedere a tutti i servizi della Pubblica Amministrazione italiana direttamente dal tuo smartphone. Un'unica app per gestire documenti, pagamenti e comunicazioni con la PA.</p>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{usersCount}M+</span>
                <span className="stat-label">Utenti Attivi</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{servicesCount}+</span>
                <span className="stat-label">Servizi Disponibili</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{accessCount}/7</span>
                <span className="stat-label">Accessibile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="appio-content">
        <div className="content-container">
          <h2>Guida Video</h2>
          <p>Guarda questo video tutorial per scoprire tutte le funzionalità dell'App IO e come utilizzarla al meglio.</p>
        </div>
        
        <div className="video-container">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/xaPX5rxaWww"
              title="App IO - Guida Completa"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="guide-section">
          <div className="content-container">
            <h2>Guida Testuale Passo-Passo</h2>
            <p>Segui questa guida dettagliata per utilizzare l'App IO in modo efficace e sicuro.</p>
          </div>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Cos'è l'App IO</h3>
                <p>L'App IO è l'applicazione ufficiale del Governo italiano che permette ai cittadini di accedere ai servizi digitali della Pubblica Amministrazione. Con IO puoi:</p>
                <ul>
                  <li><strong>Ricevere messaggi</strong> - Comunicazioni ufficiali da enti pubblici</li>
                  <li><strong>Gestire documenti</strong> - Carta d'identità, tessera sanitaria, patente</li>
                  <li><strong>Effettuare pagamenti</strong> - Bollette, tasse, multe tramite PagoPA</li>
                  <li><strong>Accedere ai servizi</strong> - INPS, Agenzia delle Entrate, Comuni</li>
                  <li><strong>Ricevere notifiche</strong> - Avvisi importanti e scadenze</li>
                </ul>
                <p>È sviluppata da PagoPA S.p.A. e rappresenta il punto di accesso unificato ai servizi digitali della PA.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Download e Installazione</h3>
                <p>Per installare l'App IO sul tuo smartphone:</p>
                <ul>
                  <li><strong>App Store</strong> - Cerca "IO" su iPhone/iPad</li>
                  <li><strong>Google Play</strong> - Cerca "IO" su Android</li>
                  <li><strong>Huawei AppGallery</strong> - Disponibile anche per dispositivi Huawei</li>
                </ul>
                <p><strong>Requisiti di sistema:</strong></p>
                <ul>
                  <li>iOS 12.0 o superiore</li>
                  <li>Android 7.0 (API level 24) o superiore</li>
                  <li>Connessione internet attiva</li>
                  <li>SPID o CIE per l'accesso</li>
                </ul>
                <p>L'app è completamente gratuita e non richiede abbonamenti.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Primo Accesso e Registrazione</h3>
                <p>Per accedere all'App IO per la prima volta:</p>
                <ul>
                  <li><strong>Apri l'app</strong> e tocca "Accedi"</li>
                  <li><strong>Scegli il metodo</strong> - SPID o Carta d'Identità Elettronica</li>
                  <li><strong>Inserisci le credenziali</strong> - Username e password SPID o PIN CIE</li>
                  <li><strong>Autorizza l'accesso</strong> - Conferma i permessi richiesti</li>
                  <li><strong>Completa il profilo</strong> - Aggiungi email e numero di telefono</li>
                </ul>
                <p><strong>Importante:</strong> Assicurati di avere le credenziali SPID o la CIE attiva prima di procedere.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Navigazione e Interfaccia</h3>
                <p>L'App IO ha un'interfaccia intuitiva organizzata in sezioni:</p>
                <ul>
                  <li><strong>Home</strong> - Dashboard con servizi e messaggi recenti</li>
                  <li><strong>Servizi</strong> - Catalogo di tutti i servizi disponibili</li>
                  <li><strong>Messaggi</strong> - Comunicazioni ricevute dagli enti</li>
                  <li><strong>Documenti</strong> - Gestione documenti personali</li>
                  <li><strong>Profilo</strong> - Impostazioni e dati personali</li>
                </ul>
                <p><strong>Funzionalità principali:</strong></p>
                <ul>
                  <li>Ricerca servizi per categoria o ente</li>
                  <li>Notifiche push per nuovi messaggi</li>
                  <li>Accesso rapido ai servizi più utilizzati</li>
                  <li>Storico delle attività e pagamenti</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Gestione dei Messaggi</h3>
                <p>L'App IO centralizza tutte le comunicazioni della PA:</p>
                <ul>
                  <li><strong>Messaggi automatici</strong> - Avvisi di scadenza, promemoria</li>
                  <li><strong>Comunicazioni ufficiali</strong> - Lettere, decreti, notifiche</li>
                  <li><strong>Ricevute di pagamento</strong> - Conferme di pagamenti effettuati</li>
                  <li><strong>Aggiornamenti servizi</strong> - Novità e modifiche ai servizi</li>
                </ul>
                <p><strong>Come gestire i messaggi:</strong></p>
                <ul>
                  <li>Leggi i messaggi non letti nella sezione dedicata</li>
                  <li>Archivia i messaggi importanti</li>
                  <li>Condividi documenti allegati</li>
                  <li>Imposta notifiche per messaggi urgenti</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Pagamenti e PagoPA</h3>
                <p>L'App IO integra PagoPA per i pagamenti:</p>
                <ul>
                  <li><strong>Bollette</strong> - Luce, gas, acqua, rifiuti</li>
                  <li><strong>Tasse</strong> - IMU, TARI, bollo auto</li>
                  <li><strong>Multe</strong> - Violazioni stradali e amministrative</li>
                  <li><strong>Servizi</strong> - Sanità, scuola, trasporti</li>
                </ul>
                <p><strong>Come pagare:</strong></p>
                <ul>
                  <li>Scansiona il codice QR del bollettino</li>
                  <li>Inserisci il codice avviso manualmente</li>
                  <li>Scegli il metodo di pagamento preferito</li>
                  <li>Conferma e ricevi la ricevuta</li>
                </ul>
                <p>Tutti i pagamenti sono sicuri e tracciabili.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">7</div>
              <div className="step-content">
                <h3>Gestione Documenti Digitali</h3>
                <p>L'App IO permette di gestire i tuoi documenti:</p>
                <ul>
                  <li><strong>Carta d'Identità</strong> - Visualizza e condividi i dati</li>
                  <li><strong>Tessera Sanitaria</strong> - Codice fiscale e dati sanitari</li>
                  <li><strong>Patente di Guida</strong> - Informazioni e scadenze</li>
                  <li><strong>Documenti vari</strong> - Certificati e attestazioni</li>
                </ul>
                <p><strong>Funzionalità documenti:</strong></p>
                <ul>
                  <li>Visualizzazione sicura dei dati</li>
                  <li>Condivisione tramite QR code</li>
                  <li>Notifiche per scadenze imminenti</li>
                  <li>Aggiornamento automatico dei dati</li>
                </ul>
                <p><strong>Nota:</strong> I documenti digitali hanno la stessa validità legale di quelli cartacei.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="info-section">
          <div className="content-container">
            <h2>Informazioni Utili</h2>
            <div className="info-grid">
              <AppIOInfoCard
                icon="📱"
                title="App Ufficiale"
                description="IO è l'applicazione ufficiale del Governo italiano per accedere ai servizi digitali della PA."
              />
              <AppIOInfoCard
                icon="🔐"
                title="Sicurezza Garantita"
                description="Tutti i dati sono protetti con i più alti standard di sicurezza e crittografia."
              />
              <AppIOInfoCard
                icon="🆓"
                title="Completamente Gratuita"
                description="L'App IO è completamente gratuita, senza costi di download o abbonamenti."
              />
              <AppIOInfoCard
                icon="🌐"
                title="Servizi Unificati"
                description="Un'unica app per accedere a oltre 100 servizi della Pubblica Amministrazione."
              />
            </div>
          </div>
        </div>

        <div className="articles-section">
          <div className="content-container">
            <h2>Articoli Correlati</h2>
            <p>Scopri altri contenuti utili per approfondire il tema dell'App IO e dei servizi digitali.</p>
          </div>
          
          <div className="appio-articles-grid">
            <div className="appio-article-card">
              <div className="appio-article-image">
                <div className="appio-article-placeholder">📱</div>
              </div>
              <div className="appio-article-content">
                <div className="appio-article-category">Tutorial</div>
                <h3>Come Configurare le Notifiche in App IO</h3>
                <p>Impara a personalizzare le notifiche push per ricevere solo gli avvisi che ti interessano.</p>
                <div className="appio-article-meta">
                  <span className="appio-article-date">20 Gennaio 2025</span>
                  <span className="appio-article-read-time">4 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="appio-article-card">
              <div className="appio-article-image">
                <div className="appio-article-placeholder">🔧</div>
              </div>
              <div className="appio-article-content">
                <div className="appio-article-category">Troubleshooting</div>
                <h3>Problemi Comuni con App IO e Soluzioni</h3>
                <p>Risolvi i problemi più frequenti che si possono incontrare durante l'uso dell'App IO.</p>
                <div className="appio-article-meta">
                  <span className="appio-article-date">18 Gennaio 2025</span>
                  <span className="appio-article-read-time">6 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="appio-article-card">
              <div className="appio-article-image">
                <div className="appio-article-placeholder">📄</div>
              </div>
              <div className="appio-article-content">
                <div className="appio-article-category">Documenti</div>
                <h3>Gestione Documenti Digitali in App IO</h3>
                <p>Guida completa per gestire e condividere i tuoi documenti digitali tramite l'App IO.</p>
                <div className="appio-article-meta">
                  <span className="appio-article-date">16 Gennaio 2025</span>
                  <span className="appio-article-read-time">7 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="appio-article-card">
              <div className="appio-article-image">
                <div className="appio-article-placeholder">💳</div>
              </div>
              <div className="appio-article-content">
                <div className="appio-article-category">Pagamenti</div>
                <h3>PagoPA e App IO: Pagamenti Integrati</h3>
                <p>Scopri come utilizzare PagoPA direttamente dall'App IO per i tuoi pagamenti alla PA.</p>
                <div className="appio-article-meta">
                  <span className="appio-article-date">14 Gennaio 2025</span>
                  <span className="appio-article-read-time">5 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="appio-article-card">
              <div className="appio-article-image">
                <div className="appio-article-placeholder">🏛️</div>
              </div>
              <div className="appio-article-content">
                <div className="appio-article-category">Servizi PA</div>
                <h3>I Migliori Servizi Accessibili da App IO</h3>
                <p>Una selezione dei servizi più utili della Pubblica Amministrazione disponibili su App IO.</p>
                <div className="appio-article-meta">
                  <span className="appio-article-date">12 Gennaio 2025</span>
                  <span className="appio-article-read-time">8 min di lettura</span>
                </div>
              </div>
            </div>

            <div className="appio-article-card">
              <div className="appio-article-image">
                <div className="appio-article-placeholder">🚀</div>
              </div>
              <div className="appio-article-content">
                <div className="appio-article-category">Innovazione</div>
                <h3>Il Futuro di App IO: Novità e Sviluppi</h3>
                <p>Scopri le nuove funzionalità e gli sviluppi futuri previsti per l'App IO.</p>
                <div className="appio-article-meta">
                  <span className="appio-article-date">10 Gennaio 2025</span>
                  <span className="appio-article-read-time">6 min di lettura</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppIOGuide;
