/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';

export default function AutoplayCarousel({ images, name }) {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const placeholder = '/path-to-placeholder-logo.jpg';
  const reference = useRef(null);

  useEffect(() => {
    if (reference.current) {
      const totalWidth = Array.from(reference.current.children).reduce((acc, child) => {
        const childStyle = window.getComputedStyle(child);
        const marginLeft = parseFloat(childStyle.marginLeft);
        const marginRight = parseFloat(childStyle.marginRight);
        return acc + child.offsetWidth + marginLeft + marginRight;
      }, 0);

      setCarouselWidth(totalWidth); // Full width of all elements
      console.log(totalWidth);
      setDuration(totalWidth / 325); // Adjust speed: Higher divisor = slower
    }
  }, [images, reference.current]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="carousel-container overflow-hidden position-relative">
      <style>
        {`
          @keyframes slide-${name} {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${carouselWidth / 2}px); }
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
        {/* First set of images */}
        {images.map((img, idx) => (
          <img
            src={img}
            alt={`Client ${idx + 1}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = placeholder;
            }}
            className="object-fit-contain my-2 mx-3"
            style={{ height: '90px' }}
            key={idx}
          />
        ))}
        {/* Duplicate for seamless scrolling */}
        {images.map((img, idx) => (
          <img
            src={img}
            alt={`Client ${idx + 1}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = placeholder;
            }}
            className="object-fit-contain my-2 mx-3"
            style={{ height: '90px' }}
            key={`Repeat-${idx}`}
          />
        ))}
      </div>
    </div>
  );
}
