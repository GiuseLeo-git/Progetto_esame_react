import Header from "./HeaderPhishing";
import ArticlesSection from "./ArticlesSectionPhishing";
import "./phishing.css";

function Phishing() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <br></br>
      <div className="phishing-video-wrapper">
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/1iPRuIjPuKg?si=lfww9sPukyHx-Zch"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <ArticlesSection />
      </div>
    </div>
  );
}

export default Phishing;