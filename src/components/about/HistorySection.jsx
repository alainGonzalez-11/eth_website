import { useState, useEffect } from 'react';

const HistorySection = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('/about.json') // Adjust the path as needed
      .then((response) => response.json())
      .then((data) => setContent(data.historySection))
      .catch((error) => console.error('Error loading content:', error));
  }, []);

  if (!content) return <div>Loading...</div>;

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">{content.title}</h2>
      <div className="row">
        {content.timeline.map((event, index) => (
          <div key={index} className="row align-items-center g-4">
            {/* Image Section */}
            <div
              className={`col-md-6 ${
                index % 2 === 0 ? 'order-md-1' : 'order-md-2'
              }`}
            >
              <div className="ratio ratio-16x9 "> {/* Aspect ratio + margin */}
                <img
                  src={event.image}
                  alt={`Evento de ${event.year}`}
                  className="img-fluid rounded shadow"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            {/* Text Section */}
            <div
              className={`col-md-6 ${
                index % 2 === 0 ? 'order-md-2' : 'order-md-1'
              }`}
            >
              <h4 className="fw-bold">{event.year}</h4>
              <p className="text-muted">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistorySection;
