import React, { useState, useEffect, useRef } from 'react';
import LeftPanel from './LeftPanel';
import './HeroImageSection.css';

const HeroImageSection: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroImageRef.current) {
        const rect = heroImageRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const heroImage = heroImageRef.current;
    if (heroImage) {
      heroImage.addEventListener('mousemove', handleMouseMove);
      return () => heroImage.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleButtonClick = (buttonNumber: number) => {
    setActiveButton(activeButton === buttonNumber ? null : buttonNumber);
  };


  const getButtonText = (buttonNumber: number) => {
    const texts = {
      1: "Pubblica Amministrazione",
      2: "Truffe Online", 
      3: "Glossario Digitale"
    };
    return texts[buttonNumber as keyof typeof texts] || "";
  };


  const getButtonStyle = (buttonNumber: number, originalStyle: React.CSSProperties) => {
    if (!mousePosition.x || !mousePosition.y) return originalStyle;

    const buttonPositions = {
      1: { x: window.innerWidth * 0.2, y: window.innerHeight * 0.25 },
      2: { x: window.innerWidth * 0.35, y: window.innerHeight * 0.6 },
      3: { x: window.innerWidth * 0.45, y: window.innerHeight * 0.15 }
    };

    const buttonPos = buttonPositions[buttonNumber as keyof typeof buttonPositions];
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - buttonPos.x, 2) + 
      Math.pow(mousePosition.y - buttonPos.y, 2)
    );

    if (distance < 250) {
      const force = Math.pow((250 - distance) / 250, 1.5);
      const angle = Math.atan2(mousePosition.y - buttonPos.y, mousePosition.x - buttonPos.x);
      const moveX = Math.cos(angle) * force * 50;
      const moveY = Math.sin(angle) * force * 50;

      return {
        ...originalStyle,
        transform: `translate(${moveX}px, ${moveY}px) scale(${1 + force * 0.15})`,
        transition: 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      };
    }

    return {
      ...originalStyle,
      transform: 'translate(0px, 0px) scale(1)',
      transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    };
  };

  return (
    <div className="hero-section-wrapper">
      {activeButton !== null && (
        <div className="global-close-button" onClick={() => setActiveButton(null)}>
          <span>✕</span>
        </div>
      )}
      
      <LeftPanel 
        isVisible={activeButton === 1} 
        onClose={() => setActiveButton(null)}
        buttonNumber={1}
        showCloseButton={false}
      />
      <LeftPanel 
        isVisible={activeButton === 2} 
        onClose={() => setActiveButton(null)}
        buttonNumber={2}
        showCloseButton={false}
      />
      <LeftPanel 
        isVisible={activeButton === 3} 
        onClose={() => setActiveButton(null)}
        buttonNumber={3}
        showCloseButton={false}
      />
      
      <div 
        ref={heroImageRef}
        className={`hero-image-section ${activeButton ? 'shifted' : ''}`}
      >
        <div className="image-container">
          {/* Hero Text */}
          <div className="hero-text">
            <h1>Benvenuto su <span style={{color: '#3b82f6'}}>app</span>ost</h1>
            <p>Il tuo sito di supporto per la digitalizzazione</p>
          </div>
          
          <div 
            className="floating-button button-1" 
            style={getButtonStyle(1, { top: '25%', left: '20%' })}
            onClick={() => handleButtonClick(1)}
          >
            <span>1</span>
            <div className="button-label label-1">
              {getButtonText(1)}
            </div>
          </div>
          <div 
            className="floating-button button-2" 
            style={getButtonStyle(2, { top: '60%', left: '35%' })}
            onClick={() => handleButtonClick(2)}
          >
            <span>2</span>
            <div className="button-label label-2">
              {getButtonText(2)}
            </div>
          </div>
          <div 
            className="floating-button button-3" 
            style={getButtonStyle(3, { top: '15%', left: '45%' })}
            onClick={() => handleButtonClick(3)}
          >
            <span>3</span>
            <div className="button-label label-3">
              {getButtonText(3)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImageSection;
