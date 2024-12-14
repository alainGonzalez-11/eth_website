import { useState, useEffect } from 'react';
import ServicesSection from '@/components/home/ServicesSection'; // Import the ServicesSection component

const Services = () => {
  const [bannerContent] = useState({
    backgroundImage: "https://via.placeholder.com/1200x400", // Replace with your banner image
    title: "Nuestros Servicios",
    subtitle: "Descubre cómo podemos ayudarte a crecer y transformar tu empresa"
  });

  return (
    <div>
      {/* Banner Section */}
      <div
        className="position-relative"
        style={{
          backgroundImage: `url(${bannerContent.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
        }}
      >
        <div
          className="position-absolute top-50 start-50 translate-middle text-center text-white"
          style={{ zIndex: 1 }}
        >
          <h1>{bannerContent.title}</h1>
          <p>{bannerContent.subtitle}</p>
        </div>
        {/* Gradient Overlay for Text Contrast */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))',
            zIndex: 0,
          }}
        ></div>
      </div>

      {/* Services Section */}
        <ServicesSection /> {/* Calling the ServicesSection Component */}
    </div>
  );
};

export default Services;
