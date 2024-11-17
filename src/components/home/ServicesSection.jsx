import { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const [servicesData, setServicesData] = useState(null);
  const [visibleServices, setVisibleServices] = useState(6);

  useEffect(() => {
    fetch('/services.json') // Adjust the path if needed
      .then((response) => response.json())
      .then((data) => setServicesData(data))
      .catch((error) => console.error('Error loading services:', error));
  }, []);

  const loadMoreServices = () => {
    setVisibleServices((prev) => prev + 6);
  };

  if (!servicesData) return <div>Loading...</div>;

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4 text-primary">{servicesData.title}</h2>
        <p className="mb-5">{servicesData.description}</p>
        <div className="row">
          {servicesData.services.slice(0, visibleServices).map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              name={service.name}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
        {visibleServices < servicesData.services.length && (
          <button className="btn btn-primary mt-4 px-6 rounded-0 text-light" onClick={loadMoreServices}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
