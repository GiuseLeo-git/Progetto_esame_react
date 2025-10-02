import Header from "./HeaderSpid";
import ArticlesSection from "./ArticlesSectionSpid";
import "./Spid.css";

function Spid() {
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
          src="https://www.youtube.com/embed/w5Z5EBG1R1M?si=veMv6V3MKWybhN5W"
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

export default Spid;