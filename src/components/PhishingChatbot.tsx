import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PhishingChatbot.css';

interface AnalysisResult {
  isPhishing: boolean;
  confidence: number;
  analysis: string;
  redFlags: string[];
  recommendations: string[];
}

const PhishingChatbot: React.FC = () => {
  const location = useLocation();
  const [emailText, setEmailText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [showForm, setShowForm] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mostra il chatbot solo nella pagina Phishing
  if (location.pathname !== '/phishing') {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmailText(e.target.value);
  };

  const analyzeEmail = async () => {
    if (!emailText.trim()) {
      alert('Per favore, inserisci il testo dell\'email da analizzare.');
      return;
    }

    setIsAnalyzing(true);
    
    // Simulazione dell'analisi (in un'app reale, questo sarebbe una chiamata API)
    setTimeout(() => {
      const result = performPhishingAnalysis(emailText);
      setAnalysisResult(result);
      setIsAnalyzing(false);
      setShowForm(false);
    }, 2000);
  };

  const performPhishingAnalysis = (email: string): AnalysisResult => {
    const redFlags: string[] = [];
    const recommendations: string[] = [];
    let phishingScore = 0;

    // Analisi dei segnali di allarme
    const suspiciousPatterns = [
      { pattern: /urgente|urgent|immediatamente|subito|tempo limitato/i, weight: 2 },
      { pattern: /clicca qui|click here|link|collegamento/i, weight: 1 },
      { pattern: /verifica|conferma|aggiorna|account/i, weight: 1 },
      { pattern: /sospensione|blocco|chiusura/i, weight: 2 },
      { pattern: /bonus|premio|vincita|gratis/i, weight: 1 },
      { pattern: /@gmail\.com|@yahoo\.com|@hotmail\.com/i, weight: 1 },
      { pattern: /http:\/\/|https:\/\/[^\/]+\.[^\/]+/i, weight: 1 },
      { pattern: /€|\$|denaro|pagamento|carta/i, weight: 1 }
    ];

    suspiciousPatterns.forEach(({ pattern, weight }) => {
      if (pattern.test(email)) {
        phishingScore += weight;
        redFlags.push(`Trovato: "${pattern.source}"`);
      }
    });

    // Analisi della lunghezza e struttura
    if (email.length < 100) {
      phishingScore += 1;
      redFlags.push('Email molto breve');
    }

    if (email.split(' ').length < 20) {
      phishingScore += 1;
      redFlags.push('Contenuto limitato');
    }

    // Determinazione del risultato
    let isPhishing = false;
    let confidence = 0;
    let analysis = '';

    if (phishingScore >= 5) {
      isPhishing = true;
      confidence = Math.min(95, 60 + phishingScore * 5);
      analysis = '⚠️ ALTA PROBABILITÀ DI PHISHING';
      recommendations.push('Non cliccare su alcun link');
      recommendations.push('Non fornire dati personali');
      recommendations.push('Elimina immediatamente l\'email');
      recommendations.push('Segnala come spam');
    } else if (phishingScore >= 3) {
      isPhishing = false;
      confidence = Math.min(85, 40 + phishingScore * 8);
      analysis = '⚠️ PRESTA ATTENZIONE';
      recommendations.push('Verifica la fonte dell\'email');
      recommendations.push('Controlla l\'indirizzo del mittente');
      recommendations.push('Non cliccare su link sospetti');
      recommendations.push('Contatta direttamente l\'ente');
    } else {
      isPhishing = false;
      confidence = Math.min(90, 70 + (3 - phishingScore) * 10);
      analysis = '✅ EMAIL SICURA';
      recommendations.push('L\'email sembra legittima');
      recommendations.push('Puoi procedere con fiducia');
      recommendations.push('Mantieni sempre la vigilanza');
    }

    return {
      isPhishing,
      confidence,
      analysis,
      redFlags,
      recommendations
    };
  };

  const resetAnalysis = () => {
    setAnalysisResult(null);
    setShowForm(true);
    setEmailText('');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetAnalysis();
  };

  return (
    <>
      {/* Pulsante fisso */}
      <button className="floating-chatbot-button" onClick={openModal}>
        <span className="chatbot-icon">🔍</span>
        <span className="chatbot-text">Analizza Email</span>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="chatbot-modal-overlay" onClick={closeModal}>
          <div className="chatbot-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <p className="modal-description">Incolla il testo dell'email sospetta per ricevere un'analisi dettagliata</p>

              {showForm && (
                <div className="chatbot-form">
                  <div className="email-analysis-section">
                    <h4>Email da Analizzare</h4>
                    <textarea
                      name="emailText"
                      value={emailText}
                      onChange={handleInputChange}
                      placeholder="Incolla qui il testo dell'email sospetta che hai ricevuto..."
                      rows={8}
                    />
                    <button 
                      className="analyze-button"
                      onClick={analyzeEmail}
                      disabled={isAnalyzing}
                    >
                      {isAnalyzing ? '🔄 Analizzando...' : '🔍 Analizza Email'}
                    </button>
                  </div>
                </div>
              )}

              {isAnalyzing && (
                <div className="analyzing">
                  <div className="loading-spinner"></div>
                  <p>Stiamo analizzando la tua email...</p>
                </div>
              )}

              {analysisResult && (
                <div className="analysis-result">
                  <div className={`result-header ${analysisResult.isPhishing ? 'phishing' : 'safe'}`}>
                    <h4>{analysisResult.analysis}</h4>
                    <div className="confidence-score">
                      <span>Affidabilità: {analysisResult.confidence}%</span>
                    </div>
                  </div>

                  <div className="result-content">
                    <div className="red-flags">
                      <h5>🚩 Segnali Rilevati</h5>
                      <ul>
                        {analysisResult.redFlags.map((flag, index) => (
                          <li key={index}>{flag}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="recommendations">
                      <h5>💡 Raccomandazioni</h5>
                      <ul>
                        {analysisResult.recommendations.map((rec, index) => (
                          <li key={index}>{rec}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="result-actions">
                    <button className="new-analysis-button" onClick={resetAnalysis}>
                      🔄 Nuova Analisi
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhishingChatbot;
