import { useState } from 'react';

const ServiceCard = ({ image, name, description, link }) => {
  const [imgSrc, setImgSrc] = useState(image);
  const placeholderImage = '/path-to-placeholder-image.jpg';

  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card h-100 bg-transparent border-0">
        {/* Aspect Ratio Wrapper with Grayscale Transition */}
        <a href={link} className="d-block ratio ratio-4x3" style={{ overflow: 'hidden' }}>
          <img
            src={imgSrc}
            className="card-img-top object-fit-cover"
            alt={name}
            onError={() => setImgSrc(placeholderImage)}
            style={{
              filter: 'grayscale(100%)',
              transition: 'filter 0.5s ease',
            }}
            onMouseOver={(e) => (e.target.style.filter = 'grayscale(0%)')}
            onMouseOut={(e) => (e.target.style.filter = 'grayscale(100%)')}
          />
        </a>
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary rounded-0">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
