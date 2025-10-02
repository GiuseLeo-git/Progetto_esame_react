import "./Article.css";

export default function Article() {
  const Slangs = [
    {
      id: 1,
      titolo: "Omg",
      img: "Wow.png",
      significato: "Espressione utilizzata in un momento di sorpresa o stupore",
    },
    {
      id: 2,
      titolo: "Tbh",
      img: "tbh.gif",
      significato: "Dicitura di to be honest",
    },

    {
      id: 3,
      titolo: "AKA",
      img: "Aka.png",
      significato: "Dicitura inglese di also know as",
    },
    {
      id: 4,
      titolo: "Based",
      img: "based.png",
      significato: "Usato spesso per concordare sarcasticamente",
    },
  ];

  return (
    <div className="article-container">
      {Slangs.map((slang) => (
        <div key={slang.id} className="article-card">
          <div className="article-img-container">
            <img className="article-img" src={slang.img} alt={slang.titolo} />
          </div>
          <div className="article-text">
            <a href="#">{slang.titolo}</a>
            <p>{slang.significato}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
