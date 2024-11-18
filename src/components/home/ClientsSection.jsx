import React, { useState, useEffect } from 'react';

const ClientsSection = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('/clients.json') // Update the path as needed
      .then((response) => response.json())
      .then((data) => setClients(data.clients))
      .catch((error) => console.error('Error loading client data:', error));
  }, []);

  if (!clients.length) return <div>Loading...</div>;

  // Group clients into slides (4 per slide for desktop, 3 for tablets, 2 for mobile)
  const chunkedClients = [];
  const chunkSize = 4; // Adjust for larger displays
  for (let i = 0; i < clients.length; i += chunkSize) {
    chunkedClients.push(clients.slice(i, i + chunkSize));
  }

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-3">Our Clients</h2>
        <p className="mb-4">
          We are proud to partner with industry-leading organizations. Heres a selection of our valued clients.
        </p>

        <div
          id="clientsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000" // Slide every 3 seconds
        >
          <div className="carousel-inner">
            {chunkedClients.map((clientGroup, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div className="row justify-content-center">
                  {clientGroup.map((client) => (
                    <div
                      key={client.id}
                      className="col-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4"
                    >
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                          width: '150px',
                          height: '100px',
                          backgroundColor: '#f8f9fa', // Placeholder background
                          border: '1px solid #dee2e6',
                        }}
                      >
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="img-fluid"
                          style={{ maxWidth: '100%', maxHeight: '100%' }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/path-to-placeholder-logo.jpg';
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#clientsCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#clientsCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
