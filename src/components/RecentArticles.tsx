import React from 'react';
import { Link } from 'react-router-dom';
import './RecentArticles.css';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: 'pa' | 'scam' | 'slang';
  readTime: string;
  date: string;
  image: string;
}

const RecentArticles: React.FC = () => {
  const articles: Article[] = [
    {
      id: 1,
      title: "Come creare lo SPID: guida passo-passo per principianti",
      excerpt: "Una guida semplice e dettagliata per ottenere le credenziali SPID senza difficoltà. Tutto quello che devi sapere per accedere ai servizi digitali della PA.",
      category: 'pa',
      readTime: "5 min",
      date: "1 Ott 2025",
      image: "🏛️"
    },
    {
      id: 2,
      title: "Riconoscere le truffe via WhatsApp: i segnali da non ignorare",
      excerpt: "Impara a identificare i messaggi sospetti e proteggere i tuoi dati personali. Consigli pratici per navigare in sicurezza.",
      category: 'scam',
      readTime: "3 min",
      date: "28 Set 2025",
      image: "🛡️"
    },
    {
      id: 3,
      title: "Glossario digitale: cosa significa 'cloud' e perché è importante",
      excerpt: "Spiegazione semplice dei termini tecnici più comuni. Scopri il significato di cloud, backup e sincronizzazione.",
      category: 'slang',
      readTime: "4 min",
      date: "25 Set 2025",
      image: "📚"
    },
    {
      id: 4,
      title: "PagoPA: come pagare le bollette online in sicurezza",
      excerpt: "Tutto quello che devi sapere per utilizzare PagoPA senza rischi. Dalla registrazione ai pagamenti, passo dopo passo.",
      category: 'pa',
      readTime: "6 min",
      date: "22 Set 2025",
      image: "💳"
    },
    {
      id: 5,
      title: "Email sospette: come distinguere i messaggi legittimi dalle truffe",
      excerpt: "Guida completa per riconoscere le email di phishing e proteggere la tua casella di posta elettronica.",
      category: 'scam',
      readTime: "4 min",
      date: "19 Set 2025",
      image: "📧"
    },
    {
      id: 6,
      title: "Terminologia smartphone: parole che devi conoscere",
      excerpt: "App, widget, notifiche: scopri il significato dei termini più usati quando si parla di telefoni intelligenti.",
      category: 'slang',
      readTime: "3 min",
      date: "16 Set 2025",
      image: "📱"
    }
  ];

  const getCategoryInfo = (category: string) => {
    switch (category) {
      case 'pa':
        return { name: 'Pubblica Amministrazione', color: 'blue', link: '/pubblica-amministrazione' };
      case 'scam':
        return { name: 'Protezione Truffe', color: 'red', link: '/scam' };
      case 'slang':
        return { name: 'Glossario Digitale', color: 'green', link: '/slang' };
      default:
        return { name: 'Generale', color: 'gray', link: '/' };
    }
  };

  return (
    <section className="recent-articles">
      <div className="articles-container">
        <div className="articles-header">
          <h2>Articoli Recenti</h2>
          <p id="articles-description">Guide e consigli aggiornati per navigare nel mondo digitale con sicurezza</p>
        </div>
        
        <div className="articles-grid">
          {articles.map((article) => {
            const categoryInfo = getCategoryInfo(article.category);
            return (
              <article key={article.id} className={`article-card article-card--${categoryInfo.color}`}>
                <div className="article-image">
                  <span className="article-emoji">{article.image}</span>
                </div>
                
                <div className="article-content">
                  <div className="article-meta">
                    <Link 
                      to={categoryInfo.link} 
                      className={`article-category article-category--${categoryInfo.color}`}
                    >
                      {categoryInfo.name}
                    </Link>
                    <span className="article-date">{article.date}</span>
                  </div>
                  
                  <h3 className="article-title">
                    <Link to={`/articolo/${article.id}`}>{article.title}</Link>
                  </h3>
                  
                  <p className="article-excerpt">{article.excerpt}</p>
                  
                  <div className="article-footer">
                    <span className="article-read-time">{article.readTime} di lettura</span>
                    <Link to={`/articolo/${article.id}`} className="article-link">
                      Leggi tutto →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
