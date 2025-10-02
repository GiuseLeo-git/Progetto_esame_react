import React, { useEffect, useState } from "react";

interface Article {
  id: number;
  title: string;
  body: string;
}

const ArticlesSection: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/articoliPhishing.json");
        if (!response.ok) throw new Error("Errore nel caricamento degli articoli");
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError((err as Error).message || "Errore sconosciuto");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section aria-label="Sezione articoli" style={{ marginTop: "2rem" }}>
      {loading && <p>Caricamento articoli...</p>}
      {error && <p style={{ color: "red" }}>Errore: {error}</p>}

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {articles.map(({ id, title, body }) => (
          <li
            key={id}
            style={{
              marginBottom: "1rem",
              borderBottom: "1px solid #ccc",
              fontSize: "1.25rem", // testo più grande
              lineHeight: "1.7"
            }}
          >
            <h3 style={{ fontSize: "1.35rem" }}>{title}</h3>
            <p style={{ fontSize: "1.18rem" }}>{body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArticlesSection;