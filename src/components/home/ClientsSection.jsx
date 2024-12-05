import { useState, useEffect, useRef } from 'react';
import AutoplayCarousel from './AutoplayCarousel';

const ClientsSection = () => {
  const [clients, setClients] = useState([]);
  const [sectionContent, setSectionContent] = useState({ title: '', description: '' });
  const carouselRef = useRef(null);

  useEffect(() => {
    // Fetch clients data
    fetch('/clients.json')
      .then((response) => response.json())
      .then((data) => setClients(data.clients))
      .catch((error) => console.error('Error loading clients:', error));

    // Fetch section content from home.json
    fetch('/home.json')
      .then((response) => response.json())
      .then((data) => setSectionContent(data.clientsSection))
      .catch((error) => console.error('Error loading home content:', error));
  }, []);

  if (!clients.length || !sectionContent.title) return <div>Loading...</div>;

  return (
    <section className="py-5 bg-body-secondary">
      <div className="container-fluid text-center bg-body-secondary">
        <h2 className="fw-bold mb-4 text-primary">{sectionContent.title}</h2>
        <p className="lead mb-5">{sectionContent.description}</p>
        <AutoplayCarousel
          images={clients.map((client) => client.logo)}
          name="clients-carousel"
          reference={carouselRef}
        />
      </div>
    </section>
  );
};

export default ClientsSection;
