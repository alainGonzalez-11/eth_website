/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export default function AutoplayCarousel({ images, name, reference }) {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const placeholder = '/path-to-placeholder-logo.jpg'

  useEffect(() => {
    if (reference.current) {
      const totalWidth = Array.from(reference.current.children).reduce(
        (acc, child) => acc + child.offsetWidth,
        0
      );
      setCarouselWidth(totalWidth / 2);
      setDuration(totalWidth ? totalWidth / 125 : 0);
    }
  }, [images, reference]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="carousel-container overflow-hidden position-relative">
  <style>
    {`
      @keyframes slide-${name} {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${carouselWidth}px); }
      }

      .carousel-track {
        display: flex;
        animation: slide-${name} ${duration}s linear infinite;
      }

      .carousel-track.paused {
        animation-play-state: paused;
      }

      .carousel-track img {
        transition: transform 0.5s ease;
      }

      /* Apply zoom effect only to the hovered image */
      .carousel-track img:hover {
        transform: scale(1.1);
      }
    `}
  </style>
  <div
    className={`carousel-track ${isHovered ? 'paused' : ''}`}
    ref={reference}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    {images.map((img, idx) => (
      <img
        src={img}
        alt={`Client ${idx + 1}`}
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = placeholder;
        }}
        className="object-fit-contain m-2 mx-3"
        style={{height: '80px'}}
        key={idx}
      />
    ))}
    {images.map((img, idx) => (
      <img
        src={img}
        alt={`Client ${idx + 1}`}
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = placeholder;
        }}
        className="object-fit-contain m-2 mx-3"
        style={{height: '80px'}}
        key={`Repeat ${idx}`}
      />
    ))}
  </div>
</div>

  );
}
