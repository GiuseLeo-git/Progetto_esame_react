import React, { useState, useEffect } from "react";
import "./Carousel.css";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80"
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000); // 7 secondi

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <div className="carousel-slide">
        <img
          src={images[current]}
          alt={`slide-${current}`}
          className="carousel-image"
        />
        {/* Se hai un bottone o altro contenuto, lascialo qui */}
      </div>
    </div>
  );
};

export default Carousel;
