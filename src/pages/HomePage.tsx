import React from 'react';
import SearchBar from '../components/SearchBar';
import HomepageCard from '../components/HomepageCard';
import RecentArticles from '../components/RecentArticles';
import HeroImageSection from '../components/HeroImageSection';
import './HomePage.css';

const HomePage: React.FC = () => {

  return (
    <div className="homepage">
      <HeroImageSection />
      
      <SearchBar />
      
      <div className="homepage-cards">
        <HomepageCard
          to="/pubblica-amministrazione"
          icon="🏛️"
          title="Pubblica Amministrazione"
          description="Guide semplici per accedere ai servizi digitali della PA"
          color="blue"
        />
        
        <HomepageCard
          to="/scam"
          icon="🛡️"
          title="Protezione dalle Truffe"
          description="Impara a riconoscere e difenderti dalle truffe online"
          color="red"
        />
        
        <HomepageCard
          to="/slang"
          icon="📚"
          title="Glossario Digitale"
          description="Decifra i termini del mondo digitale con spiegazioni semplici"
          color="green"
        />
      </div>
      
      <RecentArticles />
    </div>
  );
};

export default HomePage;
