/* eslint-disable react/prop-types */
import { useRef } from 'react';
import AutoplayCarousel from './AutoplayCarousel';

const ClientsSection = ({fields, assets}) => {
  const carouselRef = useRef(null);

  
const extractImage = (img) => {
  const image = assets.find(asset => asset.sys.id === img.sys.id);
  return image.fields.file.url || 0; // Return the found entry or 0 if no match
};

  return (
    <section className="py-5 bg-body-secondary">
      <div className="container-fluid text-center bg-body-secondary">
        <h2 className="fw-bold mb-4 text-primary">{fields.title}</h2>
        <p className="lead mb-5">{fields.slug}</p>
        <AutoplayCarousel
          images={fields.media.map((client) => extractImage(client))}
          name="clients-carousel"
          reference={carouselRef}
        />
      </div>
    </section>
  );
};

export default ClientsSection;
