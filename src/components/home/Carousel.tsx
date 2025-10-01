import React, { useState } from "react";
import "./Carousel.css";

interface CarouselItem {
  imageUrl: string;
  altText: string;
  buttonText: string;
  buttonLink: string;
}

const items: CarouselItem[] = [
  {
    imageUrl: "https://picsum.photos/id/1015/1200/400",
    altText: "Immagine 1",
    buttonText: "Vai a Pagina 1",
    buttonLink: "/pagina1",
  },
  {
    imageUrl: "https://picsum.photos/id/1016/1200/400",
    altText: "Immagine 2",
    buttonText: "Vai a Pagina 2",
    buttonLink: "/pagina2",
  },
  {
    imageUrl: "https://picsum.photos/id/1018/1200/400",
    altText: "Immagine 3",
    buttonText: "Vai a Pagina 3",
    buttonLink: "/pagina3",
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <button
        className="carousel-control left"
        aria-label="Immagine precedente"
        onClick={goToPrevious}
      >
        &#10094;
      </button>

      <div className="carousel-slide">
        <img
          src={items[currentIndex].imageUrl}
          alt={items[currentIndex].altText}
          className="carousel-image"
        />
        <a
          href={items[currentIndex].buttonLink}
          className="carousel-button"
          role="button"
          tabIndex={0}
        >
          {items[currentIndex].buttonText}
        </a>
      </div>

      <button
        className="carousel-control right"
        aria-label="Immagine successiva"
        onClick={goToNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
