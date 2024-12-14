import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

const MissionVision = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('/about.json') // Adjust the path as needed
      .then((response) => response.json())
      .then((data) => setContent(data.missionVision))
      .catch((error) => console.error('Error loading content:', error));
  }, []);

  if (!content) return <div>Loading...</div>;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Nuestra misión y visión</h2>
      <Row className="align-items-center text-center text-lg-start">
        {/* Mission Section */}
        <Col lg={6} className="d-flex flex-column align-items-center">
          <div className="mb-3">
            <i className="bi bi-flag-fill text-primary" style={{ fontSize: '2rem' }}></i>
          </div>
          <h3 className="fw-bold">{content.mission.title}</h3>
          <p>{content.mission.description}</p>
        </Col>

        {/* Vision Section */}
        <Col lg={6} className="d-flex flex-column align-items-center">
          <div className="mb-3">
            <i className="bi bi-eye-fill text-success" style={{ fontSize: '2rem' }}></i>
          </div>
          <h3 className="fw-bold">{content.vision.title}</h3>
          <p>{content.vision.description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default MissionVision;
