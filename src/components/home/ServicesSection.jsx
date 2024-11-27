import { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';


const ServicesSection = () => {
  const [servicesData, setServicesData] = useState([]);
  const [sectionContent, setSectionContent] = useState({ title: '', description: '' });
  const [visibleServices, setVisibleServices] = useState(6);

  useEffect(() => {
    // Fetch services data
    fetch('https://cdn.contentful.com/spaces/0w7isqwzcsuy/environments/master/entries?content_type=service&access_token=bGyYPVBVyVHiyNPLSCDOqzM0T2HOV_qtdj11pSFcoo4')
    .then((response) => response.json())
    .then((data) => {
      // Assuming the services data is in `items` under the response structure
      setServicesData(data.items); // Adjust as necessary based on Contentful response
    })
    .catch((error) => console.error('Error loading services:', error));

    // Fetch section content from home.json
    fetch('/home.json')
      .then((response) => response.json())
      .then((data) => setSectionContent(data.servicesSection))
      .catch((error) => console.error('Error loading home content:', error));
  }, []);

  const loadMoreServices = () => {
    setVisibleServices((prev) => prev + 6);
  };

  if (!servicesData.length || !sectionContent.title) return <div>Loading...</div>;

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4 text-primary" id='services'>{sectionContent.title}</h2>
        <p className="mb-5">{sectionContent.description}</p>
        <div className="row">
          {servicesData.slice(0, visibleServices).map((service) => (
            <ServiceCard
              key={service.fields.id}
              image={service.fields.image}
              name={service.fields.name}
              description={service.fields.description}
              link={service.fields.link}
              details={sectionContent.detailsLabel}
            />
          ))}
        </div>
        {visibleServices < servicesData.length && (
          <button className="btn btn-primary mt-4 px-6 rounded-0 text-light" onClick={loadMoreServices}>
            {sectionContent.moreLabel}
          </button>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
