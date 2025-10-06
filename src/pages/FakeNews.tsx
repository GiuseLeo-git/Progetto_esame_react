import React from 'react';
import { useCounter } from '../hooks/useCounter';
import FakeNewsCard from '../components/FakeNewsCard';
import './FakeNews.css';

const FakeNews: React.FC = () => {
  const { count: detectionCount } = useCounter(88, { duration: 2000, delay: 500 });
  const { count: awarenessCount } = useCounter(92, { duration: 1800, delay: 1000 });
  const { count: protectionCount } = useCounter(95, { duration: 1500, delay: 1500 });

  return (
    <div className="fake-news-page scam-page">
      <div className="page-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Fake News Online</h1>
            <p>Impara a riconoscere e difenderti dalle notizie false che circolano sui social network</p>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{detectionCount}%</span>
                <span className="stat-label">Rilevamento</span>
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

      <div className="fake-news-content">
        <div className="content-container">
          <h2>Come Riconoscere le Fake News</h2>
          <p>Le notizie false sono un problema crescente. Scopri come identificarle e proteggerti dalla disinformazione.</p>
        </div>

        <div className="guide-section">
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Verifica la Fonte</h3>
                <p>Controlla sempre l'affidabilità della fonte:</p>
                <ul>
                  <li><strong>Controlla il dominio</strong> del sito web</li>
                  <li><strong>Verifica l'autore</strong> dell'articolo</li>
                  <li><strong>Cerca la fonte originale</strong> della notizia</li>
                  <li><strong>Controlla la data</strong> di pubblicazione</li>
                  <li><strong>Verifica se è un sito satirico</strong> o di intrattenimento</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Analizza il Contenuto</h3>
                <p>Esamina attentamente il contenuto della notizia:</p>
                <ul>
                  <li><strong>Titoli sensazionalistici</strong> spesso indicano fake news</li>
                  <li><strong>Errori grammaticali</strong> e di ortografia</li>
                  <li><strong>Linguaggio emotivo</strong> e polarizzante</li>
                  <li><strong>Mancanza di dettagli</strong> specifici</li>
                  <li><strong>Fonte non citata</strong> o generica</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Controlla le Immagini</h3>
                <p>Le immagini possono essere manipolate o fuorvianti:</p>
                <ul>
                  <li><strong>Usa la ricerca inversa</strong> delle immagini</li>
                  <li><strong>Verifica il contesto</strong> dell'immagine</li>
                  <li><strong>Controlla la data</strong> di scatto</li>
                  <li><strong>Cerca segni di manipolazione</strong> digitale</li>
                  <li><strong>Verifica se l'immagine</strong> è correlata alla notizia</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Verifica su Fonti Affidabili</h3>
                <p>Confronta la notizia con fonti attendibili:</p>
                <ul>
                  <li><strong>Controlla su siti di fact-checking</strong> (Pagella Politica, Bufale.net)</li>
                  <li><strong>Verifica su media tradizionali</strong> affidabili</li>
                  <li><strong>Cerca conferme</strong> da fonti multiple</li>
                  <li><strong>Controlla le dichiarazioni</strong> ufficiali</li>
                  <li><strong>Usa motori di ricerca</strong> per verificare</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Diffida delle Emozioni</h3>
                <p>Le fake news spesso sfruttano le emozioni:</p>
                <ul>
                  <li><strong>Notizie che suscitano rabbia</strong> o paura</li>
                  <li><strong>Contenuti che confermano</strong> i tuoi pregiudizi</li>
                  <li><strong>Storie troppo belle</strong> per essere vere</li>
                  <li><strong>Teorie del complotto</strong> senza prove</li>
                  <li><strong>Contenuti virali</strong> senza verifica</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Come Condividere Responsabilmente</h3>
                <p>Prima di condividere, segui queste regole:</p>
                <ul>
                  <li><strong>Verifica sempre</strong> prima di condividere</li>
                  <li><strong>Non condividere</strong> se hai dubbi</li>
                  <li><strong>Controlla la data</strong> della notizia</li>
                  <li><strong>Segnala le fake news</strong> alle piattaforme</li>
                  <li><strong>Educa gli altri</strong> sui pericoli delle fake news</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="info-section">
          <div className="content-container">
            <h2>Strumenti di Verifica</h2>
            <div className="info-grid">
              <FakeNewsCard
                icon="🔍"
                title="Fact-Checking"
                description="Utilizza siti specializzati per verificare la veridicità delle notizie e delle affermazioni."
                linkText="Verifica Ora"
                linkHref="https://www.pagellapolitica.it/"
              />
              <FakeNewsCard
                icon="🖼️"
                title="Ricerca Immagini"
                description="Controlla se le immagini sono state manipolate o usate fuori contesto."
                linkText="Controlla Immagini"
                linkHref="https://images.google.com/"
              />
              <FakeNewsCard
                icon="📱"
                title="App di Verifica"
                description="Scarica app dedicate per identificare e segnalare le fake news."
                linkText="Scarica App"
                linkHref="#app"
              />
              <FakeNewsCard
                icon="📚"
                title="Educazione Media"
                description="Impara le competenze digitali per navigare in modo critico nel mondo dell'informazione."
                linkText="Impara di Più"
                linkHref="#education"
              />
            </div>
          </div>
        </div>

        <div className="resources-section">
          <div className="content-container">
            <h2>Risorse Utili</h2>
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">📰</div>
                <h3>Pagella Politica</h3>
                <p>Il principale sito italiano di fact-checking per la politica</p>
                <a href="https://www.pagellapolitica.it/" target="_blank" rel="noopener noreferrer" className="resource-link">Visita</a>
              </div>
              <div className="resource-card">
                <div className="resource-icon">🔍</div>
                <h3>Bufale.net</h3>
                <p>Database delle bufale e fake news più comuni</p>
                <a href="https://www.bufale.net/" target="_blank" rel="noopener noreferrer" className="resource-link">Controlla</a>
              </div>
              <div className="resource-card">
                <div className="resource-icon">🌐</div>
                <h3>Google Fact Check</h3>
                <p>Strumento di Google per verificare le notizie</p>
                <a href="https://toolbox.google.com/factcheck/explorer" target="_blank" rel="noopener noreferrer" className="resource-link">Verifica</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FakeNews;
